var canvas, backgroundImage;

var gameState = 0;
var playerCount;

//add variables allPlayers and distance, define distance with 0


var database;

var form, player, game;

//add variables for 4 cars and a cars array



function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){

  //update game  state 
  

  //update game play
 
}
