import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DashboardPage.css';

const DashboardPage = () => {
  const [salesData, setSalesData] = useState(null);
  const [inventoryData, setInventoryData] = useState(null);
  const [financialData, setFinancialData] = useState(null);
  const [topSellingProducts, setTopSellingProducts] = useState([]);
  const [recentOrders, setRecentOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [salesResponse, inventoryResponse, financialResponse, topSellingResponse, recentOrdersResponse] = await Promise.all([
        axios.get('http://localhost:5000/api/sales'),
        axios.get('http://localhost:5000/api/inventory'),
        axios.get('http://localhost:5000/api/financial'),
        axios.get('http://localhost:5000/api/products/top-selling'),
        axios.get('http://localhost:5000/api/orders/recent'),
      ]);

      setSalesData(salesResponse.data);
      setInventoryData(inventoryResponse.data);
      setFinancialData(financialResponse.data);
      setTopSellingProducts(topSellingResponse.data);
      setRecentOrders(recentOrdersResponse.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      setError('Failed to fetch dashboard data. Please try again later.');
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="dashboard-page">
      <h1>Dashboard</h1>

      {/* Sales Overview */}
      {salesData && (
        <div className="dashboard-section">
          <h2>Sales Overview</h2>
          <div className="dashboard-item">
            <p>Total Sales: ${salesData.totalSales}</p>
            <p>Number of Orders: {salesData.numberOfOrders}</p>
            <p>Average Order Value: ${salesData.averageOrderValue}</p>
          </div>
        </div>
      )}

      {/* Inventory Summary */}
      {inventoryData && (
        <div className="dashboard-section">
          <h2>Inventory Summary</h2>
          <div className="dashboard-item">
            <p>Total Inventory Value: ${inventoryData.totalInventoryValue}</p>
            <p>Low Stock Items: {inventoryData.lowStockItems}</p>
            <p>Out of Stock Items: {inventoryData.outOfStockItems}</p>
          </div>
        </div>
      )}

      {/* Financial Overview */}
      {financialData && (
        <div className="dashboard-section">
          <h2>Financial Overview</h2>
          <div className="dashboard-item">
            <p>Total Revenue: ${financialData.totalRevenue}</p>
            <p>Total Expenses: ${financialData.totalExpenses}</p>
            <p>Net Profit: ${financialData.netProfit}</p>
          </div>
        </div>
      )}

      {/* Top Selling Products */}
      {topSellingProducts.length > 0 && (
        <div className="dashboard-section">
          <h2>Top Selling Products</h2>
          <ul className="dashboard-list">
            {topSellingProducts.map(product => (
              <li key={product.id}>{product.name}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Recent Orders */}
      {recentOrders.length > 0 && (
        <div className="dashboard-section">
          <h2>Recent Orders</h2>
          <table className="dashboard-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map(order => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.customer}</td>
                  <td>${order.total}</td>
                  <td>{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
