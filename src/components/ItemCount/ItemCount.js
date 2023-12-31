import './ItemCount.css'
import React, { useState } from 'react';
const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
            
        }
    };
    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="Counter">
            <div className="controls">
                <button className="Button button " onClick={decrement}>
                    -
                </button>
                <h4 className="Number ">{quantity}</h4>
                <button className="Button button" onClick={increment}>
                    +
                </button>
            </div>
            <div>
                <button
                    className="Button button"
                    onClick={() => onAdd(quantity)}
                    disabled={!stock}
                >
                    Agregar Al Carrito
                </button>
            </div>
        </div>
    );
};
export default ItemCount