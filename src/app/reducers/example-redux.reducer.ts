import { assign } from 'redux-observable-util';
import { ReduxHttpSuccessAction } from 'angular-redux-util';

import { ExampleReduxActions } from '../actions';
import { ExampleReduxState, EXAMPLE_REDUX_INITIAL_STATE } from '../store';

export function exampleReduxReducer(state: ExampleReduxState = EXAMPLE_REDUX_INITIAL_STATE, action: ReduxHttpSuccessAction) {
  switch (action.type) {
    case ExampleReduxActions.INCREMENT_COUNTER:
      return assign(state, { exampleCounter: state.exampleCounter + 1 });

    case ExampleReduxActions.GET_DATA_SUCCESS:
      return assign(state, { data: action.response });

    default:
      return state;
  }
}
