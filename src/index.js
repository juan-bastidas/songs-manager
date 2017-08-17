/* eslint-disable no-console */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import routes from './routes';
import {Router, browserHistory} from 'react-router';
import { Provider } from 'react-redux';


render(

    <Router history={browserHistory} routes = {routes} />
,
  document.getElementById('app')
);
