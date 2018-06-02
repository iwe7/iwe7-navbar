import { NavbarOutletComponent } from './../navbar-outlet/navbar-outlet';
import { Directive, TemplateRef, AfterViewInit, Optional, SkipSelf } from '@angular/core';

@Directive({ selector: '[navbarTitle]' })
export class NavbarTitleDirective implements AfterViewInit {
    constructor(
        public template: TemplateRef<any>,
        @Optional()
        @SkipSelf()
        public outlet: NavbarOutletComponent
    ) { }

    ngAfterViewInit() {
        this.outlet.attachTitleView(this.template);
    }
}
