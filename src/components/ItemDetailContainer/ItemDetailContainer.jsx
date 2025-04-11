import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDocs, collection, getFirestore } from 'firebase/firestore';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, 'products');

    getDocs(itemsCollection)
      .then((snapshot) => {
        const items = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));

        const selected = items.find((prod) => prod.id === id);
        setItem(selected || null);
      })
      .catch((error) => console.log('Error:', error))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (!item) return <p>Producto no encontrado.</p>;

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
