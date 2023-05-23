import {Fragment, useState} from "react"
import {Link} from "react-router-dom"
import ItemCount from "./ItemCount/ItemCount"
import "./ItemDetail.css"




const ItemDetail = ({id, img, name, description, stock, precio}) =>{

    const [quantityAdded, setQuantityAdded] = useState(0)

    const handleOnAdd = (quantity) =>{
        setQuantityAdded(quantity)
    }



    const MostrarCantidad = () =>{
        if (quantityAdded > 0){
            return(
                <>
                    <h5 className='description'>Cantidad: {quantityAdded}</h5>

                    <Link to="/Cart" className="efectoBoton">Terminar compra</Link>
                </>
            )
        }
    }


    return (
        <div className='posicionCardDetalles'>
            <article className="carta" id={id}>

                <picture>
                    <img src={img} className="card-img-top" alt={name} />
                </picture>

                <section className="info-product">
                    <h2>{name}</h2>
                    <p className='description'>{description}</p>
                    <h5>Stock disponible: {stock}</h5>
                    <p className="price">${precio}</p>

                    <footer className='posicionItemCount'>
                        {
                            quantityAdded > 0 ?(
                                MostrarCantidad()
                            ) :(
                                <ItemCount initial={0}  stock={stock} onAdd={handleOnAdd}/>
                            )
                        }
                    </footer>
                </section>

            </article>
        </div>
    )
}



export default ItemDetail