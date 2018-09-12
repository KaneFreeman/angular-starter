import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/**
 * Angular Material Modules
 */
import { MatButtonModule, MatCardModule, MatIconModule } from '@angular/material';

/**
 * Redux Modules
 */
import { NgReduxModule } from '@angular-redux/store';
import { ReduxHttpModule } from 'angular-redux-util';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { APP_ACTIONS } from './actions';
import { APP_COMPONENTS, APP_ENTRY_COMPONENTS } from './components';
import { APP_DIRECTIVES } from './directives';
import { APP_GUARDS } from './guards';
import { APP_PIPES } from './pipes';
import { APP_SERVICES } from './services';

@NgModule({
  declarations: [
    // Root Component
    AppComponent,
    // Containers
    APP_COMPONENTS,
    // Components
    APP_COMPONENTS,
    // Pipes
    APP_PIPES,
    // Directives
    APP_DIRECTIVES
  ],
  imports: [
    // Angular Modules
    BrowserModule,
    // Routing Modules
    AppRoutingModule,
    // Angular Material Modules
    MatButtonModule, MatCardModule, MatIconModule,
    // Redux Modules
    NgReduxModule,
    ReduxHttpModule
  ],
  providers: [
    // Redux Actions
    APP_ACTIONS,
    // Guards
    APP_GUARDS,
    // Services
    APP_SERVICES
  ],
  entryComponents: [ APP_ENTRY_COMPONENTS ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
