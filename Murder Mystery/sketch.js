let room1;
let room2;
let room3;
let room4;
let room5;

let confetti = [];

let count = 0;

let playerP = false;
let playerP2 = false;
let playerP3 = false;
let playerP4 = false;
let playerP5 = false;

let correct = false;
let correct2 = false;
let correct3 = false;
let correct4 = false;

let inputCode;
let buttonSubmit;

var doorSound;
var wrongans;

let won = new ConfettiParty();
let lose = new Losing();

let timermin = 59;
let timersec = 60;

let hintUsed = false;
let hintUsed2 = false;
let hintUsed3 = false;
let hintUsed4 = false;
let hintUsed5 = false;

let ansUsed = false;
let ansUsed2 = false;
let ansUsed3 = false;
let ansUsed4 = false;
let ansUsed5 = false;

function setup() {
  createCanvas(1000, 400);
  inputCode = createInput();
  inputCode.position(760, 50);
  buttonSubmit = createButton("submit");
  buttonSubmit.position(860, 50);
  buttonSubmit.mousePressed(checkCode);

  inputnotes = createInput();
  inputnotes.size(120, 80);
  inputnotes.position(110, 305);

  room1 = new DetectiveRoom1();
  room2 = new DetectiveRoom2();
  room3 = new Story3Room3();
  room4 = new Story3Room4();
  room5 = new DetectiveRoom5();
  room1.setup();
  room2.setup();
  room3.setup();
  room4.setup();
  lose.setup();

  doorSound = loadSound("door.mp4");
  wrongans = loadSound("wrongans.mp4");
}

function draw() {
  positionPlayer();

  if (correct4 && playerP4) {
    room5.draw();
  } else if (correct3) {
    room4.draw();
  } else if (correct2) {
    room3.draw();
  } else if (correct) {
    room2.draw();
  } else {
    room1.draw();
  }

  push();
  textSize(13);
  fill("black");
  text("Notepad", 240, 370);
  fill("white");
  text("Enter the answer", 760, 45);
  pop();

  if (playerP5) {
    won.draw();
    inputCode.remove();
    buttonSubmit.remove();
    inputnotes.remove();
  }

  if (room5.lost) {
    lose.draw();
  }
  
    push();
  fill("#E6E2D3");
  rect(931, 27, 60, 30);
  pop();
  push();
  textSize(25);
  fill("black");
  text(timermin, 935, 50);
  pop();

  push();
  textSize(25);
  text(timermin, 935, 50);
  pop();
  push();
  textSize(15);
  text(timersec, 970, 48);
  pop();

  if (frameCount % 3600 == 0 && timermin > 0) {
    timermin--;
  }

  if (frameCount % 60 == 0 && timersec > 0) {
    timersec--;
  }

  if (timermin == 0) {
    lose.draw()
  }

  if (timersec == 0) {
    timersec = 60;
  }

  if (room1.hintBox == true && !hintUsed) {
    timermin = timermin - 2;
    hintUsed = true;
  }
  if (room2.hintBox == true && !hintUsed2) {
    timermin = timermin - 2;
    hintUsed2 = true;
  }
  if (room3.hintBox == true && !hintUsed3) {
    timermin = timermin - 2;
    hintUsed3 = true;
  }
  if (room4.hintBox == true && !hintUsed4) {
    timermin = timermin - 2;
    hintUsed4 = true;
  }
  if (room5.hintBox == true && !hintUsed5) {
    timermin = timermin - 2;
    hintUsed5 = true;
  }

  if (room1.solutionBox == true && !ansUsed) {
    timermin = timermin - 5;
    ansUsed = true;
  }
  if (room2.solutionBox == true && !ansUsed2) {
    timermin = timermin - 5;
    ansUsed2 = true;
  }
  if (room3.solutionBox == true && !ansUsed3) {
    timermin = timermin - 5;
    ansUsed3 = true;
  }
  if (room4.solutionBox == true && !ansUsed4) {
    timermin = timermin - 5;
    ansUsed4 = true;
  }
  if (room5.solutionBox == true && !ansUsed5) {
    timermin = timermin - 5;
    ansUsed5 = true;
  }
}

function preload() {
  img = loadImage("https://m.media-amazon.com/images/I/A1YUoH0MS7L.jpg");
}

function checkCode() {
  var codeAD1 = inputCode.value();
  if (count == 0) {
    if (
      codeAD1 == "1H" ||
      codeAD1 == "1h" ||
      codeAD1 == "H1" ||
      codeAD1 == "h1"
    ) {
      doorSound.play();
      room1.dooropenR1 = true;
      correct = true;
      count++;
    } else {
      wrongans.play();
    }
  } else if (count == 1) {
    if (codeAD1 == "dead" || codeAD1 == "DEAD" || codeAD1 == "Dead") {
      correct2 = true;
      doorSound.play();
      room2.dooropenR2 = true;

      count++;
    } else {
      wrongans.play();
    }
  } else if (count == 2) {
    if (codeAD1 == "smiley" || codeAD1 == "Smiley" || codeAD1 == "SMILEY") {
      correct3 = true;
      doorSound.play();
      room3.dooropenR3 = true;
      count++;
    } else {
      wrongans.play();
    }
  } else if (count == 3) {
    if (
      codeAD1 == "Portland" ||
      codeAD1 == "PORTLAND" ||
      codeAD1 == "portland"
    ) {
      correct4 = true;
      room4.dooropenR4 = true;
      doorSound.play();

      count++;
    } else {
      wrongans.play();
    }
  } else if (count == 4) {
    if (codeAD1 == "6") {
      correct4 = true;
      room5.dooropenR5 = true;
      doorSound.play();

      count++;
    } else {
      wrongans.play();
    }
  }
}

function positionPlayer() {
  // if (room1.playerX > 720) {
  //   playerP = true;
  // }
  // if (room2.playerX > 720) {
  //   playerP2 = true;
  // }
  // if (room3.playerX > 720) {
  //   playerP3 = true;
  // }
  if (room4.playerX > 720) {
    playerP4 = true;
  }
  if (room5.playerX > 720) {
    playerP5 = true;
  }
}
// checkCodeAD1() {
//   var codeAD1 = story1AD1.inputAD1.value();
//   if (codeAD1 == "4830") {
//     story1AD1.dooropenAD1 = true;
//   }
// }
