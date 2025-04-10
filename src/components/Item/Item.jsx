import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div>
      <h3>{item.title}</h3>
      <p>${item.price}</p>
      <Link to={`/item/${item.id}`}>Ver más</Link>
    </div>
  );
};

export default Item;
