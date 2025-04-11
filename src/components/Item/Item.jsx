import { Link } from 'react-router-dom';

const Item = ({ item }) => {
  if (!item) return <p>Cargando producto...</p>;

  return (
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">${item.price}</p>
        <Link to={`/item/${item.id}`} className="btn btn-primary">Ver detalle</Link>
      </div>
    </div>
  );
};

export default Item;
