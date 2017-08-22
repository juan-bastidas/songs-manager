import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/index';
import reduxImmutbleStateInvariant from 'redux-immutable-state-invariant';


export default function cofigureStore(initialState){
  return createStore(
      rootReducer,
      initialState,
      applyMiddleware(reduxImmutbleStateInvariant())
    )
}
