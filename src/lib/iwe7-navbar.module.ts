import { NavbarTitleDirective } from './navbar-directive/navbar-title';
import { NavbarLeftDirective } from './navbar-directive/navbar-left';
import { NavbarOutletComponent } from './navbar-outlet/navbar-outlet';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarRightDirective } from './navbar-directive/navbar-right';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NavbarOutletComponent,
    NavbarLeftDirective,
    NavbarRightDirective,
    NavbarTitleDirective
  ],
  exports: [
    NavbarOutletComponent,
    NavbarLeftDirective,
    NavbarRightDirective,
    NavbarTitleDirective
  ]
})
export class Iwe7NavbarModule { }
