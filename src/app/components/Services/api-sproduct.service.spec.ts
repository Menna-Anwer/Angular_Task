import { TestBed } from '@angular/core/testing';

import { ApiSProductService } from './api-sproduct.service';

describe('ApiSProductService', () => {
  let service: ApiSProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiSProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
