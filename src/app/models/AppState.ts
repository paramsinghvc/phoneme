import { Map } from 'immutable';

interface Toast {
	show : boolean;
	msg: string;
}

interface Search {
	text: string;
	result: Array<any>;
}

export interface AppState<K,V> extends Map<K,V> {
	isLoading: boolean;
	// charts: Array<any>;
	toast: Toast;
	// search: Search;
}