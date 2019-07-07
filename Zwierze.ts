export class Zwierze implements Glos{
    public liczbaKonczyn: number;
    protected imie: string;
    protected typ: string = 'ssak';
    public glos: string;
    constructor(imie) {
        this.imie = imie;
    }
    dajGlos(): void {
        console.log(this.glos)
    }
}
interface Glos {
    glos: string
    dajGlos() :void
}
