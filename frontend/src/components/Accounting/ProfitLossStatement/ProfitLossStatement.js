import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProfitLossStatement.css';

const ProfitLossStatement = () => {
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
      console.error('Error fetching financial data:', error);
      setError('Failed to fetch financial data. Please try again later.');
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
    <div className="profit-loss-statement">
      <h2>Profit and Loss Statement</h2>
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

export default ProfitLossStatement;
