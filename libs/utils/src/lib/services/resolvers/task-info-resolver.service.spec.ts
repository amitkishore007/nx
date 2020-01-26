import { TestBed } from '@angular/core/testing';

import { TaskInfoResolverService } from './task-info-resolver.service';

describe('TaskInfoResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskInfoResolverService = TestBed.get(TaskInfoResolverService);
    expect(service).toBeTruthy();
  });
});
