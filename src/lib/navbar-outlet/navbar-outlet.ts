import {
    Component, OnInit, ViewEncapsulation,
    Input, ViewChild, ViewContainerRef, TemplateRef
} from '@angular/core';

@Component({
    selector: 'navbar-outlet',
    templateUrl: 'navbar-outlet.html',
    styleUrls: ['./navbar-outlet.scss'],
    encapsulation: ViewEncapsulation.None,
    host: {
        '[class.am-navbar]': '"true"',
        '[class.am-navbar-light]': 'light'
    }
})
export class NavbarOutletComponent implements OnInit {
    @Input() light: boolean = true;

    @ViewChild('leftView', { read: ViewContainerRef }) leftView: ViewContainerRef;
    @ViewChild('rightView', { read: ViewContainerRef }) rightView: ViewContainerRef;
    @ViewChild('titleView', { read: ViewContainerRef }) titleView: ViewContainerRef;

    constructor() { }

    ngOnInit() { }

    attachLeftView(tpl: TemplateRef<any>) {
        this.leftView.createEmbeddedView(tpl);
    }
    attachRightView(tpl: TemplateRef<any>) {
        this.rightView.createEmbeddedView(tpl);
    }
    attachTitleView(tpl: TemplateRef<any>) {
        this.titleView.createEmbeddedView(tpl);
    }

}
