import { NavbarOutletComponent } from './../navbar-outlet/navbar-outlet';
import { Directive, TemplateRef, AfterViewInit, Optional, SkipSelf } from '@angular/core';

@Directive({ selector: '[navbarLeft]' })
export class NavbarLeftDirective implements AfterViewInit {
    constructor(
        public template: TemplateRef<any>,
        @Optional()
        @SkipSelf()
        public outlet: NavbarOutletComponent
    ) { }

    ngAfterViewInit() {
        this.outlet.attachLeftView(this.template);
    }
}
