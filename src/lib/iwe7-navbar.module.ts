import { NavbarOutletComponent } from './navbar-outlet/navbar-outlet';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NavbarOutletComponent,
  ],
  exports: [
    NavbarOutletComponent,
  ]
})
export class Iwe7NavbarModule { }
