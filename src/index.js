import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { createStore } from 'redux';
import reducer from './reducers/player-area-reducer';
import { Provider } from 'react-redux';

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));

document.documentElement.style.setProperty('--actual-height', window.innerHeight + 'px');
console.log('set height', window.innerHeight)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App /> 
    </Provider>
  </React.StrictMode>
);