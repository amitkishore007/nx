import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromLoginState from './+state/login-state.reducer';
import { LoginStateEffects } from './+state/login-state.effects';
import { LoginStateFacade } from './+state/login-state.facade';
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromLoginState.LOGINSTATE_FEATURE_KEY,
      fromLoginState.reducer
    ),
    EffectsModule.forFeature([LoginStateEffects]),
    LoginRoutingModule
  ],
  providers: [LoginStateFacade],
  declarations: [LoginComponent]
})
export class CustomerPortalLoginModule {}
