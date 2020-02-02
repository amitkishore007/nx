import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppRoutingModule } from './app-routing.module';
import { NxModule } from '@nrwl/angular';
import { CustomerPortalHomeModule } from '@rubicon/customer-portal/home';
import { CustomerPortalAuthLayoutModule } from '@rubicon/customer-portal/auth-layout';
import { CustomerPortalSiteLayoutModule } from '@rubicon/customer-portal/site-layout'
import { UtilsModule } from '@rubicon/utils';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NxModule.forRoot(),
    StoreModule.forRoot(
      {},
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true
        }
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot(),
    CustomerPortalHomeModule,
    CustomerPortalSiteLayoutModule,
    CustomerPortalAuthLayoutModule,
    UtilsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
