export default function SongReducer(state=[], action){
  switch(action.type){
    case 'CREATE_SONG':
      return [...state, Object.assign({}, action.song)];
    default:
      return state;
  }
}
