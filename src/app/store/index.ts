export * from './app.state';

export * from './example-redux.state';

import { environment } from '../../environments/environment';

import { createLogger } from 'redux-logger';

export let middleware = [];
export let enhancers = [];

if (!environment.production && !(window['environment'] !== undefined && window['environment'].production)) {
  middleware.push(
    createLogger({
      level: 'info',
      collapsed: true
    })
  );
}
