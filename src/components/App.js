import React, {PropTypes} from 'react';
import Header from './common/Header';
import {Route} from 'react-router-dom';
import {getAsyncComponent} from 'async-react-component';

const HomePage = () => import('./home/HomePage');
const ManageSongPage = () => import('./songs/ManageSongPage');
const SongsPage = () => import('./songs/SongsPage');
const ArtistPage = () => import('./artists/ArtistsPage');
const ManageArtistPage = () => import('./artists/ManageArtistPage');

class App extends React.Component{
  render(){
    return(
      <div className="container-fluid">
        <Header/>
        <Route exact path='/' component={getAsyncComponent(HomePage)}/>
        <Route exact path="/songs" component = {getAsyncComponent(SongsPage)}/>
        <Route exact path="/song" component = {getAsyncComponent(ManageSongPage)}/>
        <Route exact path="/song/:id" component = {getAsyncComponent(ManageSongPage)}/>
        <Route exact path="/artists" component = {getAsyncComponent(ArtistPage)}/>
        <Route exact path="/artist" component = {getAsyncComponent(ManageArtistPage)}/>
        <Route exact path="/artist/:id" component = {getAsyncComponent(ManageArtistPage)}/>
      </div>
    );
  }
}

App.propTypes = {
  children : PropTypes.object.isRequired
};
export default App;
