class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  //start function modified
  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    //create car sprites and add them to cars array
    
  }

  // play function added
  play(){

    //hide the form
    
    //get players information
    
    
    if(allPlayers !== undefined){
      
      //for the cars array, declare and define the index
      
      //for the cars array, declare and define x position
      
      //for the cars array, declare y position
      

      for(var plr in allPlayers){
        //add 1 to the index for every loop

        //position the cars a little away from each other in x direction

        //use data form the database to display the cars in y direction
        
        //update x and y position of cars in every loop
        

        //if the index of the player matches the current player, update sprite color and position the camera
        


       
      }

    }

    //increase the distance of each player and update it in the database
    if(keyIsDown(UP_ARROW) && player.index !== null){
      
    }

    drawSprites();
  }
}
