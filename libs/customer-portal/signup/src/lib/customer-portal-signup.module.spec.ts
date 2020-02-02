import { async, TestBed } from '@angular/core/testing';
import { CustomerPortalSignupModule } from './customer-portal-signup.module';

describe('CustomerPortalSignupModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CustomerPortalSignupModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CustomerPortalSignupModule).toBeDefined();
  });
});
