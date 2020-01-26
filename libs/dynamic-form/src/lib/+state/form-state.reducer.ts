import { FormStateAction, FormStateActionTypes } from './form-state.actions';

export const FORMSTATE_FEATURE_KEY = 'formState';

/**
 * Interface for the 'FormState' data used in
 *  - FormStateState, and the reducer function
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface FormStateState {
  list: Entity[]; // list of FormState; analogous to a sql normalized table
  selectedId?: string | number; // which FormState record has been selected
  loaded: boolean; // has the FormState list been loaded
  error?: any; // last none error (if any)
}

export interface FormStatePartialState {
  readonly [FORMSTATE_FEATURE_KEY]: FormStateState;
}

export const initialState: FormStateState = {
  list: [],
  loaded: false
};

export function reducer(
  state: FormStateState = initialState,
  action: FormStateAction
): FormStateState {
  switch (action.type) {
    case FormStateActionTypes.FormStateLoaded: {
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
