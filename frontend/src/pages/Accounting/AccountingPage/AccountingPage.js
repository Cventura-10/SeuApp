// frontend/src/pages/Accounting/AccountingPage/AccountingPage.js
import React from 'react';
import ChartOfAccounts from '../../../components/Accounting/ChartOfAccounts';
import GeneralLedger from '../../../components/Accounting/GeneralLedger';
import FinancialStatements from '../../../components/Accounting/FinancialStatements/FinancialStatements';
import AccountsReceivable from '../../../components/Accounting/AccountsReceivable';
import AccountsPayable from '../../../components/Accounting/AccountsPayable';
import BankReconciliation from '../../../components/Accounting/BankReconciliation';
import BudgetingForecasting from '../../../components/Accounting/BudgetingForecasting';
import TaxManagement from '../../../components/Accounting/TaxManagement';

const AccountingPage = () => {
  return (
    <div>
      <h1>Accounting</h1>
      <img src="/images/accounting.jpg" alt="Accounting" />
      
      <ChartOfAccounts />
      <GeneralLedger />
      <FinancialStatements />
      <AccountsReceivable />
      <AccountsPayable />
      <BankReconciliation />
      <BudgetingForecasting />
      <TaxManagement />
    </div>
  );
};

export default AccountingPage;
