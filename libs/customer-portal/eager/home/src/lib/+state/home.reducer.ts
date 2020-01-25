import { HomeAction, HomeActionTypes } from './home.actions';

export const HOME_FEATURE_KEY = 'home';

/**
 * Interface for the 'Home' data used in
 *  - HomeState, and the reducer function
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface HomeState {
  list: Entity[]; // list of Home; analogous to a sql normalized table
  selectedId?: string | number; // which Home record has been selected
  loaded: boolean; // has the Home list been loaded
  error?: any; // last none error (if any)
}

export interface HomePartialState {
  readonly [HOME_FEATURE_KEY]: HomeState;
}

export const initialState: HomeState = {
  list: [],
  loaded: false
};

export function reducer(
  state: HomeState = initialState,
  action: HomeAction
): HomeState {
  switch (action.type) {
    case HomeActionTypes.HomeLoaded: {
      state = {
        ...state,
        list: action.payload,
        loaded: true
      };
      break;
    }
  }
  return state;
}
