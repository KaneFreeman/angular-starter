import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { select } from '@angular-redux/store';

import { ExampleReduxActions } from '../actions';
import { EnvironmentService } from '../services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  environment: any;

  @select(['exampleRedux', 'data']) data: Observable<string>;
  @select(['exampleRedux', 'exampleCounter']) counter: Observable<number>;
  @select(['exampleRedux']) state: Observable<any>;

  constructor(
    private exampleReduxActions: ExampleReduxActions,
    private environmentService: EnvironmentService) { }

  ngOnInit() {
    this.environment = this.environmentService.getEnvironment();
  }

  increment() {
    this.exampleReduxActions.incrementCounter();
  }

  getData() {
    this.exampleReduxActions.getData();
  }
}
