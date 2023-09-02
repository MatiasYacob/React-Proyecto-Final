import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    
    
    const addItem = (item, quantity) => {
        if(!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
        } else{ 
            console.error("El Producto ya Fue Agregado");
        }
    }
 

const removeItem = (itemId) => {
    const cartUpdated = cart.filter(prod => prod.id !== itemId)
    setCart(cartUpdated)
}

const clearCart = () => {
    setCart ([])
}
 const isInCart = (itemId) => {
    return cart.some(prod => prod.id === itemId)
 }
 const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
 const totalAmount = cart.reduce((total, item) => total + item.precio * item.quantity, 0);
 return (
    <CartContext.Provider value={{cart, addItem, removeItem, clearCart, totalQuantity, totalAmount}}>
        {children}
    </CartContext.Provider>
 )}