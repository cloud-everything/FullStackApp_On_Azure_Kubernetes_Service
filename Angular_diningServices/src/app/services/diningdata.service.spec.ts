import { TestBed } from '@angular/core/testing';

import { DiningdataService } from './diningdata.service';

describe('DiningdataService', () => {
  let service: DiningdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiningdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
