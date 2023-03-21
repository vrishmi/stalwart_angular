import { TestBed } from '@angular/core/testing';

import { TaskpmService } from './taskpm.service';

describe('TaskpmService', () => {
  let service: TaskpmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskpmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
