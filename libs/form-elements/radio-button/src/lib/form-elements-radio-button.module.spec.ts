import { async, TestBed } from '@angular/core/testing';
import { FormElementsRadioButtonModule } from './form-elements-radio-button.module';

describe('FormElementsRadioButtonModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormElementsRadioButtonModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FormElementsRadioButtonModule).toBeDefined();
  });
});
