import React from 'react';
import {connect} from 'react-redux';
import * as songActions from '../../actions/songActions';
import {bindActionCreators} from 'redux';
import SongList from './SongList';

class SongsPage extends React.Component {


  render(){
    const {songs} = this.props;
    debugger
    return(
      <div>
        <h1>Songs</h1>
        <SongList songs = {songs}/>
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
