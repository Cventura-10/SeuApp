import React from 'react';
import './ProductPage.css';
import ProductList from '../../../components/ProductList/ProductList';
import ProductForm from '../../../components/ProductForm/ProductForm';

const ProductPage = () => {
  const products = [
    { id: 1, name: 'Product 1', price: 10, description: 'Description 1', category: 'Category 1' },
    { id: 2, name: 'Product 2', price: 20, description: 'Description 2', category: 'Category 2' },
    { id: 3, name: 'Product 3', price: 30, description: 'Description 3', category: 'Category 1' },
  ];

  const handleAddProduct = (product) => {
    // Add logic to handle adding a new product
    console.log('New product:', product);
  };

  return (
    <div className="product-page">
      <h1>Motorcycle Store</h1>
      <div className="product-grid">
        <div className="product-list">
          <ProductList products={products} />
        </div>
        <div className="product-form">
          <ProductForm onSubmit={handleAddProduct} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
