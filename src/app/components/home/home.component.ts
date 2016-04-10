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
    }

    submitState(value) {
        console.log('submitState', value);
        this.appState.set('value', value);
    }
}
