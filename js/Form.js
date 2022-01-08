class Form {

  constructor() {
    //initialize the properties of form class
    this.title = createElement('h2');

  }
  hide(){
    //hide title,input,button and greetings
    this.title.hide();

  }

  display(){
    //class properties to be corrected as this.propertyName
    title.html("Car Racing Game");
    title.position(displayWidth/2 - 50, 0);

    input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    button.position(displayWidth/2 + 30, displayHeight/2);

    //arrow function updated
    button.mousePressed(()=>{
      input.hide();
      button.hide();
      //update player name varibale
      var name = input.value();
      playerCount+=1;
      //update player index varibale

      player.update();
      player.updateCount(playerCount);
      //update player name varibale
      greeting.html("Hello " + name)
      greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

  }
}
