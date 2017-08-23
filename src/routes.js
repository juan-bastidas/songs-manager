import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import SongsPage from './components/songs/SongsPage';
import HomePage from './components/home/HomePage';
import ManageSongPage from './components/songs/ManageSongPage';

export default(
  <Route path="/" component = {App}>
    <IndexRoute component = {HomePage}/>
    <Route path="songs" component={SongsPage}/>
    <Route path="song" component={ManageSongPage}/>
    <Route path="song/:id" component={ManageSongPage}/>
  </Route>
);
