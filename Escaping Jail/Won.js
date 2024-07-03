class ConfettiParty {
  constructor() {}

  draw() {
    background("rgb(85,14,14)"); // Dark red background
    textAlign(CENTER, CENTER);
    textSize(64);
    colorMode(HSB, 360, 100, 100); // Use HSB color mode for shades of red
    // Create confetti particles
    if (frameCount % 5 === 0) {
      confetti.push(new Confetti(random(width), random(height)));
    }

    // Update and display confetti
    for (let i = confetti.length - 1; i >= 0; i--) {
      confetti[i].update();
      confetti[i].display();
      if (confetti[i].offScreen()) {
        confetti.splice(i, 1);
      }
    }

    // Display "You Won!" text
    fill("white"); // Bright red color for text
    text("You Won!", width / 2, height / 2);
  }
}

class Confetti {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(10, 30); // Larger confetti size
    this.color = color(random(0, 20), 100, 100); // Shades of red
    this.angle = random(TWO_PI);
    this.speed = random(1, 3);
  }

  update() {
    this.x += cos(this.angle) * this.speed;
    this.y += sin(this.angle) * this.speed;
    this.angle += 0.1;
  }

  display() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.size, this.size);
  }

  offScreen() {
    return (
      this.x < -this.size ||
      this.x > width + this.size ||
      this.y < -this.size ||
      this.y > height + this.size
    );
  }
}
