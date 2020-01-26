import { Action } from '@ngrx/store';
import { Entity } from './form-state.reducer';

export enum FormStateActionTypes {
  LoadFormState = '[FormState] Load FormState',
  FormStateLoaded = '[FormState] FormState Loaded',
  FormStateLoadError = '[FormState] FormState Load Error'
}

export class LoadFormState implements Action {
  readonly type = FormStateActionTypes.LoadFormState;
}

export class FormStateLoadError implements Action {
  readonly type = FormStateActionTypes.FormStateLoadError;
  constructor(public payload: any) {}
}

export class FormStateLoaded implements Action {
  readonly type = FormStateActionTypes.FormStateLoaded;
  constructor(public payload: Entity[]) {}
}

export type FormStateAction =
  | LoadFormState
  | FormStateLoaded
  | FormStateLoadError;

export const fromFormStateActions = {
  LoadFormState,
  FormStateLoaded,
  FormStateLoadError
};
