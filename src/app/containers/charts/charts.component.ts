import { Component, OnInit } from '@angular/core';
import { ChartsActions } from '../../actions';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs/Rx';
import { List } from 'immutable';
import { ChartTrack } from '../../models';

@Component({
	selector: 'app-charts',
	templateUrl: './charts.component.html',
	styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

	@select(state => state.charts) charts: Observable<any>;
	constructor(private ChartsActions: ChartsActions) { }

	ngOnInit() {
		this.ChartsActions.getTrendingTracks();
	}

}
