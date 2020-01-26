import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import { ErrorStatePartialState } from './error-state.reducer';
import {
  LoadErrorState,
  ErrorStateLoaded,
  ErrorStateLoadError,
  ErrorStateActionTypes
} from './error-state.actions';

@Injectable()
export class ErrorStateEffects {
  @Effect() loadErrorState$ = this.dataPersistence.fetch(
    ErrorStateActionTypes.LoadErrorState,
    {
      run: (action: LoadErrorState, state: ErrorStatePartialState) => {
        // Your custom REST 'load' logic goes here. For now just return an empty list...
        return new ErrorStateLoaded([]);
      },

      onError: (action: LoadErrorState, error) => {
        console.error('Error', error);
        return new ErrorStateLoadError(error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<ErrorStatePartialState>
  ) {}
}
