import useFetch from "../../hooks/useFetch";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const { data: items, loading } = useFetch("/data/items.json");

  return (
    <div>
      {loading ? <p>Cargando...</p> : <ItemList items={items} />}
    </div>
  );
};

export default ItemListContainer;
