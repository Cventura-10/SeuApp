import React, { useState } from 'react';
import './SalesForm.css';

const SalesForm = ({ onSubmit }) => {
  const [customer, setCustomer] = useState('');
  const [totalAmount, setTotalAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ customer, totalAmount });
    setCustomer('');
    setTotalAmount('');
  };

  return (
    <div className="sales-form">
      <h2>Sales Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="customer">Customer:</label>
          <input
            type="text"
            id="customer"
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="totalAmount">Total Amount:</label>
          <input
            type="number"
            id="totalAmount"
            value={totalAmount}
            onChange={(e) => setTotalAmount(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SalesForm;
