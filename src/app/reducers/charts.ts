import { Reducer, Action, AppState } from '../models';
import * as Immutable from 'immutable';

import { AppConstants } from '../constants';
const initAppState: AppState<string, any> = Immutable.fromJS({
	isLoading: false,
	test: 'Atif',
	charts: [],
	toast: {
		show: false,
		msg: ''
	},
	search: {
		text: '',
		result: []
	}
})

const ChartsReducer: Reducer<AppState<string, any>> = (state: AppState<string, any> = initAppState, action: Action): any => {
	switch (action.type) {
		case AppConstants.SET_LOADER:
			return state.merge({
				isLoading: true
			})
		case AppConstants.SET_LOADER:
			return state.merge({
				isLoading: false
			})
		default: return state;
	}
}

export default ChartsReducer;