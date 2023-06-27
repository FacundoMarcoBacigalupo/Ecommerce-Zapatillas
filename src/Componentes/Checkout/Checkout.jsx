import { useState } from 'react'
import { useCartContext } from '../../Context/CartContext'
import { db } from '../../FireBase/firebase.config'
import { Timestamp, addDoc, collection, documentId, getDocs, query, where, writeBatch } from 'firebase/firestore'
import Loading from '../Loading/Loading'
import CheckoutForm from '../CheckoutForm/CheckoutForm'
import thx from '../../assets/images/thankYou.gif'
import "./checkout.css"





const Checkout = () =>{
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState("")


	const { cart, totalPrice, clearCart } = useCartContext();



    const createOrder = async({name, phone, email}) =>{
        setLoading(true)

        try{
            const objetOrder ={
                buyer: {
                    name,
                    phone,
                    email
                },
                items: cart,
                total: totalPrice(),
                date: Timestamp.fromDate(new Date())
            }


            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)

            const producsAddedFromFirestore = await getDocs( query( collection(db, "Products"), where(documentId(), "in", ids)))

            const { docs } = producsAddedFromFirestore




            docs.forEach(doc =>{
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(p => p.id === doc.id)
                const prodQuantiy = productAddedToCart?.quantity

                if(stockDb >= prodQuantiy){
                    batch.update( doc.ref, {stock: stockDb - prodQuantiy})
                }
                else{
                    outOfStock.push( {id: doc.id, ...dataDoc} )
                }
            })


            if(outOfStock.length === 0){
                await batch.commit()

                const col  = collection(db, "orders")

                const orderAdded = await addDoc(col, objetOrder)

                setOrderId(orderAdded.id)
                clearCart()
            }
            else{
                console.error("No hay productos que estén fuera de stock")
            }
        }

        catch (error){
            console.error(error)
        }
        finally{
            setLoading(false)
        }
    }



    if(loading){
        return <Loading />
    }

    if(orderId){
        return(
            <main id='containerId'>
                <h1>El ID de su orden es : <span>{orderId}</span></h1>
                <h2>¡Gracias por su compra!</h2>

                <img id='imgId' src={thx} alt="" />
            </main>
    )}



    return (
        <div>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    )
}



export default Checkout