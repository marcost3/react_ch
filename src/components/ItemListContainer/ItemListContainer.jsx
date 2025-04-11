import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDocs, collection, getFirestore, query, where } from 'firebase/firestore';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, 'products');

    const q = categoryId
      ? query(itemsCollection, where('category', '==', categoryId))
      : itemsCollection;

    getDocs(q)
      .then((snapshot) => {
        const fetchedItems = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setItems(fetchedItems);
      })
      .catch((error) => console.log('Error cargando productos:', error))
      .finally(() => setLoading(false));
  }, [categoryId]);

  if (loading) return <p>Cargando productos...</p>;
  if (items.length === 0) return <p>No hay productos en esta categoría.</p>;

  return <ItemList items={items} />;
};

export default ItemListContainer;
