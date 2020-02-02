import { async, TestBed } from '@angular/core/testing';
import { CustomerPortalLoginModule } from './customer-portal-login.module';

describe('CustomerPortalLoginModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CustomerPortalLoginModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CustomerPortalLoginModule).toBeDefined();
  });
});
