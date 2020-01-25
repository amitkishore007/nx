import { async, TestBed } from '@angular/core/testing';
import { CustomerPortalLazyBusinessDetailsModule } from './customer-portal-lazy-business-details.module';

describe('CustomerPortalLazyBusinessDetailsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CustomerPortalLazyBusinessDetailsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CustomerPortalLazyBusinessDetailsModule).toBeDefined();
  });
});
