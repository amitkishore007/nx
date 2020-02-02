import { HomeStateAction, HomeStateActionTypes } from './home-state.actions';

export const HOMESTATE_FEATURE_KEY = 'homeState';

/**
 * Interface for the 'HomeState' data used in
 *  - HomeStateState, and the reducer function
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface HomeStateState {
  list: Entity[]; // list of HomeState; analogous to a sql normalized table
  selectedId?: string | number; // which HomeState record has been selected
  loaded: boolean; // has the HomeState list been loaded
  error?: any; // last none error (if any)
}

export interface HomeStatePartialState {
  readonly [HOMESTATE_FEATURE_KEY]: HomeStateState;
}

export const initialState: HomeStateState = {
  list: [],
  loaded: false
};

export function reducer(
  state: HomeStateState = initialState,
  action: HomeStateAction
): HomeStateState {
  switch (action.type) {
    case HomeStateActionTypes.HomeStateLoaded: {
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
