import { TestBed } from '@angular/core/testing';

import { AvatarsimpleService } from './avatarsimple.service';

describe('AvatarsimpleService', () => {
  let service: AvatarsimpleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvatarsimpleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
