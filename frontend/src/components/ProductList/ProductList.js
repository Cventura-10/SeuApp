import React, { useState } from 'react';
import './ProductList.css';
import ProductFilter from '../ProductFilter/ProductFilter';

const ProductList = ({ products }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [...new Set(products.map((product) => product.category))];

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  const handleFilterChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="product-list">
      <h2>Product List</h2>
      <ProductFilter categories={categories} onFilterChange={handleFilterChange} />
      {filteredProducts.map((product) => (
        <div key={product.id} className="product-item">
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <p>Description: {product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
