"use strict";
// interface Animal{
//     raca:string;
//     tamanho: number;
//     idade: number;
exports.__esModule = true;
//     correr();
// }
// class Cachorro implements Animal{
//     raca: string;
//     tamanho: number;
//     idade: number;
//     correr() {
//         console.log("*correndo*")
//     }
//     latir(){
//         console.log("au au")
//     };
// }
// interface Pessoa{
//     nome:string;
//     idade: number;
//     altura:number;
//     respira?();
// }
// interface Humano{
// }
// class Trabalhador{
//     nome: string;
//     idade: number;
//     altura: number;
//     salario:number;
//     pis: number;
//     trabalhar(){
//     }
// }
// class Trabalhadores{
// }
// // class TrabalhadorPrivado extends Trabalhador, Trabalhadores{
// // }
// class TrabalhadorPrivado implements Humano, Pessoa{
//     nome: string;
//     idade: number;
//     altura: number;
// }
//Resolvendo o exercício do slide
var aula4_part2_1 = require("./aula4-part2");
var calculadora = new aula4_part2_1.Calculadora();
var Calculos = /** @class */ (function () {
    function Calculos(numero1, numero2) {
        this.numero1 = numero1;
        this.numero2 = numero2;
        this.metodoSubtracao();
        this.metodoDivisao();
        this.metodoMultiplicacao();
    }
    Calculos.prototype.metodoSubtracao = function () {
        var subtracao = calculadora.subtracao(this.numero1, this.numero2);
        console.log("Subtração: ", subtracao);
    };
    Calculos.prototype.metodoDivisao = function () {
        var divisao = calculadora.divisao(this.numero1, this.numero2);
        console.log("Divisão: ", divisao);
    };
    Calculos.prototype.metodoMultiplicacao = function () {
        var multiplicacao = calculadora.multiplicacao(this.numero1, this.numero2);
        console.log("Multiplicação: ", multiplicacao);
    };
    return Calculos;
}());
var calculos = new Calculos(5, 5);
var soma = calculadora.soma(calculos.numero1, calculos.numero2);
console.log("Soma: ", soma);
