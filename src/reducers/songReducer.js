import * as types from '../actions/actionTypes';
export default function SongReducer(state=[], action){
  switch(action.type){
    case types.LOAD_SONGS_SUCCESS:
      return action.songs;
    case types.CREATE_SONG_SUCCESS:
      return [
       ...state,
       Object.assign({}, action.song, {id: state.length+1})
      ];
    case types.UPDATE_SONG_SUCCESS:
    return [
      ...state.filter(song => song.id !== action.song.id),
      Object.assign({}, action.song)
    ];
    case types.DELETE_SONG:
    debugger
    return [
      ...state.filter(song => song.id !== action.song.id)
    ];
    default:
      return state;
  }
}
