import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { HomeStateEffects } from './home-state.effects';
import { HomeStateFacade } from './home-state.facade';

import { homeStateQuery } from './home-state.selectors';
import { LoadHomeState, HomeStateLoaded } from './home-state.actions';
import {
  HomeStateState,
  Entity,
  initialState,
  reducer
} from './home-state.reducer';

interface TestSchema {
  homeState: HomeStateState;
}

describe('HomeStateFacade', () => {
  let facade: HomeStateFacade;
  let store: Store<TestSchema>;
  let createHomeState;

  beforeEach(() => {
    createHomeState = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature('homeState', reducer, { initialState }),
          EffectsModule.forFeature([HomeStateEffects])
        ],
        providers: [HomeStateFacade]
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule
        ]
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(HomeStateFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allHomeState$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.loadAll();

        list = await readFirst(facade.allHomeState$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `HomeStateLoaded` to manually submit list for state management
     */
    it('allHomeState$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allHomeState$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          new HomeStateLoaded([createHomeState('AAA'), createHomeState('BBB')])
        );

        list = await readFirst(facade.allHomeState$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
