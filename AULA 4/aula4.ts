// interface Animal{
//     raca:string;
//     tamanho: number;
//     idade: number;

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
import { Calculadora } from './aula4-part2';
let calculadora = new Calculadora();


class Calculos{
    numero1: number;
    numero2: number;

    constructor(numero1: number, numero2:number){
        this.numero1 = numero1;
        this.numero2 = numero2;
        this.metodoSubtracao();
        this.metodoDivisao();
        this.metodoMultiplicacao();
    }

    metodoSubtracao(){
        let subtracao = calculadora.subtracao(this.numero1, this.numero2);
        console.log("Subtração: ", subtracao);
    }

    metodoDivisao(){
        let divisao = calculadora.divisao(this.numero1, this.numero2);
        console.log("Divisão: ", divisao);
    }

    metodoMultiplicacao(){
        let multiplicacao = calculadora.multiplicacao(this.numero1, this.numero2);
        console.log("Multiplicação: ", multiplicacao);
    }
}

let calculos = new Calculos(5, 5);

let soma = calculadora.soma(calculos.numero1, calculos.numero2);
console.log("Soma: ",soma);


