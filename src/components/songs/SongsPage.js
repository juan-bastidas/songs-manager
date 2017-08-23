import React from 'react';
import {connect} from 'react-redux';
import * as songActions from '../../actions/songActions';
import {bindActionCreators} from 'redux';
import SongList from './SongList';
import {browserHistory} from 'react-router';

class SongsPage extends React.Component {

  constructor(props, context) {
     super(props, context);
     this.redirectToAddSongPage = this.redirectToAddSongPage.bind(this);
     this.deleteSong = this.deleteSong.bind(this);
   }

  redirectToAddSongPage() {
  browserHistory.push('/song');
  }

  deleteSong(song) {
    debugger
     this.props.actions.deleteSong(song);
  }

  render(){
    const {songs} = this.props;
    return(
      <div>
        <h1>Songs</h1>
        <SongList songs = {songs} onDelete = {this.deleteSong}/>
        <input
         type="submit"
         value="Add Song"
         className="btn btn-primary"
         onClick={this.redirectToAddSongPage}/>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  return{
    songs: state.songs
  }
}
function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(songActions, dispatch)
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(SongsPage);
