class Story2Room3 {
  constructor() {
    this.dooropenR3 = false;
    this.playerX = -120;
    this.playerY = 65;

    this.preload();
  }

  preload() {
    this.img = loadImage("puzzle.jpg");
  }


  draw() {
    background("#DCD8D8");
    this.createroom1Background();
    push();
    scale(0.1);
    this.paper(300, 800);
    pop();
    this.clock();

    this.table();
    this.counter();
    this.plates(117, 187);
    this.plates(180, 187);
    this.stack();
    this.bowl(354, 187);
    this.cup();
    this.doors();

    if (keyIsDown(LEFT_ARROW)) {
      this.playerX -= 3;
      if (this.playerX < -130) {
        this.playerX = -120;
      }
    }

    if (keyIsDown(RIGHT_ARROW)) {
      this.playerX += 3;
      if (!this.dooropenR3 && this.playerX > 700) {
        this.playerX = 690;
      }
    }

    push();
    stroke("black");
    translate(this.playerX, this.playerY);
    this.player();
    pop();

    this.infobutton(0, 0);
    this.hint(800, 300);
    this.solution(850, 300);
    this.hover();
  }

  createroom1Background() {
    function walls() {
      fill("rgb(128,124,124)");
      rect(80, 200, 1000, 10);
      fill("rgb(101,101,101)");
      rect(80, 210, 1000, 100);
      fill("#AEABAB");
      //left wall
      beginShape();
      vertex(0, 0);
      vertex(85, 20);
      vertex(85, 300);
      vertex(0, height);
      endShape(CLOSE);

      fill("rgb(128,124,124)");
      beginShape();
      vertex(85, 200);
      vertex(85, 210);
      vertex(0, 280);
      vertex(0, 270);
      endShape(CLOSE);

      fill("rgb(101,101,101)");
      beginShape();
      vertex(85, 210);
      vertex(85, 300);
      vertex(0, height);
      vertex(0, 280);
      endShape(CLOSE);

      fill("#AEABAB");
      //wall right
      beginShape();
      vertex(width, 0);
      vertex(width - 85, 20);
      vertex(width - 85, 300);
      vertex(width, height);
      endShape(CLOSE);

      fill("rgb(128,124,124)");
      beginShape();
      vertex(width - 85, 200);
      vertex(width - 85, 210);
      vertex(width, 299);
      vertex(width, 270);
      endShape(CLOSE);

      fill("rgb(101,101,101)");
      beginShape();
      vertex(width - 85, 210);
      vertex(width - 85, 300);
      vertex(width, height);

      vertex(width, 280);
      endShape(CLOSE);

      fill("rgb(41,40,40)");
      //roof
      beginShape();
      vertex(0, 0);
      vertex(85, 20);
      vertex(width - 85, 20);
      vertex(width, 0);
      endShape(CLOSE);

      fill("rgb(211,210,210)");
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
    fill("#403E3B");
    beginShape();
    vertex(25, height / 3);
    vertex(65, height / 3);
    vertex(65, 330);
    vertex(25, 370);
    endShape(CLOSE);

    beginShape();
    vertex(width - 25, height / 3);
    vertex(width - 65, height / 3);
    vertex(width - 65, 330);
    vertex(width - 25, 370);
    endShape(CLOSE);

    if (this.dooropenR3) {
      fill("#403E3B");
      beginShape();
      vertex(width - 135, height / 3);
      vertex(width - 65, height / 3);
      vertex(width - 65, 330);
      vertex(width - 135, 330);
      endShape(CLOSE);

      fill("black");
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

  hint(hintX, hintY) {
    push();
    translate(hintX, hintY);
    let distance = dist(mouseX, mouseY, hintX + 50, hintY + 50);

    // Check if the mouse is hovering over the circle
    if (distance < 40 / 2) {
      fill("orange");
      circle(46, 50, 28);
      fill("white");
      text("help", 35, 53);
      fill("white");
      rect(-180, -40, 180, 60, 4, 4, 4, 4);
      fill("black");
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
      text("help", 35, 53);
    }
    if (this.hintBox == true) {
      fill("white");
      rect(-200, -10, 200, 100, 4, 4, 4, 4);
      fill("black");
      text(
        "For the first question, count the smaller cubes located on the edges where two different colors meet. For the second question, explore the interior of the larger cube, away from any painted surfaces",
        -190,
        -2,
        190,
        100
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
      text("answer", 26, 53);
      fill("white");
      rect(-180, -40, 180, 60, 4, 4, 4, 4);
      fill("black");
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
      text("answer", 26, 53);
    }
    if (this.solutionBox == true) {
      fill("white");
      rect(-70, 35, 100, 25, 4, 4, 4, 4);
      fill("black");
      text("34", -50, 51);
    }
    pop();
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
        "Dear [Prisoner's Name],\n\n Hope this note reaches you in good spirits. I've stumbled upon a way for you to take a step closer to the exit. Listen up; this one's a bit tricky but doable.\n\nEnclosed within this letter is a challenge question with two sub-parts designed to work your intellect.\n\n Solve them, and you shall uncover the three numbers crucial to your escape.",
        145,
        70,
        210,
        300
      );
      this.paper(380, 50);
      text(
        "A cube of side 4 cm is painted red on the pair of one adjacent surfaces, green on the pair of other adjacent surfaces and two adjacent surfaces are left unpainted. Now the cube is divided into 64 smaller cubes of side 1 cm each",
        395,
        70,
        210,
        300
      );
      image(this.img, 395, 195, 200, 140);

      this.paper(630, 50);
      text(
        "1. Number of smaller cubes with two surfaces painted\n\n2. Number of smaller cubes with no surfaces painted\n\n\n\nThe final code to crack the room's secrets is the sum of these two numbers.\n\nTrust me; it's worth the effort.\n\nStay sharp,\n[Escaped Person's Pseudonym]",
        645,
        70,
        210,
        300
      );
    }
    pop();
  }

  table() {
    push();
    fill("#5B5858");
    translate(730, 190);
    rect(-120, 50, 10, 70);
    rect(120, 50, 10, 70);
    rect(-30, 10, 10, 110);
    rect(30, 10, 10, 110);
    rect(-100, 0, 200, 15);
    rect(-150, 50, 70, 10);
    rect(90, 50, 70, 10);

    pop();
  }

  clock() {
    push();
    scale(0.4);
    translate(1200, 130);
    fill("#4D2609");
    circle(0, 0, 100);
    fill("#FCFBF7");
    circle(0, 0, 90);
    line(0, 0, 0, -40);
    line(0, 0, -5, 35);
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
        "Congratulations, intrepid seeker! You've cracked the code in XYZ's room and now stand in the heart of the cafeteria. The second letter beckons you; follow its guidance. Embrace the challenge, for the solution lies in deciphering the message within. Your path to freedom unfolds with every step.",
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

  counter() {
    push();
    fill("#403E3B");
    rect(85, 190, 300, 120);
    beginShape();
    vertex(385, 190);
    vertex(395, 185);
    vertex(395, 300);
    vertex(385, 310);
    endShape(CLOSE);
    fill("#ECECEC");
    beginShape();
    vertex(385, 190);
    vertex(395, 185);
    vertex(85, 185);
    vertex(85, 190);
    endShape(CLOSE);
    pop();
  }

  plates(platex, platey) {
    push();
    fill("#BE6E6E");
    translate(platex, platey);
    beginShape();
    vertex(-15, 0);
    vertex(15, 0);
    vertex(25, -10);
    vertex(-25, -10);
    endShape(CLOSE);
    pop();
  }

  cup() {
    push();
    scale(0.9);
    fill("#ECE4B9");
    translate(243, 176);
    circle(25, 16, 15);
    circle(25, 16, 13);
    rect(0, 0, 25, 32);
    pop();
  }

  stack() {
    push();
    fill("white");
    translate(290, 158);
    for (this.i = 0; this.i < 6; this.i++) {
      ellipse(0, this.i * 5, 50, 7);
    }
    pop();
  }

  bowl(bowlx, bowly) {
    push();
    translate(bowlx, bowly);
    fill("#C1BE9E");
    beginShape();
    vertex(-15, 0);
    vertex(15, 0);
    vertex(25, -25);
    vertex(-25, -25);
    endShape(CLOSE);
    pop();
  }
}
