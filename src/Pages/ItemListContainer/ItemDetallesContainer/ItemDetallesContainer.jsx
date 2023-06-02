import { useEffect, useState } from 'react'
import ItemDetail from "../../../Componentes/ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom'

import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../../FireBase/firebase.config'
import Loading from '../../../Componentes/Loading/Loading'




const ItemDetallesContainer = () =>{
    const [products, setProducts] = useState(null)
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()



        useEffect(() => {
            setLoading(true)

            const docR = doc( db, "Products", itemId )

            getDoc(docR)
                .then( response =>{
                    const productsAdapted = {id:response.id, ...response.data()}
                    setProducts(productsAdapted)
                } )


                .catch( error => console.error(error))

                .finally( () => setLoading(false))
        }, [itemId])




    if (loading){
        return <Loading />
    }

    return (
        <div>
            <ItemDetail {...products} />
        </div>
    )
}




export default ItemDetallesContainer