/*
 * Angular 2 decorators and services
 */
import {Component, ViewEncapsulation} from '@angular/core';
import {RouteConfig, Router} from '@angular/router-deprecated';

import {HomeComponent} from '../home';
import {AboutComponent} from '../about';

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app',
    pipes: [],
    providers: [],
    directives: [],
    encapsulation: ViewEncapsulation.None,
    styles: [
        require('normalize.css'),
        require('./app.scss'),
    ],
    template: require('./app.html'),
})
@RouteConfig([
    {path: '/', name: 'Index', component: HomeComponent, useAsDefault: true},
    {path: '/about', name: 'About', component: AboutComponent},
])
export class AppComponent {
    angularclassLogo = 'assets/img/angularclass-avatar.png';
    loading = false;
    name = 'Angular 2 Webpack Starter';
    url = 'https://twitter.com/AngularClass';

    ngOnInit() {
        console.log('Initial App State');
    }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
