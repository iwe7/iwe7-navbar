import { Injectable, Optional } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Iwe7LayoutService } from 'iwe7-layout';

@Injectable()
export class Iwe7NavbarService {
    shown: boolean = true;
    shown$: BehaviorSubject<boolean> = new BehaviorSubject(this.shown);
    constructor(
        @Optional()
        private layout: Iwe7LayoutService
    ) { }

    show() {
        this.shown = true;
        if (this.layout) {
            this.layout.showHeader();
        }
    }

    hide() {
        this.shown = false;
        if (this.layout) {
            this.layout.hideHeader();
        }
    }
}
