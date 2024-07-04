//objects for the room
let room4;
let room1;
let room2;
let room3;
let room5;

//array for win slide for the confetti
let confetti = [];

//to keep a check on which room is playing
let count = 0;

//to check if the player is at the end of the room so that we can change the room
let playerP = false;
let playerP2 = false;
let playerP3 = false;
let playerP4 = false;
let playerP5 = false;

//to check if the code is correct
let correct = false;
let correct2 = false;
let correct3 = false;
let correct4 = false;

//for input and button
let inputCode;
let buttonSubmit;

//the sounds
var doorSound;
var wrongans;

//for the last slide- win or lose
let won = new ConfettiParty();
let lose = new Losing();

function setup() {
  //answer input boxes and submit button
  inputCode = createInput();
  inputCode.position(760, 50);
  buttonSubmit = createButton("submit");
  buttonSubmit.position(860, 50);
  buttonSubmit.mousePressed(checkCode);

  //notepad input boxes
  inputnotes = createInput();
  inputnotes.size(120, 80);
  inputnotes.position(110, 305);

  //making objects for each room class
  room1 = new PrisonRoom1();
  room2 = new Story2Room2();
  room3 = new Story2Room3();
  room4 = new PrisonRoom4();
  room5 = new PrisonMaze();
  room2.setup()
  room4.setup();
  room5.setup();
  lose.setup();
  doorSound = loadSound("door.mp4");
  wrongans = loadSound("wrongans.mp4");
}

function draw() {
  room1.draw();
  positionPlayer(); //the function to check position of the player

  //checking if the answer is correct and the player is near the door and calling the next room
  if (correct && playerP) {
    room2.draw();
  }
  if (correct2 && playerP2) {
    room3.draw();
  }
  if (correct3 && playerP3) {
    room4.draw();
  }

  push();
  fill("black");
  text("Notepad", 240, 370);
  fill("white");
  text("Enter the answer", 760, 45);
  pop();

  if (correct4 && playerP4) {
    room5.draw();
    inputCode.remove();
    buttonSubmit.remove();
  }

  if (playerP5) {
    won.draw();
    inputCode.remove();
    buttonSubmit.remove();
    inputnotes.remove();
  }

  if (room5.lost) {
    lose.draw();
  }
}

function preload() {
  //preloading one of the images
  img = loadImage("https://m.media-amazon.com/images/I/A1YUoH0MS7L.jpg");
}

function checkCode() {
  //checking the code
  var codeAD1 = inputCode.value();
  if (count == 0) {
    if (codeAD1 == "freedom" || codeAD1 == "Freedom" || codeAD1 == "FREEDOM") {
      doorSound.play();
      room1.dooropenR1 = true;
      correct = true;
      count++;
    } else {
      wrongans.play();
    }
  } else if (count == 1) {
    if (codeAD1 == "escape" || codeAD1 == "Escape" || codeAD1 == "ESCAPE") {
      correct2 = true;
      doorSound.play();
      room2.dooropenR2 = true;

      count++;
    } else {
      wrongans.play();
    }
  } else if (count == 2) {
    if (codeAD1 == "34") {
      correct3 = true;
      doorSound.play();
      room3.dooropenR3 = true;
      count++;
    } else {
      wrongans.play();
    }
  } else if (count == 3) {
    if (codeAD1 == "5588146") {
      correct4 = true;
      room4.dooropenR1 = true;
      doorSound.play();

      count++;
    } else {
      wrongans.play();
    }
  }
}

function positionPlayer() {
  //checking position of the player
  if (room1.playerX > 720) {
    playerP = true;
  }
  if (room2.playerX > 720) {
    playerP2 = true;
  }
  if (room3.playerX > 720) {
    playerP3 = true;
  }
  if (room4.playerX > 720 && room4.playerY > 65) {
    playerP4 = true;
  }
  if (room5.player.x > 970) {
    playerP5 = true;
  }
}
