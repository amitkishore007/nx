import { async, TestBed } from '@angular/core/testing';
import { CustomerPortalLazyLendingNeedsModule } from './customer-portal-lazy-lending-needs.module';

describe('CustomerPortalLazyLendingNeedsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CustomerPortalLazyLendingNeedsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CustomerPortalLazyLendingNeedsModule).toBeDefined();
  });
});
