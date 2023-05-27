import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Componentes/Context/CartContext";
import CardItem from '../../Componentes/CardItem/CardItem'


const Cart = () => {
	const { cart, totalPrice } = useCartContext();

	if (cart.length === 0) {
		return (
			<>
			<div style={{display: "flex", justifyContent: "center", alignItems:"center", margin:"20px"}}>
				<h1 style={{fontSize:"35px", fontWeight:"bold", margin:"20px"}}>Tu carrito está vacío!</h1>
				<Link style={{marginBottom:"20px", color:"#05B222", width:"60%", textAlign:"center"}} className="efectoBoton" to="/product/zapatillas">Hacer compras</Link>
			</div>

			<picture>
				<img src="../../assets/images/carritoVacio.png" alt="Imagen cuando el carrito esta vacio" />
			</picture>
			</>
		);
	}





	return (
		<>
			{cart.map((product) => (
				<CardItem key={product.id} product={product} />
			))}
			<div style={{display: "flex", justifyContent: "center", alignItems:"center"}}>
				<h1 style={{fontSize:"35px", fontWeight:"bold", margin:"20px"}}>Total: {totalPrice()}</h1>
				<button style={{marginBottom:"20px", color:"#05B222", width:"80%", textAlign:"center"}} className="efectoBoton">Emitir compra</button>
			</div>
		</>
	);
};

export default Cart;