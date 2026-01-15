import { TestBed } from '@angular/core/testing';

import { ShowFlightService } from './show-flight.service';

describe('ShowFlightService', () => {
  let service: ShowFlightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowFlightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
