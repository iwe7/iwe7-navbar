import { NavbarOutletComponent } from './../navbar-outlet/navbar-outlet';
import { Directive, TemplateRef, AfterViewInit, Optional, SkipSelf } from '@angular/core';

@Directive({ selector: '[navbarRight]' })
export class NavbarRightDirective implements AfterViewInit {
    constructor(
        public template: TemplateRef<any>,
        @Optional()
        @SkipSelf()
        public outlet: NavbarOutletComponent
    ) { }

    ngAfterViewInit() {
        this.outlet.attachRightView(this.template);
    }
}
