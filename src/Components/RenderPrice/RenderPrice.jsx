import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Strings from '../../Resources/Strings';
// import Button from '../Button/Button';
import './RenderPrice.css';

/**
 * Renders project page
 * @class
 */
function RenderPrice({ saleStatus, actualPrice, basePrice }) {
  const [activeSale, setActiveSale] = useState(false);

  const setSale = () => {
    if (saleStatus === '1' && basePrice > actualPrice) {
      setActiveSale(true);
    }
  }

  useEffect(() => {
    setSale();
  });

  const displayPrice = () => {
    return (
      <div className='price-display-wrapper'>
        {activeSale &&
          <>
          <div className='price-display-active-sale-actual'>{Strings.price.currency.GBP}{actualPrice}</div>
          <div className='price-display-active-sale-base'>{Strings.price.currency.GBP}{basePrice}</div>
          </>
        }
        {!activeSale &&
          <div className='price-display'>{Strings.price.currency.GBP}{actualPrice}</div>
        }
      </div>
    );
  };

  return displayPrice();
}

// RenderPrice.propTypes = {
//   products: PropTypes.arrayOf(
//     PropTypes.shape({
//       sku: PropTypes.string,
//       price: PropTypes.string,
//     })
//   ),
// };

export default RenderPrice;
