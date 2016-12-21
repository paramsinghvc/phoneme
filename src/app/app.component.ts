import { Component } from '@angular/core';
import { select } from 'ng2-redux';
import { AppState } from './models';
import { Observable } from 'rxjs/Rx';

import { Map } from 'immutable';
import { AppActions } from './actions';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app works!';
	// @select('isLoading') charts$: Observable<Map<string, any>>;
	// @select() charts: Observable<Map<string, any>>;
	// @select(['charts', 'isLoading']) isLoading;
	@select(state => state.charts.toJS()) charts: Observable<AppState<string,any>>;
	constructor(private appActions: AppActions) {
	
	}
	ngOnInit() {
		// this.appActions.getTrendingTracks();
	}
}
