import React from 'react';

const SalesList = ({ sales }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Customer</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {sales.map((sale, index) => (
          <tr key={index}>
            <td>{sale.date}</td>
            <td>{sale.customer}</td>
            <td>{sale.total}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SalesList;
