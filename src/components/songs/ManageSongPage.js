import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as songActions from '../../actions/songActions';
import SongForm from './SongForm';

/*
Casi que esto es igual que para los artistas, ud podria en vez de haber repetido usar un componente grilla que se encargue 
de paginar, filtrar, ya sea via cliente o API.
La grilla puede recibir el metadata para las columnas, la data, los API endponits, etc.
Hay varias por ahi en internet.
*/

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
  const song = songs.filter(song => song.Id == id);
  if (song) return song[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  /*
  No lo haga con el location, es mas simple que esto y mas limpio:
  
  songId: ownProps.params.id, // Depende de como ke haya puesto en el route
  */
   let songId = ownProps.location.pathname.split("/")[2];
   let song = { Title: '', Year: '', Length: '', Category: ''};
  /*REMOVER :)*/
  debugger
   if (songId && state.songs.length > 0) {
     //Deberia ser desde el API y no cliente, depende del caso
     song = getSongById(state.songs, songId);
   }

   //Esto mas mas para el render, no es puro de props, es solo formato de data
   const artitsFormatterForDropdown = state.artists.map(artist => {
     return {
       value: artist.Id,
       text : artist.Name
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

/*
Puede cambiar esto y deshacerse del mapDispatchToProps:

import { loadSongs, saveSong, ..... } from '../../actions/songActions';

export default connect(
    mapStateToProps, {
        loadSongs,
        saveSong,
        :,
        :,
    }
)(ManageSongPage);

Y luego usarlas asi:

this.props.loadSongs(....);
this.props.saveSong(....);

*/

export default connect(mapStateToProps, mapDispatchToProps)(ManageSongPage);
