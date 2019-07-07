"use strict";
exports.__esModule = true;
var Strus_1 = require("./Strus");
var Pies_1 = require("./Pies");
var Kot_1 = require("./Kot");
var Rzeznia_1 = require("./Rzeznia");
var strus = new Strus_1.Strus('Janek');
var pies = new Pies_1.Pies('Ciapek');
var kot = new Kot_1.Kot('Lolek');
var rzeznia = Rzeznia_1.Rzeznia.getInstance();
rzeznia.przygotujZwierze(kot);
rzeznia.przygotujZwierze(pies);
console.log(pies);
console.log(kot);
rzeznia.uboj(pies);
rzeznia.uboj(kot);
rzeznia.uboj(strus);
