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
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

/*
Normalmente cada componente debe llanar sus acciones y no el index, tampoco usaria dispatch para esto esta el tema de 
connect en los componentes
*/

let store = configureStore();
store.dispatch(loadSongs());
store.dispatch(loadArtists());

/*
No veo el tema de los dynamic imports
*/
render(
  <Provider store = {store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app')
);
