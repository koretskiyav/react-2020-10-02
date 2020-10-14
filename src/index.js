import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';

import App from './components/app';

import store from './redux/store';
import { load } from './redux/actions';
store.dispatch(load());
// DEV ONLY!!!
window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
