/*
 * Angular 2 decorators and services
 */
import {Component, ViewEncapsulation} from 'angular2/core';
import {RouteConfig} from 'angular2/router';
import {AttackmanagerComponent} from '../attackmanager/components/attackmanager/attackmanager.component';

@Component({
    selector: 'app',
    encapsulation: ViewEncapsulation.None,
    styles: [require('./app.style.scss')],
    template: `<router-outlet></router-outlet>`,
})
@RouteConfig([
    {
        path: '/...',
        name: 'AttackManager',
        component: AttackmanagerComponent,
        useAsDefault: true
    },
])
export class AppComponent {}
