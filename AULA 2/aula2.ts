//Estrutura de objetos

// let nomeObject:{
//     propriedade1: tipo,
//     propriedade2: tipo,
//     propriedade3: tipo,
// }

/* Aqui eu declaro explicidamente o objeto pokemon */
let pokemon:{
    name:string,
    weight:number,
    weaknesses:string[]
}
/* Aqui eu populo meu objeto pokemon */
pokemon = {
    name: "Charmander",
    weight: 8.5,
    weaknesses: [
        "Water",
        "Rock"
    ]
}
/* Aqui crio a função pokedex que recebe como parâmetro um objeto também com a declaração explícita */
function pokedex(pokemon:{ name: string, weight: number, weaknesses: string[]}) {
    console.log(
        "Nome: "+ pokemon.name,
        "Peso: "+ pokemon.weight,
        "Primeira Fraquesa: "+ pokemon.weaknesses[0]
    );
}

pokedex(pokemon);
// consigo acessar a propriedade com o ponto (.)
pokemon.name = "Raichu";
pokemon.weaknesses = ["Ground","Rock"]


// Propriedades

//Outro exemplo
let filme:{
    nome?:"Senhor dos anéis", //Essa propriedade não é obrigatória por conta da interrogação (?)
    anoDeLancamento: 2002,
    diretor: "Peter Jackson"
}

console.log(filme.nome); // Imprime a propriedade nome
console.log(filme.anoDeLancamento); // Imprime a propriedade anoDeLancamento
console.log(filme.diretor) // Imprime a propriedade diretor


//Classes
class Jogo{
    nome: string;
    categoria: string;
    anoDeLancamento: number;
    tamanho: number;

    constructor(){}
}
// Não é obrigatório inicializar seus
// atributos, mesmo sem a declaração "?"
const game = new Jogo();
game.nome = "Valorant";
game.categoria = "FPS";
game.anoDeLancamento = 2020;

