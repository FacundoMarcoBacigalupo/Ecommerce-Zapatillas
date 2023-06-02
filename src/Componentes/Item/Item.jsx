import React from 'react'
import { Link } from 'react-router-dom'
import "./EstilosItem.css"


const Item = ({ id, img, name, stock, price }) => {
    return (
        <article className="carta">
            <figure>
                <img src={img} className="card-img-top" alt={name} />
            </figure>

            <div className="info-product">
                <h2>{name}</h2>
                <h4>Stock disponible: {stock}</h4>
                <p className="price">${price}</p>

                <Link className='efectoBoton' to={`/item/${id}`}>Ver detalles</Link>
            </div>
        </article>
    )
}



export default Item