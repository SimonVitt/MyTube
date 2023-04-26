import { TestBed } from '@angular/core/testing';

import { BackendmainService } from './backendmain.service';

describe('BackendmainService', () => {
  let service: BackendmainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendmainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
