import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ id, titulo, img, precio, stock }) => {
  return (
    <article className='CardItem'>
      <header className='Header'>
        <h2 className='ItemHeader'>
          {titulo}
        </h2>
      </header>
      <picture>
        <img src={img} alt={titulo} className='ItemImg' />
      </picture>
      <section>
        <p className='info'>
          Precio: ${precio}
        </p>
        <p className='info'>
          Stock disponible: {stock}
        </p>
      </section>
      <footer className='ItemFooter'>
        <Link to={`/item/${id}`} className='option'>Detalles</Link>
      </footer>
    </article>
  );
};

export default Item;
