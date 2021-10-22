import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducerRoot from './store/reducers/index';
import './index.module.scss';
import App from './App';

const store = createStore(reducerRoot, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById('root'),
);
