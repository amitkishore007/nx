import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { HomeStatePartialState } from './home-state.reducer';
import { homeStateQuery } from './home-state.selectors';
import { LoadHomeState } from './home-state.actions';

@Injectable()
export class HomeStateFacade {
  loaded$ = this.store.pipe(select(homeStateQuery.getLoaded));
  allHomeState$ = this.store.pipe(select(homeStateQuery.getAllHomeState));
  selectedHomeState$ = this.store.pipe(
    select(homeStateQuery.getSelectedHomeState)
  );

  constructor(private store: Store<HomeStatePartialState>) {}

  loadAll() {
    this.store.dispatch(new LoadHomeState());
  }
}
