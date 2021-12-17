import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../ProductCard/ProductCard';
import Button from '../../CommonComponents/Button/Button';
import './ProductPage.css';

/**
 * Renders project page
 * @class
 */
function ProductPage({ products }) {
  const currentDataset = [];
  const updatedDataset = [];
  const products_per_page = 8;
  products.map((product) => currentDataset.push(product));
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = () => {
    return Math.ceil(currentDataset.length / products_per_page);
  };

  const renderPagination = () => {
    return (
      <div>
        {currentPage} / {totalPages()}
      </div>
    );
  };


  const renderPage = () => {
    for (
      let i = (currentPage - 1) * products_per_page;
      i < currentPage * products_per_page && i < currentDataset.length;
      i++
    ) {
      updatedDataset.push(currentDataset[i]);
    }

    return updatedDataset.map((product) => (
      <ProductCard
        key={product.sku}
        id={product.sku}
        brandName={product.brand_name}
        image={product.filename}
        title={product.product_name}
        description={product.description}
        activeSale={product.sale_active}
        actualPrice={parseFloat(product.actual_price)}
        basePrice={parseFloat(product.base_price)}
      />
    ));
  };

  const prevPage = () => {
    if (currentPage === 1) {
      return;
    }
    setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    renderPage();
    if (currentPage > totalPages()) {
      return;
    }
    setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      <div className='product-wrapper'>{renderPage()}</div>
      <div className='product-wrapper-pagination'>
        <Button
          className='new-button-class'
          onClick={() => prevPage()}
          buttonText='Previous'
        />
        {renderPagination()}
        <Button
          className='new-button-class'
          onClick={() => nextPage()}
          buttonText='Next Page'
        />
      </div>
    </div>
  );
}

ProductPage.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      sku: PropTypes.string,
      id: PropTypes.string,
      category: PropTypes.string,
      image: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      price: PropTypes.string,
    })
  ),
};

export default ProductPage;
