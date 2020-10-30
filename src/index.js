import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import './index.css';
import { CurrencyProvider } from '../src/hooks/currency-context';

import App from './components/app';

import store from './redux/store';
import history from './history';

// DEV ONLY!!!
window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <CurrencyProvider>
        <App />
      </CurrencyProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
