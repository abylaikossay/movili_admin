import { Component, OnInit } from '@angular/core';
import { NbIconLibraries } from '@nebular/theme';
import { MENU_ITEMS } from './admin-menu';

@Component({
    selector: 'ngx-pages',
    styleUrls: ['admin.component.scss'],
    template: `
			<ngx-one-column-layout>
				<nb-menu [items]="menu"></nb-menu>
				<router-outlet></router-outlet>
			</ngx-one-column-layout>
    `,
})

export class AdminComponent implements OnInit {
    menu = MENU_ITEMS;


    constructor(private iconLibraries: NbIconLibraries,
    ) {
        this.iconLibraries.registerFontPack('font-awesome', {iconClassPrefix: 'fa'});

    }


    ngOnInit() {
    }

}
