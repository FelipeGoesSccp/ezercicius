let idade = 25;

if (true) {
    var idade = 30;
    console.log("Dentro do bloco:", idade); // será impresso 30
}

console.log("Fora do bloco:", idade); // será impresso 25

//após trocar let por var deu erro nas variáveis. Var não respeita o bloco e permite redeclaração