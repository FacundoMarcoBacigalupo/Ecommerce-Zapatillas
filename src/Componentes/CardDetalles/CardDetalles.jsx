import React from 'react'
import ItemCount from "../ItemCount/ItemCount"
import "./CardDetalles.css"




const CardDetalles = ({id, img, name, description, stock, precio}) =>{

    return (
        <div className='posicionCardDetalles'>
            <article className="carta" id={id}>

                <figure>
                    <img src={img} className="card-img-top" alt={name} />
                </figure>

                <div className="info-product">
                    <h2>{name}</h2>
                    <p className='description'>{description}</p>

                    <h5>Stock disponible: {stock}</h5>
                    <p className="price">${precio}</p>


                    <div className='posicionItemCount'>
                        <ItemCount initial={0}  stock={stock}  agreagarCar={(cantidad)=> console.log("La cantidad agreaga es: ",cantidad)} />
                    </div>
                </div>

            </article>
        </div>
    )
}



export default CardDetalles