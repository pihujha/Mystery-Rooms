class Story3Room4 {
  constructor() {
    this.dooropenR4 = false;
    this.playerX = -120;
    this.playerY = 65;
    this.img1 = 0;
    this.img2 = 0;
    this.bgAudio = new Audio("story3.mp3");
    this.bgAudio.loop = true;
    this.bgAudio.play();
  }

  setup() {
    this.img1 = loadImage("story3.png");
    this.img2 = loadImage(
      "https://upload.wikimedia.org/wikipedia/commons/6/6c/US_state_abbrev_map.png"
    );
  }

  infobuttonRoom4(infobuttonX, infobuttonY) {
    push();
    translate(infobuttonX, infobuttonY);
    let distance = dist(mouseX, mouseY, infobuttonX + 50, infobuttonY + 50);

    // Check if the mouse is hovering over the circle
    if (distance < 40 / 2) {
      textSize(11);
      fill("white");
      rect(70, 100, 300, 100, 4, 4, 4, 4);
      fill("black");
      text(
        "Examining the identities of the twelve victims, a meticulous\nscrutiny begins. Uncover commonalities among these\n individuals to expose the underlying thread that ties them\ntogether. In this room, the collective history of the victims\nunveils a sinister connection,pushing you closer to the heart\nof the mystery.",
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
      textSize(10);
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
    image(this.img1, 1950, 650);
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
      image(this.img1, 1290, 100);
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
      textSize(12);
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
      textSize(12);
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
      textSize(12);
      text("Witness Statement", 30, -5);
      pop();
    }

    rect(75, -90, 35, 60);
    push();
    fill(0);
    translate(73, -80);
    textFont("mystery");
    textSize(30);
    text("?", 12, 28);
    push();
    translate(8, 0);
    scale(0.1);
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
    pop();

    if (mouseX > 305 && mouseX < 340 && mouseY > 187 && mouseY < 245) {
      push();
      translate(100, -200);
      scale(1);
      for (let i = 0; i <= 0.7; i += 0.01) {
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
      textSize(15);
      text(
        "Xnqjsy fsi xynqq, \n\nst uzqxj yt kjjq; \n\nbmfy fr N? \n\n\n\n         Xjj dtz xtts (See you soon)",
        10,
        30
      );
      pop();
    }

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
  
  info() {
    //12
    const sheetX12 = 780;
    const sheetY12 = 140;
    const sheetWidth12 = 25;
    const sheetHeight12 = 25;
    const scaleFactor12 = 3;

    // Check if the mouse is over the white sheet
    if (
      mouseX >= sheetX12 &&
      mouseX <= sheetX12 + sheetWidth12 &&
      mouseY >= sheetY12 &&
      mouseY <= sheetY12 + sheetHeight12
    ) {
      push();
      // Enlarged
      scale(scaleFactor12);

      fill(255);
      rect(
        sheetX12 / scaleFactor12,
        sheetY12 / scaleFactor12,
        sheetWidth12 * scaleFactor12,
        sheetHeight12 * scaleFactor12
      );
      fill(0);
      textSize(6);
      text(
        "Name:Sarah Thompson\nAge: 28\nResidence: Denver\nLast 3 calls:\nPortland,10:25 AM\nGreenville,11:30 AM\nMiami,6:15 AM",
        sheetX12 / scaleFactor12 + 5,
        sheetY12 / scaleFactor12 + 10
      );

      pop();
    } else {
      // normal-sized white sheet
      fill(255);
      rect(sheetX12, sheetY12, sheetWidth12, sheetHeight12);
      fill(0);
      textSize(2);
      text(
        "Name:Jessica Kim\nAge: 29\nResidence: New York\nLast 3 calls:\nPortland,5:00AM\nNapa,7:45 AM\nChicago,11:40 PM",
        sheetX12 + 4,
        sheetY12 + 5
      );
    }
    //11
    const sheetX11 = 750;
    const sheetY11 = 140;
    const sheetWidth11 = 25;
    const sheetHeight11 = 25;
    const scaleFactor11 = 3;

    // Check if the mouse is over the white sheet
    if (
      mouseX >= sheetX11 &&
      mouseX <= sheetX11 + sheetWidth11 &&
      mouseY >= sheetY11 &&
      mouseY <= sheetY11 + sheetHeight11
    ) {
      push();
      // Enlarged
      scale(scaleFactor11);

      fill(255);
      rect(
        sheetX11 / scaleFactor11,
        sheetY11 / scaleFactor11,
        sheetWidth11 * scaleFactor11,
        sheetHeight11 * scaleFactor11
      );
      fill(0);
      textSize(6);
      text(
        "Name:Alex Rordriguez\nAge: 35\nResidence: Dallas\nLast 3 calls:\nSan Luis Obispo,9:15 AM\nPortland,1:30 PM\nAtlanta,5:55 PM",
        sheetX11 / scaleFactor11 + 5,
        sheetY11 / scaleFactor11 + 10
      );

      pop();
    } else {
      // normal-sized white sheet
      fill(255);
      rect(sheetX11, sheetY11, sheetWidth11, sheetHeight11);
      fill(0);
      textSize(2);
      text(
        "Name:Jessica Kim\nAge: 29\nResidence: New York\nLast 3 calls:\nPortland,5:00AM\nNapa,7:45 AM\nChicago,11:40 PM",
        sheetX11 + 4,
        sheetY11 + 5
      );
    }
    //10
    const sheetX10 = 720;
    const sheetY10 = 140;
    const sheetWidth10 = 25;
    const sheetHeight10 = 25;
    const scaleFactor10 = 3;

    // Check if the mouse is over the white sheet
    if (
      mouseX >= sheetX10 &&
      mouseX <= sheetX10 + sheetWidth10 &&
      mouseY >= sheetY10 &&
      mouseY <= sheetY10 + sheetHeight10
    ) {
      push();
      // Enlarged
      scale(scaleFactor10);

      fill(255);
      rect(
        sheetX10 / scaleFactor10,
        sheetY10 / scaleFactor10,
        sheetWidth10 * scaleFactor10,
        sheetHeight10 * scaleFactor10
      );
      fill(0);
      textSize(6);
      text(
        "Name:Emily Chen\nAge: 23\nResidence: Pheonix\nLast 3 calls:\nPortland,8:40 AM\nHouston,12:20 PM\nBoston,4:45 PM",
        sheetX10 / scaleFactor10 + 5,
        sheetY10 / scaleFactor10 + 10
      );

      pop();
    } else {
      //normal-sized white sheet
      fill(255);
      rect(sheetX10, sheetY10, sheetWidth10, sheetHeight10);
      fill(0);
      textSize(2);
      text(
        "Name:Jessica Kim\nAge: 29\nResidence: New York\nLast 3 calls:\nPortland,5:00AM\nNapa,7:45 AM\nChicago,11:40 PM",
        sheetX10 + 4,
        sheetY10 + 5
      );
    }
    //9
    const sheetX9 = 690;
    const sheetY9 = 140;
    const sheetWidth9 = 25;
    const sheetHeight9 = 25;
    const scaleFactor9 = 3;

    // Check if the mouse is over the white sheet
    if (
      mouseX >= sheetX9 &&
      mouseX <= sheetX9 + sheetWidth9 &&
      mouseY >= sheetY9 &&
      mouseY <= sheetY9 + sheetHeight9
    ) {
      push();
      // Enlarged
      scale(scaleFactor9);

      fill(255);
      rect(
        sheetX9 / scaleFactor9,
        sheetY9 / scaleFactor9,
        sheetWidth9 * scaleFactor9,
        sheetHeight9 * scaleFactor9
      );
      fill(0);
      textSize(6);
      text(
        "Name:Arjun Reddy\nAge: 30\nResidence: Seattle\nLast 3 calls:\nDenver,7:55AM\nPheonix,11:11 AM\nPortland, 3:30PM",
        sheetX9 / scaleFactor9 + 5,
        sheetY9 / scaleFactor9 + 10
      );

      pop();
    } else {
      // normal-sized white sheet
      fill(255);
      rect(sheetX9, sheetY9, sheetWidth9, sheetHeight9);
      fill(0);
      textSize(2);
      text(
        "Name:Jessica Kim\nAge: 29\nResidence: New York\nLast 3 calls:\nPortland,5:00AM\nNapa,7:45 AM\nChicago,11:40 PM",
        sheetX9 + 4,
        sheetY9 + 5
      );
    }
    //8
    const sheetX8 = 780;
    const sheetY8 = 110;
    const sheetWidth8 = 25;
    const sheetHeight8 = 25;
    const scaleFactor8 = 3;

    // Check if the mouse is over the white sheet
    if (
      mouseX >= sheetX8 &&
      mouseX <= sheetX8 + sheetWidth8 &&
      mouseY >= sheetY8 &&
      mouseY <= sheetY8 + sheetHeight8
    ) {
      push();
      // Enlarged
      scale(scaleFactor8);

      fill(255);
      rect(
        sheetX8 / scaleFactor8,
        sheetY8 / scaleFactor8,
        sheetWidth8 * scaleFactor8,
        sheetHeight8 * scaleFactor8
      );
      fill(0);
      textSize(6);
      text(
        "Name:Olivia Adams\nAge: 27\nResidence: Miami\nLast 3 calls:\nDallas,7:35AM\nPortland, 10:30 PM\nSedona, 2:15 PM",
        sheetX8 / scaleFactor8 + 5,
        sheetY8 / scaleFactor8 + 10
      );

      pop();
    } else {
      // normal-sized white sheet
      fill(255);
      rect(sheetX8, sheetY8, sheetWidth8, sheetHeight8);
      fill(0);
      textSize(2);
      text(
        "Name:Jessica Kim\nAge: 29\nResidence: New York\nLast 3 calls:\nPortland,5:00AM\nNapa,7:45 AM\nChicago,11:40 PM",
        sheetX8 + 4,
        sheetY8 + 5
      );
    }
    //7
    const sheetX7 = 750;
    const sheetY7 = 110;
    const sheetWidth7 = 25;
    const sheetHeight7 = 25;
    const scaleFactor7 = 3;

    // Check if the mouse is over the white sheet
    if (
      mouseX >= sheetX7 &&
      mouseX <= sheetX7 + sheetWidth7 &&
      mouseY >= sheetY7 &&
      mouseY <= sheetY7 + sheetHeight7
    ) {
      push();
      // Enlarged
      scale(scaleFactor7);

      fill(255);
      rect(
        sheetX7 / scaleFactor7,
        sheetY7 / scaleFactor7,
        sheetWidth7 * scaleFactor7,
        sheetHeight7 * scaleFactor7
      );
      fill(0);
      textSize(6);
      text(
        "Name:Chris Williams\nAge: 33\nResidence: San Francisco\nLast 3 calls:\nPortland,6:45AM\nNew York, 9:30 AM\nSeattle,1:40 PM",
        sheetX7 / scaleFactor7 + 5,
        sheetY7 / scaleFactor7 + 10
      );

      pop();
    } else {
      // normal-sized white sheet
      fill(255);
      rect(sheetX7, sheetY7, sheetWidth7, sheetHeight7);
      fill(0);
      textSize(2);
      text(
        "Name:Jessica Kim\nAge: 29\nResidence: New York\nLast 3 calls:\nPortland,5:00AM\nNapa,7:45 AM\nChicago,11:40 PM",
        sheetX7 + 4,
        sheetY7 + 5
      );
    }
    //6
    const sheetX6 = 720;
    const sheetY6 = 110;
    const sheetWidth6 = 25;
    const sheetHeight6 = 25;
    const scaleFactor6 = 3;

    // Check if the mouse is over the white sheet
    if (
      mouseX >= sheetX6 &&
      mouseX <= sheetX6 + sheetWidth6 &&
      mouseY >= sheetY6 &&
      mouseY <= sheetY6 + sheetHeight6
    ) {
      push();
      // Enlarged
      scale(scaleFactor6);

      fill(255);
      rect(
        sheetX6 / scaleFactor6,
        sheetY6 / scaleFactor6,
        sheetWidth6 * scaleFactor6,
        sheetHeight6 * scaleFactor6
      );
      fill(0);
      textSize(6);
      text(
        "Name:Jasmine Smith\nAge: 25\nResidence: Chicago\nLast 3 calls:\nLas Vegas,6:05AM\nPortland,8:55 PM\nAppleton,12:45 AM",
        sheetX6 / scaleFactor6 + 5,
        sheetY6 / scaleFactor6 + 10
      );

      pop();
    } else {
      //normal-sized white sheet
      fill(255);
      rect(sheetX6, sheetY6, sheetWidth6, sheetHeight6);
      fill(0);
      textSize(2);
      text(
        "Name:Jessica Kim\nAge: 29\nResidence: New York\nLast 3 calls:\nPortland,5:00AM\nNapa,7:45 AM\nChicago,11:40 PM",
        sheetX6 + 4,
        sheetY6 + 5
      );
    }
    //5
    const sheetX5 = 690;
    const sheetY5 = 110;
    const sheetWidth5 = 25;
    const sheetHeight5 = 25;
    const scaleFactor5 = 3;

    // Check if the mouse is over the white sheet
    if (
      mouseX >= sheetX5 &&
      mouseX <= sheetX5 + sheetWidth5 &&
      mouseY >= sheetY5 &&
      mouseY <= sheetY5 + sheetHeight5
    ) {
      push();
      // Enlarged
      scale(scaleFactor5);

      fill(255);
      rect(
        sheetX5 / scaleFactor5,
        sheetY5 / scaleFactor5,
        sheetWidth5 * scaleFactor5,
        sheetHeight5 * scaleFactor5
      );
      fill(0);
      textSize(6);
      text(
        "Name:Michael Davis\nAge: 32\nResidence: Houston\nLast 3 calls:\nSan Diego,5:35AM\nPortland,8:20 PM\nBoulder,11:45 AM",
        sheetX5 / scaleFactor5 + 5,
        sheetY5 / scaleFactor5 + 10
      );

      pop();
    } else {
      // normal-sized white sheet
      fill(255);
      rect(sheetX5, sheetY5, sheetWidth5, sheetHeight5);
      fill(0);
      textSize(2);
      text(
        "Name:Jessica Kim\nAge: 29\nResidence: New York\nLast 3 calls:\nPortland,5:00AM\nNapa,7:45 AM\nChicago,11:40 PM",
        sheetX5 + 4,
        sheetY5 + 5
      );
    }
    //4
    const sheetX4 = 780;
    const sheetY4 = 80;
    const sheetWidth4 = 25;
    const sheetHeight4 = 25;
    const scaleFactor4 = 3;

    // Check if the mouse is over the white sheet
    if (
      mouseX >= sheetX4 &&
      mouseX <= sheetX4 + sheetWidth4 &&
      mouseY >= sheetY4 &&
      mouseY <= sheetY4 + sheetHeight4
    ) {
      push();
      // Enlarged
      scale(scaleFactor4);

      fill(255);
      rect(
        sheetX4 / scaleFactor4,
        sheetY4 / scaleFactor4,
        sheetWidth4 * scaleFactor4,
        sheetHeight4 * scaleFactor4
      );
      fill(0);
      textSize(6);
      text(
        "Name:Jessica Kim\nAge: 29\nResidence: New York\nLast 3 calls:\nPortland,5:00AM\nNapa,7:45 AM\nChicago,11:40 PM",
        sheetX4 / scaleFactor4 + 5,
        sheetY4 / scaleFactor4 + 10
      );

      pop();
    } else {
      //normal-sized white sheet
      fill(255);
      rect(sheetX4, sheetY4, sheetWidth4, sheetHeight4);
      fill(0);
      textSize(2);
      text(
        "Name:Jessica Kim\nAge: 29\nResidence: New York\nLast 3 calls:\nPortland,5:00AM\nNapa,7:45 AM\nChicago,11:40 PM",
        sheetX4 + 4,
        sheetY4 + 5
      );
    }
    //3
    const sheetX3 = 750;
    const sheetY3 = 80;
    const sheetWidth3 = 25;
    const sheetHeight3 = 25;
    const scaleFactor3 = 3;

    // Check if the mouse is over the white sheet
    if (
      mouseX >= sheetX3 &&
      mouseX <= sheetX3 + sheetWidth3 &&
      mouseY >= sheetY3 &&
      mouseY <= sheetY3 + sheetHeight3
    ) {
      push();
      // Enlarged
      scale(scaleFactor3);

      fill(255);
      rect(
        sheetX3 / scaleFactor3,
        sheetY3 / scaleFactor3,
        sheetWidth3 * scaleFactor3,
        sheetHeight3 * scaleFactor3
      );
      fill(0);
      textSize(6);
      text(
        "Name: Bryan Lewis\nAge: 31\nResidence: Los Angeles\nLast 3 calls:\nSavannah,4:30 AM\nBurlington,7:15 PM\nPortland,10:40 AM",
        sheetX3 / scaleFactor3 + 5,
        sheetY3 / scaleFactor3 + 10
      );

      pop();
    } else {
      //normal-sized white sheet
      fill(255);
      rect(sheetX3, sheetY3, sheetWidth3, sheetHeight3);
      fill(0);
      textSize(2);
      text(
        "Name: Kevin Garcia\nAge: 37\nResidence: Atlanta\nLast 3 calls:\nPortland, 3:30 PM\nBoulder, 5:20 PM\nAnnapolis, 11:40 AM",
        sheetX3 + 4,
        sheetY3 + 5
      );
    }
    //2
    const sheetX2 = 720;
    const sheetY2 = 80;
    const sheetWidth2 = 25;
    const sheetHeight2 = 25;
    const scaleFactor2 = 3;

    // Check if the mouse is over the white sheet
    if (
      mouseX >= sheetX2 &&
      mouseX <= sheetX2 + sheetWidth2 &&
      mouseY >= sheetY2 &&
      mouseY <= sheetY2 + sheetHeight2
    ) {
      push();
      // Enlarged
      scale(scaleFactor2);

      fill(255);
      rect(
        sheetX2 / scaleFactor2,
        sheetY2 / scaleFactor2,
        sheetWidth2 * scaleFactor2,
        sheetHeight2 * scaleFactor2
      );
      fill(0);
      textSize(6);
      text(
        "Name: Kevin Garcia\nAge: 37\nResidence: Atlanta\nLast 3 calls:\nPortland, 3:30 PM\nBoulder, 5:20 PM\nAnnapolis, 11:40 AM",
        sheetX2 / scaleFactor2 + 5,
        sheetY2 / scaleFactor2 + 10
      );

      pop();
    } else {
      //normal-sized white sheet
      fill(255);
      rect(sheetX2, sheetY2, sheetWidth2, sheetHeight2);
      fill(0);
      textSize(2);
      text(
        "Name: Kevin Garcia\nAge: 37\nResidence: Atlanta\nLast 3 calls:\nPortland, 3:30 PM\nBoulder, 5:20 PM\nAnnapolis, 11:40 AM",
        sheetX2 + 4,
        sheetY2 + 5
      );
    }
    //1
    const sheetX = 690;
    const sheetY = 80;
    const sheetWidth = 25;
    const sheetHeight = 25;
    const scaleFactor = 3;

    // Check if the mouse is over the white sheet
    if (
      mouseX >= sheetX &&
      mouseX <= sheetX + sheetWidth &&
      mouseY >= sheetY &&
      mouseY <= sheetY + sheetHeight
    ) {
      push();
      // Enlarged
      scale(scaleFactor);

      fill(255);
      rect(
        sheetX / scaleFactor,
        sheetY / scaleFactor,
        sheetWidth * scaleFactor,
        sheetHeight * scaleFactor
      );
      fill(0);
      textSize(6);
      text(
        "Name: Taylor Black\nAge: 27\nResidence: Boston\nLast 3 calls:\nSanta Cruz,4:00 AM\nPortland, 6:35 AM\nGalena, 9:50 PM",
        sheetX / scaleFactor + 5,
        sheetY / scaleFactor + 10
      );

      pop();
    } else {
      // normal-sized white sheet
      fill(255);
      rect(sheetX, sheetY, sheetWidth, sheetHeight);
      fill(0);
      textSize(2);
      text(
        "Name: Kevin Garcia\nAge: 37\nResidence: Atlanta\nLast 3 calls:\nPortland, 3:30 PM\nCharlottesville, 5:20 PM\nAnnapolis, 11:40 AM",
        sheetX + 4,
        sheetY + 5
      );
    }
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

  Room4() {
    this.createroomBackground();
    this.board();
    this.bookshelf();
    this.mapp(480, 72);
    this.states(470, 90);
    this.table();
    this.info();
    this.dustbin();
    this.pic();
    this.listOfEvidence();
    this.hoverstates();
    this.doors();
    this.infobuttonRoom4(0, 0);
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
    this.Room4();
    this.sound();

    if (keyIsDown(LEFT_ARROW)) {
      this.playerX -= 3;
      if (this.playerX < -130) {
        this.playerX = -120;
      }
    }

    if (keyIsDown(RIGHT_ARROW)) {
      this.playerX += 3;
      if (!this.dooropenR4 && this.playerX > 700) {
        this.playerX = 690;
      }
    }

    push();
    stroke("black");
    translate(this.playerX, this.playerY);
    this.detectivePlayer();
    pop();
    this.hint(800, 300);
    this.solution(850, 300);
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

    this.lamp();

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

  states(statesx, statesy) {
    fill(" #E3E0E0");
    push();
    scale(0.8);
    textSize(12);
    translate(statesx, statesy);
    scale(0.8);
    rect(0, 0, 150, 210);
    fill("black");
    text("States", 5, 15);
    text(
      "1. Montana \n2. Mississippi \n3. Iowa \n4. Wyoming \n5. Indiana \n6. Idaho \n7. New Mexico  \n8. Utah \n9. Louisiana \n10. Wisconsin \n11. Texas \n12. Illinois",
      10,
      30
    );
    pop();
  }

  mapp(mapx, mapy) {
    image(this.img2, mapx, mapy, 200, 135);
  }

  hoverstates() {
    if (mouseX > 400 && mouseX < 450 && mouseY > 90 && mouseY < 200) {
      push();
      scale(1.8);
      this.states(230, 20);
      pop();
    }
    if (mouseX > 550 && mouseX < 600 && mouseY > 90 && mouseY < 200) {
      push();
      scale(1.8);
      this.mapp(230, 20);
      pop();
    }
  }

  doors() {
    push()
    fill("#E3E0E0")
    beginShape();
    vertex(width - 25, height / 3);
    vertex(width - 65, height / 3);
    vertex(width - 65, 330);
    vertex(width - 25, 370);
    endShape(CLOSE);

    if (this.dooropenR4) {
      fill("#E3E0E0")
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
  hint(hintX, hintY) {
    push();
    translate(hintX, hintY);
    let distance = dist(mouseX, mouseY, hintX + 50, hintY + 50);

    // Check if the mouse is hovering over the circle
    if (distance < 40 / 2) {
      fill("orange");
      circle(46, 50, 28);
      fill("white");
      textSize(11);
      text("help", 35, 53);
      fill("white");
      rect(-180, -40, 180, 60, 4, 4, 4, 4);
      fill("black");
      textSize(11);
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
      textSize(11);
      text("help", 35, 53);
    }
    if (this.hintBox == true) {
      fill("white");
      rect(-200, -10, 190, 60, 4, 4, 4, 4);
      fill("black");
      textSize(11);
      text(
        "Notice how all the 12 victims have \nreceived one call from the same\nplace.",
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
      textSize(11);
      text("answer", 26, 53);
      fill("white");
      rect(-180, -40, 180, 60, 4, 4, 4, 4);
      fill("black");
      textSize(11);
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
      textSize(11);
      text("answer", 26, 53);
    }
    if (this.solutionBox == true) {
      fill("white");
      rect(-70, 35, 100, 25, 4, 4, 4, 4);
      fill("black");
      textSize(11);
      text("portland", -50, 51);
    }
    pop();
  }
}
