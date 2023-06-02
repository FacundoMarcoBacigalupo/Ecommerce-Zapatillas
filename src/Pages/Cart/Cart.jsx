import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import carrito from '../../assets/images/carrito.jpg'
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
				<img style={{width:"100%", height:"600px", objectFit:"cover", objectPosition:"center"}} src={carrito} alt="Imagen cuando el carrito esta vacio" />
			</picture>
			</>
		)
	}





	return (
		<>
			{cart.map((product,index) => (
				<CardItem key={index} product={product} />
			))}
			<div style={{display: "flex", justifyContent: "center", alignItems:"center"}}>
				<h1 style={{fontSize:"35px", fontWeight:"bold", margin:"20px"}}>Total: {totalPrice()}</h1>

				<Link to='/checkout' style={{marginBottom:"20px", color:"#05B222", width:"80%", textAlign:"center"}} className="efectoBoton">Emitir compra</Link>
			</div>
		</>
	)
}



export default Cart;