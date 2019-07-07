"use strict";
exports.__esModule = true;
var Kot_1 = require("./Kot");
var Pies_1 = require("./Pies");
var Rzeznia = /** @class */ (function () {
    function Rzeznia() {
    }
    Rzeznia.getInstance = function () {
        if (!Rzeznia.instance) {
            Rzeznia.instance = new Rzeznia();
        }
        return Rzeznia.instance;
    };
    Rzeznia.prototype.przygotujZwierze = function (zwierze) {
        if (zwierze instanceof Pies_1.Pies) {
            zwierze.czysty = true;
        }
        else if (zwierze instanceof Kot_1.Kot) {
            zwierze.mokry = false;
        }
    };
    Rzeznia.prototype.uboj = function (zwierze) {
        for (var i = 0; i < zwierze.liczbaKonczyn; i++)
            zwierze.dajGlos();
    };
    return Rzeznia;
}());
exports.Rzeznia = Rzeznia;
