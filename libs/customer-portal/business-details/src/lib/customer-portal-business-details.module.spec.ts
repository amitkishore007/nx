import { async, TestBed } from '@angular/core/testing';
import { CustomerPortalBusinessDetailsModule } from './customer-portal-business-details.module';

describe('CustomerPortalBusinessDetailsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CustomerPortalBusinessDetailsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CustomerPortalBusinessDetailsModule).toBeDefined();
  });
});
