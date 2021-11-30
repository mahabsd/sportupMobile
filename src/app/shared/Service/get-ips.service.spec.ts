import { TestBed } from '@angular/core/testing';

import { GetIpsService } from './get-ips.service';

describe('GetIpsService', () => {
  let service: GetIpsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetIpsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
