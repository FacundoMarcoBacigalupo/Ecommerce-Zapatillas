import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import carrito from '../../assets/images/carrito.jpg'
import CardItem from '../../Componentes/CardItem/CardItem'
import img1 from "../../assets/images/1.jpg"
import img2 from "../../assets/images/2.jpg"
import img3 from "../../assets/images/3.jpg"
import img4 from "../../assets/images/4.jpg"
import img5 from "../../assets/images/5.jpg"
import img6 from "../../assets/images/6.jpg"
import img7 from "../../assets/images/7.jpg"
import img8 from "../../assets/images/8.jpg"
import img9 from "../../assets/images/9.jpg"
import "./Cart.css"



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
				<img style={{width:"90%", height:"600px", objectFit:"cover", objectPosition:"center"}} src={carrito} alt="Imagen cuando el carrito esta vacio" />
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


			<article className="marquee">
					<ul className="marquee__content">
						<li className="marquee__item"><img src={img1} alt="img infinite"/></li>
						<li className="marquee__item"><img src={img2} alt="img infinite"/></li>
						<li className="marquee__item"><img src={img3} alt="img infinite" /></li>
						<li className="marquee__item"><img src={img4} alt="img infinite" /></li>
						<li className="marquee__item"><img src={img5} alt="img infinite" /></li>
						<li className="marquee__item"><img src={img6} alt="img infinite" /></li>
						<li className="marquee__item"><img src={img7} alt="img infinite" /></li>
						<li className="marquee__item"><img src={img8} alt="img infinite" /></li>
						<li className="marquee__item"><img src={img9} alt="img infinite" /></li>
					</ul>
			</article>
		</>
	)
}



export default Cart;