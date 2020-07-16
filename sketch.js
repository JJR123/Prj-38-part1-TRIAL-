var canvas, groundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, plr1, plr2, plr3, plr4;

var plr1Image, plr2Image, plr3Image, plr4Image, trackImage;  



function preload(){ 

  plr1Image=loadImage("images/Runner1.png");  
  
  plr2Image=loadImage("images/Runner2.png");  
 
  plr3Image=loadImage("images/Runner3.png");  
  
  plr4Image=loadImage("images/Runner4.png"); 
  
  trackImage=loadImage("images/track2.png"); 

  groundImage=loadImage("images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth-10, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){ 
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  } 
  if(gameState===2){ 
    game.end(); 

  } 
}
