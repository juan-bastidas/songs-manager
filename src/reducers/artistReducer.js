import * as types from '../actions/actionTypes';

/*
Deberia definir un default state asi se sabe la estructura de lo que va a contener
*/

export default function ArtistReducer(state=[], action){
  switch(action.type){
    case types.LOAD_ARTISTS_SUCCESS:
      return action.artists;
      case types.CREATE_ARTIST_SUCCESS:
      /*
      El assign sobra, puede hacer simplemente esto:
      
            return {
                ...state,
                artist: action.artist,
            };
      */
        return [
         ...state,
         Object.assign({}, action.artist)
        ];
      case types.UPDATE_ARTIST_SUCCESS:
      return [
        ...state.filter(artist => artist.Id !== action.artist.Id),
        Object.assign({}, action.artist)
      ];
      case types.DELETE_ARTIST_SUCCESS:
      /*
      Aqui esta mutando el estado sino estoy mal, deberia hacer una copia, pero normalmente un eliminar no se hace asi.
      Basicamente pueden haber mas usuarios eliminando y lo que debe hacer es un llamado a otra accion en el success para
      traer nuevamente los artistas del API.
      */
      return [
        ...state.filter(artist => artist.Id !== action.artist.Id)
      ];
      default:
        return state;
    }

}
