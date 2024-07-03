let confettiLost = [];

class Losing {
  setup() {
    for (let i = 0; i < 100; i++) {
      confettiLost.push(new ConfettiLost());
    }
  }
  draw() {
    createCanvas(1000, 400);

    background("black");
    textSize(50);

    fill("white");
    text("You Lost", 400, 200);

    for (let i = 0; i < confettiLost.length; i++) {
      confettiLost[i].display();
      confettiLost[i].fall();
    }
  }
}

class ConfettiLost {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.color = color(random(255), random(0), random(0));
  }

  display() {
    noStroke();
    fill("red");
    rect(this.x, this.y, 5, 10);
  }

  fall() {
    this.y += random(1, 5);

    if (this.y > height) {
      this.y = 0;
      this.x = random(width);
    }
  }
}
