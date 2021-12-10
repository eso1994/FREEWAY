let xActors = [500, 100];
let yActors = [368, 368];
let actorsCollide = false;
let scorePlayer1 = 0;
let scorePlayer2 = 0;

function ActorsImg(){
  image(actors[0], xActors[0], yActors[0], 34, 34)
  image(actors[1], xActors[1], yActors[1], 34, 34)
}

function moveActors(){

//Movimentação sah
  if (keyIsDown(UP_ARROW)){
    yActors[0]--
  } else if (keyIsDown(DOWN_ARROW)){
    if (yActors[0] < 368){
    yActors[0]++
    }
  } else if (keyIsDown(39)){
    xActors[0]++
  } else if (keyIsDown(37)){
    xActors[0]--
  }
  
  //Movmentação eu
  if (keyIsDown(87)){
    yActors[1]--
  } else if (keyIsDown(83)){
    if (yActors[1] < 368) {
    yActors[1]++
    }
  } else if (keyIsDown(68)){
    xActors[1]++
  } else if (keyIsDown(65)){
    xActors[1]--
  }
}

function collide(){
  for (let i = 0; i < cars.length; i++) {
      actorsCollide =  collideRectCircle(xCars[i],     yCars[i], widthCars[i], heightCars[i], xActors[0], yActors[0], 15)
      if (actorsCollide){
        xActors[0] = 500;
        yActors[0] = 368;
        shipments[3].play();
        if (scorePlayer2 > 0){
        scorePlayer2--;
          
        }
      }  
    }
  
  for (let i = 0; i < cars.length; i++) {
      actorsCollide =  collideRectCircle(xCars[i],     yCars[i], widthCars[i], heightCars[i], xActors[1], yActors[1], 15)
      if (actorsCollide){
        xActors[1] = 100;
        yActors[1] = 368;
        shipments[2].play();
        if (scorePlayer1 > 0){
        scorePlayer1--;
        }
      }
  }
}

function scorePlayers(){
  if (yActors[0] < 15){
    scorePlayer2++;
    yActors[0] = 368;
    xActors[0] = 500;
    shipments[4].play();
  }
   if (yActors[1] < 15){
    scorePlayer1++;
    yActors[1] = 368;
    xActors[1] = 100;
    shipments[4].play();
  }
}