function setup() {
  createCanvas(400, 400);
  frameRate(27.997)
  // noLoop()

}

let iter = 0;

let lPlaneX = 10;
let rPlaneX = 390;
let rPlaneY = 50;

function draw() {
  background(135, 206, 235);
  stroke(0);
  strokeWeight(0)
  

  // airplane moving right
  fill(255)
  rect(lPlaneX, 17, 3)
  rect(lPlaneX, 26, 3)
  rect(lPlaneX, 20, 6)
  rect(lPlaneX, 20, 6)

  lPlaneX = lPlaneX + 4

  if (lPlaneX > width + 25) {
    lPlaneX = -25;
  }

  // airplane moving left
  fill(255)
  rect(rPlaneX+3, rPlaneY-3, 3)
  rect(rPlaneX+3, rPlaneY+6, 3)
  rect(rPlaneX, rPlaneY, 6)
  rect(rPlaneX, rPlaneY, 6)
  rPlaneX = rPlaneX - 3

  if (rPlaneX > width - 10) {
    rPlaneX = 350
  }


  // Back background
  strokeWeight(0)
  fill(112, 128, 144)
  rect(90, 80, 80, 300)
  rect(180, 120, 80, 300)
  rect(300, 140, 80, 300)
  rect(0, 180, 80, 300)
  
  // Background
  fill(105)
  rect(10, 50, 80, 300)
  rect(120, 100, 80, 300)
  rect(250, 70, 80, 300)
  rect(10, 50, 80, 300)
  rect(350, 50, 80, 300)
  


  // Picture
  fill(58.8, 29.4, 0)
  rect(0, 350, 400, 50)

  fill(128,128,128)
  rect(100, 225, 200, 125)

  fill(174,198,207)
  rect(100, 230, 75, 100)
  rect(225, 230, 75, 100)

  strokeWeight(2.5)
  rect(180, 265, 40, 85)

  strokeWeight(0)
  fill(255, 251, 10)
  rect(140, 125, 25, 100)
  rect(190, 125, 25, 100)
  rect(240, 125, 25, 100)
  rect(150, 125, 100, 25)
  fill(255, 0, 0)
  rect(130, 200, 150, 25)

  fill(255, 251, 10)
  strokeWeight(1)
  rect(300, 245, 40, 10)

  // tires
  strokeWeight(0)
  fill(128)
  rect(320, 330, 10, 20)
  rect(370, 330, 10, 20)
  
  // car  
  fill(255)
  rect(315, 320, 70, 20)
  rect(325, 280, 50, 40)

  // lights
  fill(255, 0, 0)
  strokeWeight(2)
  circle(325, 330, 10)
  circle(375, 330, 10)
  
  // hand
  line(323, 304, 300, 300)
  
  
  // window
  strokeWeight(1)
  fill(79, 118, 255)
  rect(330, 290, 40, 20)

  if (iter % 2 != 0) {
    console.log("hi")
    print(iter)
  }
  iter = iter +1

  
  
  

  // Demonstration for points
  // stroke(0)
  // strokeWeight(12)
  // fill(0, 0, 255)
  // point(0, 0)
  // point(400, 0)
  // point(0, 300)
  // point(400, 300)
  // point(100, 100)

  // Bootstrap
  // fill(130, 255, 100, );
  // circle(300, 100, 50);

  // fill(255, 0, 0);
  // rect(0, 255, 300, 50);

  // stroke(0,0,255);
  // line(30, 180, 240, 70);
}
