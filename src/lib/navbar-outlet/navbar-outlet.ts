import { Iwe7NavbarService } from './../iwe7-navbar.service';
import { Injector } from '@angular/core';
import {
    Component, Input, ViewChild,
} from '@angular/core';
import { Iwe7CoreComponent } from 'iwe7-core';

@Component({
    selector: 'navbar-outlet',
    templateUrl: 'navbar-outlet.html',
    styleUrls: ['./navbar-outlet.scss'],
    host: {
        '[class.am-navbar]': '"true"',
        '[class.am-navbar-light]': 'light'
    },
    providers: [Iwe7NavbarService],
    exportAs: 'navbarOutlet'
})
export class NavbarOutletComponent extends Iwe7CoreComponent {
    @Input() light: boolean = true;
    @ViewChild('title') title: any;
    constructor(
        injector: Injector,
        public navbar: Iwe7NavbarService
    ) {
        super(injector);
        this.getCyc('ngAfterViewInit').subscribe(res => {
            this.navbar.show();
        });
    }

    show() {
        this.navbar.show();
    }

    hide() {
        this.navbar.hide();
    }
}
