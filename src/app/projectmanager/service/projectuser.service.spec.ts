import { TestBed } from '@angular/core/testing';

import { ProjectuserService } from './projectuser.service';

describe('ProjectuserService', () => {
  let service: ProjectuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
