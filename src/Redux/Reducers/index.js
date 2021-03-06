import user from './user';
import {combineReducers} from 'redux';

export const appReducer = combineReducers({
  user,
});

export default function rootReducer(state, action) {
  return appReducer(state, action);
}
