import { ErrorStateAction, ErrorStateActionTypes } from './error-state.actions';

export const ERRORSTATE_FEATURE_KEY = 'errorState';

/**
 * Interface for the 'ErrorState' data used in
 *  - ErrorStateState, and the reducer function
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface ErrorStateState {
  list: Entity[]; // list of ErrorState; analogous to a sql normalized table
  selectedId?: string | number; // which ErrorState record has been selected
  loaded: boolean; // has the ErrorState list been loaded
  error?: any; // last none error (if any)
}

export interface ErrorStatePartialState {
  readonly [ERRORSTATE_FEATURE_KEY]: ErrorStateState;
}

export const initialState: ErrorStateState = {
  list: [],
  loaded: false
};

export function reducer(
  state: ErrorStateState = initialState,
  action: ErrorStateAction
): ErrorStateState {
  switch (action.type) {
    case ErrorStateActionTypes.ErrorStateLoaded: {
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
