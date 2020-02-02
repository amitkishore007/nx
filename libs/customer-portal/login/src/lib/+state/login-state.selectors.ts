import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LOGINSTATE_FEATURE_KEY, LoginState } from './login-state.reducer';

// Lookup the 'LoginState' feature state managed by NgRx
const getLoginState = createFeatureSelector<LoginState>(
  LOGINSTATE_FEATURE_KEY
);

const getLoaded = createSelector(
  getLoginState,
  (state: LoginState) => state.loaded
);
const getError = createSelector(
  getLoginState,
  (state: LoginState) => state.error
);

const getAllLoginState = createSelector(
  getLoginState,
  getLoaded,
  (state: LoginState, isLoaded) => {
    return isLoaded ? state : null;
  }
);
// const getSelectedId = createSelector(
//   getLoginState,
//   (state: LoginState) => state.selectedId
// );
// const getSelectedLoginState = createSelector(
//   getAllLoginState,
//   getSelectedId,
//   (loginState, id) => {
//     const result = loginState.find(it => it['id'] === id);
//     return result ? Object.assign({}, result) : undefined;
//   }
// );

export const loginStateQuery = {
  getLoaded,
  getError,
  getAllLoginState
};
