import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';

import { Action } from '../models';
import { AppConstants } from '../constants';

export interface IActionCreator {
	(...any): Action;
}

export { AppActions } from './AppActions';
export { ChartsActions } from './ChartsActions';

