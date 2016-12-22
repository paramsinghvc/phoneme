import { Component, OnInit, Input, Output } from '@angular/core';
import { ChartTrack } from '../../models';

@Component({
	selector: 'app-track',
	templateUrl: './track.component.html',
	styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {
	@Input() track: ChartTrack;
	constructor() { }

	ngOnInit() {
	}

}
