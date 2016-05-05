import {Component, Input} from 'angular2/core';
import {Character} from '../../models';

interface Attack {
    bonus: number;
}

@Component({
    selector: 'attacks',
    template: require('./attacks.template.html'),
    styles: [require('./attacks.template.html')],
})
export class AttacksComponent {
    @Input() character: Character = null;

    ngOnChanges() {
        console.log('init', this.character);
    }

    get attacks() {
        const attacks: Attack[] = [];



        return attacks;
    }


}
