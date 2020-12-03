import { InjectionToken } from '@angular/core';
import {createStore,Store,compose,StoreEnhancer} from 'redux';

import { AppState } from './app.state';
import {CounterReducer as reducer} from './counter.reducer';

const devtools: StoreEnhancer<AppState> =
  window['devToolsExtension'] ?
  window['devToolsExtension']() : f => f;

let store: Store<AppState> = createStore<AppState>(reducer);

export function createAppStore(): Store<AppState> {
  return createStore<AppState>(
    reducer,
    compose(devtools)
  );
}

export const AppStore = new InjectionToken('App.store');

export const appStoreProviders = [
   { provide: AppStore, useFactory: createAppStore }
];