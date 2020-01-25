import { async, TestBed } from '@angular/core/testing';
import { FormElementsFileModule } from './form-elements-file.module';

describe('FormElementsFileModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormElementsFileModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FormElementsFileModule).toBeDefined();
  });
});
