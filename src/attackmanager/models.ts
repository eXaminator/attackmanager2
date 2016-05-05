import {get as getProperty} from 'lodash/index';

export interface Roll {
    die: number;
    count: number;
    modifier: Modifier;
}

export interface Modifier {
    value: number;
    path: string;
    pathContext: Object;
}

export interface Damage {
    roll: Roll;
    type: string;
}

export interface Weapon {
    id: string;
    name: string;
    ranged: boolean;
    masterwork: boolean;
    damage: Damage[];
    magic: number;
}

export interface Attributes {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
}

export interface CharacterClass {
    name: string;
    level: number;
    bab: number;
}

export interface Ability {
    name: string;
    weapons: string[];
    activatable: boolean;
    active: boolean;

    attackModifiers: Modifier[];
    damage: Damage[];
    damageModifiers: Modifier[];
}

export interface Character {
    name: string;
    weapons: Weapon[];
    classes: CharacterClass[];
    abilities: Ability[];
    attributes: Attributes;
}
