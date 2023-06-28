import React from 'react';
import { useCartContext } from '../../Context/CartContext';
import "./CardItem.css"



const ItemCart = ({product:{ id, name, quantity, price }}) => {
    const { removeProduct } = useCartContext();

    return (
        <div className='contenedorCardItem'>
                <h2 className='efectoSolo' style={{borderBottom:"3px solid #000"}}>{name}</h2>
                <h4 className='efectoSolo'>Cantidad: {quantity}</h4>
                <h4 className='efectoSolo'>Precio x Unidad: {price}</h4>
                <h4 className='efectoSolo'>Subtotal: ${quantity * price}</h4>
                <button style={{width:"40%", color:"crimson"}} className='efectoBoton' onClick={() => removeProduct(id)}>Eliminar</button>
        </div>
    )
}



export default ItemCart