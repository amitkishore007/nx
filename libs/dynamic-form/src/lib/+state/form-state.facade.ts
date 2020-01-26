import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { FormStatePartialState } from './form-state.reducer';
import { formStateQuery } from './form-state.selectors';
import { LoadFormState } from './form-state.actions';

@Injectable()
export class FormStateFacade {
  loaded$ = this.store.pipe(select(formStateQuery.getLoaded));
  allFormState$ = this.store.pipe(select(formStateQuery.getAllFormState));
  selectedFormState$ = this.store.pipe(
    select(formStateQuery.getSelectedFormState)
  );

  constructor(private store: Store<FormStatePartialState>) {}

  loadAll() {
    this.store.dispatch(new LoadFormState());
  }
}
