import {combineReducers} from 'redux';
import songs from './songReducer';

const rootReducer = combineReducers({
  songs
});
export default rootReducer;
