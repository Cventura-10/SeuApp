import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BudgetingForecasting = () => {
  const [budgets, setBudgets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBudgets();
  }, []);

  const fetchBudgets = async () => {
    try {
      const response = await axios.get('/api/budgets');
      setBudgets(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching budgets:', error);
      setError('Failed to fetch budgets. Please try again later.');
      setLoading(false);
    }
  };

  const createBudget = async (budget) => {
    try {
      const response = await axios.post('/api/budgets', budget);
      setBudgets([...budgets, response.data]);
    } catch (error) {
      console.error('Error creating budget:', error);
      setError('Failed to create budget. Please try again later.');
    }
  };

  const updateBudget = async (budgetId, updatedBudget) => {
    try {
      await axios.put(`/api/budgets/${budgetId}`, updatedBudget);
      const updatedBudgets = budgets.map((budget) =>
        budget.id === budgetId ? { ...budget, ...updatedBudget } : budget
      );
      setBudgets(updatedBudgets);
    } catch (error) {
      console.error('Error updating budget:', error);
      setError('Failed to update budget. Please try again later.');
    }
  };

  const generateForecast = async () => {
    try {
      const response = await axios.post('/api/generate-forecast', { budgets });
      // Handle generated forecast
      console.log('Generated forecast:', response.data);
    } catch (error) {
      console.error('Error generating forecast:', error);
      setError('Failed to generate forecast. Please try again later.');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="budgeting-forecasting">
      <h2>Budgeting and Forecasting</h2>
      <div>
        <h3>Budgets</h3>
        <ul>
          {budgets.map((budget) => (
            <li key={budget.id}>
              {budget.name} - {budget.amount}
              <button onClick={() => updateBudget(budget.id, { amount: budget.amount + 1000 })}>
                Increase
              </button>
              <button onClick={() => updateBudget(budget.id, { amount: budget.amount - 1000 })}>
                Decrease
              </button>
            </li>
          ))}
        </ul>
        <form onSubmit={(e) => {
          e.preventDefault();
          const newBudget = {
            name: e.target.name.value,
            amount: parseFloat(e.target.amount.value),
          };
          createBudget(newBudget);
          e.target.reset();
        }}>
          <input type="text" name="name" placeholder="Budget Name" required />
          <input type="number" name="amount" step="0.01" placeholder="Amount" required />
          <button type="submit">Create Budget</button>
        </form>
      </div>
      <div>
        <h3>Forecasting</h3>
        <button onClick={generateForecast}>Generate Forecast</button>
      </div>
    </div>
  );
};

export default BudgetingForecasting;
