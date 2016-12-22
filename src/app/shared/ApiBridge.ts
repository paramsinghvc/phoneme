import Config from './config';
import { Injectable } from '@angular/core';
import { Http, Jsonp, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ChartTrack } from '../models/ChartTrack';

@Injectable()
export default class ApiBridge {
	constructor(private http: Http, private jsonp: Jsonp) { }

	constructUri(segment, params = []) {
		params.push(`apikey=${Config.get('API_KEY')}`);
		params.push(`callback=JSONP_CALLBACK`);
		params.push(`format=jsonp`);

		var prefixUrl = Config.get('PREFIX_URI');
		var p = params ? `?${params.join('&')}` : ``;
		return `${prefixUrl}${segment}${p}`;
	}

	prepareCall(method = 'get', url, params) {
		var x = this.constructUri(url, params);
		return this.jsonp[method].call(this.jsonp, x)
	}

	fetchTrendingCharts(): Observable<any> {
		return this.prepareCall('get', 'chart.tracks.get', [`page=1`, `page_size=5`, `f_has_lyrics=1`])
			.map((res: Response) => {
				return (<any>res.json()).message.body.track_list.map(track => {
					console.log(track);
					return new ChartTrack(track.track);
				})
			})
	}
}
