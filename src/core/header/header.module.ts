import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [HeaderComponent, NavbarComponent],
  imports: [
    CommonModule
  ]
})
export class HeaderModule { }
