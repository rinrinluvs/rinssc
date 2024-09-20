function setup() {
    createCanvas(400, 400)
    frameRate(120)

    noLoop();
    console.log(isLooping())
}

// frame count
// let frame = 0;
// let rectXPos = 10;
// let rectYPos = 150;
// let rectDim = 100

let xpos = 100;
let ypos = 100;
let xvel = 2;
let yvel = 1

let score = 0;

function draw() {
    background(128);
    circle(xpos, ypos, 50)
    stroke(255, 0, 0)

    // Draw text
    strokeWeight(2)
    stroke(255, 0, 0)
    fill(255)
    textFont("Helvetica")
    text(currentScore, 190, 100)
    textSize(100)
    
    textAlign("center")


    strokeWeight(0)


    //  hit right side
    if (xpos > 400) {
        xvel = -xvel
    }

    // hit left side
    if (xpos < 10) {
        xvel = -xvel

    }

    //  hit down side
    if (ypos > 400) {
        yvel = -yvel;
    }

    // hit up side
    if(ypos < 10) {
        yvel=-yvel
    }

    print(`MouseX: ${mouseX}, XPos: ${xpos}`)
    if (Math.abs(mouseX - xpos) < 25) {
        currentScore++
    }

    if (currentScore == 69) {
        alert("nice")
    }

    xpos = xpos+xvel
    ypos = ypos+yvel
    
    // stroke(0)
    // fill(0, 0, 255)
    // rect(rectXPos, rectYPos, rectDim)

}










































function mousePressed() {
    if (isLooping()) {
      noLoop();
    } else {
      loop();
    }
  }
  
  function keyPressed() {
    redraw()
  }