import * as types from '../actions/actionTypes';
export default function SongReducer(state=[], action){
  debugger
  switch(action.type){
    case types.LOAD_SONGS_SUCCESS:
      return action.songs;
    default:
      return state;
  }
}
