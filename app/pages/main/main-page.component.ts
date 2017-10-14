
import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
    selector: 'main-page',
    moduleId: module.id,
    templateUrl: 'main-page.component.html',
    styleUrls: ['main-page.component.css'],
})

export class MainPageComponent implements OnInit {

    constructor(private router: RouterExtensions) { }

    ngOnInit() { }

    loadlazy() {
        this.router.navigateByUrl('/lazy');
    }
}
