let listaDeNumerosSorteados = [];
let numeroLimite = 10; 
let numeroAleatorio = gerarNumeroAleatorio(); 
let tentativas = 1; 
 

//let titulo = document.querySelector('h1'); 
//titulo.innerHTML = 'Jogo do número Secreto!'; 

//let paragrafo = document.querySelector('p'); 
//paragrafo.innerHTML = 'Escolha um número de 1 a 10'; 

function exibirTextoNaTela(tag , texto){
let campo = document.querySelector(tag); 
campo.innerHTML = texto; 
responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate : 1.2}); 
}

function mensagemInicial (){
exibirTextoNaTela ('h1' , 'Jogo do número secreto!');
exibirTextoNaTela ('p' , 'Escolha um número de 1 a 10!');
}

mensagemInicial(); 

function verificarChute(){
    let chute = document.querySelector('input').value; 
    if (numeroAleatorio == chute){
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; 
        let mensagemDeTentavivas = `Parabéns, você acertou o número secreto em ${tentativas} ${palavraTentativa}`; 
        exibirTextoNaTela('h1' , 'Você acertou!')
        exibirTextoNaTela('p' , mensagemDeTentavivas);
        document.getElementById('reiniciar').removeAttribute('disabled'); 
        limparCampo(); 
    } 
    if (chute > numeroAleatorio){
        exibirTextoNaTela('p' , 'O seu chute é maior do que o número secreto'); 
        limparCampo(); 
    } if(chute < numeroAleatorio){
        exibirTextoNaTela('p' , 'O seu chute é menor do que o número secreto.');
        limparCampo(); 
    }
    tentativas++
    
}

function gerarNumeroAleatorio(){
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementos = listaDeNumerosSorteados.length; 
   if(quantidadeDeElementos == numeroLimite){
    listaDeNumerosSorteados = [];   
   }

   if (listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio(); 
   } else { listaDeNumerosSorteados.push(numeroEscolhido)
    console.log(listaDeNumerosSorteados); 
    return numeroEscolhido; 
   }
}

function limparCampo() {
    chute = document.querySelector('input'); 
    chute.value = ''; 
    
}

function reiniciarJogo() {
    numeroAleatorio = gerarNumeroAleatorio(); 
    limparCampo
    tentativas = 1; 
    mensagemInicial(); 
    document.getElementById('reiniciar').setAttribute('disabled' , true); 
}