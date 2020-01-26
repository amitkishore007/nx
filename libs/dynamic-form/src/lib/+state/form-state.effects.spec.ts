import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { FormStateEffects } from './form-state.effects';
import { LoadFormState, FormStateLoaded } from './form-state.actions';

describe('FormStateEffects', () => {
  let actions: Observable<any>;
  let effects: FormStateEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        FormStateEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(FormStateEffects);
  });

  describe('loadFormState$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadFormState() });
      expect(effects.loadFormState$).toBeObservable(
        hot('-a-|', { a: new FormStateLoaded([]) })
      );
    });
  });
});
