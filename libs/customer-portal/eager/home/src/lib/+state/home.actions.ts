import { Action } from '@ngrx/store';
import { Entity } from './home.reducer';

export enum HomeActionTypes {
  LoadHome = '[Home] Load Home',
  HomeLoaded = '[Home] Home Loaded',
  HomeLoadError = '[Home] Home Load Error'
}

export class LoadHome implements Action {
  readonly type = HomeActionTypes.LoadHome;
}

export class HomeLoadError implements Action {
  readonly type = HomeActionTypes.HomeLoadError;
  constructor(public payload: any) {}
}

export class HomeLoaded implements Action {
  readonly type = HomeActionTypes.HomeLoaded;
  constructor(public payload: Entity[]) {}
}

export type HomeAction = LoadHome | HomeLoaded | HomeLoadError;

export const fromHomeActions = {
  LoadHome,
  HomeLoaded,
  HomeLoadError
};
