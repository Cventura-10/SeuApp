import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ChartOfAccounts = () => {
  const [chartOfAccounts, setChartOfAccounts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchChartOfAccounts();
  }, []);

  const fetchChartOfAccounts = async () => {
    try {
      const response = await axios.get('/api/chart-of-accounts');
      setChartOfAccounts(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching chart of accounts:', error);
      setError('Failed to fetch chart of accounts. Please try again later.');
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
    <div className="chart-of-accounts">
      <h2>Chart of Accounts</h2>
      <table>
        <thead>
          <tr>
            <th>Account Number</th>
            <th>Account Name</th>
            <th>Account Type</th>
          </tr>
        </thead>
        <tbody>
          {chartOfAccounts.map((account) => (
            <tr key={account.id}>
              <td>{account.accountNumber}</td>
              <td>{account.accountName}</td>
              <td>{account.accountType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ChartOfAccounts;
