import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../mocks/asyncMocks';

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(itemId).then(setProduct);
  }, [itemId]);

  if (!product) return <h2>Cargando...</h2>;

  return (
    <div className="container">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} style={{ width: '100%' }} />
      <p>{product.description}</p>
      <h4>Precio: ${product.price}</h4>
    </div>
  );
}

export default ItemDetailContainer;
