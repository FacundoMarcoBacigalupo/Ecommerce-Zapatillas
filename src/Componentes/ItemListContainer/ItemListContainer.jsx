import {useState, useEffect} from 'react'
import {getProducts} from '../../products'
import {useParams} from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import "./EstilosContainer.css"





const ItemListContainer = () =>{

    const [products, setProducts] = useState([])

    const {category} = useParams()


        useEffect(() => {

            getProducts()
                .then (Response =>{
                    setProducts(Response)
                })

                .catch (error =>{
                    console.error(error)
                })
        }, [])

        const filtered = category
            ? products.filter((e) => e.category === category)
            : products;


    return (
            <ItemList products={filtered} />
    )
}



export default ItemListContainer