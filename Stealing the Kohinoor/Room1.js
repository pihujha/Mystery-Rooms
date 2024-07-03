class Story1Room1 {
  constructor() {
    this.playerX = -120;
    this.playerY = 65;
    this.doorOpenRoom1 = false;
    this.infobuttonX = 0;
    this.infobuttonY = 0;
    this.objectsX = 0;
    this.objectsY = 0;
    createCanvas(1000, 400)
  }

  display() {
    background("#F7F1B9");
    this.createroom1Background();
    this.decor();
    this.objects();
    this.frame();
    this.infobuttonRoom1(this.infobuttonX, this.infobuttonY);


    if (keyIsDown(LEFT_ARROW)) {
      this.playerX -= 3;
      if (this.playerX < -130) {
        this.playerX = -120;
      }
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.playerX += 3;
      if (!this.doorOpenRoom1 && this.playerX > 700) {
        this.playerX = 690;
      }
    }

    push();
    stroke("black");
    translate(this.playerX, this.playerY);
    this.drawPlayer();
    pop();
    this.hint(800,300)
    this.solution(850,300)
  }

  createroom1Background() {
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
    
    // Doors
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

    if (this.doorOpenRoom1) {
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

  decor() {
  push();
  // mirror
  // translate(600, 0);
  // fill(255, 215, 0);
  // ellipse(50, 100, 80, 120);
  // fill(173, 216, 230);
  // ellipse(50, 100, 50, 90);
  // pop();

  push();
  translate(0, -10);
  //cds
  fill("white");
  ellipse(150, 100, 80, 80);
  fill(0);
  ellipse(150, 100, 70, 70);
  fill("white");
  ellipse(150, 100, 40, 40);
  fill(255, 192, 203);
  ellipse(150, 100, 30, 30);
  /////
  fill("white");
  ellipse(150, 180, 80, 80);
  fill(0);
  ellipse(150, 180, 70, 70);
  fill("white");
  ellipse(150, 180, 40, 40);
  fill(255, 255, 0);
  ellipse(150, 180, 30, 30);
  /////
  fill("white");
  ellipse(150, 260, 80, 80);
  fill(0);
  ellipse(150, 260, 70, 70);
  fill("white");
  ellipse(150, 260, 40, 40);
  fill(0, 255, 255);
  ellipse(150, 260, 30, 30);
  pop();

  //cabinet
  push()
  translate(500,0)
  fill(150,75,0)
  rect(50,200,300,100)
  line(150,200,150,300)
  line(250,200,250,300)
  fill(0)
  ellipse(130,250,10,10)
  ellipse(230,250,10,10)
  ellipse(330,250,10,10)
  pop()
  
  //vase
  push()
  translate(740,103)
  scale(0.3)
  //center
  push()
  fill("brown")
  ellipse(200,250,60,20)
  line(200,250,200,180)
  push()
  translate(200,180)
  fill("rgb(167,1,167)")
  circle(-15,-15,20)
  circle(15,15,20)
  circle(15,-15,20)
  circle(-15,15,20)
  circle(0,-15,20)
  circle(0,15,20)
  circle(15,0,20)
  circle(-15,0,20)
  pop()
  fill("red")
  circle(200,180,20)
  pop()
  push()
  fill("rgb(222,167,177)")
  circle(200,300,50)
  quad(175,300,225,300,230,250,170,250)
  pop()
  
  
  //left
  push()
  fill("brown")
  ellipse(100,250,60,20)
  line(100,250,100,180)
  push()
  translate(100,180)
  fill("rgb(115,33,217)")
  circle(-15,-15,20)
  circle(15,15,20)
  circle(15,-15,20)
  circle(-15,15,20)
  circle(0,-15,20)
  circle(0,15,20)
  circle(15,0,20)
  circle(-15,0,20)
  pop()
  fill("red")
  circle(100,180,20)
  pop()
  push()
  fill("pink")
  circle(100,300,50)
  quad(75,300,125,300,130,250,70,250)
  pop()
  
  //right
  push()
  fill("brown")
  ellipse(300,250,60,20)
  line(300,250,300,180)
  push()
  translate(300,180)
  fill("purple")
  circle(-15,-15,20)
  circle(15,15,20)
  circle(15,-15,20)
  circle(-15,15,20)
  circle(0,-15,20)
  circle(0,15,20)
  circle(15,0,20)
  circle(-15,0,20)
  pop()
  fill("red")
  circle(300,180,20)
  pop()
  push()
  fill("rgb(212,134,147)")
  circle(300,300,50)
  quad(275,300,325,300,330,250,270,250)
  pop()
pop()
  
}

  objects() {
  function drawers() {
    push();
    translate(185, height - 100);
    fill("white");
    rect(35, 0, 180, -165);
    fill("#6377E7");
    rect(40, -40, 85, 40);
    rect(125, -40, 85, 40);
    rect(40, -80, 85, 40);
    rect(125, -80, 85, 40);
    rect(40, -120, 85, 40);
    rect(125, -120, 85, 40);
    rect(40, -160, 85, 40);
    rect(125, -160, 85, 40);
    fill("white");
    if (mouseX > 185 && mouseX < 310 && mouseY > 260 && mouseY < 300) {
      textSize(20);
      text("-", 75, -15);
    } else if (mouseX > 185 && mouseX < 310 && mouseY > 220 && mouseY < 260) {
      textSize(20);
      text("4", 75, -55);
    } else if (mouseX > 185 && mouseX < 310 && mouseY > 180 && mouseY < 220) {
      textSize(20);
      text("-", 75, -95);
    } else if (mouseX > 185 && mouseX < 310 && mouseY > 140 && mouseY < 180) {
      textSize(20);
      text("9", 75, -135);
    } else if (mouseX > 270 && mouseX < 395 && mouseY > 260 && mouseY < 300) {
      textSize(20);
      text("3", 160, -15);
    } else if (mouseX > 270 && mouseX < 395 && mouseY > 220 && mouseY < 260) {
      textSize(20);
      text("-", 160, -55);
    } else if (mouseX > 270 && mouseX < 395 && mouseY > 180 && mouseY < 220) {
      textSize(20);
      text("8", 160, -95);
    } else if (mouseX > 270 && mouseX < 395 && mouseY > 140 && mouseY < 180) {
      textSize(20);
      text("-", 160, -135);
    }
    pop();
  }

  function countriescities() {
    fill(" #00BCD4");
    push();
    textSize(12);
    translate(410, 25);
    rect(0, 0, 190, 170);
    fill("black");
    text("Countries", 5, 15);
    text("Cities", 100, 15);
    text(
      "1. Australia \n2. Brazil \n3. Canada \n4. Egypt \n5. France \n6. Japan \n7. Kenya \n8. England \n9. Russia \n10. South Korea",
      10,
      30
    );
    text(
      "Sydney \nRio de Janeiro \nToronto \nCairo \nParis \nTokyo \nNairobi \nHull \nMoscow \nSeoul",
      105,
      30
    );
    pop();
  }

  function FIB() {
    fill(" #00BCD4");
    push();
    translate(610, 45);
    textSize(20);
    rect(0, 30, 130, 120);
    fill("black");
    text("_ _    _ _", 5, 45); //cairo I
    text("_ _ _    _ _", 5, 75); //sydney N
    text("_ _    _ _ _ _", 5, 105); //toronto T
    text("   _ _ _", 5, 135); //león L
    fill("white");
    text("      _    ", 5, 45);
    text("         _    ", 5, 75);
    text("      _", 5, 105);
    text("_", 5, 135);
    pop();
  }

  drawers();
  countriescities();
  FIB();
}

  frame() {
    push()
    translate(70, 0)
    fill(124, 48, 48);
    rect(170, 40, 140, 90);
    stroke("black");
    line(170, 40, 310, 130);
    line(310, 40, 170, 130);
    // Assuming img is a global variable declared in the preload function
    image(img, 180, 50, 120, 70);
    pop()
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
      text("Use the numbers on the drawers to \nfind corresponding city names \nhence corresponding those to the \nblack&white blanks and use those to \nfind 4 final letters. Re-arrange these \nletters to form a legitimate word.", -195, 5);
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
      rect(24, 38,44,25,1.5,1.5,1.5,1.5);
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
      rect(24, 38,44,25,1.5,1.5,1.5,1.5);
      fill("white");
      text("answer", 26, 53);
    }
    if (this.solutionBox == true) {
      fill("white");
      rect(-70, 35, 100, 25, 4, 4, 4, 4);
      fill("black");
      text("RICH", -50, 51);
    }
    pop();
  }

  infobuttonRoom1(infobuttonX, infobuttonY) {
    push();
    translate(infobuttonX, infobuttonY);
    let distance = dist(mouseX, mouseY, infobuttonX + 50, infobuttonY + 50);

    // Check if the mouse is hovering over the circle
    if (distance < 40 / 2) {
      fill("white");
      rect(70, 100, 300, 150, 4, 4, 4, 4);
      fill("black");
      text("Welcome to Room 1. Before you is a cryptic \n code that guards the path to Room 2. With your mouse, \n explore the room, searching for objects and clues. \n As you gather them, a 4-character word code will \n slowly take shape. Keep in mind that the Kohinoor is \n the largest and most exquisite diamond in the world. \n Once you decipher the code, you'll be one step closer \n to the Kohinoor. Best of luck on your journey.", 72, 120);
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

  drawPlayer() {
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

  // checkCode() {
  //   var code = room1.inputCode.value();
  //   if (code.toLowerCase() === "rich") {
  //     room1.doorOpenRoom1 = true;
  //   }
  // }
}