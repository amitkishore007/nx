import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FORMSTATE_FEATURE_KEY, FormStateState } from './form-state.reducer';

// Lookup the 'FormState' feature state managed by NgRx
const getFormStateState = createFeatureSelector<FormStateState>(
  FORMSTATE_FEATURE_KEY
);

const getLoaded = createSelector(
  getFormStateState,
  (state: FormStateState) => state.loaded
);
const getError = createSelector(
  getFormStateState,
  (state: FormStateState) => state.error
);

const getAllFormState = createSelector(
  getFormStateState,
  getLoaded,
  (state: FormStateState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getFormStateState,
  (state: FormStateState) => state.selectedId
);
const getSelectedFormState = createSelector(
  getAllFormState,
  getSelectedId,
  (formState, id) => {
    const result = formState.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const formStateQuery = {
  getLoaded,
  getError,
  getAllFormState,
  getSelectedFormState
};
