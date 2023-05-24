import {useState, createContext} from 'react'




export const CartContext = createContext({
    cart: []
})


export const CartProvider = ({ children }) =>{

    const [cart, setCart] = useState([])
    console.log(cart)



    const addItem = (item, quantity) =>{
        if (!isInCart (item.id)){
            setCart (p =>[...p, {item, quantity}])
        }
        else{
            console.erro("El producto ya fue agregado.")
        }
    }



    const removeItem = (itemId) =>{
        const cartUpdate = cart.filter(p => p.id !== itemId)

        setCart(cartUpdate)
    }



    const clearCart = () =>{
        setCart([])
    }



    const isInCart = (itemId) =>{
        return cart.some(p => p.id === itemId)
    }



    return(
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart}}>
        { children }
    </CartContext.Provider>
    
    )
}