import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';

import { createAction, REDUX_GET, ReduxGetPayload } from 'angular-redux-util';

import { AppState } from '../store';

@Injectable()
export class ExampleReduxActions {
  static INCREMENT_COUNTER = 'INCREMENT_COUNTER';

  static GET_DATA = 'GET_DATA';
  static GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';

  constructor (private ngRedux: NgRedux<AppState>) {}

  /**
   * Increment the counter variable in the store
   */
  incrementCounter(): void {
    this.ngRedux.dispatch(createAction(ExampleReduxActions.INCREMENT_COUNTER));
  }

  /**
   * Make an HTTP Get call, store the response in the store
   */
  getData(): void {
    const payload: ReduxGetPayload = {
      url: 'assets/data.json',
      successAction: ExampleReduxActions.GET_DATA_SUCCESS
    };

    this.ngRedux.dispatch(createAction(REDUX_GET, payload));
  }
}
