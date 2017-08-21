import {combineReducer} from 'react';
import songs from './courseReducer';

const rootReducer = combineReducer({
  songs
});
export default rootReducer;
