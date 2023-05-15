import React from 'react'
import {Link} from 'react-router-dom'
import "./EstilosCard.css"


export const AppCard = ({id, img, name, stock, precio}) => {
    return (
        <article className="carta">

            <figure>
                <img src={img} className="card-img-top" alt={name} />
            </figure>

            <div className="info-product">
                <h2>{name}</h2>
                <h4>Stock disponible: {stock}</h4>
                <p className="price">${precio}</p>

                <Link className='efectoBoton' to={`/item/${id}`}>Ver detalles</Link>
            </div>

        </article>
    )
}



export default AppCard