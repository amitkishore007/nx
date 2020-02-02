import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginHeaderComponent } from './login-header/login-header.component';
import { LoginFooterComponent } from './login-footer/login-footer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderComponent, FooterComponent, NavbarComponent, LoginHeaderComponent, LoginFooterComponent],
  exports: [HeaderComponent, FooterComponent, NavbarComponent, LoginHeaderComponent, LoginFooterComponent]
})
export class CustomerPortalUiKitModule {}
