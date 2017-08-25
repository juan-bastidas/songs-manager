import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as songActions from '../../actions/songActions';
import SongForm from './SongForm';

export class ManageSongPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      song: Object.assign({}, this.props.song),
      errors: {}
    };
    this.updateSongState = this.updateSongState.bind(this);
    this.saveSong = this.saveSong.bind(this);
  }

updateSongState(event) {
  const field = event.target.name;
  let song = this.state.song;
  song[field] = event.target.value;
  return this.setState({song: song});
 }
 saveSong(event) {
    event.preventDefault();
    debugger
    this.props.actions.saveSong(this.state.song);
    this.props.history.push('/songs/');
  }

  render() {
    return (
      <SongForm
        allArtists={this.props.artists}
        onChange={this.updateSongState}
        onSave={this.saveSong}
        song={this.state.song}
        errors={this.state.errors}
     />
    );
  }
}

ManageSongPage.propTypes = {
  song: PropTypes.object.isRequired
};

ManageSongPage.contextTypes = {
  router: PropTypes.object.isRequired
};

function getSongById(songs, id) {
  const song = songs.filter(song => song.id == id);
  if (song) return song[0];
  return null;
}

function mapStateToProps(state, ownProps) {
   let songId = ownProps.location.pathname.split("/")[2];
   let song = { id: '',  title: '', year: '', length: '', category: ''};

   if (songId && state.songs.length > 0) {
     song = getSongById(state.songs, songId);
   }

   const artitsFormatterForDropdown = state.artists.map(artist => {
     return {
       value: artist.id,
       text : artist.name
     }
   })

  return {
    song: song,
    artists: artitsFormatterForDropdown
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(songActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageSongPage);
