import {Fragment, useState, useEffect} from 'react'
import {obtenerProducts} from '../../products'
import ItemList from '../ItemList/ItemList'
import "./EstilosContainer.css"




export const ItemListContainer = () =>{

    const [products, setProducts] = useState([])


        useEffect(() => {
            obtenerProducts()
            .then (Response=>{
                setProducts(Response)
            })

            .catch (error=>{
                console.error(error)
            })
        }, [])





    return (
        <Fragment>
            <ItemList products={products} />
        </Fragment>
    )
}



export default ItemListContainer