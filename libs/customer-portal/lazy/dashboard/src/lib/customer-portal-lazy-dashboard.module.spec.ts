import { async, TestBed } from '@angular/core/testing';
import { CustomerPortalLazyDashboardModule } from './customer-portal-lazy-dashboard.module';

describe('CustomerPortalLazyDashboardModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CustomerPortalLazyDashboardModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CustomerPortalLazyDashboardModule).toBeDefined();
  });
});
