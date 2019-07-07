"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Zwierze_1 = require("./Zwierze");
var Pies = /** @class */ (function (_super) {
    __extends(Pies, _super);
    function Pies(imie) {
        var _this = _super.call(this, imie) || this;
        _this.czysty = false;
        _this.glos = 'Hau';
        _this.liczbaKonczyn = 4;
        return _this;
    }
    return Pies;
}(Zwierze_1.Zwierze));
exports.Pies = Pies;
