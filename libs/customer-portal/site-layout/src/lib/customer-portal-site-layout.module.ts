import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteLayoutComponent } from './site-layout/site-layout.component';
import { CustomerPortalUiKitModule } from '@rubicon/customer-portal/ui-kit';
import { SiteLayoutRoutingModule } from './site-layout-routing.module';

@NgModule({
  imports: [CommonModule, SiteLayoutRoutingModule, CustomerPortalUiKitModule],
  declarations: [SiteLayoutComponent],
  exports:[SiteLayoutComponent]
})
export class CustomerPortalSiteLayoutModule {}
