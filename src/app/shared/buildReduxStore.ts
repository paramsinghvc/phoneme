import { applyMiddleware, Store, combineReducers, compose, createStore } from 'redux';

import { environment } from '../../environments/environment';
import rootReducer from '../reducers';

const applyReduxDevTools = !environment.production && window.devToolsExtension;
const composeArgs = [
    applyMiddleware()
];

applyReduxDevTools ? composeArgs.push(window.devToolsExtension()) : function noop(){};

const enhancer = compose.apply(compose, composeArgs);

export const store: Store<any> = createStore(rootReducer, {}, enhancer);