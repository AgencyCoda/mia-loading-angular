import { TestBed } from '@angular/core/testing';

import { MiaLoadingService } from './mia-loading.service';

describe('MiaLoadingService', () => {
  let service: MiaLoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiaLoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
