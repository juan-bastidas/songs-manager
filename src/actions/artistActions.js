import * as types from './actionTypes';
import ArtistApi from '../api/artists';

export function loadArtistsSuccess(artists){
  return {type: types.LOAD_ARTISTS_SUCCESS, artists}
}
export function updateArtistSuccess(artist) {
  return { type: types.UPDATE_ARTIST_SUCCESS, artist };
}

export function createArtistSuccess(artist) {
  return { type: types.CREATE_ARTIST_SUCCESS, artist };
}

export function deleteArtist(artist) {
  debugger
  return { type: types.DELETE_ARTIST, artist };
}

export function loadArtists(){
  let artists = ArtistApi.getAllArtists();
  return loadArtistsSuccess(artists);
}

export function saveArtist(artist, dispatch) {
    return  artist.id ? updateArtistSuccess(artist) :
      createArtistSuccess(artist);
}
