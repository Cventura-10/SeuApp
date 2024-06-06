import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './InventoryManagement.css';

const InventoryManagement = () => {
  const [inventoryData, setInventoryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchInventoryData();
  }, []);

  const fetchInventoryData = async () => {
    try {
      const response = await axios.get('/api/inventory');
      setInventoryData(response.data);
      setLoading(false);
    } catch (error) {
      setError('Error fetching inventory data');
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
    <div className="inventory-management">
      <h2>Inventory Management</h2>
      {inventoryData && (
        <>
          <p>Total Inventory Value: ${inventoryData.totalInventoryValue}</p>
          <p>Low Stock Items: {inventoryData.lowStockItems}</p>
          <p>Out of Stock Items: {inventoryData.outOfStockItems}</p>
        </>
      )}
    </div>
  );
};

export default InventoryManagement;
