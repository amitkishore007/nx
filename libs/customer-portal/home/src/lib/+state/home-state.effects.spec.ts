import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { HomeStateEffects } from './home-state.effects';
import { LoadHomeState, HomeStateLoaded } from './home-state.actions';

describe('HomeStateEffects', () => {
  let actions: Observable<any>;
  let effects: HomeStateEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        HomeStateEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(HomeStateEffects);
  });

  describe('loadHomeState$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadHomeState() });
      expect(effects.loadHomeState$).toBeObservable(
        hot('-a-|', { a: new HomeStateLoaded([]) })
      );
    });
  });
});
