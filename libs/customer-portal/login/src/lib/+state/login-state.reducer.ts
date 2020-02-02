import { LoginStateAction, LoginStateActionTypes } from './login-state.actions';
import { TaskInfoInterface } from '@rubicon/interface/task-info';

export const LOGINSTATE_FEATURE_KEY = 'loginState';

/**
 * Interface for the 'LoginState' data used in
 *  - LoginStateState, and the reducer function
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity { }

export interface LoginState {
  loaded: boolean; // has the LoginState list been loaded
  loading:boolean;
  error?: any; // last none error (if any)
  taskInfo: TaskInfoInterface
}

export interface LoginStatePartialState {
  readonly [LOGINSTATE_FEATURE_KEY]: LoginState;
}

export const initialState: LoginState = {
  loaded: false,
  taskInfo: undefined,
  loading:false
};

export function reducer(
  state: LoginState = initialState,
  action: LoginStateAction
): LoginState {
  switch (action.type) {
    case LoginStateActionTypes.TryLoadingLoginTaskInfo : {
      console.log('bbbb');
      
      state = {
        ...state,
        loading:true,
      }
    }

    case LoginStateActionTypes.LoadLoginTaskInfoSuccess: {
      console.log(action.payload);
      
      state = {
        ...state,
        loading:false,
        loaded:true,
        taskInfo:(action.payload as TaskInfoInterface)
      }
    }
  }
  return state;
}
