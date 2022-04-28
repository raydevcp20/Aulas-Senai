class ClasseTeste{
    nomeAluno:string;
    public nota1:number; // Ter ou não o public é a mesma coisa
    nota2:number; // Aqui o atributo também é public
    media:number;

    constructor(nomeAluno: string, nota1:number, nota2:number){
        this.nomeAluno = nomeAluno;
        this.nota1 = nota1;
        this.nota2 = nota2;
    }

    calculaMedia(){
        this.media = (this.nota1 + this.nota2) / 2;
        console.log(this.media);
    }
}

let classe = new ClasseTeste("Aluno", 10, 6);

classe.calculaMedia();
classe.nota1 // É possível acessar o atributo nota1



// Modificadores de acesso

//exemplo de public
class ExemploPublic{
    public comprimento:number;
    public largura:number;
    public tipo:string;

    constructor(comprimento:number, largura:number, tipo:string){
        this.comprimento = comprimento;
        this.largura = largura;
        this.tipo = tipo;
    }

}
let classePublic = new ExemploPublic(12, 12, "Quadrado");
classePublic.comprimento // é possível acessar
classePublic.largura // é possível acessar
classePublic.tipo // é possível acessar



//exemplo de Protected

class Banco{
    protected numeroConta:number;
    protected nome:string;
    protected tipo:string;

    constructor(numeroConta:number, nome:string, tipo:string){
        this.numeroConta = numeroConta;
        this.nome = nome;
        this.tipo = tipo;
        
    }

}

class Poupanca extends Banco{
    public valor:string;

    constructor(numeroConta, nome, tipo, valor){
        super(numeroConta, nome, tipo);
        this.valor = valor; 
    }

    deposito(){
        this.numeroConta = 231234;
    }
}

let classeProtected = new Poupanca(12345678, "Aluno", "Poupanca", 5400);



//exemplo de Private

class exemploPrivate{
    private comprimento:number;
    private largura:number
    private tipo:string

    constructor(comprimento:number, largura:number, tipo:string){
        this.comprimento = comprimento;
        this.largura = largura;
        this.tipo = tipo;
    }

    metodoExemplo(){
        console.log(this.largura); // aqui você consegue acessar
    }

}
let classePrivate = new exemploPrivate(12, 12, "Círculo");
//Esperimente descomentar a linha de baixo e apague o ponto depois digite de novo
// observe que a unica opção ofertada é o método metodoExemplo()
// classePrivate. 




// Resolvendo o exercicio do slide

class Room{
    protected type:string; //crio minha propriedade protected
    protected length:number;
    protected width: number;

    constructor(type:string, length:number, width:number){ // implemento o construtor
        this.type = type;
        this.length = length;
        this.width = width;
    }

    calcArea():number{ // método que calcula a área
        return this.length*this.width;
    }
}

class Liveroom extends Room{ // Classe Liveroom que extende a Room
    public colorCouch:string;

    constructor(type:string, length:number, width:number, colorCouch:string){
        super(type, length, width); // método que chama o construtor da superclasse Room
        this.colorCouch = colorCouch;
    }
}

class Bedroom extends Room{ // Classe Bedroom que extende a Room
    private hasSafeBox:boolean;

    constructor(type:string, length:number, width:number, hasSafeBox:boolean){
        super(type, length, width); // método que chama o construtor da superclasse Room
        this.hasSafeBox = hasSafeBox;
    }
}


let souBedroom = new Bedroom("Escuro", 3, 3, false);
console.log(souBedroom.calcArea());

let souLiveroom = new Liveroom("Grande", 4, 4, "Marrom");
console.log(souLiveroom.calcArea());















