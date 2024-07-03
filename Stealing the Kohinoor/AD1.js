class Story1AD1 {
  constructor() {
    this.s1;
    this.x;
    this.y;
    this.playerX = -120;
    this.playerY = 70;
    this.dooropenAD1 = false;
    this.solutionBox = false;
    this.x1;
    this.y1;
    this.preload();
    createCanvas(1000, 400);
    this.bgAudio = new Audio("story1.mp3");
    this.bgAudio.loop = true;
  }

  preload() {
    this.doorSound = loadSound("door.mp4");

    this.wrongans = loadSound("wrongans.mp4");
  }

  draw() {
    this.AD1();
    this.infobuttonAD1(0, 0);
    this.sound();
  }

  sound() {
    this.bgAudio.play();
  }

  AD1() {
    background("black");
    this.clock1(295, 365);
    this.clock1(655, 365);
    this.clock1(1035, 365);
    this.clock1(1395, 365);
    this.clock1(1775, 365);
    this.clock1(2155, 365);
    this.clock1(295, 685);
    this.clock1(655, 685);
    this.clock1(1035, 685);
    this.clock1(1395, 685);
    this.clock1(1775, 685);
    this.clock1(2155, 685);
    createAD1Background();

    if (keyIsDown(LEFT_ARROW)) {
      this.playerX -= 3;
      if (this.playerX < -130) {
        this.playerX = -120;
      }
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.playerX += 3;
      if (this.dooropenAD1 == false) {
        if (this.playerX > 700) {
          this.playerX = 690;
        }
      }
    }

    if (this.dooropenAD1) {
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
    this.hint(850, 250);
    this.solution(900, 250);

    push();
    stroke("black");
    translate(this.playerX, this.playerY);
    //console.log(this.playerX)
    playerCrawling();
    pop();

    function createAD1Background() {
      function walls() {
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

        fill("rgb(116,116,116)");
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

      function numbers() {
        push();
        translate(550, 200);
        textSize(100);
        fill("grey");
        rect(-225, -50, 100, 100);
        rect(-75, -50, 100, 100);
        rect(75, -50, 100, 100);
        rect(225, -50, 100, 100);
        fill("white");
        text("4", -210, 30);
        text("8", 100, 30);
        text("3", 250, 30);
        text("0", -50, 30);
        textSize(10);
        text("N", -220, 40);
        text("SE", 80, 40);
        text("W", 230, 40);
        text("NW", -70, 40);
        pop();
      }

      function compass(x, y, s1) {
        push();
        translate(x, y);
        scale(s1);
        noStroke();
        fill("brown");
        circle(0, 0, 110);
        fill("black");
        circle(0, 0, 100);
        push();
        fill("red");
        triangle(-5, -0, 5, 0, 0, 50);
        triangle(-5, -0, 5, 0, 0, -50);
        pop();
        fill("white");
        text("N", -5, -40);
        text("S", -5, 40);
        text("W", -40, 5);
        text("E", 40, 5);
        pop();
      }

      walls();
      numbers();
      compass(150, 200, 0.5);
      push();
      translate(150, 200);
      if (dist(mouseX, mouseY, 150, 200) < 25) {
        push();
        translate(0, 0);
        compass(0, 10, 2);
        pop();
      }
      pop();
    }

    function  playerCrawling() {
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
    push();
    translate(195, 165);
    fill("white");
    diamond(900, 500, 0.1);
    pop();
  }
  }

  infobuttonAD1(infobuttonX, infobuttonY) {
    push();
    translate(infobuttonX, infobuttonY);
    let distance = dist(mouseX, mouseY, infobuttonX + 50, infobuttonY + 50);

    // Check if the mouse is hovering over the circle
    if (distance < 40 / 2) {
      fill("white");
      rect(70, 100, 300, 150, 4, 4, 4, 4);
      fill("black");
      text(
        "Your task is to steal the legendary Kohinoor diamond, \n steeped in history and mystery. Known for its rich past, \n this diamond has passed through numerous hands. \n Use your mouse to explore the room, examining every \n detail. Your journey begins by finding objects on the \n screen. Keep an eye out for the hidden clues that \n will lead you to a 4-digit code. Prepare to enter Room 1 \n as you venture closer to the Kohinoor.",
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

  clock1(ClockX, ClockY) {
    push();
    scale(0.4);
    translate(ClockX, ClockY);
    fill("#F9CD499E");
    circle(0, 0, 100);
    fill("rgba(255,255,255,0.64)");
    circle(0, 0, 90);
    line(0, 0, 0, -40);
    line(0, 0, -5, 35);
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
        "Use the directions associated \nwith the numbers to arrange them in \na particular order.",
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
      text("4830", -50, 51);
    }
    pop();
  }
}
