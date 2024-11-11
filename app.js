let listasDeNumerosSorteados = [];
let numeroLimite = 1000
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', "jogo do número secreto");
    exibirTextoNaTela('p', "Escolha nr entre 1 e 10");
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
    exibirTextoNaTela('h1', 'Acertou');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `"Vc descobriu! com ${tentativas} ${palavraTentativa}"`;
    exibirTextoNaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (chute > numeroSecreto) {
        exibirTextoNaTela('p', 'O nr é menor');
        } else {
            exibirTextoNaTela('p', 'O nr é maior');
        }
        tentativas ++;
        limparCampo();

    }
}

function gerarNumeroAleatorio() {
    let numeroSecreto = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listasDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listasDeNumerosSorteados = [];
    }
    if (listasDeNumerosSorteados.includes(numeroSecreto)) {
        return gerarNumeroAleatorio();
    }   else {
        listasDeNumerosSorteados.push(numeroSecreto);
        console.log(listasDeNumerosSorteados);
        return numeroSecreto;

    }
}


function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}



