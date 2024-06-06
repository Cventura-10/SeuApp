import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for React 18+
import './index.css'; // Assumed to be Global CSS
import App from './App'; // Main App Component
import reportWebVitals from './reportWebVitals'; // Optional performance tracking

// Creating a root container where the React app is attached
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the App component within React's StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: This code is for measuring performance of your app,
// can be useful during development. You can replace console.log
// with any logging mechanism you have.
reportWebVitals(console.log);
