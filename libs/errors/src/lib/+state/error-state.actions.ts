import { Action } from '@ngrx/store';
import { Entity } from './error-state.reducer';

export enum ErrorStateActionTypes {
  LoadErrorState = '[ErrorState] Load ErrorState',
  ErrorStateLoaded = '[ErrorState] ErrorState Loaded',
  ErrorStateLoadError = '[ErrorState] ErrorState Load Error'
}

export class LoadErrorState implements Action {
  readonly type = ErrorStateActionTypes.LoadErrorState;
}

export class ErrorStateLoadError implements Action {
  readonly type = ErrorStateActionTypes.ErrorStateLoadError;
  constructor(public payload: any) {}
}

export class ErrorStateLoaded implements Action {
  readonly type = ErrorStateActionTypes.ErrorStateLoaded;
  constructor(public payload: Entity[]) {}
}

export type ErrorStateAction =
  | LoadErrorState
  | ErrorStateLoaded
  | ErrorStateLoadError;

export const fromErrorStateActions = {
  LoadErrorState,
  ErrorStateLoaded,
  ErrorStateLoadError
};
