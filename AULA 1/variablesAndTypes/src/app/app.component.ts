import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  filme:any = {
    nome:"Senhor dos anéis",
    anoDeLancamento:2002,
    diretor: "Peter Jackson"
  }

  nome: string = "";
  idade: number = 23;

  constructor(){}

  ngOnInit(){
    console.log(this.filme.nome);
    console.log(this.filme.anoDeLancamento);
    console.log(this.filme.diretor);
  }


}
