import { async, TestBed } from '@angular/core/testing';
import { FormElementsCheckboxModule } from './form-elements-checkbox.module';

describe('FormElementsCheckboxModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormElementsCheckboxModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FormElementsCheckboxModule).toBeDefined();
  });
});
