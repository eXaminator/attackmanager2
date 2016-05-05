import {Component, Input} from '@angular/core';
import {Character} from '../../models';

interface Attack {
    bonus: number;
}

@Component({
    selector: 'attacks',
    template: require('./attacks.html'),
    // styles: [require('./attacks.scss')],
})
export class AttacksComponent {

    ngOnChanges() {
        console.log('init');
    }

    get attacks() {
        const attacks: Attack[] = [];



        return attacks;
    }


}
