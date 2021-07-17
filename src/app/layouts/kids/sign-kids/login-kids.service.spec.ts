import { TestBed } from '@angular/core/testing';

import { LoginKidsService } from './login-kids.service';

describe('LoginKidsService', () => {
  let service: LoginKidsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginKidsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
