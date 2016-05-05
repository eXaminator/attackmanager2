<<<<<<< HEAD
import {Component} from 'angular2/core';
import {AppState} from '../../services/app.service';

@Component({
    selector: 'home',
    providers: [],
    directives: [],
    pipes: [],
    styles: [require('./home.style.scss')],
    template: require('./home.template.html')
})
export class Home {
    localState = {value: ''};

    constructor(public appState: AppState) {}

    ngOnInit() {
        console.log('hello `Home` component');
=======
import {Component} from '@angular/core';

@Component({
    // The selector is what angular internally uses
    // for `document.querySelectorAll(selector)` in our index.html
    // where, in this case, selector is the string 'home'
    selector: 'home',  // <home></home>
    // We need to tell Angular's Dependency Injection which providers are in our app.
    providers: [],
    // We need to tell Angular's compiler which directives are in our template.
    // Doing so will allow Angular to attach our behavior to an element
    directives: [],
    // We need to tell Angular's compiler which custom pipes are in our template.
    pipes: [],
    // Our list of styles in our component. We may add more to compose many styles together
    styles: [require('./home.css')],
    // Every Angular template is first compiled by the browser before Angular runs it's compiler
    template: require('./home.html'),
})
export class HomeComponent {
    // Set our default values
    localState = { value: '' };

    ngOnInit() {
        console.log('hello `Home` component');
        // this.title.getData().subscribe(data => this.data = data);
>>>>>>> upstream/master
    }

    submitState(value) {
        console.log('submitState', value);
<<<<<<< HEAD
        this.appState.set('value', value);
    }
=======
    }

>>>>>>> upstream/master
}
