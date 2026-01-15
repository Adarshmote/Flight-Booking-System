import { TestBed } from '@angular/core/testing';

import { FlyInfoService } from './fly-info.service';

describe('FlyInfoService', () => {
  let service: FlyInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlyInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
