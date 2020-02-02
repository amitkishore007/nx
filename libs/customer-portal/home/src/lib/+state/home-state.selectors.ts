import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HOMESTATE_FEATURE_KEY, HomeStateState } from './home-state.reducer';

// Lookup the 'HomeState' feature state managed by NgRx
const getHomeStateState = createFeatureSelector<HomeStateState>(
  HOMESTATE_FEATURE_KEY
);

const getLoaded = createSelector(
  getHomeStateState,
  (state: HomeStateState) => state.loaded
);
const getError = createSelector(
  getHomeStateState,
  (state: HomeStateState) => state.error
);

const getAllHomeState = createSelector(
  getHomeStateState,
  getLoaded,
  (state: HomeStateState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getHomeStateState,
  (state: HomeStateState) => state.selectedId
);
const getSelectedHomeState = createSelector(
  getAllHomeState,
  getSelectedId,
  (homeState, id) => {
    const result = homeState.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const homeStateQuery = {
  getLoaded,
  getError,
  getAllHomeState,
  getSelectedHomeState
};
