import {useState} from 'react'
import "./EstilosItemCount.css"




const ItemCount = ({stock, initial=0, onAdd}) =>{

    const [cantidad, setCantidad] = useState(initial)
        const sumar = () =>{
            if (cantidad < stock)
            setCantidad(cantidad + 1);  
        }

        const restar = () =>{
            if (cantidad >= 1)
            setCantidad(cantidad - 1);
        }



    return (
        <div className='cantidad'>
            <button className='efectoBoton' onClick={restar}>-</button>

            <span>{cantidad}</span>

            <button className='efectoBoton' onClick={sumar}>+</button>

            <div>
                <button className='efectoBoton'  onClick={()=> onAdd(cantidad)}  disabled={!stock}>Agregar al Carrito</button>
            </div>
        </div>
    )
}



export default ItemCount