import { reducer as formReducer } from 'redux-form'; //we rename it so i wont be confused
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import streamReducer from './streamReducer';

export default combineReducers({
	auth: authReducer,
	form: formReducer,
	streams: streamReducer
});
