import React from 'react';
import { useCartContext } from '../../Context/CartContext';
import "./cardItem.css"



const ItemCart = ({product:{ id, name, quantity, price }}) => {
    const { removeProduct } = useCartContext();

    return (
        <div className='contenedorCardItem'>
                <h2 className='efectoSolo'>{name}</h2>
                <h3 className='efectoSolo'>Cantidad: {quantity}</h3>
                <h4 className='efectoSolo'>Precio x Unidad: {price}</h4>
                <h4 className='efectoSolo'>Subtotal: ${quantity * price}</h4>
                <button style={{width:"100%", color:"crimson"}} className='efectoBoton' onClick={() => removeProduct(id)}>Eliminar</button>
        </div>
    )
}



export default ItemCart