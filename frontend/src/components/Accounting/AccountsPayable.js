import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AccountsPayable = () => {
  const [accountsPayableData, setAccountsPayableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAccountsPayableData();
  }, []);

  const fetchAccountsPayableData = async () => {
    try {
      const response = await axios.get('/api/accounts-payable');
      setAccountsPayableData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching accounts payable data:', error);
      setError('Failed to fetch accounts payable data. Please try again later.');
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
    <div className="accounts-payable">
      <h2>Accounts Payable</h2>
      <ul>
        {accountsPayableData.map((entry) => (
          <li key={entry.id}>
            {entry.date} - {entry.description} - {entry.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccountsPayable;
