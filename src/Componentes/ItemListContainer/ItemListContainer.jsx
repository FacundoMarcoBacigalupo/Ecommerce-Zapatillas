import {Fragment, useState, useEffect} from 'react'
import {obtenerProducts} from '../../products'
import AppHeader from '../AppHeader/AppHeader'
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
            <AppHeader titulo={"Nb Style"} />

            <ItemList products={products} />

        </Fragment>
    )
}



export default ItemListContainer