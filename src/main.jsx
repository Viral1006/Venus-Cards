import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router
import App from './App.jsx';
import './index.css';

// Wrap App with Router
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router> {/* Wrap App with Router */}
      <App />
    </Router>
  </React.StrictMode>,
);