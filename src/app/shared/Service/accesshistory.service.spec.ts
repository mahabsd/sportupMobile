/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AccesshistoryService } from './accesshistory.service';

describe('Service: Accesshistory', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccesshistoryService]
    });
  });

  it('should ...', inject([AccesshistoryService], (service: AccesshistoryService) => {
    expect(service).toBeTruthy();
  }));
});
