import { combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core';
import { routerReducer } from '@ngrx/router-store';

import { localStorageSync } from 'ngrx-store-localstorage';
import { storeFreeze } from 'ngrx-store-freeze';

import { TodoReducer } from '../todo';

const metaReducers: any = [
	localStorageSync(['todoState'], true),
	storeFreeze,
	combineReducers
];

export const AppStore: any = compose(...metaReducers)({
	todoState: TodoReducer,
	router: routerReducer
});
