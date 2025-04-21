import { useState } from 'react';

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increase = () => {
    if (count < stock) setCount(count + 1);
  };

  const decrease = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div className="d-flex flex-column align-items-start">
      <div className="d-flex align-items-center mb-2">
        <button className="btn btn-secondary" onClick={decrease} disabled={stock === 0 || count <= 1}>
          −
        </button>
        <span className="mx-3">{count}</span>
        <button className="btn btn-secondary" onClick={increase} disabled={stock === 0 || count >= stock}>
          +
        </button>
      </div>
      <button
        className="btn btn-success"
        onClick={() => onAdd(count)}
        disabled={stock === 0}
      >
        {stock === 0 ? 'Sin stock' : 'Agregar al carrito'}
      </button>
    </div>
  );
};

export default ItemCount;
