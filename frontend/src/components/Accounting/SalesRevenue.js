import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './SalesRevenue.css';

const SalesRevenue = () => {
  const [salesData, setSalesData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchSalesData();
  }, []);

  const fetchSalesData = async () => {
    try {
      const response = await axios.get('/api/sales');
      setSalesData(response.data);
      setLoading(false);
    } catch (error) {
      setError('Error fetching sales data');
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="sales-revenue">
      <h2>Sales Revenue</h2>
      {salesData && (
        <>
          <p>Total Sales: ${salesData.totalSales}</p>
          <p>Number of Orders: {salesData.numberOfOrders}</p>
          <p>Average Order Value: ${salesData.averageOrderValue}</p>
        </>
      )}
    </div>
  );
};

export default SalesRevenue;
