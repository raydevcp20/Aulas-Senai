function function1() {
    var soma = function2([12, 23]);
    var obj = {
        nome: "minha Função",
        "function": function2
    };
    console.log(obj["function"]);
    console.log(function2([10, 30]));
}
function function2(arr, arr2) {
    console.log(arr2);
    return arr[0] + arr[1];
}
function1();
