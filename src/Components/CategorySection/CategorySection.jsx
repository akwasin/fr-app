import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../ProductCard/ProductCard';
import './CategorySection.css';

/**
 * Renders project page
 * @class
 */
function CategorySection({ products, featuredBrand }) {
  const updatedDataset = [];

  const renderCategories = () => {
    for (const [key, value] of Object.entries(products)) {
      if (value.brand_name === featuredBrand) {
        updatedDataset.push(value);
      }
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

  return <div>
    <h3>Featured items from: {featuredBrand}</h3>
    <div className='category-section-wrapper'>{renderCategories()}</div>
  </div>;
}

CategorySection.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      sku: PropTypes.string,
      price: PropTypes.string,
    })
  ),
};

export default CategorySection;
