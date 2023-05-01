import React from 'react'
import ItemCount from "../ItemCount/ItemCount"
import "./EstilosCard.css"




export const AppCard = ({titulo, imagen, price}) =>{

    return (
        <article class="carta">
            <figure>
                <img src={imagen} className="card-img-top" alt="Imagen"/>
            </figure>
            <div class="info-product">
                <h2>{titulo}</h2>
                <p class="price">${price}</p>
                <ItemCount />
            </div>
        </article>
    )
}



export default AppCard