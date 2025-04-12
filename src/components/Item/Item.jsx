import { Link } from 'react-router-dom';

const Item = ({ item }) => {
  return (
    <div className="card m-3" style={{ width: '18rem' }}>
      <img
        src={item.image}
        className="card-img-top"
        alt={item.title}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">Precio: ${item.price}</p>
        <Link to={`/item/${item.id}`} className="btn btn-primary">
          Ver detalle
        </Link>
      </div>
    </div>
  );
};

export default Item;
