import React from 'react';
import ReactDOM from 'react-dom/client';
import Notifications from './Notifications';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <div className="root-notifications">
      <Notifications></Notifications>
    </div>
  </React.StrictMode>
);
