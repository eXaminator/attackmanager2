import {Component} from 'angular2/core';

@Component({
    selector: 'about',
    styles: [require('./about.style.scss')],
    template: require('./about.template.html'),
})
export class About {
    constructor() {}

    ngOnInit() {
        console.log('hello `About` component');
    }
}
