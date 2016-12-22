import { Injectable , Inject} from '@angular/core';
import { NgRedux } from 'ng2-redux';

import { Action, ChartTrack } from '../models';
import { ChartsConstants } from '../constants';
import ApiBridge from '../shared/ApiBridge';
import { AppActions } from './AppActions';

@Injectable()
export class ChartsActions {
	constructor(private redux: NgRedux<any>, private ApiBridge: ApiBridge, private appActions: AppActions) {
	}

	setTracks(tracks: ChartTrack[]){
		this.redux.dispatch({
			type : ChartsConstants.SET_TRACKS,
			payload: tracks
		})
	}

	getTrendingTracks() {
		this.appActions.setLoader();
		this.ApiBridge.fetchTrendingCharts().subscribe((res: Array<ChartTrack>) => {
			console.log(res);
			this.setTracks(res);
		}, err => {

		}, () => {
			this.appActions.unsetLoader();
		})
	}
}
