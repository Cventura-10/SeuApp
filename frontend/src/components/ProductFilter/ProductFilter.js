import React from 'react';
import './ProductFilter.css';

const ProductFilter = ({ categories, onFilterChange }) => {
  return (
    <div className="product-filter">
      <label htmlFor="category-filter">Filter by Category:</label>
      <select
        id="category-filter"
        onChange={(e) => onFilterChange(e.target.value)}
      >
        <option value="">All</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProductFilter;
