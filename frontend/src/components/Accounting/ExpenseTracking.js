import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ExpenseTracking.css';

const ExpenseTracking = () => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const response = await axios.get('/api/expenses');
      setExpenses(response.data);
      setLoading(false);
    } catch (error) {
      setError('Error fetching expenses');
      setLoading(false);
    }
  };

  const handleAddExpense = async (expense) => {
    try {
      const response = await axios.post('/api/expenses', expense);
      setExpenses([...expenses, response.data]);
    } catch (error) {
      setError('Error adding expense');
    }
  };

  const handleDeleteExpense = async (expenseId) => {
    try {
      await axios.delete(`/api/expenses/${expenseId}`);
      const updatedExpenses = expenses.filter((expense) => expense._id !== expenseId);
      setExpenses(updatedExpenses);
    } catch (error) {
      setError('Error deleting expense');
    }
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <div className="expense-tracking">
      <h2>Expense Tracking</h2>
      <p>Total Expenses: ${totalExpenses.toFixed(2)}</p>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense._id}>
              <td>{expense.date}</td>
              <td>{expense.category}</td>
              <td>${expense.amount.toFixed(2)}</td>
              <td>
                <button onClick={() => handleDeleteExpense(expense._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <form onSubmit={(e) => {
        e.preventDefault();
        const newExpense = {
          date: e.target.date.value,
          category: e.target.category.value,
          amount: parseFloat(e.target.amount.value),
        };
        handleAddExpense(newExpense);
        e.target.reset();
      }}>
        <input type="date" name="date" required />
        <input type="text" name="category" placeholder="Category" required />
        <input type="number" name="amount" step="0.01" placeholder="Amount" required />
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseTracking;
