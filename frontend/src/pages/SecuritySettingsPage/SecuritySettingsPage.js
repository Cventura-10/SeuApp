import React from 'react';
import './SettingsPage.css';

const SettingsPage = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChangePassword = () => {
    // Logic to change password
    console.log('Current password:', currentPassword);
    console.log('New password:', newPassword);
    console.log('Confirm password:', confirmPassword);
  };

  return (
    <div>
      <h2>Security Settings</h2>
      <div>
        <label>
          Current Password
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          New Password
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Confirm Password
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleChangePassword}>Change Password</button>
    </div>
  );
};

export default SecuritySettingsPage;
