import { Component } from '@angular/core';

import { NgRedux, DevToolsExtension } from '@angular-redux/store';
import { createEpicMiddleware } from 'redux-observable';
import { generateEpics } from 'redux-observable-util';
import { ReduxHttpService } from 'angular-redux-util';

import { rootReducer } from './reducers';
import { AppState, APP_INITIAL_STATE, middleware, enhancers } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';

  constructor(
    private ngRedux: NgRedux<AppState>,
    private devTool: DevToolsExtension,
    reduxHttpService: ReduxHttpService) {

    const epicMiddleware = createEpicMiddleware();

    // Configure NgRedux
    this.ngRedux.configureStore(
      rootReducer,
      APP_INITIAL_STATE,
      [
        ...middleware,
        epicMiddleware
      ],
      [ ...enhancers, devTool.isEnabled() ? devTool.enhancer() : f => f]);

    epicMiddleware.run(
      generateEpics(reduxHttpService)
    );
  }
}
