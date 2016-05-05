/*
 * Angular 2 decorators and services
 */
import {Component, ViewChild, OnInit, AfterViewInit} from '@angular/core';
import {RouteConfig, Router} from '@angular/router-deprecated';
import {AttacksComponent} from '../attacks';
import {Character, CharacterClass, Weapon, Damage, Modifier, Ability} from '../../models';
import {CharacterSheetFactory, CharacterSheet} from '../../services/characterSheetFactory';

@Component({
    selector: 'attackmanager',
    providers: [CharacterSheetFactory],
    styles: [
        require('normalize.css'),
        require('./attackmanager.scss'),
    ],
    template: require('./attackmanager.html'),
})
@RouteConfig([
  {path: '/', name: 'Attacks', component: AttacksComponent, useAsDefault: true},
])
export class AttackmanagerComponent implements OnInit {
    character: Character;
    sheet: CharacterSheet;

    constructor(private _sheetFactory: CharacterSheetFactory) { }

    ngOnInit() {
        this.character = <Character>{
            name: 'Milan',
            classes: [
                {name: 'Ranger', level: 2, bab: 2},
                {name: 'Paladin', level: 8, bab: 8},
            ],
            weapons: [
                {
                    name: 'Longbow',
                    ranged: true,
                    damage: [
                        {
                            roll: {count: 1, die: 10, modifier: {path: 'attributes.strength'}},
                            type: 'piercing',
                        },
                    ],
                },
            ],
            abilities: [],
            attributes: {
                strength: 12,
                dexterity: 21,
                constitution: 13,
                wisdom: 8,
                intelligence: 10,
                charisma: 18,
            },
        };

        this.sheet = this._sheetFactory.create(this.character);

        console.log(this.sheet);

        /*const weaponFocus = new Ability('Weapon Focus');
        weaponFocus.weapons.push('Longbow');
        weaponFocus.attackModifiers.push(new Modifier(1));
        this.character.abilities.push(weaponFocus);*/
    }
}
