import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProducts } from '../mocks/asyncMocks';

function ItemListContainer() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulación de carga de datos
    setTimeout(() => {
      if (categoryId) {
        setItems([{ id: 1, name: "Auto 1", category: categoryId }]);
      } else {
        setItems([{ id: 2, name: "Auto 2", category: "general" }]);
      }
    }, 1000);
  }, [categoryId]);

  return (
    <div className="container">
      <h2>{categoryId ? `Categoría: ${categoryId}` : 'Catálogo de Autos'}</h2>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col s12 m4">
            <div className="card">
              <div className="card-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="card-content">
                <h5>{product.name}</h5>
                <p>{product.description}</p>
              </div>
              <div className="card-action">
                <Link to={`/item/${product.id}`}>Ver Detalles</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
