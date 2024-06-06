import React, { useState } from 'react';
import './ProductForm.css';

const ProductForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, price, description, category });
    setName('');
    setPrice('');
    setDescription('');
    setCategory('');
  };

  return (
    <div className="product-form">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        {/* Add form fields */}
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default ProductForm;
