import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map, switchMap } from 'rxjs/operators';

import { LoginStatePartialState } from './login-state.reducer';
import {
  LoginStateActionTypes, 
  TryLoadingLoginTaskInfo, 
  LoadLoginTaskInfoSuccess, 
  LoadLoginTaskInfoError
} from './login-state.actions';
import { CUSTOMER_PORTAL } from 'libs/interface/task-info/src/lib/slug';
import { TaskInfoService } from '@rubicon/utils';
import { TaskInfoInterface } from '@rubicon/interface/task-info';


@Injectable()
export class LoginStateEffects {
  @Effect() loadLoginState$ = this.dataPersistence.fetch(
    LoginStateActionTypes.TryLoadingLoginTaskInfo,
    {
      run: (action: TryLoadingLoginTaskInfo, state: LoginStatePartialState) => {
        // Your custom REST 'load' logic goes here. For now just return an empty list...
        return this.taskInfoService.getTaskInfo(CUSTOMER_PORTAL.login).pipe(
          map((data:TaskInfoInterface) => {
            console.log(data,':LLLLLL');
             return new LoadLoginTaskInfoSuccess(data); 
          })
        );
      },

      onError: (action: TryLoadingLoginTaskInfo, error) => {
        console.error('Error', error);
        return new LoadLoginTaskInfoError(error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<LoginStatePartialState>,
    private taskInfoService: TaskInfoService
  ) {}
}
