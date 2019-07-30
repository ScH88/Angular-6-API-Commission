import { TestBed } from '@angular/core/testing';

import { ApiRetrievalService } from './api-retrieval.service';

describe('ApiRetrievalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiRetrievalService = TestBed.get(ApiRetrievalService);
    expect(service).toBeTruthy();
  });
});
