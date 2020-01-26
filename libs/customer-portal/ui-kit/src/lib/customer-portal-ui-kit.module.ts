import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderComponent, FooterComponent, NavbarComponent],
  exports: [HeaderComponent, FooterComponent, NavbarComponent]
})
export class CustomerPortalUiKitModule {}
