function variaveis(){
    let variavel01 = "Eu sou apenas local";
    const variavel02 = "Eu sou apenas local e não mudo meu valor";
    var variavel03 = "Eu sou apenas global e posso ser modificado";

    //let
    if(variavel01){
        let souLet = 42;
    }
    // fora do bloco for o souLet não existe 
    // soulet = 43; // Error


    //const 
    //como a variável variavel02 é contante o seu valor não pode ser alterado
    // variavel02 = "Não é possível alterar o valor";

    //var
    variavel03 = "Posso receber qualquer valor";
    if(variavel03){
        var souVar = "Aqui eu existo"
    }
    souVar = "Aqui eu também existo";
}

function tiposVariaveis(){
    let souTexto: string = "";
    let souNumero: number = 12;
    let souBooleano: boolean = true;
    let souAny: any = "Qualquer coisa";

    // souTexto = 12 //Errado
    // souTexto = "Pode também receber outro texto" //Certo

    // souNumero = "Isso não é permitido"; // Errado
    // souNumero = 42; //Certo

    // souBooleano = 43; //Errado
    // souBooleano = false; //Certo

    souAny = "Isso é permitido"; //Certo
    souAny = true; //Certo
    souAny = 42; //Certo
    souAny = []; //Certo
    souAny = {}; //Certo


    // Em caso de array

    let arrayTeste: string[] = ["Array", "de", "strings"];
    // arrayTeste = [12, 12, 12] // Isso implica erro

    //Em outros casos:
    // let nomeArray: tipoDoArray[] = [];
}

function arrowFunction(){
    let arrowFunction:any;

    arrowFunction = (data:any)=>{ "Não preciso declarar o retorno" }
    console.log(arrowFunction)
    //isso irá imprimir a arrow function como um todo e não somente a string "Não preciso declarar o retorno"
}


//Exemplos de funções 
function function1(){
    let obj:{nome: string, function: any} = {
        nome:"minha Função",
        function: function2
    }

    console.log(obj.function);
}
function1();


//exemplo 2
function function2(arr: number[], arr2?: number[]): number{
    console.log(arr2) // imprimirá 20, 25
    // arr[0] = 0
    // arr[1] = 25
    return arr[0]+arr[1]; //retornará 25
}

function2([0,12], [20,25]);


