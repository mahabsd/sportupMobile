/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DeactivationService } from './deactivation.service';

describe('Service: Deactivation', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeactivationService]
    });
  });

  it('should ...', inject([DeactivationService], (service: DeactivationService) => {
    expect(service).toBeTruthy();
  }));
});
