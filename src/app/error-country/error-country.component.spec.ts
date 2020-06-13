import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorCountryComponent } from './error-country.component';

describe('ErrorCountryComponent', () => {
  let component: ErrorCountryComponent;
  let fixture: ComponentFixture<ErrorCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
