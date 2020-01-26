import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromErrorState from './+state/error-state.reducer';
import { ErrorStateEffects } from './+state/error-state.effects';
import { ErrorStateFacade } from './+state/error-state.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromErrorState.ERRORSTATE_FEATURE_KEY,
      fromErrorState.reducer
    ),
    EffectsModule.forFeature([ErrorStateEffects])
  ],
  providers: [ErrorStateFacade]
})
export class ErrorsModule {}
