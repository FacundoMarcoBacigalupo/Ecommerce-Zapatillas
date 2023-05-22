import { useEffect, useState } from 'react'
import {getDetailsProductsId} from '../../../products'
import CardDetalles from "../../CardDetalles/CardDetalles"
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
            <CardDetalles {...products} />
        </div>
    )
}




export default ItemDetallesContainer