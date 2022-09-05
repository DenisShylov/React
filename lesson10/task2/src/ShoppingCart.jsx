import React, { Component } from 'react';
import CartTitle from './CartTitle';
import ProductsList from './ProductsList';

const cartItemsArr = [
  { id: '1', name: 'Ipad Pro', price: 799 },
  { id: '2', name: 'Iphone 11', price: 999 },
];
class ShoppingCart extends Component {
  state = {
    cartItems: cartItemsArr,
  };

  render() {
    return (
      <>
        <div className="column">
          <CartTitle
            userName={this.props.userName}
            count={this.state.cartItems.length}
          />

          <ProductsList cartItems={this.state.cartItems} />
        </div>
      </>
    );
  }
}

export default ShoppingCart;
