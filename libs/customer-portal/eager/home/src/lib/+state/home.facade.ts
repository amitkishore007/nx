import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { HomePartialState } from './home.reducer';
import { homeQuery } from './home.selectors';
import { LoadHome } from './home.actions';

@Injectable()
export class HomeFacade {
  loaded$ = this.store.pipe(select(homeQuery.getLoaded));
  allHome$ = this.store.pipe(select(homeQuery.getAllHome));
  selectedHome$ = this.store.pipe(select(homeQuery.getSelectedHome));

  constructor(private store: Store<HomePartialState>) {}

  loadAll() {
    this.store.dispatch(new LoadHome());
  }
}
