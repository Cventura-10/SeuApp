// FinancialStatements.js
import React from 'react';
import './FinancialStatements.css';
import BalanceSheet from '../BalanceSheet/BalanceSheet';
import ProfitLossStatement from '../ProfitLossStatement/ProfitLossStatement';

const FinancialStatements = () => {
  return (
    <div className="financial-statements">
      <h2>Financial Statements</h2>
      <BalanceSheet />
      <ProfitLossStatement />
    </div>
  );
};

export default FinancialStatements;
