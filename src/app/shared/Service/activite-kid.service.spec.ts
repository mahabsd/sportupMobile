import { TestBed } from '@angular/core/testing';

import { ActiviteKidService } from './activite-kid.service';

describe('ActiviteKidService', () => {
  let service: ActiviteKidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiviteKidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
