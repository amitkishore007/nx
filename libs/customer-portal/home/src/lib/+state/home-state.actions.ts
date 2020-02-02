import { Action } from '@ngrx/store';
import { Entity } from './home-state.reducer';

export enum HomeStateActionTypes {
  LoadHomeState = '[HomeState] Load HomeState',
  HomeStateLoaded = '[HomeState] HomeState Loaded',
  HomeStateLoadError = '[HomeState] HomeState Load Error'
}

export class LoadHomeState implements Action {
  readonly type = HomeStateActionTypes.LoadHomeState;
}

export class HomeStateLoadError implements Action {
  readonly type = HomeStateActionTypes.HomeStateLoadError;
  constructor(public payload: any) {}
}

export class HomeStateLoaded implements Action {
  readonly type = HomeStateActionTypes.HomeStateLoaded;
  constructor(public payload: Entity[]) {}
}

export type HomeStateAction =
  | LoadHomeState
  | HomeStateLoaded
  | HomeStateLoadError;

export const fromHomeStateActions = {
  LoadHomeState,
  HomeStateLoaded,
  HomeStateLoadError
};
