import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ item }) => {
  const { addItem } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    addItem(item, quantity);
  };

  return (
    <div>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <p>${item.price}</p>
      <input
        type="number"
        value={quantity}
        min={1}
        onChange={(e) => setQuantity(parseInt(e.target.value))}
      />
      <button onClick={handleAdd}>Agregar al carrito</button>
    </div>
  );
};

export default ItemDetail;
