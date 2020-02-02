import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import { LoginStatePartialState } from './login-state.reducer';
import { loginStateQuery } from './login-state.selectors';

@Injectable()
export class LoginStateFacade {
  loaded$ = this.store.pipe(select(loginStateQuery.getLoaded));
  allLoginState$ = this.store.pipe(select(loginStateQuery.getAllLoginState));
  // selectedLoginState$ = this.store.pipe(
  //   select(loginStateQuery.getSelectedLoginState)
  // );

  constructor(private store: Store<LoginStatePartialState>) {}

  dispatch(action:Action) {
    return this.store.dispatch(action);
  }
}
