import { TestBed } from '@angular/core/testing';

import { JatheesService } from './jathees.service';

describe('JatheesService', () => {
  let service: JatheesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JatheesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
