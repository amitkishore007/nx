import { async, TestBed } from '@angular/core/testing';
import { CustomerPortalDashboardModule } from './customer-portal-dashboard.module';

describe('CustomerPortalDashboardModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CustomerPortalDashboardModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CustomerPortalDashboardModule).toBeDefined();
  });
});
