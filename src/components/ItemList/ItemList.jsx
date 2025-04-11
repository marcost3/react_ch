import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ items }) => {
    return (
      <div>
        {items
          .filter((item) => item && item.title) // Filtramos nulls o faltantes
          .map((item) => (
            <Item key={item.id} item={item} />
          ))}
      </div>
    );
  };
  
export default ItemList;
