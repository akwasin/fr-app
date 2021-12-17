import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Button from '../../CommonComponents/Button/Button';
import './Cart.css';

/**
 * Renders project ccard
 * @class
 */
function ViewCart() {
  const [cartViewState, setCartViewState] = useState(false);
  const localStorageCart = localStorage.getItem('cart');
  const cartItems = [];
  if (localStorageCart) {
    for (const [key, product] of Object.entries(JSON.parse(localStorageCart))) {
      cartItems.push(product)
    }
  }

  const handleViewCart = () => {
    setCartViewState((cartViewState) => !cartViewState)
  }

  const renderCart = () => {
    return (
      <div>
        {
          cartItems.map((product, index) => {
            return (
              <div className='cart-mini' key={index}>
                <p>Id: {product.id}</p>
                <p>Price: {product.price}</p>
                <img src={product.image} />
                <p>{product.title}</p>
                <p>Quantity: {product.quantity}</p>
              </div>
            )})
        }
      </div>
    )
  }

  const clearCart = () => {
    localStorage.clear();
    setCartViewState((cartViewState) => !cartViewState);
  }
  
  
  return (
    <>
    {cartViewState && (
      localStorageCart && 
      renderCart()
      )}
      <Button
        className='new-button-class'
        onClick={() => { handleViewCart(); return false; }}
        buttonText='Open cart button'
      />
      <Button
        className='new-button-class'
        onClick={() => { clearCart(); return false; }}
        buttonText='Clear cart'
      />
    </>
  );
}

// ViewCart.defaultProps = {
//   description: '',
//   activeSale: '',
//   brandName: '',
//   actualPrice: '',
//   basePrice: '',
// };


// ViewCart.propTypes = {
//   id: PropTypes.string.isRequired,
//   image: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
// };

export default ViewCart;
