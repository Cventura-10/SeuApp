import React from 'react';

const OrdersPage = () => {
  const orders = [
    { id: 1, item: 'Motorcycle Model A', date: '2023-05-01' },
    { id: 2, item: 'Motorcycle Model B', date: '2023-04-15' },
    { id: 3, item: 'Motorcycle Model C', date: '2023-03-20' },
  ];

  return (
    <div>
      <h1>Orders</h1>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Item</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.item}</td>
              <td>{order.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;
