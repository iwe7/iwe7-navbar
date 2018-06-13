import { Injectable, Optional } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Iwe7HeaderService } from 'iwe7-layout';

@Injectable()
export class Iwe7NavbarService {
    shown: boolean = true;
    shown$: BehaviorSubject<boolean> = new BehaviorSubject(this.shown);
    constructor(
        @Optional()
        private header: Iwe7HeaderService
    ) { }

    show() {
        this.shown = true;
    }

    hide() {
        this.shown = false;
    }
}
