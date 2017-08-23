import * as types from '../actions/actionTypes';
export default function ArtistReducer(state=[], action){
  switch(action.type){
    case types.LOAD_ARTISTS_SUCCESS:
      return action.artists;
    default:
      return state;
  }
}
