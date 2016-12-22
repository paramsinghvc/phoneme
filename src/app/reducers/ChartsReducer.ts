import { Reducer, Action, AppState } from '../models';
import {Map, List, fromJS} from 'immutable';

import { ChartTrack } from '../models/ChartTrack';
import { ChartsConstants } from '../constants';
const initAppState: AppState<string, any> = fromJS({
	tracks : []
})

const ChartsReducer: Reducer<Map<string, any>> = (state: Map<string, any> = initAppState, action: Action): any => {
	switch (action.type) {
		case ChartsConstants.SET_TRACKS:
			return state.merge({
				tracks : List<ChartTrack>(action.payload)
			})
		default: return state;
	}
}

export default ChartsReducer;