/* eslint-disable no-console */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import routes from './routes';
import {Router, browserHistory} from 'react-router';
import { Provider } from 'react-redux';
import './styles/styles.css';
import configureStore from './store/configureStore';
import {loadSongs} from './actions/songActions';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

let store = configureStore();
store.dispatch(loadSongs());

render(
  <Provider store = {store}>
    <Router history={browserHistory} routes = {routes} />
  </Provider>,
  document.getElementById('app')
);
