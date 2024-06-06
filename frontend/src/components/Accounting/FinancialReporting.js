import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './FinancialReporting.css';

const FinancialReporting = () => {
  const [financialData, setFinancialData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFinancialData();
  }, []);

  const fetchFinancialData = async () => {
    try {
      const response = await axios.get('/api/financial');
      setFinancialData(response.data);
      setLoading(false);
    } catch (error) {
      setError('Error fetching financial data');
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
    <div className="financial-reporting">
      <h2>Financial Reporting</h2>
      {financialData && (
        <>
          <p>Total Revenue: ${financialData.totalRevenue}</p>
          <p>Total Expenses: ${financialData.totalExpenses}</p>
          <p>Net Profit: ${financialData.netProfit}</p>
        </>
      )}
    </div>
  );
};

export default FinancialReporting;
