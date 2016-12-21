import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';

import { Action } from '../models';
import { AppConstants } from '../constants';
import ApiBridge from '../shared/ApiBridge';

@Injectable()
export class AppActions {
	constructor(private redux: NgRedux<any>, private ApiBridge: ApiBridge) { }

	setLoader() {
		this.redux.dispatch({
			type: AppConstants.SET_LOADER
		});
	}

	unsetLoader() {
		this.redux.dispatch({
			type: AppConstants.UNSET_LOADER
		})
	}
}