import { Component, OnInit } from '@angular/core';
import { ChartsActions } from '../../actions';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  constructor(private ChartsActions: ChartsActions) { }

  ngOnInit() {
  	this.ChartsActions.getTrendingTracks();
  }

}
