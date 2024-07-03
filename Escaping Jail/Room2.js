class Story2Room2 {
  constructor() {
    this.dooropenR2 = false;
    this.playerX = -120;
    this.playerY = 65;
    this.morseCodeSound = null;
    this.walkmanClicked = false;
    this.electricBoxDoorOpen = false;
    this.loadAudio();

  }
  

  setup() {
    this.img = loadImage("https://miro.medium.com/v2/resize:fit:1163/1*1mOO6Lmh9ASEp_BRZvOJKQ.jpeg");
  }

  loadAudio() {
    this.morseCodeSound = loadSound("morsecode.wav");
  }


  draw() {
    background(100, 100, 100);
    this.createroomBackground();
    push();
    scale(0.1);
    this.paper(300, 800);
    pop();
    this.doors();
    this.electricbox();
    this.walkman();
    this.electricboxdoor();
    this.pipes();
    this.window();
    push();

    if (keyIsDown(LEFT_ARROW)) {
      this.playerX -= 3;
      if (this.playerX < -130) {
        this.playerX = -120;
      }
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.playerX += 3;
      if (this.dooropenR2 == false) {
        if (this.playerX > 700) {
          this.playerX = 690;
        }
      }
    }

    push();
    stroke("black");
    translate(this.playerX, this.playerY);
    this.player();
    pop();
    this.hint(800, 300);
    this.solution(850, 300);
    if (
      mouseX > 455 &&
      mouseX < 475 &&
      mouseY > 165 &&
      mouseY < 195 &&
      mouseIsPressed
    ) {
      this.walkmanClicked = true;
    }
    this.infobutton(0, 0);
    this.hover();
  }
  createroomBackground() {
    function walls() {
      fill(70, 70, 70);

      //left wall
      beginShape();
      vertex(0, 0);
      vertex(85, 20);
      vertex(85, 300);
      vertex(0, height);
      endShape(CLOSE);

      //wall right
      beginShape();
      vertex(width, 0);
      vertex(width - 85, 20);
      vertex(width - 85, 300);
      vertex(width, height);
      endShape(CLOSE);

      fill("rgb(41,40,40)");
      //roof
      beginShape();
      vertex(0, 0);
      vertex(85, 20);
      vertex(width - 85, 20);
      vertex(width, 0);
      endShape(CLOSE);

      fill(41, 40, 40);
      //floor
      beginShape();
      vertex(0, height);
      vertex(85, 300);
      vertex(width - 85, 300);
      vertex(width, height);
      endShape(CLOSE);
    }
    walls();
  }
  doors() {
    fill(140, 140, 140);

    beginShape();
    vertex(width - 25, height / 3);
    vertex(width - 65, height / 3);
    vertex(width - 65, 330);
    vertex(width - 25, 370);
    endShape(CLOSE);

    if (this.dooropenR2) {
      fill(100, 100, 100);
      beginShape();
      vertex(width - 135, height / 3);
      vertex(width - 65, height / 3);
      vertex(width - 65, 330);
      vertex(width - 135, 330);
      endShape(CLOSE);

      fill(0);
      beginShape();
      vertex(width - 25, height / 3);
      vertex(width - 65, height / 3);
      vertex(width - 65, 330);
      vertex(width - 25, 370);
      endShape(CLOSE);
    }
  }
  player() {
    //neck
    fill(255, 205, 150);
    rect(196, 123, 10, 10);
    //face
    fill(255, 205, 150);
    ellipse(200, 100, 40, 50);
    //body
    fill("orange");
    ellipse(202, 175, 35, 90);
    //legs
    fill("orange");
    rect(185, 187, 25, 85);
    rect(205, 187, 14, 85);
    //shoes
    fill(150, 121, 105);
    ellipse(210, 275, 30, 15);
    ellipse(197, 275, 30, 15);
    //shirt
    fill(255, 205, 150);
    line(195, 145, 195, 165);
    line(210, 145, 210, 165);
    line(195, 165, 210, 165);
    rect(195, 165, 15, 45);
    //eyes
    fill(0);
    ellipse(210, 95, 5, 5);
  }

  paper(paperx, papery) {
    push();
    translate(paperx, papery);
    for (let i = 0; i <= 1.0; i += 0.01) {
      let lerpedColor = lerpColor(
        color("rgb(222, 171, 122)"),
        color("rgb(43, 15, 14)"),
        i
      );
      noStroke();
      fill(lerpedColor);
      rect(0, 0 + i * 250, 230, 600 * 0.1);
    }
    pop();
  }

  hover() {
    push();
    if (mouseX > 30 && mouseX < 50 && mouseY > 80 && mouseY < 110) {
      this.paper(130, 50);
      fill("white");
      textSize(13);
      text(
        " Dear [Prisoner's Name], \n Time for a sonic adventure. Hunt for earphones in your vicinity. Once you've got them, tune in to the Morse code echoing through the walls. The solution to your next move lies in those rhythmic \n dots and dashes.\n \nDecode the message, and you'll uncover the key to the next \n chapter of your journey. Don't miss a beat.\n\n Best,\n [Escaped Person's Pseudonym]",
        145,
        70,
        210,
        300
      );
      this.paper(380, 50);
      image(this.img, 395, 75, 200, 180);
    }
    pop();
  }
  infobutton(infobuttonX, infobuttonY) {
    push();
    translate(infobuttonX, infobuttonY);
    let distance = dist(mouseX, mouseY, infobuttonX + 50, infobuttonY + 50);

    // Check if the mouse is hovering over the circle
    if (distance < 40 / 2) {
      fill("white");
      rect(70, 70, 310, 110, 4, 4, 4, 4);
      fill("black");
      text(
        "Well done, persistent traveler! The alleyway awaits, a narrow passage veiled in mystery. The third letter unveils a riddle—ponder and solve. Let the enigmatic words guide you through this secluded path. Your determination paves the way to liberation.",
        78,
        80,
        300,
        100
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

  walkman() {
    push();
    translate(455, 160);
    fill(100);
    //rect(0, 0, 10, 15);
    beginShape();
    vertex(0, 0);
    vertex(15, 0);
    vertex(23, 15);
    vertex(7, 15);
    endShape(CLOSE);

    fill(150);
    beginShape();
    vertex(3, 2);
    vertex(14, 2);
    vertex(19, 12);
    vertex(8, 12);
    endShape(CLOSE);

    fill(0);
    ellipse(-15, -30, 5, 5);
    ellipse(5, -30, 5, 5);
    line(-15, -30, 5, -10);
    line(5, -30, 5, -10);
    line(5, -10, 7, 0);

    if (
      this.walkmanClicked &&
      this.morseCodeSound !== null &&
      this.morseCodeSound.isLoaded()
    ) {
      this.morseCodeSound.play();
      this.walkmanClicked = false;
    }

    pop();
  }
  electricbox() {
    push();
    translate(400, 100);
    fill(200, 200, 200);
    rect(30, 20, 60, 60);
    pop();
  }

  electricboxdoor() {
    push();
    translate(400, 100);

    if (this.electricBoxDoorOpen) {
      fill(200, 200, 200);
      beginShape();
      vertex(30, 20);
      vertex(10, 40);
      vertex(10, 100);
      vertex(30, 80);
      endShape(CLOSE);
    } else {
      fill(200, 200, 200);
      rect(30, 20, 60, 60);
    }
    pop();
    if (
      !this.electricBoxDoorOpen &&
      mouseX > 400 + 30 &&
      mouseX < 400 + 30 + 60 &&
      mouseY > 100 + 20 &&
      mouseY < 100 + 20 + 60 &&
      mouseIsPressed
    ) {
      this.electricBoxDoorOpen = true;
    }
  }
  window() {
    push();
    fill(25, 25, 112);
    rect(150, 70, 100, 50);
    fill(255);
    ellipse(170, 85, 15, 15);
    fill(0);
    // horizontal grills
    for (let i = 0; i < 5; i++) {
      rect(150, 70 + (i * 50) / 4, 102, 2);
    }
    // vertical grills
    for (let i = 0; i < 6; i++) {
      rect(150 + (i * 100) / 5, 70, 2, 50);
    }

    pop();
  }
  pipes() {
    push();
    translate(400, 100);
    fill(140, 140, 140);
    rect(90, 40, 60, 5);
    rect(150, 45, 5, -125);
    rect(155, 40, 90, 5);
    rect(240, 40, 5, 90);
    rect(240, 130, 50, 5);
    fill(180);
    rect(290, 120, 30, 30);
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
      textSize(12);
      text("Decode the morse code :  \n. ...  -.-.  .-  .--.  . ", -195, 5);
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
      text("escape", -50, 51);
    }
    pop();
  }
}
