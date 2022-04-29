"use strict";
exports.__esModule = true;
exports.Calculadora = void 0;
var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    Calculadora.prototype.soma = function (number1, number2) {
        return number1 + number2;
    };
    Calculadora.prototype.subtracao = function (number1, number2) {
        return number1 - number2;
    };
    Calculadora.prototype.multiplicacao = function (number1, number2) {
        return number1 * number2;
    };
    Calculadora.prototype.divisao = function (number1, number2) {
        return number1 / number2;
    };
    return Calculadora;
}());
exports.Calculadora = Calculadora;
