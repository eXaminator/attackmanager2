import {Component, ViewEncapsulation} from '@angular/core';
import {RouteConfig} from '@angular/router-deprecated';
import {AttackmanagerComponent} from '../attackmanager/components/attackmanager';

@Component({
    selector: 'app',
    template: `<router-outlet></router-outlet>`,
    styles: [require('normalize.css')],
    encapsulation: ViewEncapsulation.None,
})
@RouteConfig([
  {path: '/...', component: AttackmanagerComponent},
])
export class AppComponent {}
