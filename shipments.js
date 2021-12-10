let fundo;
let sah;
let eu;
let carro1;
let carro2;
let carro3;
let oposto1;
let oposto2;
let oposto3;
let somTrilha;
let somColisaoEu;
let somColisaoSah;
let somPonto;

const shipments = [fundo, somTrilha, somColisaoEu, somColisaoSah, somPonto];
const actors = [sah, eu];
const cars = [carro1, carro2, carro3, oposto1, oposto2, oposto3];

function preload() {
  actors[0]  =  loadImage("image/samara.png")
  actors[1]  =  loadImage("image/evandro.png")
  cars[0]  =  loadImage("image/carro-1.png")
  cars[1]  =  loadImage("image/carro-2.png")
  cars[2]  =  loadImage("image/carro-3.png")
  cars[3]  =  loadImage("image/oposto1.png")
  cars[4]  =  loadImage("image/oposto2.png")
  cars[5]  =  loadImage("image/oposto3.png")
  shipments[0]  =  loadImage("image/estrada.png")
  shipments[1]  =  loadSound("sounds/trilha.mp3")
  shipments[2] =  loadSound("sounds/colidiu.mp3")
  shipments[3] =  loadSound("sounds/colidiu2.mp3")
  shipments[4] =  loadSound("sounds/pontos.wav")
}