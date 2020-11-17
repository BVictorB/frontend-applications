import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Sidebar from './components/Sidebar/Sidebar';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Sidebar />
  </React.StrictMode>,
  document.getElementById('root')
)