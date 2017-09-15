import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as artistActions from '../../actions/artistActions';
import ArtistForm from './ArtistForm';

export class ManageArtistPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      /*
      No use assign:
      
      artist = { ...this.props.artist };
      */
      artist: Object.assign({}, this.props.artist),
      errors: {}
    };
    //Con ES6 estas 2 lineas sobran, solo vuelva esta 2 funcion arrow functions:
    /*
    updateArtistState = (event) => {
      :
      :
     }
    
    */
    
    
    this.updateArtistState = this.updateArtistState.bind(this);
    this.saveArtist = this.saveArtist.bind(this);
  }

updateArtistState(event) {
  const field = event.target.name;
  let artist = this.state.artist;
  artist[field] = event.target.value;
  return this.setState({artist: artist});
 }
 saveArtist(event) {
    event.preventDefault();
    this.props.actions.saveArtist(this.state.artist);
    this.props.history.push('/artists/');
  }

  render() {
    return (
      <ArtistForm
        allArtists={this.props.artists}
        onChange={this.updateArtistState}
        onSave={this.saveArtist}
        artist={this.state.artist}
        errors={this.state.errors}
     />
    );
  }
}

ManageArtistPage.propTypes = {
  artist: PropTypes.object.isRequired
};

ManageArtistPage.contextTypes = {
  router: PropTypes.object.isRequired
};

function getArtistById(artists, id) {
  const artist = artists.filter(artist => artist.Id == id);
  if (artist) return artist[0];
  return null;
}

function mapStateToProps(state, ownProps) {
   let artistId = ownProps.location.pathname.split("/")[2];
   let artist = { Name: '', Country: '', Year: ''};

   if (artistId && state.artists.length > 0) {
     artist = getArtistById(state.artists, artistId);
   }

  return {
    artist: artist
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(artistActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageArtistPage);
