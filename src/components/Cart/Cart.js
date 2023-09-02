import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { CartItem } from '../CartItem/CartItem';

import { Link } from 'react-router-dom'

const Cart = () => {
    
    const {cart, clearCart, totalQuantity, totalAmount} = useContext(CartContext)
    if(totalQuantity === 0) {
        return(
            
            <div>
                <h1>No Hay Items En El Carrito</h1>
                <Link to="/" className='Option'>Productos</Link> 
            </div>
        )
    }
    return(
        <div>
            
            {cart.map(p => <CartItem key={p.id}{...p}/>) }
            <h3 className='Total'>Total: ${totalAmount}</h3>
            <button onClick={()=>clearCart()} className='Button'>Limpiar Carrito</button>
            <Link to='/checkout' className='Option'>Ir al Checkout</Link> 
        </div>
    )
}

export default Cart
