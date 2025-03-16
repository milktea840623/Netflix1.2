import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'
import './style/index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
        <Navbar />
        <App />
      </Router>
  </React.StrictMode>
);
