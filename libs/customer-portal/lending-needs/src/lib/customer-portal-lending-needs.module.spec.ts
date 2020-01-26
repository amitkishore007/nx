import { async, TestBed } from '@angular/core/testing';
import { CustomerPortalLendingNeedsModule } from './customer-portal-lending-needs.module';

describe('CustomerPortalLendingNeedsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CustomerPortalLendingNeedsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CustomerPortalLendingNeedsModule).toBeDefined();
  });
});
