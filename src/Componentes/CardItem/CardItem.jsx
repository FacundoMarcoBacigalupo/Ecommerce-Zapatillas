import React from 'react';
import { useCartContext } from '../../Componentes/Context/CartContext';
import "./cardItem.css"



const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();

    return (
        <div className='contenedorCardItem'>
            <picture>
                <img src={product.img} alt={product.name} />
            </picture>

            <div>
                <h2 className='efectoSolo'>{product.name}</h2>
                <h3 className='efectoSolo'>Cantidad: {product.quantity}</h3>
                <h4 className='efectoSolo'>Precio x Unidad: {product.price}</h4>
                <h4 className='efectoSolo'>Subtotal: ${product.quantity * product.price}</h4>
                <button style={{width:"100%", color:"crimson"}} className='efectoBoton' onClick={() => removeProduct(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}



export default ItemCart