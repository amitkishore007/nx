import { async, TestBed } from '@angular/core/testing';
import { CustomerPortalUiKitModule } from './customer-portal-ui-kit.module';

describe('CustomerPortalUiKitModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CustomerPortalUiKitModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CustomerPortalUiKitModule).toBeDefined();
  });
});
