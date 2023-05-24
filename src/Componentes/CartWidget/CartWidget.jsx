import { Fragment } from 'react'
import "./EstilosWidget.css"



export const CartWidget = () =>{

    return (
        <Fragment>
            <i className="bi bi-cart2"></i>
            <p className="numeroCarrito">0</p>
        </Fragment>
    )
}


export default CartWidget