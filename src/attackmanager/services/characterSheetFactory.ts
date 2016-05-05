import {Character, Weapon} from '../models';

export interface CharacterSheet {
    base: Character;
    attributes: Object;
}

export class CharacterSheetFactory {
    create(character: Character) {
        const currentWeapon = character.weapons[0];
        const sheet = {
            base: character,
            attributes: this._calcAttributes(character),
            attacks: this._calcAttacks(character, currentWeapon),
        };

        return sheet;
    }

    private _calcAttributes(character: Character) {
        const attrs = {};
        Object.keys(character.attributes).forEach((key) => {
            attrs[key] = this._calcAttribute(character.attributes[key]);
        });
        return attrs;
    }

    private _calcAttribute(value) {
        return {
            value,
            modifier: Math.floor((value - 10) / 2),
        };
    }

    private _calcRangedAttributeModifier(character: Character) {
        const attributeKey = 'dexterity';
        const value = character.attributes[attributeKey];
        return this._calcAttribute(value)[attributeKey];
    }

    private _calcAttacks(character: Character, weapon: Weapon) {
        const attacks = [];
        let bab = this._calcBAB(character);
        do {
            attacks.push(this._calcAttack(character, weapon, bab));
            bab -= 5;
        } while (bab > 0);

        return attacks;
    }

    private _calcAttack(character: Character, weapon: Weapon, bab: number) {
        const attack = {
            weapon,
            bonus: bab,
        };

        if (weapon.masterwork && !weapon.magic) attack.bonus += 1;
        attack.bonus += weapon.magic || 0;

        if (weapon.ranged) attack.bonus += this._calcAttribute(character.attributes.dexterity).modifier;
        else attack.bonus += this._calcAttribute(character.attributes.strength).modifier;

        return attack;
    }

    private _calcBAB(character: Character) {
        return character
            .classes
            .reduce((value, currentClass) => value + currentClass.bab, 0);
    }
}
