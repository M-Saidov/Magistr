import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router'
import { Provider } from 'react-redux';
import { store } from './redux-state/store';

const originalConsoleError = console.error;
console.error = (...args) => {
    if (typeof args[0] === "string" && args[0].includes("defaultProps")) {
        return; // Игнорируем предупреждения о defaultProps
    }
    originalConsoleError(...args);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App></App>
    </Provider>
  </BrowserRouter>
);

