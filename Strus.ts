import {Zwierze} from "./Zwierze";

export class Strus extends Zwierze {
    glos = 'Mig';
    constructor(imie) {
        super(imie);
        this.liczbaKonczyn = 2
    }
}
