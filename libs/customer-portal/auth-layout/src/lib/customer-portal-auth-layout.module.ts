import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerPortalUiKitModule } from '@rubicon/customer-portal/ui-kit';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { AuthLayoutRoutingModule } from './auth-layout-routing.module';

@NgModule({
  imports: [CommonModule, CustomerPortalUiKitModule, AuthLayoutRoutingModule],
  declarations: [AuthLayoutComponent],
  exports: [AuthLayoutComponent]
})
export class CustomerPortalAuthLayoutModule {}
