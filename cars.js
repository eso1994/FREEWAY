var xCars = [540, 540, 540, 20, 20, 20];
var yCars = [40, 150, 260, 213, 317, 97]
var velCars = [3, 5, 1, 8, 3, 3];
var widthCars = [50, 45, 50, 56, 45, 50]
var heightCars = [40, 40, 40, 34, 40, 40]

function carsImg(){
  for (let key = 0; key < cars.length; key++) {
  image(cars[key], xCars[key], yCars[key], widthCars[key], heightCars[key])
  }
}

function moveCars(){
  for (let right = 0; right <= 2; right++){
    xCars[right] -= velCars[right]
   }
  for (let left = 3; left <= 5; left++ ){
    xCars[left] += velCars[left]
  }
}

function loopCars(){
  for (let d = 0; d <= 2; d++){
    if (xCars[d] < -50) {
    xCars[d] = 640
    }
  }
  for (let e = 3; e <= 5; e++){
    if (xCars[e] > 650) {
    xCars[e] = -30
    }
  }
}