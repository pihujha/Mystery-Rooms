class Story1AD2 {
  constructor() {
    this.playerX = -120;
    this.playerY = 70;
    this.dooropenAD2 = false;
    this.backgroundAudio;
    this.preload();
    this.setup();
    this.pieceRotations = Array(9).fill(0);
    this.targetRotations = Array(9).fill(0);
    this.initPuzzleRotations();
    this.lastMouseState = false;
  }

  preload() {
    this.backgroundAudio = loadSound("story1.mp3");
    this.doorSound = loadSound("door.mp4");
    this.wrongans = loadSound("wrongans.mp4");
    this.img = loadImage("monalisa.jpeg");
  }

  setup() {
    createCanvas(1000, 400);
  }

  initPuzzleRotations() {
    this.pieceRotations = [
      radians(90),
      0,
      radians(90),
      radians(90),
      radians(180),
      radians(90),
      0,
      radians(180),
      radians(90),
    ];
  }
  drawPuzzlePieces() {
    const rows = 3;
    const cols = 3;

    const gapBetweenPieces = 5;

    const pieceWidth = (this.img.width + gapBetweenPieces) / 3;
    const pieceHeight = (this.img.height + gapBetweenPieces) / 3;

    const startX = 250;
    const startY = 120;
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        let pieceX = startX + i * pieceWidth;
        let pieceY = startY + j * pieceHeight;

        let piece = this.img.get(
          i * pieceWidth,
          j * pieceHeight,
          pieceWidth,
          pieceHeight
        );

        const initialAngle = radians(90);

        if (
          mouseX > pieceX &&
          mouseX < pieceX + pieceWidth &&
          mouseY > pieceY &&
          mouseY < pieceY + pieceHeight
        ) {
          const currentMouseState = mouseIsPressed && mouseButton === LEFT;

          if (currentMouseState && !this.lastMouseState) {
            this.pieceRotations[i * cols + j] += initialAngle;
          }

          this.lastMouseState = currentMouseState;
        }
        push();
        translate(pieceX + pieceWidth / 2, pieceY + pieceHeight / 2);
        this.pieceRotations[i * cols + j] %= TWO_PI;
        rotate(this.pieceRotations[i * cols + j]);
        imageMode(CENTER);
        image(piece, 0, 0, pieceWidth, pieceHeight);
        pop();
      }
    }
  }

  mouseReleased() {
    this.isMousePressed = false;
  }

  draw() {
    this.AD2();
    this.infobuttonAD2(15, 20);
    if (this.puzzleSolved()) {
      push();
      fill("white");
      textSize(50);
      text("2  5  1  0 ", 550, 200);
      pop();
    }
  }

  AD2() {
    background("black");
    this.createAD2Background();

    if (keyIsDown(LEFT_ARROW)) {
      this.playerX -= 3;
      if (this.playerX < -130) {
        this.playerX = -120;
      }
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.playerX += 3;
      if (this.dooropenAD2 == false) {
        if (this.playerX > 700) {
          this.playerX = 690;
        }
      }
    }

    if (this.dooropenAD2) {
      fill("rgb(31,31,31)");
      beginShape();
      vertex(width, 110);
      vertex(width - 75, 130);
      vertex(width - 75, 290);
      vertex(width, height - 90);
      endShape(CLOSE);

      fill("black");
      beginShape();
      vertex(width, 110);
      vertex(width - 75, 130);
      vertex(width - 75, 290);
      vertex(width, height - 90);
      endShape(CLOSE);
    }

    push();
    stroke("black");
    this.drawPuzzlePieces();
    translate(this.playerX, this.playerY);
    this.playerCrawling();
    pop();
    this.hint(800, 300);
    this.solution(850, 300);
  }

  createAD2Background() {
    fill("black");
    rect(0, 0, width, 100);
    rect(0, 400, width, -80);

    fill("#585F82");

    //left wall
    beginShape();
    vertex(0, 100);
    vertex(85, 120);
    vertex(85, 300);
    vertex(0, height - 80);
    endShape(CLOSE);

    //wall right
    beginShape();
    vertex(width, 100);
    vertex(width - 85, 120);
    vertex(width - 85, 300);
    vertex(width, height - 80);
    endShape(CLOSE);

    fill("#1C3C55");
    //roof
    beginShape();
    vertex(0, 100);
    vertex(85, 120);
    vertex(width - 85, 120);
    vertex(width, 100);
    endShape(CLOSE);

    fill("#16192A");
    //floor
    beginShape();
    vertex(0, height - 80);
    vertex(85, 300);
    vertex(width - 85, 300);
    vertex(width, height - 80);
    endShape(CLOSE);

    fill("rgb(31,31,31)");
    //left door
    beginShape();
    vertex(0, 110);
    vertex(75, 130);
    vertex(75, 290);
    vertex(0, height - 90);
    endShape(CLOSE);
    //wall right
    beginShape();
    vertex(width, 110);
    vertex(width - 75, 130);
    vertex(width - 75, 290);
    vertex(width, height - 90);
    endShape(CLOSE);
  }
  puzzleSolved() {
    for (let i = 0; i < this.pieceRotations.length; i++) {
      if (this.pieceRotations[i] !== this.targetRotations[i]) {
        return false;
      }
    }
    return true;
  }

  playerCrawling() {
    push();
    translate(100, 25);
    push();
    translate(350, -50);
    rotate(PI / 2);
    //neck
    fill(255, 205, 150);
    rect(196, 123, 10, 10);
    //face
    fill(255, 205, 150);
    ellipse(200, 100, 40, 50);
    //body
    fill(200);
    ellipse(202, 175, 35, 80);
    //eyes
    fill(0);
    ellipse(210, 95, 5, 5);
    pop();
    //legs
    fill(173, 216, 230);
    rect(135, 135, 25, 60);
    rect(155, 135, 14, 60);
    rect(155, 180, -50, 25);
    fill(150, 121, 105);
    ellipse(105, 190, 15, 35);
    fill(173, 216, 230);
    rect(170, 187, -60, 25);
    //shoes
    fill(150, 121, 105);
    ellipse(110, 198, 15, 35);
    //shirt

    fill(255, 205, 150);
    line(195, 145, 195, 165);
    line(210, 145, 210, 165);
    line(195, 165, 210, 165);
    rect(195, 160, 15, 45);
    pop();
  }

  infobuttonAD2(infobuttonX, infobuttonY) {
    push();
    translate(infobuttonX, infobuttonY);
    let distance = dist(mouseX, mouseY, infobuttonX + 50, infobuttonY + 50);
    // Check if the mouse is hovering over the circle
    if (distance < 40 / 2) {
      fill("white");
      rect(70, 100, 380, 150, 4, 4, 4, 4);
      fill("black");
      text(
        "You didn't think you won just yet, did you? \n Congratulations on reaching Air Duct 2, your final \n challenge. Explore the room with your mouse, solve the \n puzzle, and unveil the secrets it holds. Hidden within \n this duct is a 4-digit code that will lead you to victory. \n Retrieve the code and use it to exit the game, \n securing the coveted Kohinoor diamond. \n Best of luck on this final leg of your adventure!",
        72,
        120
      );
      fill("white");
      circle(50, 50, 20);
      fill("black");
      text("i", 49, 53);
    } else {
      fill("white");
      circle(50, 50, 20);
      fill("black");
      text("i", 49, 53);
    }
    pop();
  }
  hint(hintX, hintY) {
    push();
    translate(hintX, hintY);
    let distance = dist(mouseX, mouseY, hintX + 50, hintY + 50);

    // Check if the mouse is hovering over the circle
    if (distance < 40 / 2) {
      fill("orange");
      circle(46, 50, 28);
      fill("white");
      textSize(11);
      text("help", 35, 53);
      fill("white");
      rect(-180, -40, 180, 60, 4, 4, 4, 4);
      fill("black");
      textSize(11);
      text(
        "If you click the help button, you \n will get the solution to this \n riddle, but your time will be \n reduced by 2 minutes.",
        -175,
        -27
      );
      if (mouseIsPressed == true) {
        this.hintBox = true;
      }
    } else {
      fill("orange");
      circle(46, 50, 28);
      fill("white");
      textSize(11);
      text("help", 35, 53);
    }
    if (this.hintBox == true) {
      fill("white");
      rect(-200, -10, 190, 60, 4, 4, 4, 4);
      fill("black");
      textSize(11);
      text(
        "Click on the puzzle pieces to \ncomplete the Monalisa painting \n to retrieve the code to escape.",
        -195,
        5
      );
    }
    pop();
  }
  solution(solX, solY) {
    push();
    translate(solX, solY);
    let distance = dist(mouseX, mouseY, solX + 50, solY + 50);

    // Check if the mouse is hovering over the circle
    if (distance < 40 / 2) {
      fill("red");
      rect(24, 38, 44, 25, 1.5, 1.5, 1.5, 1.5);
      fill("white");
      textSize(11);
      text("answer", 26, 53);
      fill("white");
      rect(-180, -40, 180, 60, 4, 4, 4, 4);
      fill("black");
      textSize(11);
      text(
        "If you click the help button, you \n will get the solution to this \n riddle, but your time will be \n reduced by 5 minutes.",
        -175,
        -27
      );
      if (mouseIsPressed == true) {
        this.solutionBox = true;
      }
    } else {
      fill("red");
      rect(24, 38, 44, 25, 1.5, 1.5, 1.5, 1.5);
      fill("white");
      textSize(11);
      text("answer", 26, 53);
    }
    if (this.solutionBox == true) {
      fill("white");
      rect(-70, 35, 100, 25, 4, 4, 4, 4);
      fill("black");
      textSize(11);
      text("2510", -50, 51);
    }
    pop();
  }
}
