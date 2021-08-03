import { TestBed } from '@angular/core/testing';

import { PostKidsService } from './postKids.service';

describe('PostService', () => {
  let service: PostKidsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostKidsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
