import { TestBed } from '@angular/core/testing';

import { OpenNgBackdropService } from './backdrop.service';

describe('OpenNgBackdropService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpenNgBackdropService = TestBed.get(OpenNgBackdropService);
    expect(service).toBeTruthy();
  });
});
