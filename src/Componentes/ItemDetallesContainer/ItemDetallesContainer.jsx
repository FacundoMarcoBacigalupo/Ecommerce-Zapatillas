import { useEffect, useState } from 'react'
import {obtenerDetallesProducts} from '../../products'
import CardDetalles from "../CardDetalles/CardDetalles"




const ItemDetallesContainer = () =>{

    const [products, setProducts] = useState(null)


        useEffect(() => {
            obtenerDetallesProducts("1")

            .then (Response=>{
                setProducts(Response)
            })

            .catch (error=>{
                console.error(error)
            })
        }, [])



    return (
        <div>
            <CardDetalles {...products} />
        </div>
    )
}




export default ItemDetallesContainer