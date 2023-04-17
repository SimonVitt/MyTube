import { TestBed } from '@angular/core/testing';

import { BackendcommunicationService } from './backendcommunication.service';

describe('BackendcommunicationService', () => {
  let service: BackendcommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendcommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
