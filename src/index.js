/* eslint-disable no-console */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import './styles/styles.css';
import configureStore from './store/configureStore';
import {loadSongs} from './actions/songActions';
import {loadArtists} from './actions/artistActions';

//No es la forma de importar, nunca referencie node_modules
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

let store = configureStore();
store.dispatch(loadSongs());
store.dispatch(loadArtists());

render(
  <Provider store = {store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app')
);
