import { async, TestBed } from '@angular/core/testing';
import { CustomerPortalHomeModule } from './customer-portal-home.module';

describe('CustomerPortalHomeModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CustomerPortalHomeModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CustomerPortalHomeModule).toBeDefined();
  });
});
