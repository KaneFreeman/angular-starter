import { combineReducers, AnyAction } from 'redux';

import { AppState, APP_INITIAL_STATE } from '../store';

import { exampleReduxReducer } from './example-redux.reducer';

const appReducer = combineReducers<AppState>({
  exampleRedux: exampleReduxReducer
});

export function rootReducer(state: AppState = APP_INITIAL_STATE, action: AnyAction) {
  return appReducer(state, action);
}
