import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/sales">Sales</Link>
        </li>
        <li>
          <Link to="/accounting">Accounting</Link>
          <ul>
            <li>
              <Link to="/accounting/chart-of-accounts">Chart of Accounts</Link>
            </li>
            <li>
              <Link to="/accounting/sales-revenue">Sales Revenue</Link>
            </li>
            <li>
              <Link to="/accounting/inventory-management">Inventory Management</Link>
            </li>
            <li>
              <Link to="/accounting/expense-tracking">Expense Tracking</Link>
            </li>
            <li>
              <Link to="/accounting/financial-reporting">Financial Reporting</Link>
            </li>
            <li>
              <Link to="/accounting/bank-reconciliation">Bank Reconciliation</Link>
            </li>
            <li>
              <Link to="/accounting/tax-management">Tax Management</Link>
            </li>
            <li>
              <Link to="/accounting/payroll-processing">Payroll Processing</Link>
            </li>
            <li>
              <Link to="/accounting/budgeting-forecasting">Budgeting and Forecasting</Link>
            </li>
            <li>
              <Link to="/accounting/financial-analysis">Financial Analysis</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
