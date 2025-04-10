import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`/data/items.json`)
      .then(res => res.json())
      .then(data => setItem(data.find(prod => prod.id === parseInt(id))));
  }, [id]);

  return (
    <div>
      {item ? <ItemDetail item={item} /> : <p>Cargando detalle...</p>}
    </div>
  );
};

export default ItemDetailContainer;
