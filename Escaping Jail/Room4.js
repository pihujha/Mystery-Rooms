class PrisonRoom4 {
  constructor() {
    this.dooropenR1 = false;
    this.playerX = -100;
    this.playerY = 15;
    this.speech = null;
    this.click = 0;
    this.speech = loadSound(
      "Final Room 4 CS - 11:26:23, 1.31 PM.mp3",
      this.loaded
    );
    this.basketball = 0;
    this.solutionBox = false;

    this.bgAudio = new Audio("story2.mp3");
    this.bgAudio.loop = true;
    this.bgAudio.play();
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
        "If you click the help button, you \nwill get the hint to this \nriddle, but your time will be \nreduced by 2 minutes.",
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
      rect(-200, 20, 200, 50, 4, 4, 4, 4);
      fill("black");
      text(
        "space, share, struggle, solitude, \nself-reflection, second",
        -195,
        35
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
      text("5588146", -50, 51);
    }
    pop();
  }

  setup() {
    this.basketball = loadImage("basketball.png");
  }

  infobuttonRoom4(infobuttonX, infobuttonY) {
    push();
    translate(infobuttonX, infobuttonY);
    let distance = dist(mouseX, mouseY, infobuttonX + 50, infobuttonY + 50);

    // Check if the mouse is hovering over the circle
    if (distance < 40 / 2) {
      fill("white");
      rect(70, 90, 200, 80, 4, 4, 4, 4);
      fill("black");
      text(
        "Descendant of resilience, you now tread upon the sacred ground. The fourth letter resonates with a secret announcement.",
        72,
        100,
        200,
        200
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

  createroomBackground() {
    push();
    scale(0.5);
    image(this.basketball, 1015, 50);
    pop();

    push();
    //walls
    fill("grey");
    beginShape();
    vertex(0, 0);
    vertex(30, 30);
    vertex(30, height - 30);
    vertex(0, height);
    endShape(CLOSE);

    beginShape();
    vertex(width, 0);
    vertex(width - 30, 30);
    vertex(width - 30, height - 30);
    vertex(width, height);
    endShape(CLOSE);

    beginShape();
    vertex(0, 0);
    vertex(30, 30);
    vertex(width - 30, 30);
    vertex(width, 0);
    endShape(CLOSE);

    beginShape();
    vertex(30, height - 30);
    vertex(0, height);
    vertex(width, height);
    vertex(width - 30, height - 30);
    endShape(CLOSE);
  }

  Room4() {
    this.createroomBackground();
    this.ifSpeaker();
    this.speaker();
    this.tunnel();
  }

  player() {
    fill("rgb(255,205,150)");
    circle(150, 200, 30);
  }

  speaker() {
    fill("black");
    ellipse(500, 15, 90, 25);
    if (this.click == 1) {
      this.speech.play();
    }
  }

  tunnel() {
    fill("grey");
    circle(940, 340, 50);
    if (this.dooropenR1 == true) {
      fill("rgb(122,22,22)");
      circle(940, 340, 50);
      fill("grey");
      circle(900, 340, 50);
    }
  }

  ifSpeaker() {
    if (
      mouseX > 455 &&
      mouseX < 545 &&
      mouseY > 15 - 25 / 2 &&
      mouseY < 15 + 25 / 2 &&
      mouseIsPressed
    ) {
      this.click = 1;
    } else {
      this.click = 0;
    }
  }

  loaded() {}
  sound() {
    this.bgAudio.play();
  }
  draw() {
    background(color(100, 105, 0));
    this.Room4();
    this.sound();

    if (keyIsDown(LEFT_ARROW)) {
      this.playerX -= 3;
      if (this.playerX < -140) {
        this.playerX += 3;
      }
    }

    if (keyIsDown(RIGHT_ARROW)) {
      this.playerX += 3;
      if (this.playerX > 840) {
        this.playerX -= 3;
      }
    }

    if (keyIsDown(UP_ARROW)) {
      this.playerY -= 3;
      if (this.playerY < -190) {
        this.playerY += 3;
      }
    }

    if (keyIsDown(DOWN_ARROW)) {
      this.playerY += 3;
      if (this.playerY > 190) {
        this.playerY -= 3;
      }
    }

    push();
    stroke("black");
    translate(this.playerX, this.playerY);
    this.player();
    pop();
    this.infobuttonRoom4(0, 0);
    push();
    scale(0.1);
    this.paper(370, 800);
    pop();
    this.hover();
    this.hint(780, 300);
    this.solution(830, 300);
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
      this.paper(290, 50);
      fill("white");
      textSize(13);
      text(
        "Dear [Prisoner's Name], \n\nAs gravity whispers its secrets, pay heed to the symphony of sound around you. Follow the rhythm of words, especially the letter 'S.' In those spoken sounds, grab seven digits that make up the code to your next move. Once you figure it out, write that cipher on the small grey square near the North. About three feet away; that's where your next step begins.  \n\nListen closely, \n\n[Escaped Person's Pseudonym]",
        305,
        70,
        206,
        300
      );
    }
    pop();
  }
}
