import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDoc, doc, getFirestore } from 'firebase/firestore';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('🟡 useEffect ejecutado, id:', id);
    if (!id) return;
  
    const db = getFirestore();
    const itemRef = doc(db, 'products', id);
  
    getDoc(itemRef)
      .then((snapshot) => {
        console.log('📦 Snapshot recibido:', snapshot);
        if (snapshot.exists()) {
          console.log('✅ Producto encontrado:', snapshot.data());
          setItem({ id: snapshot.id, ...snapshot.data() });
        } else {
          console.log('❌ Producto no encontrado');
          setItem(null);
        }
      })
      .catch((error) => {
        console.log('🛑 Error al obtener producto:', error);
        setItem(null);
      })
      .finally(() => {
        console.log('🔚 Finalizando carga');
        setLoading(false);
      });
  }, [id]);
  
  
  if (loading) return <p>Cargando...</p>;
  if (!item) return <p>Producto no encontrado.</p>;

  console.log("ITEM A MOSTRAR:", item);

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
