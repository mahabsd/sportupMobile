/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ActivityhistoryService } from './activityhistory.service';

describe('Service: Activityhistory', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActivityhistoryService]
    });
  });

  it('should ...', inject([ActivityhistoryService], (service: ActivityhistoryService) => {
    expect(service).toBeTruthy();
  }));
});
