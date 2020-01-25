import { async, TestBed } from '@angular/core/testing';
import { FormElementsTextareaModule } from './form-elements-textarea.module';

describe('FormElementsTextareaModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormElementsTextareaModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FormElementsTextareaModule).toBeDefined();
  });
});
