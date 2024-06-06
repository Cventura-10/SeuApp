import React, { useEffect, useState } from 'react';
import './SalesPage.css';
import SalesList from '../../../components/SalesList/SalesList';
import SalesForm from '../../../components/SalesForm/SalesForm';

const SalesPage = () => {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    fetchSales();
  }, []);

  const fetchSales = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/sales');
      if (response.ok) {
        const data = await response.json();
        setSales(data);
      } else {
        console.error('Error fetching sales:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching sales:', error);
    }
  };

  const handleAddSale = (sale) => {
    // Add logic to handle adding a new sale
    console.log('New sale:', sale);
  };

  return (
    <div className="sales-page">
      <h1>Sales</h1>
      <SalesList sales={sales} />
      <SalesForm onSubmit={handleAddSale} />
    </div>
  );
};

export default SalesPage;
