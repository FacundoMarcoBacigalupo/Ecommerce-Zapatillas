import React from 'react'
import AppCard from '../AppCard/AppCard'
import './ItemList.css'



const ItemList = ({products}) =>{

    return (
        <div className='posicionAppCard'>

            {products.map (info => <AppCard key={info.id} {...info} /> )}
        </div>
    )
}



export default ItemList