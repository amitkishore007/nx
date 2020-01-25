import { async, TestBed } from '@angular/core/testing';
import { CustomerPortalEagerHomeModule } from './customer-portal-eager-home.module';

describe('CustomerPortalEagerHomeModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CustomerPortalEagerHomeModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CustomerPortalEagerHomeModule).toBeDefined();
  });
});
