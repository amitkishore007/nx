import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { ErrorStatePartialState } from './error-state.reducer';
import { errorStateQuery } from './error-state.selectors';
import { LoadErrorState } from './error-state.actions';

@Injectable()
export class ErrorStateFacade {
  loaded$ = this.store.pipe(select(errorStateQuery.getLoaded));
  allErrorState$ = this.store.pipe(select(errorStateQuery.getAllErrorState));
  selectedErrorState$ = this.store.pipe(
    select(errorStateQuery.getSelectedErrorState)
  );

  constructor(private store: Store<ErrorStatePartialState>) {}

  loadAll() {
    this.store.dispatch(new LoadErrorState());
  }
}
