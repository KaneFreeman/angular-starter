import { ExampleReduxState, EXAMPLE_REDUX_INITIAL_STATE } from './example-redux.state';

export const APP_INITIAL_STATE: AppState = {
  exampleRedux: EXAMPLE_REDUX_INITIAL_STATE
};

export class AppState {
  exampleRedux: ExampleReduxState;
}
