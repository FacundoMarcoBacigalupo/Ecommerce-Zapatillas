import useItemCout from "../../Hooks/useItemCout"
import "./EstilosItemCount.css"



const ItemCount = ({ stock, initial=1, onAdd }) =>{

    const {cantidad, sumar, restar} = useItemCout(initial, stock)



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