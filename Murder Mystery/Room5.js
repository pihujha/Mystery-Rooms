class DetectiveRoom5 {
  constructor() {
    this.dooropenR5 = false;
    this.playerX = -120;
    this.playerY = 65;
    this.solutionBox = false;
    this.bgAudio = new Audio("story3.mp3");
    this.bgAudio.loop = true;
    this.bgAudio.play();
  }

  infobuttonRoom5(infobuttonX, infobuttonY) {
    push();
    translate(infobuttonX, infobuttonY);
    let distance = dist(mouseX, mouseY, infobuttonX + 50, infobuttonY + 50);

    // Check if the mouse is hovering over the circle
    if (distance < 40 / 2) {
      fill("white");
      rect(70, 100, 300, 120, 4, 4, 4, 4);
      fill("black");
      text(
        "With narrowed possibilities, you confront a crucial \ndecision. Four men emerge as potential suspects, \nmatching the killer's description and location. It's time to \ntrust your instincts and choose the one who bears the \nweight of guilt. The final room beckons, where the true \nface of the murderer will be unmasked, bringing closure \nto a case fraught with secrets.",
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

  doors() {
    fill("rgb(242,228,228)");

    beginShape();
    vertex(width - 25, height / 3);
    vertex(width - 65, height / 3);
    vertex(width - 65, 330);
    vertex(width - 25, 370);
    endShape(CLOSE);

    if (this.dooropenR5) {
      fill("rgb(242,228,228)");
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

  board() {
    push();
    translate(500, 200);
    fill("black");
    rect(-320, -150, 640, 220);

    fill("white");
    rect(-310, -140, 620, 200);
    pop();

    for (let i = 85; i < 250; i += 30) {
      line(190, i, 810, i);
      push();
      fill("black");
      text(280 - i, 780, i - 2);
      pop();
    }
  }

  createroomBackground() {
    function walls() {
      fill("rgb(101,101,101)");

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

  Room5() {
    this.createroomBackground();
    this.doors();
    this.board();
    this.suspects();
    if (!this.dooropenR5) {
      this.suspects();
    } else {
      push();
      translate(380, 30);
      //neck
      fill(255, 205, 150);
      rect(196, 123, 10, 10);
      //face
      fill(255, 205, 150);
      ellipse(200, 100, 40, 50);

      // Mouth
      fill(255, 205, 150);
      arc(200, 113, 15, 10, PI, 0);
      // body
      fill(173, 216, 230);
      rect(175, 133, 50, 70, 20, 20);

      // legs
      fill("rgb(72,72,157)");
      rect(175, 187, 26, 85);
      rect(200, 187, 25, 85);

      // hands
      fill(255, 205, 150);
      rect(172, 155, 10, 60, 10);
      rect(219, 155, 10, 60, 5);

      // sleeves
      fill(173, 216, 230);
      rect(172, 140, 10, 25, 5, 0, 0, 0);
      rect(219, 140, 10, 25, 0, 5, 0, 0);

      // shoes
      fill(150, 121, 105);
      ellipse(185, 275, 30, 15);
      ellipse(215, 275, 30, 15);

      // eyes
      fill(0);
      ellipse(192, 95, 4, 4);
      ellipse(208, 95, 4, 4);
      fill(72, 72, 147);
      textSize(10);
      textAlign(CENTER, CENTER);
      text("Say\nCheese", 200, 165);

      // handcuffs
      fill(128);
      rect(173, 195, 10, 5);
      rect(220, 195, 10, 5);
      ellipse(188, 197, 3, 3);
      ellipse(198, 197, 3, 3);
      ellipse(208, 197, 3, 3);
      ellipse(218, 197, 3, 3);
      line(183, 197, 220, 197);
      pop();
      //2nd
      push();
      translate(120, 30);
      //neck
      fill(255, 205, 150);
      rect(196, 123, 10, 10);
      //face
      fill(255, 205, 150);
      ellipse(200, 100, 40, 50);

      // Mouth
      fill(255, 205, 150);
      arc(200, 107, 15, 10, 0, PI);
      // body
      fill(255, 182, 193);
      rect(175, 133, 50, 70, 20, 20);

      // legs
      fill(176, 216, 230);
      rect(175, 187, 26, 85);
      rect(200, 187, 25, 85);

      // hands
      fill(255, 205, 150);
      rect(172, 155, 10, 60, 10);
      rect(219, 155, 10, 60, 5);

      // sleeves
      fill(255, 182, 193);
      rect(172, 140, 10, 25, 5, 0, 0, 0);
      rect(219, 140, 10, 25, 0, 5, 0, 0);

      // shoes
      fill(150, 121, 105);
      ellipse(185, 275, 30, 15);
      ellipse(215, 275, 30, 15);

      // eyes
      fill(0);
      ellipse(192, 95, 4, 4);
      ellipse(208, 95, 4, 4);

      fill(255);
      textSize(10);
      textAlign(CENTER, CENTER);
      text("dream\nbig", 200, 165);
      pop();
      //3
      push();
      translate(250, 30);
      //neck
      fill(255, 205, 150);
      rect(196, 123, 10, 10);
      //face
      fill(255, 205, 150);
      ellipse(200, 100, 40, 50);

      // Mouth
      fill(255, 205, 150);
      arc(200, 107, 15, 10, 0, PI);

      // body
      fill(144, 238, 144);
      rect(175, 133, 50, 70, 20, 20);

      // legs
      fill(0);
      rect(175, 187, 26, 85);
      rect(200, 187, 25, 85);

      // hands
      fill(255, 205, 150);
      rect(172, 155, 10, 60, 10);
      rect(219, 155, 10, 60, 5);

      // sleeves
      fill(144, 238, 144);
      rect(172, 140, 10, 25, 5, 0, 0, 0);
      rect(219, 140, 10, 25, 0, 5, 0, 0);

      // shoes
      fill(150, 121, 105);
      ellipse(185, 275, 30, 15);
      ellipse(215, 275, 30, 15);

      // eyes
      fill(0);
      ellipse(192, 95, 4, 4);
      ellipse(208, 95, 4, 4);

      fill(0);
      textSize(10);
      textAlign(CENTER, CENTER);
      text("stay\npositive", 200, 165);
      pop();
    }
  }

  detectivePlayer() {
    //hat circle
    fill(0);
    circle(200, 77, 30);
    //neck
    fill(255, 205, 150);
    rect(196, 123, 10, 10);
    //face
    fill(255, 205, 150);
    ellipse(200, 100, 40, 50);
    //body
    fill("grey");
    ellipse(202, 175, 35, 90);
    //legs
    fill("rgb(72,72,157)");
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
    rect(205, 92, 9, 6);
    // circle(210, 95, 10);
    line(210, 95, 180, 95);
    line(210, 95, 220, 93);
    //hat
    ellipse(200, 77, 45, 6);
  }

  suspects() {
    push()
    //1st
    push();
    translate(380, 30);
    //neck
    fill(255, 205, 150);
    rect(196, 123, 10, 10);
    //face
    fill(255, 205, 150);
    ellipse(200, 100, 40, 50);

    // Mouth
    fill(255, 205, 150);
    arc(200, 107, 15, 10, 0, PI);
    // body
    fill(173, 216, 230);
    rect(175, 133, 50, 70, 20, 20);

    // legs
    fill("rgb(72,72,157)");
    rect(175, 187, 26, 85);
    rect(200, 187, 25, 85);

    // hands
    fill(255, 205, 150);
    rect(172, 155, 10, 60, 10);
    rect(219, 155, 10, 60, 5);

    // sleeves
    fill(173, 216, 230);
    rect(172, 140, 10, 25, 5, 0, 0, 0);
    rect(219, 140, 10, 25, 0, 5, 0, 0);

    // shoes
    fill(150, 121, 105);
    ellipse(185, 275, 30, 15);
    ellipse(215, 275, 30, 15);

    // eyes
    fill(0);
    ellipse(192, 95, 4, 4);
    ellipse(208, 95, 4, 4);
    fill(72, 72, 147);
    textSize(10);
    textAlign(CENTER, CENTER);
    text("Say\nCheese", 200, 165);
    pop();
    //2nd
    push();
    translate(120, 30);
    //neck
    fill(255, 205, 150);
    rect(196, 123, 10, 10);
    //face
    fill(255, 205, 150);
    ellipse(200, 100, 40, 50);

    // Mouth
    fill(255, 205, 150);
    arc(200, 113, 15, 10, PI, 0);
    // body
    fill(255, 182, 193);
    rect(175, 133, 50, 70, 20, 20);

    // legs
    fill(176, 216, 230);
    rect(175, 187, 26, 85);
    rect(200, 187, 25, 85);

    // hands
    fill(255, 205, 150);
    rect(172, 155, 10, 60, 10);
    rect(219, 155, 10, 60, 5);

    // sleeves
    fill(255, 182, 193);
    rect(172, 140, 10, 25, 5, 0, 0, 0);
    rect(219, 140, 10, 25, 0, 5, 0, 0);

    // shoes
    fill(150, 121, 105);
    ellipse(185, 275, 30, 15);
    ellipse(215, 275, 30, 15);

    // eyes
    fill(0);
    ellipse(192, 95, 4, 4);
    ellipse(208, 95, 4, 4);

    fill(255);
    textSize(10);
    textAlign(CENTER, CENTER);
    text("dream\nbig", 200, 165);
    pop();
    //3
    push();
    translate(250, 30);
    //neck
    fill(255, 205, 150);
    rect(196, 123, 10, 10);
    //face
    fill(255, 205, 150);
    ellipse(200, 100, 40, 50);

    // Mouth
    fill(255, 205, 150);
    line(195, 113, 205, 113);

    // body
    fill(144, 238, 144);
    rect(175, 133, 50, 70, 20, 20);

    // legs
    fill(0);
    rect(175, 187, 26, 85);
    rect(200, 187, 25, 85);

    // hands
    fill(255, 205, 150);
    rect(172, 155, 10, 60, 10);
    rect(219, 155, 10, 60, 5);

    // sleeves
    fill(144, 238, 144);
    rect(172, 140, 10, 25, 5, 0, 0, 0);
    rect(219, 140, 10, 25, 0, 5, 0, 0);

    // shoes
    fill(150, 121, 105);
    ellipse(185, 275, 30, 15);
    ellipse(215, 275, 30, 15);

    // eyes
    fill(0);
    ellipse(192, 95, 4, 4);
    ellipse(208, 95, 4, 4);

    fill(0);
    textSize(10);
    textAlign(CENTER, CENTER);
    text("stay\npositive", 200, 165);
    pop();

    fill("white");
    rect(300, 315, 40, 20);
    rect(430, 315, 40, 20);
    rect(565, 315, 40, 20);
    fill("black");
    text("2", 315, 330);
    text("10", 443, 330);
    text("6", 580, 330);
    
    pop();
  }

  sound() {
    this.bgAudio.play();
  }
  draw() {
    textSize(12)
    background("grey");
    this.Room5();
    this.sound();
    

    if (keyIsDown(LEFT_ARROW)) {
      this.playerX -= 3;
      if (this.playerX < -130) {
        this.playerX = -120;
      }
    }

    if (keyIsDown(RIGHT_ARROW)) {
      this.playerX += 3;
      if (!this.dooropenR5 && this.playerX > 700) {
        this.playerX = 690;
      }
    }

    push();
    stroke("black");
    translate(this.playerX, this.playerY);
    this.detectivePlayer();
    pop();
    this.infobuttonRoom5(0, 0);
    this.hint(820, 300);
    this.solution(870, 300);
  }

  hint(hintX, hintY) {
    push();
    translate(hintX, hintY);
    let distance = dist(mouseX, mouseY, hintX + 50, hintY + 50);

    // Check if the mouse is hovering over the circle
    if (distance < 40 / 2) {
      push()
      fill("orange");
      circle(46, 50, 28);
      fill("white");
      text("help", 35, 53);
      fill("white");
      rect(-180, -40, 180, 60, 4, 4, 4, 4);
      fill("black");
      text(
        "If you click the help button, you \nwill get the hint to this \nriddle, but your time will be \nreduced by 2 minutes.",
        -175,
        -27
      );
      pop();
      if (mouseIsPressed == true) {
        this.hintBox = true;
      }
    } else {
      push()
      fill("orange");
      circle(46, 50, 28);
      fill("white");
      text("help", 35, 53);
      pop()
    }
    if (this.hintBox == true) {
      push()
      fill("white");
      rect(-200, 20, 200, 50, 4, 4, 4, 4);
      fill("black");
      text("Look careful under the smiling man", -195, 35);
      pop();
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
        "If you click the help button, you \nwill get the solution to this \nriddle, but your time will be \nreduced by 5 minutes.",
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
      text("6", -50, 51);
    }
    pop();
  }
}
