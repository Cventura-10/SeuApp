import React from 'react';

const RecentSales = ({ sales }) => {
  return (
    <div>
      <h2>Recent Sales</h2>
      {sales.map((sale) => (
        <div key={sale.id}>
          <p>Sale ID: {sale.id}</p>
          <p>Customer: {sale.customer}</p>
          <p>Amount: {sale.amount}</p>
          <p>Date: {sale.date}</p>
        </div>
      ))}
    </div>
  );
};

export default RecentSales;
