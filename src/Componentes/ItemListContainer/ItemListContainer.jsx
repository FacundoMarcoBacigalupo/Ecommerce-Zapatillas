import {useState, useEffect} from 'react'
import {getDetailsProductsCategory, getProducts} from '../../products'
import {useParams} from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import "./EstilosContainer.css"





const ItemListContainer = () =>{

    const [products, setProducts] = useState([])

    const {categoryName} = useParams()


        useEffect(() => {
            const productsFunc = categoryName ? getDetailsProductsCategory : getProducts

            productsFunc(categoryName)
                .then (Response =>{
                    setProducts(Response)
                })

                .catch (error =>{
                    console.error(error)
                })
        }, [categoryName])





    return (
            <ItemList products={products} />
    )
}



export default ItemListContainer