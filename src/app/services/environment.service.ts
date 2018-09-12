import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

@Injectable()
export class EnvironmentService {
  getEnvironment(): any {
    if (window['environment'] !== undefined) {
      return window['environment'];
    }

    return environment;
  }
}
