
class Room2 {
  constructor() {

    this.maze = [];
    this.playerRoom2 = 0;
    this.paperState = 0;
    this.paperState2 = 0;
    this.bgAudio = new Audio("story1.mp3");
    this.bgAudio.loop = true;
    // this.bgAudio.play();
    this.codeCheckBoolean = false;
    this.solutionBox = false;
    this.doorSound = loadSound("door.mp4", this.loaded);
    this.wrongans = loadSound("wrongans.mp4", this.loaded);
    this.soundPlayed = false;
  }

  setup() {
    createCanvas(1000, 400);

    //adding the maze objects to the maze array
    this.maze.push(new Maze(100, 30, 650, 2));
    this.maze.push(new Maze(100, 30, 2, 340));
    this.maze.push(new Maze(100, 370, 650, 2));
    this.maze.push(new Maze(750, 30, 2, 102));
    this.maze.push(new Maze(750, 300, 2, 72));

    this.maze.push(new Maze(100, 250, 100, 2));
    this.maze.push(new Maze(200, 200, 2, 100));
    this.maze.push(new Maze(200, 200, 100, 2));
    this.maze.push(new Maze(200, 300, 50, 2));
    this.maze.push(new Maze(250, 300, 2, 50));
    this.maze.push(new Maze(300, 200, 2, 100));
    this.maze.push(new Maze(250, 250, 50, 2));

    this.maze.push(new Maze(150, 150, 350, 2));
    this.maze.push(new Maze(200, 70, 2, 80));
    this.maze.push(new Maze(250, 30, 2, 70));
    this.maze.push(new Maze(350, 70, 2, 80));
    this.maze.push(new Maze(300, 100, 50, 2));
    this.maze.push(new Maze(500, 100, 2, 130));
    this.maze.push(new Maze(450, 30, 2, 70));

    this.maze.push(new Maze(400, 150, 2, 150));
    this.maze.push(new Maze(350, 300, 100, 2));

    this.maze.push(new Maze(600, 30, 2, 200));
    this.maze.push(new Maze(600, 130, 150, 2));
    this.maze.push(new Maze(500, 230, 150, 2));

    this.maze.push(new Maze(500, 280, 2, 90));
    this.maze.push(new Maze(580, 230, 2, 70));
    this.maze.push(new Maze(650, 300, 2, 70));
    this.maze.push(new Maze(750, 200, 2, 100));
    this.maze.push(new Maze(700, 30, 2, 70));

    this.maze.push(new Maze(650, 300, 102, 2));

    this.playerRoom2 = new Player(150, 200, 10);
  }

  sound() {
    this.bgAudio.play();
  }

  draw() {
    background("#161928");
    this.theRoom();
    this.sound();


    // Iterate through maze objects
    for (let i = 0; i < this.maze.length; i++) {
      let mazeObj = this.maze[i];

      // Check for collision based on position and color
      if (this.playerRoom2.collides(mazeObj)) {
        // Adjust player's position to avoid collision
        this.playerRoom2.moveBack();
      }
      if (
        this.playerRoom2.y < 30 ||
        this.playerRoom2.y > 370 ||
        this.playerRoom2.x > width - 30
      ) {
        this.playerRoom2.moveBack();
      }

      mazeObj.show();
    }

    // Check if the code is correct and the door is not open
    if (this.codeCheckBoolean && !this.soundPlayed) {
      push();
      fill(0);
      beginShape();
      vertex(width - 30, height - 230);
      vertex(width - 15, height - 250);
      vertex(width - 15, height - 130);
      vertex(width - 30, height - 150);
      endShape(CLOSE);
      pop();

      push();
      fill("brown");
      beginShape();
      vertex(width - 30, height - 230);
      vertex(width - 15, height - 250);
      vertex(width - 100, 130);
      vertex(width - 100, 150);
      endShape(CLOSE);
      pop();

      this.doorSound.play();
      this.soundPlayed = true; // Mark the door as open
    }

    // Draw the new shape if the door is open
    if (this.soundPlayed) {
      push();
      fill(0);
      beginShape();
      vertex(width - 30, height - 230);
      vertex(width - 15, height - 250);
      vertex(width - 15, height - 130);
      vertex(width - 30, height - 150);
      endShape(CLOSE);
      pop();

      push();
      fill("brown");
      beginShape();
      vertex(width - 30, height - 230);
      vertex(width - 15, height - 250);
      vertex(width - 100, 130);
      vertex(width - 100, 150);
      endShape(CLOSE);
      pop();
    }

    this.playerRoom2.show();
    this.playerMovement();
    this.infobuttonRoom2(0, 0);
    this.paper();
    this.hint(780, 300);
    this.solution(830, 300);
  }

  theRoom() {
    //walls
    fill("#585f82");
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

    fill("black");
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

    //doors
    fill("brown");
    beginShape();
    vertex(30, height - 230);
    vertex(15, height - 250);
    vertex(15, height - 130);
    vertex(30, height - 150);
    endShape(CLOSE);

    beginShape();
    vertex(width - 30, height - 230);
    vertex(width - 15, height - 250);
    vertex(width - 15, height - 130);
    vertex(width - 30, height - 150);
    endShape(CLOSE);
  }

  checkMouseHover() {
    if (mouseX > 800 && mouseX < 820 && mouseY < 120 && mouseY > 100) {
      this.paperState = 1;
    } else {
      this.paperState = 0;
    }

    if (mouseX > 900 && mouseX < 920 && mouseY > 300 && mouseY < 320) {
      this.paperState2 = 1;
    } else {
      this.paperState2 = 0;
    }
  }

  checkCode() {
    var codeMaze = this.input.value();
    if (
      (codeMaze == "knowledge" ||
        codeMaze == "KNOWLEDGE" ||
        codeMaze == "Knowledge") &&
      this.playerRoom2.x > 750
    ) {
      this.codeCheckBoolean = true;
    } else {
      this.wrongans.play();
    }
  }

  playerMovement() {
    if (keyIsDown(37)) {
      this.playerRoom2.moveLeft();
    } else if (keyIsDown(39)) {
      this.playerRoom2.moveRight();
    } else if (keyIsDown(38)) {
      this.playerRoom2.moveUp();
    } else if (keyIsDown(40)) {
      this.playerRoom2.moveDown();
    }
  }

  infobuttonRoom2(infobuttonX, infobuttonY) {
    push();
    translate(infobuttonX, infobuttonY);
    let distance = dist(mouseX, mouseY, infobuttonX + 50, infobuttonY + 50);

    // Check if the mouse is hovering over the circle
    if (distance < 40 / 2) {
      fill("white");
      rect(70, 100, 300, 150, 4, 4, 4, 4);
      fill("black");
      text(
        "In Room 2, you'll face a maze, and your \n keyboard's arrow keys will be your guide. Navigate \n through the maze with precision. As you progress, keep \n an eye out for objects and clues on the screen. \n These will aid you in uncovering a magical word, a \n puzzle guarding the passage to Room 3. Remember, \n  the Kohinoor's journey was filled with twists and turns, \n just like this maze. Solve it, and you'll be one step \n closer to your goal.",
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
    fill("rgb(216,194,194)");

    this.checkMouseHover();
    if (this.paperState == 0) {
      rect(800, 100, 15, 20);
      stroke(0);
      line(802, 107, 813, 107);
      line(802, 110, 813, 110);
      line(802, 113, 813, 113);
    } else {
      rect(693, 60, 200, 200);
      push();
      noStroke();
      fill("black");
      text(
        "I'm a place where time stands still,\n time stands still, \n\n Where ancient relics \n give you a thrill. \n\n Galleries of the past, \n from ceiling to floor, \n\n What am I, with knowledge galore?",
        700,
        100
      );

      pop();
    }

    if (this.paperState2 == 0) {
      push();
      translate(100, 200);
      rect(800, 100, 15, 20);
      stroke(0);
      line(802, 107, 813, 107);
      line(802, 110, 813, 110);
      line(802, 113, 813, 113);
      pop(0);
    } else {
      push();
      noStroke();
      rect(750, 150, 200, 200);
      fill("black");
      text(
        "I live in a ______, where whispers \nof the past,\n\nReside in the shadows, a mystery \nto grasp. \n\nI'm not gold, silver, nor a gem so \nbright, \n\nYet I'm precious, valued for \nintellectual might.",
        760,
        180
      );
      pop();
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
      text("Something to do with information \nand facts", -195, 35);
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
      text("Knowledge", -50, 51);
    }
    pop();
  }
}

class Maze {
  constructor(xMaze, yMaze, width, height) {
    this.x = xMaze;
    this.y = yMaze;
    this.width = width;
    this.height = height;
  }

  show() {
    fill("white");
    noStroke();
    rect(this.x, this.y, this.width, this.height);
  }
}

class Player {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.prevX = x;
    this.prevY = y;

    if (y + 20 < 30) {
      y = 50;
    }
  }

  moveLeft() {
    this.x -= 5;
  }

  moveRight() {
    this.x += 5;
  }

  moveUp() {
    this.y -= 5;
  }

  moveDown() {
    this.y += 5;
  }

  moveBack() {
    this.x = this.prevX;
    this.y = this.prevY;
  }

  show() {
    fill("rgb(255,205,150)");
    noStroke();
    ellipse(this.x, this.y, this.radius * 2);
    this.prevX = this.x;
    this.prevY = this.y;
  }

  collides(obj) {
    let circleX = this.x;
    let circleY = this.y;
    let rectX = obj.x;
    let rectY = obj.y;
    let rectW = obj.width;
    let rectH = obj.height;

    let closestX = constrain(circleX, rectX, rectX + rectW);
    let closestY = constrain(circleY, rectY, rectY + rectH);

    let d = dist(circleX, circleY, closestX, closestY);
    return d < this.radius;
  }
}