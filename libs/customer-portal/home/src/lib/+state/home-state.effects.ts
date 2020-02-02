import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import { HomeStatePartialState } from './home-state.reducer';
import {
  LoadHomeState,
  HomeStateLoaded,
  HomeStateLoadError,
  HomeStateActionTypes
} from './home-state.actions';

@Injectable()
export class HomeStateEffects {
  @Effect() loadHomeState$ = this.dataPersistence.fetch(
    HomeStateActionTypes.LoadHomeState,
    {
      run: (action: LoadHomeState, state: HomeStatePartialState) => {
        // Your custom REST 'load' logic goes here. For now just return an empty list...
        return new HomeStateLoaded([]);
      },

      onError: (action: LoadHomeState, error) => {
        console.error('Error', error);
        return new HomeStateLoadError(error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<HomeStatePartialState>
  ) {}
}
