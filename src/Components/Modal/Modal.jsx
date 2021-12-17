import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../CommonComponents/Button/Button';
import RenderPrice from '../RenderPrice/RenderPrice';
import './Modal.css';

/**
 * Renders project page
 * @class
 */
function Modal({ product, handleModal }) {
  const [productQuantity, setProductQuantity] = useState(1);

  let products = [];
  let payload = {
    productID: '',
    price: 0,
    image: '',
    title: '',
    quantity: 0,
  };

  const prepareForCart = (id, price, image, title, quantity) => {
    payload.productID = id;
    payload.price = price;
    payload.image = image;
    payload.title = title;
    payload.quantity = parseInt(quantity);
    addToCart(payload);
  };

  const addToCart = (payload) => {
    if (localStorage.getItem('cart')) {
      products = JSON.parse(localStorage.getItem('cart'));
    }

    products.push(payload);
    const result = products.reduce((r, a) => {
        r[a.productID] = r[a.productID] || [];
        r[a.productID].push(a);
        return r;
    }, Object.create(null));

    console.log(result);
    localStorage.setItem('cart', JSON.stringify(products));
  };

  const renderContent = () => {
    return (
      <div className='modal-wrapper'>
        <img
          className='modal-close-button'
          alt='close modal'
          onClick={() => handleModal()}
          src='close_modal.png'
        />
        <div className='modal-content-left'>
          <img alt={product.description} src={product.image}></img>
        </div>
        <div className='modal-content-right'>
          <h1 className='modal-title'>{product.title}</h1>
          <p className='modal-brand-name'>By {product.brandName}</p>
          <p className='modal-sku'>Product sku: {product.id}</p>
          <div className='modal-price'>
            {
              <RenderPrice
                saleStatus={product.activeSale}
                actualPrice={parseFloat(product.actualPrice)}
                basePrice={parseFloat(product.basePrice)}
              />
            }
          </div>
          <div className='modal-product-handling'>
            <div className='modal-addto-cart-quantity'>
              <input
                type='number'
                name='quantity'
                min='1'
                max='111'
                value={productQuantity}
                onInput={(e) => setProductQuantity(e.target.value)}
                className='modal-addto-cart-amount-input'
              />
            </div>
            <div className='modal-addto-cart-action'>
              <Button
                className='modal-addto-cart-button'
                onClick={() =>
                  prepareForCart(
                    product.id,
                    product.actualPrice,
                    product.image,
                    product.title,
                    productQuantity
                  )
                }
                buttonText='Add to cart'
              />
            </div>
          </div>
          <div className='modal-description'>
            Description: <p>{product.description}</p>
          </div>
        </div>
      </div>
    );
  };

  return <div className='modal-forground'>{renderContent()}</div>;
}

Modal.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      sku: PropTypes.string,
      price: PropTypes.string,
    })
  ),
};

export default Modal;
