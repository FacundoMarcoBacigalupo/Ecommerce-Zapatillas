import React from "react";
import { useCartContext } from "../../Context/CartContext";
import "./estilosWidget.css"


const CartWidget = () => {
	const { totalProducts } = useCartContext();



	return (
		<>
			<i className="bi bi-cart3"></i>
			<span className="numeroCarrito">{totalProducts() || ""}</span>
		</>
	);
};




export default CartWidget;