var mensagem;
let exibirMensagem = function(msg) {
    console.log(msg);
};

if (true) {
    mensagem = 'Olá mundo'; //no bloco if, a variável é atribuída, mas tem escopo global por ter sido declarada global
    exibirMensagem(mensagem);
}
exibirMensagem(mensagem) //não funcionaria pois está fora do bloco