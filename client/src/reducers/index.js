import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'; // imports and renames
import authReducer from './authReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer
});
