import * as types from '../actions/actionTypes';
export default function SongReducer(state=[], action){
  switch(action.type){
    case types.LOAD_SONGS_SUCCESS:
      return action.songs;
    case types.CREATE_SONG_SUCCESS:
      return [
       ...state,
       Object.assign({}, action.song)
      ];
    case types.UPDATE_SONG_SUCCESS:
    return [
      ...state.filter(song => song.Id !== action.song.Id),
      Object.assign({}, action.song)
    ];
    case types.DELETE_SONG_SUCCESS:
    return [
      ...state.filter(song => song.Id !== action.song.Id)
    ];
    default:
      return state;
  }
}
