import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Strings from '../../Resources/Strings';
// import Button from '../Button/Button';
import './Cart.css';


/**
 * Renders project page
 * @class
 */
function Cart({ productList }) {
  // https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

  const addToCart = () => {
    localStorage.setItem('myCat', 'Tom');
  }

  const removeFromCart = () => {
    localStorage.removeItem('myCat');
  }

  const clearCart = () => {
    localStorage.clear();
  }

  const displayCart = () => {
    return (
      <div className='price-display-wrapper'>
        <p>this is the cart</p>
      </div>
    );
  };

  return displayCart();
}

// RenderPrice.propTypes = {
//   products: PropTypes.arrayOf(
//     PropTypes.shape({
//       sku: PropTypes.string,
//       price: PropTypes.string,
//     })
//   ),
// };

export default Cart;
