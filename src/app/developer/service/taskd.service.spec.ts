import { TestBed } from '@angular/core/testing';

import { TaskdService } from './taskd.service';

describe('TaskdService', () => {
  let service: TaskdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
