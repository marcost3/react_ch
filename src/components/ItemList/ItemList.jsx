import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ items }) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        {items
          .filter((item) => item && item.title)
          .map((item) => (
            <div className="col-md-4 d-flex justify-content-center" key={item.id}>
              <Item item={item} />
            </div>
          ))}
      </div>
    </div>
  );
};


export default ItemList;
