import { async, TestBed } from '@angular/core/testing';
import { CustomerPortalSiteLayoutModule } from './customer-portal-site-layout.module';

describe('CustomerPortalSiteLayoutModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CustomerPortalSiteLayoutModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CustomerPortalSiteLayoutModule).toBeDefined();
  });
});
