import React from 'react';
import ReactDOM from 'react-dom';
import './assets/main.scss';
import { store } from './state/index.js';
import { StoreContext } from 'storeon/react';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
