import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router, Event, NavigationStart, NavigationEnd } from '@angular/router';

import { EnvironmentService } from './services';

import { HomeComponent } from './components/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

// For AppDynamics Integration
declare var ADRUM: any;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  vpView: any;

  // Subscribe to the Router URL changes and report the metrics to AppDynamics.
  constructor(
    public router: Router,
    private environmentService: EnvironmentService) {

    const environment = this.environmentService.getEnvironment();

    if (environment && environment.app_dynamics && environment.app_dynamics.app_key) {
      this.router.events.subscribe((event: Event) => {
        if (event instanceof NavigationEnd) {
          if (this.vpView) {
            this.vpView.markViewChangeEnd();
            this.vpView.markViewDOMLoaded();
            this.vpView.markXhrRequestsCompleted();
            this.vpView.markViewResourcesLoaded();
            this.vpView.end();

            ADRUM.report(this.vpView);
          }
        } else if (event instanceof NavigationStart) {
          this.vpView = new ADRUM.events.VPageView();
          this.vpView.start();
          this.vpView.markViewChangeStart();
        }
      });
    }
  }
}
