// Efeito de digitação no texto
const texto = "Clara e Luca";
let indice = 0;
const velocidade = 150;

function digitar() {
    if (indice < texto.length) {
        document.getElementById("texto-animado").innerHTML += texto.charAt(indice);
        indice++;
        setTimeout(digitar, velocidade);
    }
}

digitar();

// Cálculo do tempo juntos
const dataInicio = new Date("2024-06-26"); // Substitua pela data do início do namoro
const dataAtual = new Date();

const diferencaTempo = Math.abs(dataAtual - dataInicio);
const diferencaDias = Math.ceil(diferencaTempo / (1000 * 60 * 60 * 24));

document.getElementById("tempo-juntos").innerHTML = `Juntos há ${diferencaDias} dias!`;

document.addEventListener('DOMContentLoaded', function() {
    const botaoMusica = document.getElementById('botao-musica');
    const audio = document.getElementById('musica-de-fundo');

    botaoMusica.addEventListener('click', function() {
        audio.play();
        botaoMusica.style.display = 'none'; // Opcional: oculta o botão após clicar
    });
});