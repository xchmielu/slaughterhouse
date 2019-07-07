import {Zwierze} from "./Zwierze";

export class Pies extends Zwierze {
    czysty = false;
    glos = 'Hau';
    constructor(imie) {
        super(imie);
        this.liczbaKonczyn = 4
    }
}
