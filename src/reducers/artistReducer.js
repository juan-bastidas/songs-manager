import * as types from '../actions/actionTypes';
export default function ArtistReducer(state=[], action){
  switch(action.type){
    case types.LOAD_ARTISTS_SUCCESS:
      return action.artists;
      case types.CREATE_ARTIST_SUCCESS:
        return [
         ...state,
         Object.assign({}, action.artist, {id: state.length+1})
        ];
      case types.UPDATE_ARTIST_SUCCESS:
      return [
        ...state.filter(artist => artist.id !== action.artist.id),
        Object.assign({}, action.artist)
      ];
      case types.DELETE_ARTIST:
      debugger
      return [
        ...state.filter(artist => artist.id !== action.artist.id)
      ];
      default:
        return state;
    }

}
