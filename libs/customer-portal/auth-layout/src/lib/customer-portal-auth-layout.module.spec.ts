import { async, TestBed } from '@angular/core/testing';
import { CustomerPortalAuthLayoutModule } from './customer-portal-auth-layout.module';

describe('CustomerPortalAuthLayoutModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CustomerPortalAuthLayoutModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CustomerPortalAuthLayoutModule).toBeDefined();
  });
});
