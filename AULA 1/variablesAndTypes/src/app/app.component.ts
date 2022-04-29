//importando um módulo angular
import { Component, OnInit } from '@angular/core';

//importando o modulo de Calculadora
import { Calculadora } from 'src/assets/aula4';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  calc: any = new Calculadora();
  resultado: number = 0;
  numero1: number = 0;
  numero2: number = 0;

  constructor(){}
  
  ngOnInit(){
    // ngModule - modulo a qual é feito o uso do ngModel
    // ngModel - diretiva angular responsável pela atribuição de valores usando two way data biding
  }

  somar(){
    console.log("entrei");
    this.resultado = this.calc.soma(this.numero1, this.numero2);
  }

}
