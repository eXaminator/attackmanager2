/*
 * Angular 2 decorators and services
 */
<<<<<<< HEAD
import {Component, ViewEncapsulation} from 'angular2/core';
import {RouteConfig, Router} from 'angular2/router';

import {About} from '../about/about.component';
import {Home} from '../home/home.component';
import {AppState} from '../../services/app.service';

@Component({
    selector: 'app',
    pipes: [],
    providers: [AppState],
    directives: [],
    encapsulation: ViewEncapsulation.None,
    styles: [require('./app.style.scss')],
    template: require('./app.template.html'),
})
@RouteConfig([
    { path: '/home', name: 'Home', component: Home, useAsDefault: true },
    { path: '/about', name: 'About', component: About },
])
export class App {
    name = 'Angular 2 Webpack Starter';
    url = 'https://twitter.com/AngularClass';

    constructor(public appState: AppState) { }

    ngOnInit() {
        console.log('Initial App State', this.appState.state);
    }
=======
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

>>>>>>> upstream/master
}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
