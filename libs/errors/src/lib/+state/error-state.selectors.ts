import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ERRORSTATE_FEATURE_KEY, ErrorStateState } from './error-state.reducer';

// Lookup the 'ErrorState' feature state managed by NgRx
const getErrorStateState = createFeatureSelector<ErrorStateState>(
  ERRORSTATE_FEATURE_KEY
);

const getLoaded = createSelector(
  getErrorStateState,
  (state: ErrorStateState) => state.loaded
);
const getError = createSelector(
  getErrorStateState,
  (state: ErrorStateState) => state.error
);

const getAllErrorState = createSelector(
  getErrorStateState,
  getLoaded,
  (state: ErrorStateState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getErrorStateState,
  (state: ErrorStateState) => state.selectedId
);
const getSelectedErrorState = createSelector(
  getAllErrorState,
  getSelectedId,
  (errorState, id) => {
    const result = errorState.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const errorStateQuery = {
  getLoaded,
  getError,
  getAllErrorState,
  getSelectedErrorState
};
