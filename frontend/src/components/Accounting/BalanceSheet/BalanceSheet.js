import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BalanceSheet = () => {
  const [balanceSheetData, setBalanceSheetData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBalanceSheetData();
  }, []);

  const fetchBalanceSheetData = async () => {
    try {
      const response = await axios.get('/api/balance-sheet');
      setBalanceSheetData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching balance sheet data:', error);
      setError('Failed to fetch balance sheet data. Please try again later.');
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
    <div className="balance-sheet">
      <h2>Balance Sheet</h2>
      {balanceSheetData && (
        <>
          <p>Total Assets: {balanceSheetData.totalAssets}</p>
          <p>Total Liabilities: {balanceSheetData.totalLiabilities}</p>
          <p>Total Equity: {balanceSheetData.totalEquity}</p>
        </>
      )}
    </div>
  );
};

export default BalanceSheet;
