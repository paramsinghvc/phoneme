export interface Action {
	type: string;
	payload ?: any;
}

export interface Reducer<T> {
	(state: T, action: Action): T;
}

export { AppState } from './AppState';
export { ChartTrack } from './ChartTrack';
export { Track } from './Track';