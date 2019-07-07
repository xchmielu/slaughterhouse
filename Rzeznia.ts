import {Zwierze} from "./Zwierze";
import {Kot} from './Kot'
import { Pies} from './Pies'

export class Rzeznia {
    private static instance: Rzeznia;

    private constructor() {}
    static getInstance(): Rzeznia {
        if (!Rzeznia.instance) {
            Rzeznia.instance = new Rzeznia();
        }
        return Rzeznia.instance;
    }

    przygotujZwierze(zwierze: Pies | Kot) {
        if (zwierze instanceof Pies) {
            zwierze.czysty = true
        } else if (zwierze instanceof Kot) {
            zwierze.mokry = false
        }
    }

    uboj(zwierze: Zwierze): void {
        for (let i = 0; i < zwierze.liczbaKonczyn; i++) zwierze.dajGlos()
    }

}
