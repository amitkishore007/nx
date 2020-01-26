import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromFormState from './+state/form-state.reducer';
import { FormStateEffects } from './+state/form-state.effects';
import { FormStateFacade } from './+state/form-state.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromFormState.FORMSTATE_FEATURE_KEY,
      fromFormState.reducer
    ),
    EffectsModule.forFeature([FormStateEffects])
  ],
  providers: [FormStateFacade]
})
export class DynamicFormModule {}
