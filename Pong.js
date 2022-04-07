//Variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

//Velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//Variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let comprimentoRaquete = 10;
let alturaRaquete = 90;

//Variaveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//Variaveis de pontuacao
let meusPontos = 0;
let pontosOponente = 0;


let colidiu = false;

//Funcoes
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0); //Cor de fundo
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaRaquete();
  colisaoRaqueteBiblioteca(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  colisaoRaqueteBiblioteca(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPontos();
}
  
function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro); //Criação da bolinha
}
  
function movimentaBolinha(){
  xBolinha += velocidadeXBolinha; //Velocidade horizontal
  yBolinha += velocidadeYBolinha; //Velocidade vertical
}
  
function verificaColisaoBorda(){
    //Verificação de colisão com as bordas
  if (xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio <0){
    velocidadeYBolinha *= -1;
  }
}
  
function mostraRaquete(x, y){
  rect(x, y, comprimentoRaquete, alturaRaquete); //Criacao da raquete
}

  
function movimentaRaquete(){
  if (keyIsDown(UP_ARROW)){ //Movimentos da raquete
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function colisaoRaqueteBiblioteca(x, y){
  colidiu = collideRectCircle(x, y, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raio);
  if (colidiu){
    velocidadeXBolinha *= -1; //Verificacao de colisão usando a biblioteca 'p5.collide2d' encontrada para p5js
  }
}

function movimentaRaqueteOponente(){ //Movimentos da raquete do oponente
  if (keyIsDown(87)){
    yRaqueteOponente -= 10;
  }
  if (keyIsDown(83)){
    yRaqueteOponente += 10;
  }
}

function incluiPlacar(){ //Funcao para mostrar placar
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(255, 140, 0));
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosOponente, 470, 26);
}

function marcaPontos(){ //Adicionando os pontos
  if (xBolinha > 590){
    meusPontos++;
  }
  if (xBolinha < 10){
    pontosOponente++;
  }
}