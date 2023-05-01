import React, {useState} from 'react'
import "./EstilosItemCount.css"




const ItemCount = () =>{

    const [contador, setContador] = useState(0)

        const sumar = () =>{
            setContador(contador + 1);
        }
        const restar = () =>{
            setContador(contador - 1);
        }



    return (
        <div className='contador'>
            <button disabled={contador <= 0}  onClick={restar} className='efectoBoton'>-</button>

            <span>{contador}</span>

            <button disabled={contador >= 7}  onClick={sumar} className='efectoBoton'>+</button>
            <div>
                <button className='efectoBoton'>Agregar al Carrito</button>
            </div>

        </div>
    )
}



export default ItemCount