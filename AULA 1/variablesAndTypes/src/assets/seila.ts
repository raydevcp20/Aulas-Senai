
class PrivateClass{
    private medida:number;

    constructor(medida:number){
        this.medida = medida;
    }
}

const isPrivate = new PrivateClass(10);
// Erro - Property 'medida' is private and only 
// accessible within class 'PrivateClass'.



class ProtectedClass{
    protected medida:number;

    constructor(medida:number){
        this.medida = medida;
    }

    calcula(){

    }
}
class PublicClass extends ProtectedClass{
    public color:string;
    public size:number;
    
    constructor(size: number){
        super(size);
    }

    exemplo(){
        console.log(this.medida);
        //saida é 10
    }
}

const isPublic = new PublicClass(10);
isPublic.exemplo()



isPublic.color = "red";
isPublic.size = 2.45;
// isPublic.

class AccessClass{
    nome: string;
    idade: number
}


// class Classe3:string{
//     nome: string;
//     idade: number
// }

class ContructorExample{
    musicaFavorita: string;
    numeroFavorito: number;
    amaLasanha: boolean;

    constructor(musica: string, numero: number, amaLasanha: boolean){
        this.musicaFavorita = musica;
        this.numeroFavorito = numero;
        this.amaLasanha = amaLasanha;
    }

}
const instancia = new ContructorExample("imagination", 7, true);




class Classe4{
    nome: string = "Claudio";
    idade: number = 21;
}


// Não é obrigatório inicializar seus 
// atributos, mesmo sem a declaração "?"
// const game = new Jogo();
// game.nome = "Valorant";
// game.categoria = "FPS";
// game.anoDeLancamento = 2020;


// let soma = (x: number, y: number) => {
//     console.log(x+y);
// }


function pokedex(pokemon:{ name: string, weight: number, weaknesses: string[]}) {
    console.log(
        "Nome: "+ pokemon.name,
        "Peso: "+ pokemon.weight,
        "Primeira Fraquesa: "+ pokemon.weaknesses[0]
    );
}


let pokemon = {
    name: "Charmander",
    weight: 8.5,
    weaknesses: [
        "water",
        "rock"
    ]
}

pokedex(pokemon);





let filme:any = {
    nome: "Doutor Estranho no Multiverso da Loucura",
    anoDeLancamento : 2022,
    diretor : "Sam Raimi"
};

console.log(filme.nome);

let joao = ""



let aluno:{
    nome: string,
    matricula: number,
    ativo: boolean,
    cadeiras: string[]
}









// aluno = {
//     nome: "joao",
//     idade: 30,
//     ativo: "true"
// }
// aluno = {
//     nome: joao,
//     idade: 30,
//     ativo: true
// }
// aluno = {
//     nome: 42,
//     idade: "30",
//     ativo: false
// }





//exercicio 

class Room{
    protected comprimento:number;
    protected largura:number
    protected tipo:string

    constructor(comprimento, largura, tipo){
        this.comprimento = comprimento;
        this.largura = largura;
        this.tipo = tipo;
    }

    calcula(){
        return this.comprimento*this.largura;
    }
}

class Sala extends Room{
    public colorCouch:string;

    constructor(color, comprimento, largura, tipo){
        super(comprimento, largura, tipo);
        this.colorCouch = color;
    }
}
const minhaSala = new Sala("rosa", 2, 4, "sala");

minhaSala.calcula();
















