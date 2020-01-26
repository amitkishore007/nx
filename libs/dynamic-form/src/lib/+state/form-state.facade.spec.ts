import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { FormStateEffects } from './form-state.effects';
import { FormStateFacade } from './form-state.facade';

import { formStateQuery } from './form-state.selectors';
import { LoadFormState, FormStateLoaded } from './form-state.actions';
import {
  FormStateState,
  Entity,
  initialState,
  reducer
} from './form-state.reducer';

interface TestSchema {
  formState: FormStateState;
}

describe('FormStateFacade', () => {
  let facade: FormStateFacade;
  let store: Store<TestSchema>;
  let createFormState;

  beforeEach(() => {
    createFormState = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature('formState', reducer, { initialState }),
          EffectsModule.forFeature([FormStateEffects])
        ],
        providers: [FormStateFacade]
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
      facade = TestBed.get(FormStateFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allFormState$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.loadAll();

        list = await readFirst(facade.allFormState$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `FormStateLoaded` to manually submit list for state management
     */
    it('allFormState$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allFormState$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          new FormStateLoaded([createFormState('AAA'), createFormState('BBB')])
        );

        list = await readFirst(facade.allFormState$);
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
