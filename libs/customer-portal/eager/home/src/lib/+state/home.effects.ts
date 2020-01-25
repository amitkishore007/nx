import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import { HomePartialState } from './home.reducer';
import {
  LoadHome,
  HomeLoaded,
  HomeLoadError,
  HomeActionTypes
} from './home.actions';

@Injectable()
export class HomeEffects {
  @Effect() loadHome$ = this.dataPersistence.fetch(HomeActionTypes.LoadHome, {
    run: (action: LoadHome, state: HomePartialState) => {
      // Your custom REST 'load' logic goes here. For now just return an empty list...
      return new HomeLoaded([]);
    },

    onError: (action: LoadHome, error) => {
      console.error('Error', error);
      return new HomeLoadError(error);
    }
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<HomePartialState>
  ) {}
}
