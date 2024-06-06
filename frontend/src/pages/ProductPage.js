import React from 'react';
import './ProductPage.css';
import ProductList from '../../../components/ProductList/ProductList';
import ProductForm from '../../../components/ProductForm/ProductForm';

const ProductPage = () => {
  return (
    <div className="product-page">
      <h1>Motorcycle Store</h1>
      <div className="product-grid">
        <div className="product-list">
          <ProductList />
        </div>
        <div className="product-form">
          <ProductForm />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
