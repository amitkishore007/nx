import { async, TestBed } from '@angular/core/testing';
import { FormElementsSliderModule } from './form-elements-slider.module';

describe('FormElementsSliderModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormElementsSliderModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FormElementsSliderModule).toBeDefined();
  });
});
