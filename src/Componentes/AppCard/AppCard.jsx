import React from 'react'
import "./EstilosCard.css"


export const AppCard = ({img, name, stock, precio}) => {
    return (
        <article className="carta">

            <figure>
                <img src={img} className="card-img-top" alt={name} />
            </figure>

            <div className="info-product">
                <h2>{name}</h2>
                <h4>Stock disponible: {stock}</h4>
                <p className="price">${precio}</p>

                <button className='efectoBoton'>Ver detalles</button>
            </div>

        </article>
    )
}



export default AppCard