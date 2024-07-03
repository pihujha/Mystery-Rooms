class Story1Room3 {
  constructor() {
    this.x = -25;
    this.dooropenR3 = false;
    this.playerX = -120;
    this.playerY = 65;
    this.draweropen = false;
    this.hint2 = true;
    this.playerchange = false;
    this.playerchange1 = false;
    this.bgAudio = new Audio("story1.mp3");
    this.bgAudio.loop = true;
    this.preload();
    this.setup();
  }

  preload() {
    this.img = loadImage(
      "https://www.stephenwiltshire.co.uk/originals/full/1038_hard.jpg"
    );
    this.doorSound = loadSound("door.mp4");

    this.wrongans = loadSound("wrongans.mp4");
  }

  sound() {
    this.bgAudio.play();
  }

  setup() {
    createCanvas(1000, 400);
  }

  draw() {
    this.sound();
    background("#F7F1B9");
    this.createroom1Background();
    this.frame();
    this.drawer();
    this.doors();
    this.lamp();
    this.bookshelf();
    push();
    translate(250, 40);

    fill(218, 160, 109);
    rect(100, 70, 310, 100);
    this.diamond(100, 50, 1);
    this.diamond(250, 80, 0.8);
    this.diamond(470, 130, 0.6);
    this.diamond(870, 230, 0.4);
    push();
    textSize(15);
    fill("black");

    text("Kohinoor's Timeline", 190, 60);
    pop();
    pop();
    pop();

    if (keyIsDown(LEFT_ARROW)) {
      this.playerX -= 3;
      if (this.playerX < -130) {
        this.playerX = -120;
      }
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.playerX += 3;
      if (this.dooropenR3 == false) {
        if (this.playerX > 700) {
          this.playerX = 690;
        }
      }
    }

    this.checkingdiamond();
    this.clue2();
    this.checkingbooks();
    //this.checkcodeR3();

    if (
      this.hint2 == false &&
      mouseX > 780 &&
      mouseX < 790 &&
      mouseX > 190 &&
      mouseY < 210
    ) {
      if (mouseIsPressed === true) {
        this.playerchange1 = true;
      }
    }

    if (this.playerchange1 == true)
    {
      //console.log("testing")
      this.dooropenR3 = true;
      push();
      translate(660, height - 100);
      fill("white");
      rect(35, 0, 170, -165);
      fill(99, 69, 66);
      rect(40, 0, 165, -160);

      fill(92, 64, 51);
      rect(40, -80, 165, 7);

      pop();

      push();
      stroke("black");
      translate(this.playerX, this.playerY);
      
      this.playerWithDiamond();
      //console.log(this.playerX)
      pop();
    } else {
      push();
      stroke("black");
      translate(this.playerX, this.playerY);
      this.player();
      pop();
    }
    if (this.dooropenR3 && !this.audioPlayed) {
      this.doorSound.play();
      this.audioPlayed = true;
    }

    this.infobuttonRoom3(15, 20);
    this.hint(800, 330);
    this.solution(850, 330);
  }

  createroom1Background() {
    push()
    stroke('black')
    function walls() {
      // Walls
      fill("rgb(117,11,11)");
      beginShape();
      vertex(0, 0);
      vertex(85, 20);
      vertex(85, 300);
      vertex(0, height);
      endShape(CLOSE);

      beginShape();
      vertex(width, 0);
      vertex(width - 85, 20);
      vertex(width - 85, 300);
      vertex(width, height);
      endShape(CLOSE);

      fill("rgb(246,241,241)");
      // Roof
      beginShape();
      vertex(0, 0);
      vertex(85, 20);
      vertex(width - 85, 20);
      vertex(width, 0);
      endShape(CLOSE);

      fill("rgb(246,241,241)");
      // Floor
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
    fill("rgb(242,228,228)");
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
    pop()
  }

  checkCodeR3() {
    var code = this.inputR3.value();
    if (code == "671519") {
      this.draweropen = true;
      this.hint2 = false;
    } else {
      this.wrongans.play();
    }
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
      rect(-200, -10, 200, 95, 4, 4, 4, 4);
      fill("black");
      text(
        "Use the numbers before carats in \nthe timeline. Sum the digits of the \nnumber to get 4 new numbers, \nwhich should be inputed in \nascending order",
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
      text("671519", -50, 51);
    }
    pop();
  }

  player() {
    //neck
    fill(255, 205, 150);
    rect(196, 123, 10, 10);
    //face
    fill(255, 205, 150);
    ellipse(200, 100, 40, 50);
    //body
    fill(200);
    ellipse(202, 175, 35, 90);
    //legs
    fill(173, 216, 230);
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

  diamond(x, y, z) {
    push();
    scale(z);
    stroke("black");
    fill("lightblue");
    translate(x, y);
    rect(39, 37, 47, 30);
    for (let i = 0; i < 3; i++) {
      let x = 25 + i * 25;
      let y = 50;
      triangle(x, y, x + 12.5, y - 12.5, x + 25, y);
    }

    line(39, 37, 86, 37);
    triangle(25, 49, 62, 100, 100, 50);
    triangle(50, 50, 62, 100, 75, 50);

    pop();
  }

  drawer() {
    if (this.draweropen == false) {
      push();
      stroke("black");

      translate(660, height - 100);
      fill("white");
      rect(35, 0, 180, -165);
      fill(110, 38, 14);
      rect(40, -40, 85, 40);
      rect(125, -40, 85, 40);
      rect(40, -80, 85, 40);
      rect(125, -80, 85, 40);
      rect(40, -120, 85, 40);
      rect(125, -120, 85, 40);
      rect(40, -160, 85, 40);
      rect(125, -160, 85, 40);

      fill(225, 193, 110);
      circle(140, -95, 15);
      circle(110, -95, 15);
      pop();
    } else {
      push();
      stroke("black");

      translate(660, height - 100);
      fill("white");
      rect(35, 0, 180, -165);
      fill(99, 69, 66);
      rect(40, 0, 170, -160);
      fill("lightblue");
      this.diamond(250, -300, 0.4);
      fill(92, 64, 51);
      rect(40, -80, 170, 7);

      pop();
    }
  }

  frame() {
    push();
    fill(124, 48, 48);
    rect(170, 40, 140, 90);
    stroke("black");
    line(170, 40, 310, 130);
    line(310, 40, 170, 130);
    image(this.img, 180, 50, 120, 70);
    pop();
  }

  lamp() {
    push();
    stroke("black");

    fill(110, 38, 14);
    translate(130, 300);
    rect(-3, -150, 5, 140);
    arc(0, 0, 40, 30, PI, 0, CHORD);
    fill(128, 0, 32);
    beginShape();
    vertex(-30, -150);
    vertex(-10, -180);
    vertex(10, -180);
    vertex(30, -150);
    endShape();
    stroke(218, 165, 32);

    for (let i = 0; i < 9; i++) {
      line(this.x, -149.5, this.x, -145);
      this.x += 6;
    }
    pop();
  }

  bookshelf() {
    push();
    translate(150, 300);
    stroke("black");
    fill(129, 65, 65);
    rect(20, 0, 150, -140);
    fill(75, 69, 59);
    rect(25, 0, 140, -135);

    this.book(30, -130, color(144, 69, 73), 0);
    this.book(50, -125, color(162, 116, 74), radians(-13));
    this.book(80, -128, color(50, 70, 49), radians(-5));
    this.book(100, -125, color(118, 115, 102), radians(-15));
    this.book(140, -130, color(162, 116, 74), 0);

    this.book(40, -62, color(118, 115, 102), radians(10));
    this.book(58, -60, color(50, 70, 49), 0);
    this.book(75, -53, color(144, 69, 73), radians(-30));
    this.book(120, -60, color(162, 116, 74), 0);
    this.book(150, -62, color(50, 70, 49), radians(10));

    fill(129, 65, 65);
    rect(25, -66, 140, -10);
    pop();
  }

  book(x, y, bookcolor, bookrotate) {
    push();
    stroke("black");
    translate(x, y);
    rotate(bookrotate);
    fill(bookcolor);
    rect(0, 0, 15, 60);
    pop();
  }

  checkingdiamond() {
    fill("black");
    if (mouseX > 370 && mouseX < 450 && mouseY > 120 && mouseY < 190) {
      text("**17th Century**", 460, 230);
      text(
        "In the 17th century, during the Mughal emperor Aurangzeb's reign, the Kohinoor was first mentioned. At this time, the diamond weighed a staggering 793 carats",
        350,
        240,
        350,
        300
      );
    }
    if (mouseX > 470 && mouseX < 530 && mouseY > 130 && mouseY < 190) {
      text("**Nadir Shah's Invasion (1739)**", 420, 230);
      text(
        "In 1739, during Nadir Shah's invasion of India, the Kohinoor was taken. It was reported to weigh approximately 186 carats after a re-cut to enhance its brilliance",
        350,
        240,
        320,
        300
      );
    }
    if (mouseX > 550 && mouseX < 590 && mouseY > 140 && mouseY < 180) {
      text("**Duleep Singh and the British (19th Century)**", 385, 230);
      text(
        "By the 19th century, the diamond was in the possession of Duleep Singh. In 1849, he handed it over to the British East India Company, with the diamond having undergone another re-cut and weighing around 106 carats",
        350,
        240,
        320,
        300
      );
    }

    if (mouseX > 610 && mouseX < 640 && mouseY > 140 && mouseY < 170) {
      text("**Queen Victoria's Diamond**", 430, 230);
      text(
        "he Kohinoor became part of Queen Victoria's jewelry collection and was re-cut again, reducing its size to its current weight of approximately 105 carats",
        350,
        240,
        320,
        300
      );
    }
  }

  clue2() {
    if (this.hint2) {
      if (mouseX > 790 && mouseX < 810 && mouseY > 200 && mouseY < 215) {
        text(
          "Triple digits, you must combine with care, Then arrange the rest, ascending in the air",
          674,
          100,
          240,
          100
        );
      }
    }
  }

    checkingbooks() {
    if (mouseX > 270 && mouseX < 285 && mouseY > 240 && mouseY < 300) {
      triangle(280, 280, 270, 270, 290, 270);
      fill("white");
      ellipse(280, 224, 200, 90);
      fill("black");
      text(
        "Rooted below, orange and crisp, A hidden veg, what am I in this?",
        195,
        210,
        180,
        90
      );
    }
  }

  playerWithDiamond() {
    push();
    translate(250, 0);
    //neck
    fill(255, 205, 150);
    rect(196, 123, 10, 10);
    //face
    fill(255, 205, 150);
    ellipse(200, 100, 40, 50);
    //body
    fill(200);
    ellipse(202, 175, 35, 90);
    //legs
    fill(173, 216, 230);
    rect(185, 187, 25, 85);
    rect(205, 187, 14, 85);
    //shoes
    fill(150, 121, 105);
    ellipse(210, 275, 30, 15);
    ellipse(197, 275, 30, 15);
    //arm
    fill(255, 205, 150);
    line(195, 145, 195, 165);
    line(210, 145, 210, 165);
    line(195, 165, 210, 165);
    rect(195, 165, 15, 45);
    //diamond
    push();
    translate(195, 165);
    fill("white");
    this.diamond(-40, 50, 0.4);
    pop();
    //eyes
    fill(0);
    ellipse(210, 95, 5, 5);
    pop();
  }

  infobuttonRoom3(infobuttonX, infobuttonY) {
    push();
    stroke("black");

    translate(infobuttonX, infobuttonY);
    let distance = dist(mouseX, mouseY, infobuttonX + 50, infobuttonY + 50);

    // Check if the mouse is hovering over the circle
    if (distance < 12) {
      fill("white");
      rect(70, 40, 300, 150, 4, 4, 4, 4);
      fill("black");
      noStroke()

      text(
        "You've entered Room 3, where the Kohinoor's \n brilliance awaits. Use your mouse to explore the \n room, gathering objects and uncovering hidden clues. \n These clues will help you decipher a 6-digit code. Be \n patient and thorough in your search. The Kohinoor \n has a long and interesting history. Solve this puzzle, \n and you'll be granted access to the kohinoor.",
        72,
        60
      );

      fill("white");
      circle(50, 50, 30);
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
}
