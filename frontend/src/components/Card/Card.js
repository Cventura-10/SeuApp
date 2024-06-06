import React from 'react';
import './Card.css';

const ExpenseCard = ({ title, amount }) => {
  return (
    <div className="expense-card">
      <h3>{title}</h3>
      <p>Amount: ${amount}</p>
    </div>
  );
};

export default ExpenseCard;
