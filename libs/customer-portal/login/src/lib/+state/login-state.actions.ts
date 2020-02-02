import { Action } from '@ngrx/store';
import { Entity } from './login-state.reducer';
import { TaskInfoInterface } from '@rubicon/interface/task-info';

export enum LoginStateActionTypes {
  LoadLoginState = '[LoginState] Load LoginState',
  LoginStateLoaded = '[LoginState] LoginState Loaded',
  LoginStateLoadError = '[LoginState] LoginState Load Error',
  TryLoadingLoginTaskInfo = '[LoginState] Try Loading Login TaskInfo',
  LoadLoginTaskInfoSuccess = '[LoginState] Load Login TaskInfo Success',
  LoadLoginTaskInfoError = '[LoginState] Load Login TaskInfo Error',
  SetLoginTaskInfoState = '[LoginState] Set Login State',
}

export class TryLoadingLoginTaskInfo implements Action {
  readonly type = LoginStateActionTypes.TryLoadingLoginTaskInfo;

  constructor(public payload: string) { }
}

export class LoadLoginTaskInfoSuccess implements Action {
  readonly type = LoginStateActionTypes.LoadLoginTaskInfoSuccess;

  constructor(public payload: TaskInfoInterface) { }
}

export class LoadLoginTaskInfoError implements Action {
  readonly type = LoginStateActionTypes.LoginStateLoadError;

  constructor(public payload: Entity[]) { }
}


export type LoginStateAction =
  | TryLoadingLoginTaskInfo
  | LoadLoginTaskInfoSuccess
  | LoadLoginTaskInfoError

export const fromLoginStateActions = {
  TryLoadingLoginTaskInfo,
  LoadLoginTaskInfoSuccess,
  LoadLoginTaskInfoError
};
