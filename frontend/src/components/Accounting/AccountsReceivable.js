import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AccountsReceivable = () => {
  const [bankTransactions, setBankTransactions] = useState([]);
  const [accountingEntries, setAccountingEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBankTransactions();
    fetchAccountingEntries();
  }, []);

  const fetchBankTransactions = async () => {
    try {
      const response = await axios.get('/api/bank-transactions');
      setBankTransactions(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching bank transactions:', error);
      setError('Failed to fetch bank transactions. Please try again later.');
      setLoading(false);
    }
  };

  const fetchAccountingEntries = async () => {
    try {
      const response = await axios.get('/api/accounting-entries');
      setAccountingEntries(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching accounting entries:', error);
      setError('Failed to fetch accounting entries. Please try again later.');
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
    <div className="accounts-receivable">
      <h2>Accounts Receivable</h2>
      <div>
        <h3>Bank Transactions</h3>
        <ul>
          {bankTransactions.map((transaction) => (
            <li key={transaction.id}>
              {transaction.date} - {transaction.description} - {transaction.amount}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Accounting Entries</h3>
        <ul>
          {accountingEntries.map((entry) => (
            <li key={entry.id}>
              {entry.date} - {entry.description} - {entry.amount}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AccountsReceivable;
