import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

document.documentElement.style.setProperty('--actual-height', window.innerHeight + 'px');
console.log('set height', window.innerHeight)
root.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);