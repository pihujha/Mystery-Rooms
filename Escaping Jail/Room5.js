class PrisonMaze {
  constructor() {
    this.maze = [];
    this.player = 0;
    this.isOver = false;
    this.goingUp = true;
    this.goingDown = true;
    this.yCreature = 370;
    this.yCreatureTwo = 30;
    this.lost = false;

    this.dooropenR5 = false;
    this.soundPlayed = false;
    this.bgAudio = new Audio("story2.mp3");
    this.bgAudio.loop = true;
    this.bgAudio.play();
  }

  setup() {
    createCanvas(1000, 400);

    //adding the maze objects to the maze array
    this.maze.push(new Maze(100, 30, 870, 2));
    this.maze.push(new Maze(100, 30, 2, 340));
    this.maze.push(new Maze(100, 370, 870, 2));
    // this.maze.push(new Maze(750, 30, 2, 102));
    // this.maze.push(new Maze(750, 300, 2, 72));

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

    this.maze.push(new Maze(600, 80, 2, 150));
    this.maze.push(new Maze(600, 165, 150, 2));
    this.maze.push(new Maze(500, 230, 102, 2));

    this.maze.push(new Maze(500, 280, 2, 90));
    this.maze.push(new Maze(580, 230, 2, 70));
    this.maze.push(new Maze(650, 250, 2, 50));
    // this.maze.push(new Maze(750, 200, 2, 100));
    this.maze.push(new Maze(700, 30, 2, 70));

    this.maze.push(new Maze(650, 250, 100, 2));

    this.player = new Player(150, 200, 10);
  }

  grumpyHumptyDumpty(x, y) {
    push();
    translate(x, y);
    fill("#152161");
    circle(0, 0, 30);
    pop();
  }
  sound() {
    this.bgAudio.play();
  }
  draw() {
    background("rgb(69,11,11)");
    push();
    fill("green");
    rect(770, 30, 200, 340);
    pop();
    this.theRoom();
    this.sound();
    // Iterate through maze objects
    for (let i = 0; i < this.maze.length; i++) {
      let mazeObj = this.maze[i];

      // Check for collision based on position and color
      if (this.player.collides(mazeObj)) {
        // Adjust player's position to avoid collision
        this.player.moveBack();
      }
      if (
        this.player.y < 30 ||
        this.player.y > 370 ||
        this.player.x > width - 30
      ) {
        this.player.moveBack();
      }

      mazeObj.show();
    }
    if (this.player.x > 800 && this.player.y < 240 && this.player.y > 180) {
      this.dooropenR5 = true;

      if (!this.soundPlayed) {
        this.doorJustOpened = true;
      }
    }

    if (this.dooropenR5 && !this.soundPlayed && this.doorJustOpened) {
      push();
      fill(0);
      beginShape();
      vertex(width - 30, height - 230);
      vertex(width - 15, height - 250);
      vertex(width - 15, height - 130);
      vertex(width - 30, height - 150);
      endShape(CLOSE);
      pop();
      this.doorSound.play();
      this.soundPlayed = true;
      this.doorJustOpened = false; // Reset the flag
    }

    //doors
    push();
    fill("black");
    rect(100, 170, 30, 60, 20, 20);
    rect(750, 180, 30, 60, 20, 20);
    fill("brown");

    beginShape();
    vertex(width - 30, height - 230);
    vertex(width - 15, height - 250);
    vertex(width - 15, height - 130);
    vertex(width - 30, height - 150);
    endShape(CLOSE);
    pop();

    if (this.yCreature > 370) {
      this.goingUp = true;
    } else if (this.yCreature < 30) {
      this.goingUp = false;
    }

    if (this.goingUp) {
      this.yCreature = this.yCreature - 2;
      this.grumpyHumptyDumpty(810, this.yCreature);
    } else {
      this.yCreature = this.yCreature + 2;
      this.grumpyHumptyDumpty(810, this.yCreature);
    }

    if (this.yCreatureTwo > 370) {
      this.goingDown = false;
    } else if (this.yCreatureTwo < 30) {
      this.goingDown = true;
    }

    if (this.goingDown) {
      this.yCreatureTwo = this.yCreatureTwo + 2;
      this.grumpyHumptyDumpty(900, this.yCreatureTwo);
    } else {
      this.yCreatureTwo = this.yCreatureTwo - 2;
      this.grumpyHumptyDumpty(900, this.yCreatureTwo);
    }

    if (
      dist(this.player.x, this.player.y, 800, this.yCreature) < 30 ||
      dist(this.player.x, this.player.y, 900, this.yCreatureTwo) < 30
    ) {
      if (!this.lost) {
        this.lost = true;
        this.soundPlayed = true;
        this.dooropenR5 = true;
      }
    }

    if (this.lost == true) {
      push();
      textSize(200);
      text("lost", 200, 200);
      pop();
    }

    this.player.show();
    this.playerMovement();

    this.dead();
    push();
    scale(0.1);
    this.paper(370, 800);
    pop();
    this.hover();
    this.infobuttonRoom2(0, 0);

    if (this.player.x > 930) {
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
  }

  theRoom() {
    push();
    //walls
    //     fill("black");
    //     beginShape();
    //     vertex(0, 0);
    //     vertex(30, 30);
    //     vertex(30, height - 30);
    //     vertex(0, height);
    //     endShape(CLOSE);

    //     beginShape();
    //     vertex(width, 0);
    //     vertex(width - 30, 30);
    //     vertex(width - 30, height - 30);
    //     vertex(width, height);
    //     endShape(CLOSE);

    //     fill("black");
    //     beginShape();
    //     vertex(0, 0);
    //     vertex(30, 30);
    //     vertex(width - 30, 30);

    //     vertex(width, 0);
    //     endShape(CLOSE);

    //     beginShape();
    //     vertex(30, height - 30);
    //     vertex(0, height);
    //     vertex(width, height);
    //     vertex(width - 30, height - 30);
    //     endShape(CLOSE);

    //     //doors
    //     fill("rgb(91,13,13)");
    //     beginShape();
    //     vertex(30, height - 230);
    //     vertex(15, height - 250);
    //     vertex(15, height - 130);
    //     vertex(30, height - 150);
    //     endShape(CLOSE);

    //     beginShape();
    //     vertex(width - 30, height - 230);
    //     vertex(width - 15, height - 250);
    //     vertex(width - 15, height - 130);
    //     vertex(width - 30, height - 150);
    //     endShape(CLOSE);
    //     pop();
  }

  playerMovement() {
    if (keyIsDown(37)) {
      this.player.moveLeft();
    } else if (keyIsDown(39)) {
      this.player.moveRight();
    } else if (keyIsDown(38)) {
      this.player.moveUp();
    } else if (keyIsDown(40)) {
      this.player.moveDown();
    }
  }

  infobuttonRoom2(infobuttonX, infobuttonY) {
    push();
    translate(infobuttonX, infobuttonY);
    let distance = dist(mouseX, mouseY, infobuttonX + 50, infobuttonY + 50);

    // Check if the mouse is hovering over the circle
    if (distance < 40 / 2) {
      fill("white");
      rect(70, 100, 310, 120, 4, 4, 4, 4);
      fill("black");
      text(
        "Fear not, valiant explorer! The final challenge looms—a \nmaze of uncertainty. Trust in your instincts as you \nnavigate its twists and turns. Though the letter's words \nmay deceive, carve your own destiny within the \nlabyrinth. Freedom awaits at the end of your chosen \npath. Forge ahead, and may victory be yours.",
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

  dead() {}

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
        "Dear [Prisoner's Name], \n\nLost in the labyrinth of uncertainty, remember this: there are three paths, but every road leads to liberation. It might twist and turn, but trust your instincts. Navigate the maze, and on the other side, freedom awaits. The end is near; claim it. \n\nOnward, \n\n[Escaped Person's Pseudonym]",
        305,
        70,
        210,
        300
      );
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
