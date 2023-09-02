import React, {useContext} from "react";
import { CartContext } from "../context/CartContext";
import './CartItem.css'

export const CartItem = ({id, precio,  titulo, quantity}) =>{
    const { removeItem,  totalAmount} = useContext(CartContext)
    
    return(
        <article className="CartItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {titulo}
                </h2>
            </header>
            
            <section>
                <h3 className="InfoCart">
                    Precio Unitario: ${precio} 
                </h3>
            </section>
            <section> <h3 className="InfoCart">
                     {quantity} Unidades </h3>
               
                </section>
            <section>
                <h4 className="InfoCart">
                    SubTotal: ${precio * quantity}
                </h4>
            </section>
          
            <section>
                <button className="btn btn-danger" onClick={() => removeItem(id)}>Eliminar</button>
            </section>
        </article>
    )
}

