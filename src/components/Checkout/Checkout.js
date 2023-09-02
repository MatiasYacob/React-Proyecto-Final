import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { db } from "../../services/fireBase/firebaseConfig";
import CheckoutForm from "../CheckoutFrom/checkoutForm"; // Ajusta la ruta a la ubicación correcta de tu componente CheckoutForm

import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  writeBatch,
  Timestamp, 
} from "firebase/firestore"; 

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');

    const { cart, totalAmount, clearCart } = useContext(CartContext);

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true);
        try {
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart, // Corregir 'item' a 'items' para que coincida con la propiedad en el objeto
                totalAmount: totalAmount,
                date: Timestamp.fromDate(new Date()) // Corregir 'fromData' a 'fromDate'
            };

            const batch = writeBatch(db); // Corregir 'wruteBatch' a 'writeBatch'

            const outOfStock = [];
            const ids = cart.map(prod => prod.id);
            const productsRef = collection (db,'productos');
            const productosAddedFromFirestore = await getDocs (query(productsRef, where('id', 'in', ids)));
            const { docs } = productosAddedFromFirestore;

            docs.forEach(doc => {
                const dataDoc = doc.data();
                const stockDb = dataDoc.stock; // Corregir 'Stock' a 'stock' para que coincida con la propiedad en el objeto
                const productAddedToCart = cart.find(prod => prod.id === doc.id);
                const prodQuantity = productAddedToCart?.quantity;

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity });
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc });
                }
            });

            if (outOfStock.length === 0) {
                await batch.commit();

                const orderRef = collection (db, 'orders');
                const orderAdded = await addDoc(orderRef, objOrder);
                setOrderId(orderAdded.id);
                clearCart();
            } else {
                console.error('Hay Productos que están fuera de Stock');
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return <h1>Se está generando su orden...</h1>;
    }

    if (orderId) {
        return <h1>El Id de su orden es: {orderId}</h1>;
    }

    return (
        <div>
            <h1>CheckOut</h1>
            {/* Asegúrate de que CheckoutForm esté importado correctamente */}
            <CheckoutForm onConfirm={createOrder} />
        </div>
    );
}

export default Checkout;
