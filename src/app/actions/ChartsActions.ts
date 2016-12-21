import { Injectable , Inject} from '@angular/core';
import { NgRedux } from 'ng2-redux';

import { Action } from '../models';
import { AppConstants } from '../constants';
import ApiBridge from '../shared/ApiBridge';
import { AppActions } from './AppActions';

@Injectable()
export class ChartsActions {
	constructor(private redux: NgRedux<any>, private ApiBridge: ApiBridge, private appActions: AppActions) {
	}

	getTrendingTracks() {
		console.log(this.appActions);
		this.appActions.setLoader();
		this.ApiBridge.fetchTrendingCharts().subscribe(res => {
			console.log(res);
		}, err => {

		}, () => {
			this.appActions.unsetLoader();
		})
	}
}
