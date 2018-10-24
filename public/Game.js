let socket;
let game;
let menu;
let gameState;

function setup() {

  menu = new Menu();
  game = new Game();
  gameState = menu;

  let canvas = createCanvas(800,800);
  canvas.parent("gamecontainer");
  socket = io('http://localhost:80');
  gameState = game;


}

function draw() {
  background(0);

  gameState.show();
}


class Game {
  constructor() {

  }

  show(){
    ellipse(mouseX, mouseY, 10, 10);
  }
}



class Menu{
  constructor() {

  }

  show(){
    rect(0,0,100,100);
  }
}
