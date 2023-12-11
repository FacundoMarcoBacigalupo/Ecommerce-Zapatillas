import { useCartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom"
import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"





const ItemDetail = ({ id, img, name, description, stock, price }) =>{
    const [quantityAdded, setQuantityAdded] = useState(0)


    const { addProduct } = useCartContext();


    const handleOnAdd = (quantity) =>{
        setQuantityAdded(quantity)

        const item ={
            id, name, price
        }
        addProduct(item, quantity)
    }



    const ShowQuantity = () =>{
        if (quantityAdded > 0){
            return(
                <>
                    <h5 className="mostrarCantidad">Cantidad: {quantityAdded}</h5>

                    <Link to="/Cart" className="efectoBoton">Terminar compra</Link>
                </>
            )
        }
    }



    return (
        <div className='posicionCardDetallesDetail'>
            <article className="cartaDetail" id={id}>

                <picture>
                    <img src={img} alt={name} />
                </picture>

                <section className="info-productDetail">
                    <h2>{name}</h2>
                    <p className='descriptionDetail'>{description}</p>
                    <h5>Stock disponible: {stock}</h5>
                    <p className="priceDetail">${price}</p>


                    <footer className='posicionItemCountDetail'>
                        {
                            quantityAdded > 0 ?(
                                ShowQuantity()
                            ) :(
                                <ItemCount initial={1}  stock={stock} onAdd={handleOnAdd}/>
                            )
                        }
                    </footer>
                </section>

            </article>
        </div>
    )
}





export default ItemDetail