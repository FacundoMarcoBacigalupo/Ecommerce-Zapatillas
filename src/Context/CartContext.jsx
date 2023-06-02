import React, { useContext, useState } from "react";






const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);



const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);



	const addProduct = (item, quantity) => {
		if (isInCart(item.id)) {
			setCart(
				cart.map((product) => {
					return product.id === item.id
						? { ...product, quantity: product.quantity + quantity }
						: product
				}),
			);
		} else {
			setCart([...cart, { ...item, quantity }])
		}
	};




	const totalPrice = () => {
		return cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity * productoActual.price, 0);
	};




	const totalProducts = () =>
		cart.reduce(
			(acumulador, productoActual) => acumulador + productoActual.quantity,
			0,
		);



	const clearCart = () => setCart([]);




	const isInCart = (id) =>
		cart.some((product) => product.id === id);




	const removeProduct = (id) =>
		setCart(cart.filter((product) => product.id !== id));





	const validateAllFull = (camps) =>{
		return camps.some((camp) => camp === "")
	}



	return (
		<CartContext.Provider value={{ clearCart, isInCart, removeProduct, addProduct, totalPrice, totalProducts, validateAllFull, cart }}>
			{children}
		</CartContext.Provider>
	)
}





export default CartProvider;