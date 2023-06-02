import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../../Componentes/ItemList/ItemList'
import "./EstilosContainer.css"

import { getDocs, collection, where, query } from 'firebase/firestore'
import { db } from '../../FireBase/firebase.config'
import Loading from '../../Componentes/Loading/Loading'





const ItemListContainer = () =>{
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {category} = useParams()



        useEffect(() => {
            setLoading(true)

            const colletionR = category
            ? query( collection(db, "Products"), where("category", "==", category) )
            : collection(db, "Products")

            getDocs(colletionR)
                .then( response =>{
                    const productsAdapted = response.docs.map(doc =>{
                        return {id: doc.id, ...doc.data()}
                    })
                setProducts(productsAdapted)
                })


                .catch(error => console.error(error))

                .finally(() => setLoading(false))
        }, [category])




    if (loading){
        return <Loading />
    }

    return (
            <ItemList products={products} />
    )
}



export default ItemListContainer