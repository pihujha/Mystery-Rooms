class DetectiveRoom1 {
  constructor() {
    this.dooropenR1 = false;
    this.playerX = -120;
    this.playerY = 65;
    this.img = 0;
    this.answer = false;
    this.bgAudio = new Audio("story3.mp3");
    this.bgAudio.loop = true;
    this.bgAudio.play();
  }

  setup() {
    this.img = loadImage("story3.png");
  }

  infobuttonRoom1(infobuttonX, infobuttonY) {
    push();
    translate(infobuttonX, infobuttonY);
    let distance = dist(mouseX, mouseY, infobuttonX + 50, infobuttonY + 50);

    // Check if the mouse is hovering over the circle
    if (distance < 40 / 2) {
      fill("white");
      rect(70, 100, 310, 150, 4, 4, 4, 4);
      fill("black");
      text(
        "As a seasoned private detective, you find yourself \nentangled in a perplexing murder investigation.\nHired by the police to unravel a case that has \nstumped them, you examine the chilling image of the \ncrime scene. A gnawing intuition tells you that a crucial \ndetail has eluded law enforcement. What is it that the \npolice have overlooked? This elusive piece of information \nholds the key to the mystery, guiding you towards the \nnext layer of clues in your pursuit of justice.",
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

  pic() {
    push();
    fill("white");
    rect(193, 63, 113, 113);

    push();
    scale(0.1);
    image(this.img, 1950, 650);
    pop();

    if (
      mouseX >= 195 &&
      mouseX <= 195 + 108 &&
      mouseY >= 65 &&
      mouseY <= 65 + 108
    ) {
      fill("white");
      rect(373, 17, 350, 350);
      push();
      scale(0.3);
      image(this.img, 1290, 100);
      pop();

      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          strokeWeight(0.5);
          stroke(220);
          noFill();
          rect(385 + i * 32.5, 30 + j * 32.5, 32.5, 32.5);
        }
      }

      fill(0);
      text(
        "    a        b        c        d        e        f        g        h        i        j        ",
        383,
        27
      );
      text("\n1\n\n2\n\n3\n\n4\n\n\n5\n\n6\n\n7\n\n8\n\n9\n\n10", 373, 40);
    }
    pop();
  }

  bookshelf() {
    push();
    translate(73, 300);
    fill(129, 65, 65);
    rect(20, 0, 100, -140);
    fill(75, 69, 59);
    rect(25, 0, 90, -135);

    this.book(30, -130, color(144, 69, 73), 0);
    this.book(45, -125, color(162, 116, 74), radians(-13));
    this.book(70, -128, color(50, 70, 49), radians(-5));
    this.book(100, -128, color(144, 69, 73), radians(10));

    this.book(38, -62, color(118, 115, 102), radians(10));
    this.book(54, -60, color(50, 70, 49), 0);
    this.book(70, -60, color(144, 69, 73), radians(-10));
    this.book(100, -61, color(162, 116, 74), radians(5));

    fill(129, 65, 65);
    rect(25, -66, 90, -10);
    pop();
  }

  book(x, y, bookcolor, bookrotate) {
    push();
    translate(x, y);
    rotate(bookrotate);
    fill(bookcolor);
    rect(0, 0, 15, 60);
    pop();
  }

  lamp() {
    push();
    fill("#494642");
    translate(970, 145);

    push();
    rotate(-0.3);
    rect(66, 70, 4, 60);
    pop();

    push();
    rotate(0.9);
    rect(90, -85, 4, 50);
    pop();

    push();
    translate(-170, -35);
    rotate(-1);
    triangle(120, 260, 140, 300, 100, 300);
    pop();

    push();
    rotate(-10);
    ellipse(-32, -135, 25, 40);
    pop();

    ellipse(100, 100, 60, 20);
    //circle(95,80,10)

    pop();
  }

  table() {
    push();
    scale(0.8);
    push();
    this.lamp();
    pop();

    fill("#8B0000");
    translate(1000, 305);
    rect(-100, -50, 200, 100);
    rect(100, -50, 15, 125);
    rect(-100, -50, 15, 125);
    rect(-110, -60, 235, 10);
    pop();
  }

  dustbin() {
    push();
    fill("#3D280A");
    translate(560, 230);
    beginShape();
    vertex(30, 20);
    vertex(85, 20);
    vertex(75, 75);
    vertex(40, 75);
    endShape(CLOSE);

    pop();
  }

  answerCorrect() {
    if (this.answer) {
      fill("green");
      ellipse(960, 50, 50, 20);
      fill("white");
      text("correct", 940, 53);
    }
  }

  listOfEvidence() {
    fill(0);
    //
    rect(195, 180, 162, 77);
    push();
    fill(220);
    translate(243, 275);
    rect(-45, -90, 35, 60);
    push();
    translate(-50, -80);
    fill(0);
    quad(10, 25, 10, 30, 20, 20, 20, 15);
    fill("grey");
    triangle(20, 20, 20, 15, 35, 5);
    pop();

    if (mouseX > 200 && mouseX < 235 && mouseY > 187 && mouseY < 245) {
      push();
      fill(255);
      text("Murder Weapon", -45, -5);
      pop();
    }
    //
    rect(-5, -90, 35, 60);
    push();
    translate(-7, -80);
    fill("red");
    noStroke();
    circle(10, 10, 10);
    circle(20, 10, 8);
    circle(30, 15, 10);
    circle(20, 25, 12);
    circle(10, 20, 9);
    pop();

    if (mouseX > 235 && mouseX < 270 && mouseY > 187 && mouseY < 245) {
      push();
      fill(255);
      text("DNA Samples", -10, -5);
      pop();
    }
    //     //
    rect(35, -90, 35, 60);
    push();
    translate(33, -80);
    line(20, 10, 20, 30);
    line(20, 30, 5, 35);
    line(20, 30, 35, 35);
    line(10, 20, 30, 20);
    circle(20, 10, 10);
    pop();

    if (mouseX > 270 && mouseX < 305 && mouseY > 187 && mouseY < 245) {
      push();
      fill(255);
      text("Witness Statement", 30, -5);
      pop();
    }
    //     //
    rect(75, -90, 35, 60);
    push();
    fill(0);
    translate(73, -80);
    textFont("mystery");
    textSize(30);
    text("?", 12, 28);
    //   push()
    // translate(8,0)
    //   scale(0.1)
    // for (let i = 0; i <= 1.0; i += 0.01) {
    //   let lerpedColor = lerpColor(color("rgb(222, 171, 122)"), color("rgb(43, 15, 14)"), i);
    //   noStroke()
    //   fill(lerpedColor);
    //   rect(0, 0 + i * 250, 230, 600 * 0.1);
    // }
    // pop()
    pop();
    //
    textSize(8);
    text("List of Evidence", 5, -20);
    pop();
  }

  board() {
    push();
    translate(500, 200);
    fill("#6E260E");
    rect(-320, -150, 640, 220);
    fill("#E69F4C");
    rect(-310, -140, 620, 200);
    pop();
  }

  createroomBackground() {
    function walls() {
      fill("#795548");

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

      fill("#3B2A24");
      //roof
      beginShape();
      vertex(0, 0);
      vertex(85, 20);
      vertex(width - 85, 20);
      vertex(width, 0);
      endShape(CLOSE);

      fill("#94786F");
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

  Room1() {
    this.createroomBackground();
    // this.doors()
    this.board();

    this.bookshelf();
    // this.cup();
    this.table();
    this.dustbin();
    // this.doors();

    this.pic();
    this.listOfEvidence();
    this.answerCorrect();
    this.infobuttonRoom1(0, 0);

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

  sound() {
    this.bgAudio.play();
  }
  draw() {
    background("#AA938B");
    this.Room1();
    this.sound();

    if (keyIsDown(LEFT_ARROW)) {
      this.playerX -= 3;
      if (this.playerX < -130) {
        this.playerX = -120;
      }
    }

    if (keyIsDown(RIGHT_ARROW)) {
      this.playerX += 3;
      if (!this.dooropenR1 && this.playerX > 700) {
        this.playerX = 690;
      }
    }

    push();
    stroke("black");
    translate(this.playerX, this.playerY);
    this.detectivePlayer();
    pop();

    this.hint(820, 300);
    this.solution(870, 300);
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
        "Use the numbers and letters around \nthe picture to pinpoint the box in \nwhich you notice something fishy.",
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
      text("H1", -50, 51);
    }
    pop();
  }
}
