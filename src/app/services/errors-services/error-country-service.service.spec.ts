import { TestBed } from '@angular/core/testing';

import { ErrorCountryServiceService } from './error-country-service.service';

describe('ErrorCountryServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErrorCountryServiceService = TestBed.get(ErrorCountryServiceService);
    expect(service).toBeTruthy();
  });
});
