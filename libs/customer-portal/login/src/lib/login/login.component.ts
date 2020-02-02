import { Component, OnInit } from '@angular/core';
import { LoginStateFacade } from '../+state/login-state.facade';
import { TryLoadingLoginTaskInfo } from '../+state/login-state.actions';
import { Observable } from 'rxjs';
import { LoginState, LOGINSTATE_FEATURE_KEY } from '../+state/login-state.reducer';
import { LoginStateSelectors } from '@rubicon/customer-portal/login';

@Component({
  selector: 'rubicon-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  $loginState:Observable<LoginState> = this.loginStateFacade.allLoginState$;

  constructor(private loginStateFacade: LoginStateFacade) { 
    this.loginStateFacade.dispatch(new TryLoadingLoginTaskInfo('login'));
  }

  ngOnInit() {
    this.$loginState.subscribe((loginState) => {
      console.log(loginState,'LoginState');
      
    });
  }

}
