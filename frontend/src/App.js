import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './layouts/Sidebar/Sidebar';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import ProductPage from './pages/MotorcycleStore/ProductPage/ProductPage';
import SalesPage from './pages/MotorcycleStore/SalesPage/SalesPage';
import AccountingPage from './pages/Accounting/AccountingPage/AccountingPage';
import ChartOfAccounts from './components/Accounting/ChartOfAccounts';
import SalesRevenue from './components/Accounting/SalesRevenue';
import InventoryManagement from './components/Accounting/InventoryManagement';
import ExpenseTracking from './components/Accounting/ExpenseTracking';
import FinancialReporting from './components/Accounting/FinancialReporting';
import BankReconciliation from './components/Accounting/BankReconciliation';
import TaxManagement from './components/Accounting/TaxManagement';
import PayrollProcessing from './components/Accounting/PayrollProcessing';
import BudgetingForecasting from './components/Accounting/BudgetingForecasting';
import FinancialAnalysis from './components/Accounting/FinancialAnalysis';
import SettingsPage from './pages/SettingsPage/SettingsPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route exact path="/" element={<DashboardPage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/sales" element={<SalesPage />} />
            <Route path="/accounting" element={<AccountingPage />}>
              <Route path="chart-of-accounts" element={<ChartOfAccounts />} />
              <Route path="sales-revenue" element={<SalesRevenue />} />
              <Route path="inventory-management" element={<InventoryManagement />} />
              <Route path="expense-tracking" element={<ExpenseTracking />} />
              <Route path="financial-reporting" element={<FinancialReporting />} />
              <Route path="bank-reconciliation" element={<BankReconciliation />} />
              <Route path="tax-management" element={<TaxManagement />} />
              <Route path="payroll-processing" element={<PayrollProcessing />} />
              <Route path="budgeting-forecasting" element={<BudgetingForecasting />} />
              <Route path="financial-analysis" element={<FinancialAnalysis />} />
            </Route>
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
