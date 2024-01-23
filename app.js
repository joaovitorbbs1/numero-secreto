let numerosSorteados = [];
let numeroSecreto = gerarNumero();
let tentativas = 1;

function escreverTitulo(tag,texto){
   let campo = document.querySelector(tag);
   campo.innerHTML = texto;
}

escreverTitulo('h1',"Número Secreto");
escreverTitulo('p', "Escolha Um Número De 1 a 10");

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto){
        let mensagemTentativa = tentativas > 1 ? "Tentativas" : "Tentativa";
        escreverTitulo('h1',"Parabéns!");
        escreverTitulo('p',`Você Acertou o Número Secreto Com ${tentativas} ${mensagemTentativa}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if (chute > numeroSecreto) {
               escreverTitulo('p',`O Número Secreto é Menor`); 
        } else {
            escreverTitulo('p',`O Número Secreto é Maior`);  
        }
        tentativas++;
        limparCampo();
    }
}


function gerarNumero() {
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    let quantidadeElementosLista = numerosSorteados.length;

    if (quantidadeElementosLista == 10) {
        numerosSorteados = [];
    }
    if (numerosSorteados.includes(numeroEscolhido)){
        return gerarNumero();
    } else {
        numerosSorteados.push(numeroEscolhido);
        console.log(numerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumero();
    tentativas = 1;
    limparCampo();
    escreverTitulo('h1',"Número Secreto");
    escreverTitulo('p', "Escolha Um Número De 1 a 10");
    document.getElementById('reiniciar').setAttribute('disabled', true);
}