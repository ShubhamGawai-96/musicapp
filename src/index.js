import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';

// Create the root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component wrapped with Router
root.render(
  <React.StrictMode>
    <Router basename={process.env.https://shubhamgawai-96.github.io/musicapp/}>
      <App />
    </Router>
  </React.StrictMode>
);
