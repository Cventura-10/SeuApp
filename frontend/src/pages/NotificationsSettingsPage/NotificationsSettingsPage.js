import React, { useState } from 'react';

const NotificationsSettingsPage = () => {
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(false);

  const handleSaveSettings = () => {
    // Logic to save notification settings
    console.log('Email notifications:', emailNotifications);
    console.log('Push notifications:', pushNotifications);
  };

  return (
    <div>
      <h2>Notification Settings</h2>
      <div>
        <label>
          <input
            type="checkbox"
            checked={emailNotifications}
            onChange={(e) => setEmailNotifications(e.target.checked)}
          />
          Email Notifications
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={pushNotifications}
            onChange={(e) => setPushNotifications(e.target.checked)}
          />
          Push Notifications
        </label>
      </div>
      <button onClick={handleSaveSettings}>Save Settings</button>
    </div>
  );
};

export default NotificationsSettingsPage;
