import React from 'react';
import settingIcon from './assets/Icons/Setting.png';
import salesIcon from './assets/Icons/Sales.png';
import productionIcon from './assets/Icons/Production.png';
import menusIcon from './assets/Icons/menus.png';
import logoIcon from './assets/Icons/logo.png';
import dashboardIcon from './assets/Icons/Dashboard.png';
import accountingIcon from './assets/Icons/accounting.png';
import { settingIcon, salesIcon, productionIcon, menusIcon, logoIcon, dashboardIcon, accountingIcon } from './assets/icons';

const MyComponent = () => {
  return (
    <div>
      <img src={settingIcon} alt="Setting" />
      <img src={salesIcon} alt="Sales" />
      <img src={productionIcon} alt="Production" />
      <img src={menusIcon} alt="Menus" />
      <img src={logoIcon} alt="Logo" />
      <img src={dashboardIcon} alt="Dashboard" />
      <img src={accountingIcon} alt="Accounting" />
    </div>
  );
};

export default MyComponent;
