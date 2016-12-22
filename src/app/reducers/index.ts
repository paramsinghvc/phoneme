import { combineReducers } from 'redux';
import charts from './ChartsReducer';
import app from './AppReducer';

export default combineReducers ({
	charts,
	app
})