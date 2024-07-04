class PrisonRoom1 {
  constructor() {
    this.dooropenR1 = false;
    this.playerX = -120;
    this.playerY = 65;
    this.inputnotes = 0;
    this.solutionBox = false;
    this.bgAudio = new Audio("story2.mp3");
    this.bgAudio.loop = true;
  }

  infobuttonRoom1(infobuttonX, infobuttonY) {
    push();
    translate(infobuttonX, infobuttonY);
    let distance = dist(mouseX, mouseY, infobuttonX + 50, infobuttonY + 50);

    // Check if the mouse is hovering over the circle
    if (distance < 40 / 2) {
      fill("white");
      rect(70, 100, 300, 100, 4, 4, 4, 4);
      fill("black");
      text(
        "Welcome, brave adventurer! You find yourself in Tom's \nmysterious room. Whispers of escape surround this \nvanished soul. Seek the letter on the floor—it holds the \nkey to your first enigma. Click and unravel the riddle, \nfor your journey into the unknown has just begun.",
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

  paper() {
    push();
    translate(400, 50);
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
    fill(255);
    text(
      "Dear Tom,\n\nI hope this letter finds you well. I've been pondering our situation and remembered the saying about a man and his books. \n\nLook closely at the bookshelves – each book holds a clue. Arrange them right, and you'll find a word that unlocks your ticket out. It may sound dramatic, but it's true.\n\n Study the titles, crack the code, and you'll be a step closer to freedom. Keep your focus on the shelves.\n\nBest,\nXYZ",
      10,
      15,
      215,
      300
    );
    pop();
  }

  theLetter() {
    push();
    translate(525, 300);
    fill("#AB840F");
    beginShape();
    vertex(0, 0);
    vertex(20, 0);
    vertex(10, 10);
    vertex(-10, 10);
    endShape(CLOSE);
    pop();
  }

  objects() {
    function drawers() {
      push();
      textSize(10);
      translate(185, height - 100);
      //cupboard
      fill("white");
      rect(-65, 0, 340, -165);
      fill("#646C9C");
      rect(100, -40, 85, 40);
      rect(185, -40, 85, 40);
      rect(100, -80, 85, 40);
      rect(185, -80, 85, 40);
      rect(-61, -40, 85, 40);
      rect(16, -40, 85, 40);
      rect(-61, -80, 85, 40);
      rect(16, -80, 85, 40);
      fill("white");
      circle(110, -25, 10);
      circle(195, -25, 10);
      circle(-51, -25, 10);
      circle(26, -25, 10);
      circle(110, -65, 10);
      circle(195, -65, 10);
      circle(-51, -65, 10);
      circle(26, -65, 10);
      pop();
    }
    function bed() {
      push();
      translate(600, 240);

      // Bed frame
      fill("rgb(60,59,59)");
      rect(300, -20, 10, 80);
      rect(-100, 0, 10, 80);
      rect(-80, -20, 10, 80);
      rect(280, 0, 10, 80);
      beginShape();
      vertex(290, 0);
      vertex(310, -20);
      vertex(-80, -20);
      vertex(-100, 0);
      endShape(CLOSE);
      //mattress
      fill("rgb(175,175,175)");
      beginShape();
      vertex(290, -2);
      vertex(310, -22);
      vertex(-80, -22);
      vertex(-100, -2);
      endShape(CLOSE);
      beginShape();
      vertex(290, -12);
      vertex(310, -32);
      vertex(-80, -32);
      vertex(-100, -12);
      endShape(CLOSE);
      beginShape();
      vertex(290, -12);
      vertex(310, -32);
      vertex(310, -22);
      vertex(290, -2);
      endShape(CLOSE);
      rect(-100, -12, 390, 10);

      push();
      //pillrgb(255,254,254)
      fill("white");
      noStroke();
      rect(220, -25, 50, 10);
      beginShape();
      vertex(220, -25);
      vertex(245, -35);
      vertex(295, -35);
      vertex(270, -25);
      endShape(CLOSE);
      beginShape();
      vertex(270, -15);
      vertex(295, -25);
      vertex(295, -35);
      vertex(270, -25);
      endShape(CLOSE);
      pop();
      pop();
    }
    function books() {
      push();
      textSize(10);
      translate(185, height - 100);
      //books
      fill("rgb(128,124,124)");
      rect(-61, -85, 162, -70);
      rect(107, -85, 162, -70);
      fill("rgb(144,1,1)");
      rect(-55, -87, 75, -15, 2, 2, 2, 2);
      fill("white");
      text("Ember ~ C.H.", -53, -90);
      fill("rgb(14,95,14)");
      rect(-55, -102, 75, -15, 2, 2, 2, 2);
      fill("white");
      text("zenith ~ W.P.", -53, -105);
      fill("rgb(95,95,6)");
      rect(-55, -117, 75, -15, 2, 2, 2, 2);
      fill("white");
      text("Echo ~ V.U.", -53, -120);
      fill("rgb(112,4,112)");
      rect(-55, -132, 75, -15, 2, 2, 2, 2);
      fill("white");
      text("spectra ~ I.O.", -53, -135);
      //
      push();
      translate(77, 0);
      fill("rgb(112,4,112)");
      rect(-55, -87, 75, -15, 2, 2, 2, 2);
      fill("white");
      text("aurora ~ D.M.", -53, -90);
      fill("rgb(219,55,152)");
      rect(-55, -102, 75, -15, 2, 2, 2, 2);
      fill("white");
      text("labyrinth ~ T.S", -53, -105);
      fill("rgb(155,155,45)");
      rect(-55, -117, 75, -15, 2, 2, 2, 2);
      fill("white");
      text("Mirage ~ F.N.", -53, -120);
      fill("rgb(200,156,156)");
      rect(-55, -132, 75, -15, 2, 2, 2, 2);
      fill("white");
      text("Odyssey ~ E.L.", -53, -135);
      pop();
      //
      push();
      translate(165, 0);
      fill("rgb(112,4,112)");
      rect(-55, -87, 75, -15, 2, 2, 2, 2);
      fill("white");
      text("utopia ~ R.V.", -53, -90);
      fill("rgb(124,169,104)");
      rect(-55, -102, 75, -15, 2, 2, 2, 2);
      fill("white");
      text("Ride ~ J.I.", -53, -105);
      fill("rgb(97,158,167)");
      rect(-55, -117, 75, -15, 2, 2, 2, 2);
      fill("white");
      text("chronos ~ A.K.", -53, -120);
      fill("rgb(37,36,85)");
      rect(-55, -132, 75, -15, 2, 2, 2, 2);
      fill("white");
      text("infinity ~ M.B.", -53, -135);
      pop();
      //
      push();
      translate(245, 0);
      fill("rgb(134,100,88)");
      rect(-55, -87, 75, -15, 2, 2, 2, 2);
      fill("white");
      text("Dawn ~ Y.C.", -53, -90);
      fill("rgb(83,160,121)");
      rect(-55, -102, 75, -15, 2, 2, 2, 2);
      fill("white");
      text("synergy ~ Q.A.", -53, -105);
      fill("rgb(158,158,79)");
      rect(-55, -117, 75, -15, 2, 2, 2, 2);
      fill("white");
      text("Fable ~ H.J.", -53, -120);
      fill("rgb(94,33,33)");
      rect(-55, -132, 75, -15, 2, 2, 2, 2);
      fill("white");
      text("celestia ~ N.R.", -53, -135);
      pop();
      pop();
    }
    bed();
    drawers();
    books();
  }

  doors() {
    fill("rgb(242,228,228)");

    beginShape();
    vertex(width - 25, height / 3);
    vertex(width - 65, height / 3);
    vertex(width - 65, 330);
    vertex(width - 25, 370);
    endShape(CLOSE);

    if (this.dooropenR1) {
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
    let brickWidth = 40;
    let brickHeight = 20;

    // Draw the brick wall
    for (let i = 0; i < width; i += brickWidth + 1) {
      for (let j = 0; j < height; j += brickHeight + 1) {
        fill("rgb(128,124,124)");
        rect(i, j, brickWidth, brickHeight);
      }
    }
    walls();
  }

  Room1() {
    this.createroomBackground();
    this.objects();
    this.doors();
    this.infobuttonRoom1(0, 0);
    this.theLetter();
    if (dist(mouseX, mouseY, 525, 300) < 10) {
      this.paper();
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

  sound() {
    this.bgAudio.play();
  }

  draw() {
    background("grey");
    this.Room1();
    this.sound();
    push();

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
    this.player();
    pop();

    this.hint(820, 300);
    this.solution(870, 300);
  }

  position() {
    return this.playerX;
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
        "Look at the book titles. Some start \nwith a capital letter and others dont!",
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
      text("FREEDOM", -50, 51);
    }
    pop();
  }
}
