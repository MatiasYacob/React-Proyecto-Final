import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'


const ItemDetail = ({id, titulo, img, categoria, descripcion, precio, stock}) =>{
   

    const [quantityAdded, setQuantityAdded] = useState(0)
    const {addItem } = useContext(CartContext)
    console.log(quantityAdded)
    const handleOnAdd = (quantity) =>{
        setQuantityAdded(quantity)
        const item = {
            id, titulo, precio
        }
        addItem(item, quantity)
    }
    return(
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {titulo}
                </h2>
            </header>
            <picture>
                <img src=  {img}alt={titulo} className='ItemImg'/>
            </picture>
            <section>
                <p className='Info'>
                Presentación: {categoria}
                </p>
                <p className='Info'>
                    Descripcion: {descripcion}
                </p>
                <p className='Info'>
                    Precio: ${precio}
                </p>
            </section>
            <footer className='ItemFooter'>
  {quantityAdded > 0 ? (
    <div>
      <Link to='/cart' className='Option'>Terminar Compra</Link>
      <Link to='/' className='Option'>Seguir Comprando</Link>
    </div>
  ) : (
    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
  )}
</footer>
        </article>
    )
}
export default ItemDetail