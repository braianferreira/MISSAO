const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas

{

enunciado: "Qual é o Impacto da fotossíntese na atmosfera terrestre?",

alternativas: [A fotossíntese é um processo vital realizado por plantas, algas e algumas bactérias, onde a luz solar é convertida em energia química. Durante a fotossíntese, o dióxido de carbono é absorvido e o oxigênio é liberado.
fotossíntese ajuda a reduzir a concentração de dióxido de carbono na atmosfera, mitigando os efeitos das mudanças climáticas.
{

  
texto: ".",

afirmacao: "afirmacaol"

texto: "A fotossíntese é um processo vital realizado por plantas, algas e algumas bactérias, onde a luz solar é convertida em energia química. Durante a fotossíntese, o dióxido de carbono é absorvido e o oxigênio é liberado. .",

afirmacao: "A fotossíntese ocorre principalmente nas folhas das plantas, onde os cloroplastos contêm a clorofila, o pigmento responsável por absorver a luz solar."

1

enunciado: "Como você pode ajudar a combater a disseminação de fake news, especialmente as que perpetuam o r?",

alternativas: [

{

texto: "Verificando a veracidade das informações antes de compartilhar qualquer conteúdo, especialmente sobre temas sensíveis como racismo.",

afirmacao: "afirmacao3"

texto: "Educando amigos e familiares sobre os perigos das fake news e incentivando-os a não compartilhar conteúdos falsos que perpetuam o racismo.",

afirmacao: "afirmacao4"

I

enunciado: "Como podemos incentivar o uso de energia solar e outras formas de energia limpa, especialmente em comunidades carentes?",

alternativas: [

{

texto: "Defendendo políticas públicas que subsidiem a energia solar para familias de baixa renda.",

afirmacao: "afirmacao5"

texto: "Promovendo a instalação de painéis solares em escolas e centros comunitários de comunidades marginalizadas.", afirmacao: "afirmacao6"

}

}

];

}
let atual = 0;

let perguntaAtual;

let historiaFinal = "";

function mostraPergunta() { if (atual > perguntas.length) {

mostraResultado();

return; I

perguntaAtual perguntas (atual);

caixaPerguntas.textContent perguntaAtual.enunciado;

caixaAlternativas.textContent

textoResultado.textContent

mostraAlternativas();

}

function mostraAlternativas () {

for (const alternativa of perguntaAtual.alternativas) { const botaoAlternativa document.createElement("button"); botaoAlternativa.textContent alternativa.texto; botaoAlternativa.addEventListener("click", ()=> resposta Selecionada (alternativa));

caixaAlternativas.appendChild (botaoAlternativa);

function respostaSelecionada (opcaoSelecionada) {

const afirmacao opcaoSelecionada.afirmacao; historiaFinal + afirmacao +"";

atual++

mostraPergunta();

function mostraResultado () {

caixaPerguntas.textContent "Resumindo..."; textoResultado.textContent historiaFinal;

caixaAlternativas.textContent

mostraPergunta();

}


