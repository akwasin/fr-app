import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import './ProductCard.css';

/**
 * Renders project ccard
 * @class
 */
function ProductCard({ id, brandName, description, image, activeSale, actualPrice, basePrice, title }) {
  const [modalState, setModalStatus] = useState(false);

  const handleModal = () => {
    setModalStatus((modalStatus) => !modalStatus)
  }
  
  return (
    <>
      {modalState && (
        <Modal
          product={{
            title,
            id,
            brandName,
            description,
            image,
            activeSale,
            actualPrice,
            basePrice,
          }}
          handleModal={handleModal}
        />
      )}
      <div className={`product-card-single cardId-${id}`} >
        <div className='product-card-category'>{brandName}</div>
        <img className='product-card-image' onClick={() => { handleModal(); return false; }} src={image} alt={title} />
        <div className='product-card-title'><a title='Open product' onClick={() => { handleModal(); return false; }}>{title}</a></div>
        <div className='product-card-price'>£{actualPrice}</div>
      </div>
    </>
  );
}

ProductCard.defaultProps = {
  description: '',
  activeSale: '',
  brandName: '',
  actualPrice: '',
  basePrice: '',
};


ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ProductCard;
