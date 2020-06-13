import { TestBed } from '@angular/core/testing';

import { CountriesServicesService } from './countries-services.service';

describe('CountriesServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountriesServicesService = TestBed.get(CountriesServicesService);
    expect(service).toBeTruthy();
  });
});
