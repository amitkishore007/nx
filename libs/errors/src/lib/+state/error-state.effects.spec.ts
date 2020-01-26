import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { ErrorStateEffects } from './error-state.effects';
import { LoadErrorState, ErrorStateLoaded } from './error-state.actions';

describe('ErrorStateEffects', () => {
  let actions: Observable<any>;
  let effects: ErrorStateEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        ErrorStateEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(ErrorStateEffects);
  });

  describe('loadErrorState$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadErrorState() });
      expect(effects.loadErrorState$).toBeObservable(
        hot('-a-|', { a: new ErrorStateLoaded([]) })
      );
    });
  });
});
