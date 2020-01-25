import { async, TestBed } from '@angular/core/testing';
import { FormElementsInputModule } from './form-elements-input.module';

describe('FormElementsInputModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormElementsInputModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FormElementsInputModule).toBeDefined();
  });
});
