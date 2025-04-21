import { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ item }) => {
  const { addItem } = useContext(CartContext);

  const handleAdd = (quantity) => {
    addItem(item, quantity);
  };

  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Info */}
        <div className="col-md-6">
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <p className="fw-bold">Precio: ${item.price}</p>
          <ItemCount stock={item.stock} initial={1} onAdd={handleAdd} />
        </div>

        {/* Imagen */}
        <div className="col-md-6 text-center">
          <img
            src={item.image}
            alt={item.title}
            className="img-fluid rounded shadow"
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
