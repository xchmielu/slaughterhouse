import {Zwierze} from "./Zwierze";

export class Kot extends Zwierze {
    mokry = true;
    glos = 'Miau';
    constructor(imie) {
        super(imie);
        this.liczbaKonczyn = 4
    }
}
