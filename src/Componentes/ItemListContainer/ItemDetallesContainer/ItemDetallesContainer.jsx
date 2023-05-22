import { useEffect, useState } from 'react'
import {getDetailsProductsId} from '../../../products'
import ItemDetail from "../../ItemDetail/ItemDetail"
import {useParams} from 'react-router-dom'




const ItemDetallesContainer = () =>{
    const [products, setProducts] = useState(null)

    const {itemId} = useParams()



        useEffect(() => {
            getDetailsProductsId(itemId)

            .then (Response=>{
                setProducts(Response)
            })

            .catch (error=>{
                console.error(error)
            })
        }, [itemId])





    return (
        <div>
            <ItemDetail {...products} />
        </div>
    )
}




export default ItemDetallesContainer