import * as types from './actionTypes';
import ArtistApi from '../api/artists';

export function loadArtistsSuccess(artists){
  return {type: types.LOAD_ARTISTS_SUCCESS, artists}
}

export function loadArtists(){
  let artists = ArtistApi.getAllArtists();
  return loadArtistsSuccess(artists);
}
