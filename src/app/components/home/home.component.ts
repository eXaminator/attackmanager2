import {Component} from 'angular2/core';
import {AppState} from '../../services/app.service';

@Component({
    selector: 'home',  // <home></home>
    providers: [],
    directives: [],
    pipes: [],
    styles: [require('./home.style.scss')],
    template: require('./home.template.html')
})
export class Home {
    // Set our default values
    localState = { value: '' };
    // TypeScript public modifiers
    constructor(public appState: AppState) {

    }

    ngOnInit() {
        console.log('hello `Home` component');
        // this.title.getData().subscribe(data => this.data = data);
    }

    submitState(value) {
        console.log('submitState', value);
        this.appState.set('value', value);
    }
}
