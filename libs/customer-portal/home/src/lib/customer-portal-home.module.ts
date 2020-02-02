import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromHomeState from './+state/home-state.reducer';
import { HomeStateEffects } from './+state/home-state.effects';
import { HomeStateFacade } from './+state/home-state.facade';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromHomeState.HOMESTATE_FEATURE_KEY,
      fromHomeState.reducer
    ),
    EffectsModule.forFeature([HomeStateEffects]),
    HomeRoutingModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent],
  providers: [HomeStateFacade]
})
export class CustomerPortalHomeModule {}
