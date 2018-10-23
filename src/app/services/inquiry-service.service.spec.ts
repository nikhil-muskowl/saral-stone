import { TestBed } from '@angular/core/testing';

import { InquiryServiceService } from './inquiry-service.service';

describe('InquiryServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InquiryServiceService = TestBed.get(InquiryServiceService);
    expect(service).toBeTruthy();
  });
});
