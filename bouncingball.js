function setup() {
    createCanvas(400, 300) // B: Walls
    // noLoop()
    // frameRate(20)
}

// variables

// div 2 = x pos
let ballXPos = 50
let ballYPos = 50
let ballXVelocity = Math.random() * 5 // 10 pixels every frame
let ballYVelocity = Math.random() * 5 // 10 pixels every frame
const lotteryWinners = [ballXPos, ballYPos]
const lotteryWinnersVel = [ballXVelocity, ballYVelocity]

let frame = 1 // E: time
let currentScore = 0 // D: score
let highScore = 0
let hasStarted = false
// if pressed start, draw the background, continue with game, if not, return.

// A - Bouncing ball
function draw() {
    if (!hasStarted) {
        background(128)
        // text(currentScore, 200, 25)
        textAlign(CENTER)
        rectMode(CENTER)
        textSize(50)
        text("START?", 200, 100)
        fill(0, 255, 0)
        rect(200, 150, 200, 50)
        // rect(250, 150, 50)
        fill(100)
        text("YES", 200, 168)
        // text(`High: ${highScore}`, 185, 10) 
        
        return;
    }

    if(currentScore > 50) {
        textSize(500);
    }
    rectMode(CORNER)
    textAlign(CENTER)
    textSize(12)
    background(128)

    // H - Reset & J - Implement feature
    if (frame == 1000) {
        // reset vars
        ballXPos = 50
        ballYPos = 50
        ballXVelocity = Math.random() * 5 // 10 pixels every frame
        ballYVelocity = Math.random() * 5 // 10 pixels every frame
        frame = 1
        hasStarted = false

        // I - Hi-Score
        if (currentScore > highScore) {
            highScore = currentScore
        }
        currentScore = 0

    }

    text(currentScore, 200, 25)
    text(`High: ${highScore}`, 200, 10)
    console.log(`Frame ${frame}`)

    frame++
    ballXPos = ballXPos + ballXVelocity
    ballYPos = ballYPos + ballYVelocity

    if (ballXPos < 370 || ballYPos < 275 || ballXPos > 30 || ballYPos > 25) {
        let idx = Math.floor(Math.random())
        lotteryWinners[idx] + (Math.random() *3)
    } 

    // console.log(ballXPos)
    // C - change the color
    if (ballXPos > 370) {
        ballXVelocity = -ballXVelocity
        console.log("Hit")
        fill(Math.floor(Math.random() * 255) + 1, Math.floor(Math.random() * 255) + 1, Math.floor(Math.random() * 255) + 1)
        // console.log(ballVelocity)
    }
    if (ballXPos < 25) {
        ballXVelocity = -ballXVelocity
        console.log("Hit")
        fill(Math.floor(Math.random() * 255) + 1, Math.floor(Math.random() * 255) + 1, Math.floor(Math.random() * 255) + 1)

        // console.log(ballVelocity)
    }
    if (ballYPos > 275 ) {
        ballYVelocity = -ballYVelocity
        console.log("Hit")
        fill(Math.floor(Math.random() * 255) + 1, Math.floor(Math.random() * 255) + 1, Math.floor(Math.random() * 255) + 1)

        // console.log(ballVelocity)
    }
    if (ballYPos < 25) {
        ballYVelocity = -ballYVelocity
        console.log("Hit")
        fill(Math.floor(Math.random() * 255) + 1, Math.floor(Math.random() * 255) + 1, Math.floor(Math.random() * 255) + 1)

        // console.log(ballVelocity)
    }

    if (Math.abs(mouseX - ballXPos) < 8) {
        currentScore++
    }


    // circle(200, 30, 50)

    // circle(200, 275, 50) // y hits bottom
    // circle(200, 25, 50) // y hits top
    // circle(25, 30, 50) // x hits left
    circle(ballXPos, ballYPos, 50) // x hits right

}

let delay = 1000
let lastClicked = 0

function mouseClicked(event) {
    //  G - A (Click too much, faster)
    
    if (!hasStarted) {
        if (mouseX > 100 && mouseX < 300 && mouseY > 125 && mouseY < 175) {
           hasStarted = true  
           console.log(hasStarted) 
        }
    }
    // console.log(event)
    if (lastClicked <= (Date.now() - delay)) {
        let adder = Math.floor(Math.random() * 2 + 1)
        ballXVelocity = adder + ballXVelocity
        ballYVelocity = adder + ballYVelocity
    }
    if (Math.abs(mouseX - ballXPos < 20)) {
        let scoreMultiplier = Math.floor(Math.random() * 2) + 1
        currentScore = currentScore * scoreMultiplier
    } else {
        currentScore = Math.ceil(currentScore / 2)
    }

    lastClicked = Date.now()
}