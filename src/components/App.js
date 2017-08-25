import React, {PropTypes} from 'react';
import Header from './common/Header';
import {Route} from 'react-router-dom';
import SongsPage from './songs/SongsPage';
import HomePage from './home/HomePage';
import ManageSongPage from './songs/ManageSongPage';


class App extends React.Component{
  render(){
    return(
      <div className="container-fluid">
        <Header/>
        <Route exact path='/' component = {HomePage}/>
        <Route exact path="/songs" component = {SongsPage}/>
        <Route exact path="/song" component = {ManageSongPage}/>
        <Route exact path="/song/:id" component = {ManageSongPage}/>
      </div>
    );
  }
}

App.propTypes = {
  children : PropTypes.object.isRequired
};
export default App;
