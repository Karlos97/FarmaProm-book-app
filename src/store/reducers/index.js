import { combineReducers } from 'redux';
import booksOptionsReducer from './booksOptionsReducer';
import notificationReducer from './errorReducer';

export default combineReducers({
  booksOptions: booksOptionsReducer,
  notification: notificationReducer,
});
