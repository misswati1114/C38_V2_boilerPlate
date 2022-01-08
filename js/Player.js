class Player {
  constructor(){
    //initialize the properties of Player class

  }

  //no chnage
  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  //no chnage
  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  //update both name and distance to the database
  update(name){
    //updated the node formation in database
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:name,
      
    });
  }

  //write a static function to get the information of all the players 
  static getPlayerInfo(){
   
  }


}
