import React, { useState } from 'react';
import './Header.css';
import Icon from '../../components/Icon/Icon';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ toggleSidebar }) => {
  const [showAccountDropdown, setShowAccountDropdown] = useState(false);
  const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);
  const navigate = useNavigate();

  const toggleAccountDropdown = () => {
    setShowAccountDropdown(!showAccountDropdown);
  };

  const toggleSettingsDropdown = () => {
    setShowSettingsDropdown(!showSettingsDropdown);
  };

  const handleProfileClick = () => {
    navigate('/profile');
  };

  const handleOrdersClick = () => {
    navigate('/orders');
  };

  const handleLogoutClick = () => {
    navigate('/login');
  };

  const handleGeneralSettingsClick = () => {
    navigate('/settings/general');
  };

  const handleNotificationsSettingsClick = () => {
    navigate('/settings/notifications');
  };

  const handleSecuritySettingsClick = () => {
    navigate('/settings/security');
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <Icon name="logo" />
          <h1>Motorcycle Store</h1>
        </Link>
      </div>
      <div className="toggle-sidebar" onClick={toggleSidebar}>
        <Icon name="menu" />
      </div>
      <nav>
        <ul>
          <li onClick={toggleAccountDropdown} className="dropdown">
            <Icon name="account" />
            Account
            {showAccountDropdown && (
              <div className="dropdown-menu">
                <a href="#" onClick={handleProfileClick}>Profile</a>
                <a href="#" onClick={handleOrdersClick}>Orders</a>
                <a href="#" onClick={handleLogoutClick}>Logout</a>
              </div>
            )}
          </li>
          <li onClick={toggleSettingsDropdown} className="dropdown">
            <Icon name="settings" />
            Settings
            {showSettingsDropdown && (
              <div className="dropdown-menu">
                <a href="#" onClick={handleGeneralSettingsClick}>General</a>
                <a href="#" onClick={handleNotificationsSettingsClick}>Notifications</a>
                <a href="#" onClick={handleSecuritySettingsClick}>Security</a>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
