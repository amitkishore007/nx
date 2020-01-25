import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HOME_FEATURE_KEY, HomeState } from './home.reducer';

// Lookup the 'Home' feature state managed by NgRx
const getHomeState = createFeatureSelector<HomeState>(HOME_FEATURE_KEY);

const getLoaded = createSelector(
  getHomeState,
  (state: HomeState) => state.loaded
);
const getError = createSelector(
  getHomeState,
  (state: HomeState) => state.error
);

const getAllHome = createSelector(
  getHomeState,
  getLoaded,
  (state: HomeState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getHomeState,
  (state: HomeState) => state.selectedId
);
const getSelectedHome = createSelector(
  getAllHome,
  getSelectedId,
  (home, id) => {
    const result = home.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const homeQuery = {
  getLoaded,
  getError,
  getAllHome,
  getSelectedHome
};
