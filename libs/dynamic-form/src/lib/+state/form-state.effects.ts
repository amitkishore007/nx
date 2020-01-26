import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import { FormStatePartialState } from './form-state.reducer';
import {
  LoadFormState,
  FormStateLoaded,
  FormStateLoadError,
  FormStateActionTypes
} from './form-state.actions';

@Injectable()
export class FormStateEffects {
  @Effect() loadFormState$ = this.dataPersistence.fetch(
    FormStateActionTypes.LoadFormState,
    {
      run: (action: LoadFormState, state: FormStatePartialState) => {
        // Your custom REST 'load' logic goes here. For now just return an empty list...
        return new FormStateLoaded([]);
      },

      onError: (action: LoadFormState, error) => {
        console.error('Error', error);
        return new FormStateLoadError(error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<FormStatePartialState>
  ) {}
}
