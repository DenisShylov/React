import React from 'react';

const ProductsList = ({ cartItems }) => {
  const differences = cartItems.reduce((acc, el) => acc + el.price, 0);
  return (
    <div className="products">
      <ul className="products__list">
        {cartItems.map((el) => {
          return (
            <li key={el.id} className="products__list-item">
              <span className="products__item-name">{el.name}</span>
              <span className="products__item-price">{el.price}</span>
            </li>
          );
        })}
      </ul>
      <div className="products__total">{`Total: $${differences}`}</div>
    </div>
  );
};

export default ProductsList;
