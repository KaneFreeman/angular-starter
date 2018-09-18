import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgReduxModule } from '@angular-redux/store';
import { MatButtonModule, MatCardModule, MatIconModule } from '@angular/material';

import { HomeComponent } from './home.component';

import { ExampleReduxActions } from '../actions';
import { EnvironmentService } from '../services';

describe('HomeComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgReduxModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
      ],
      declarations: [
        HomeComponent
      ],
      providers: [
        EnvironmentService,
        ExampleReduxActions
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Angular Starter');
  }));
});
