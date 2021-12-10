function setup() {
    createCanvas(600, 400);
    shipments[1].loop();
  }
  
  function draw() {
    background(shipments[0]); 
    ActorsImg();
    moveActors();
    carsImg();
    moveCars();
    loopCars();
    collide();
    scorePlayers();
    stroke(155)
    fill(199,21,133);
    textSize(19);
    text(scorePlayer1, 170, 26);
    text(scorePlayer2, 430, 26);
    text('Evandro', 95, 26);
    text('Samara', 445, 26);
      
    }