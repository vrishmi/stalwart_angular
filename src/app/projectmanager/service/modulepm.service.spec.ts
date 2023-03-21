import { TestBed } from '@angular/core/testing';

import { ModulepmService } from './modulepm.service';

describe('ModulepmService', () => {
  let service: ModulepmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModulepmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
