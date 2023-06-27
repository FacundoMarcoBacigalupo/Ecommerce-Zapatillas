import React, { Fragment } from "react";
import { useCartContext } from "../../Context/CartContext";
import "./estilosWidget.css"


const CartWidget = () => {
	const { totalProducts } = useCartContext();



	return (
		<Fragment>
			<i className="bi bi-cart3"></i>
			<span className="numeroCarrito">{totalProducts() || ""}</span>
		</Fragment>
	);
};




export default CartWidget;