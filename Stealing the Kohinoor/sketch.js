let story1AD1;
let room1;
let room2;
let room3;
let story1AD2;

let confetti = [];

let count = 0;

let correct = false;
let correct2 = false;
let correct3 = false;
let correct4 = false;
let correct5 = false;

let won = new ConfettiParty();

//to check if the player is at the end of the room so that we can change the room
let playerP = false;
let playerP2 = false;
let playerP3 = false;
let playerP4 = false;
let playerP5 = false;

let inputCode;
let buttonSubmit;


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

  story1AD1 = new Story1AD1();
  room1 = new Story1Room1();
  room2 = new Room2();
  room3 = new Story1Room3();
  story1AD2 = new Story1AD2();
  room2.setup();
  room3.setup();
  story1AD2.setup();
  doorSound = loadSound("door.mp4");
  wrongans = loadSound("wrongans.mp4");
}

function draw() {
  
  story1AD2.draw();
  positionPlayer(); //the function to check position of the player

  //checking if the answer is correct and the player is near the door and calling the next room
  if (correct && playerP) {
    room1.display();
  }
  if (correct2 && playerP2) {
    room2.draw();
  }
  if (correct3 && playerP3) {
    room3.draw();
  }

  if (correct4 && playerP4) {
    story1AD1.draw();
  }

  push();
  fill("black");
  text("Notepad", 240, 370);
  fill("white");
  text("Enter the answer", 760, 45);
  pop();

  if (correct5) {
    console.log("1")
    won.draw();
    inputCode.remove();
    buttonSubmit.remove();
    inputnotes.remove();
    
 
  }
  
   push();
  fill("#E6E2D3");
  rect(931, 27, 60, 30);
  pop();
  

  push();
  textSize(25);
  fill("black")
  text(timermin, 935, 50);
  pop();
  push();
  textSize(15);
  fill("black")
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

  if (story1AD1.hintBox == true && !hintUsed) {
    timermin = timermin - 2;
    hintUsed = true;
  }
  if (room1.hintBox == true && !hintUsed2) {
    timermin = timermin - 2;
    hintUsed2 = true;
  }
  if (room2.hintBox == true && !hintUsed3) {
    timermin = timermin - 2;
    hintUsed3 = true;
  }
  if (room3.hintBox == true && !hintUsed4) {
    timermin = timermin - 2;
    hintUsed4 = true;
  }
  if (story1AD2.hintBox == true && !hintUsed5) {
    timermin = timermin - 2;
    hintUsed5 = true;
  }

  if (story1AD1.solutionBox == true && !ansUsed) {
    timermin = timermin - 5;
    ansUsed = true;
  }
  if (room1.solutionBox == true && !ansUsed2) {
    timermin = timermin - 5;
    ansUsed2 = true;
  }
  if (room2.solutionBox == true && !ansUsed3) {
    timermin = timermin - 5;
    ansUsed3 = true;
  }
  if (room3.solutionBox == true && !ansUsed4) {
    timermin = timermin - 5;
    ansUsed4 = true;
  }
  if (story1AD2.solutionBox == true && !ansUsed5) {
    timermin = timermin - 5;
    ansUsed5 = true;
  }
}

function preload() {
  img = loadImage("https://m.media-amazon.com/images/I/A1YUoH0MS7L.jpg");
}

function checkCode() {
  //checking the code
  var codeAD1 = inputCode.value();
  if (count == 4) {
    if (codeAD1 == "4830") {
      doorSound.play();
      story1AD1.dooropenAD1 = true;
      correct5 = true;
      count++;
      console.log(story1AD1.playerX)
    } else {
      wrongans.play();
    }
  } else if (count == 1) {
    if (codeAD1 == "rich" || codeAD1 == "Rich" || codeAD1 == "RICH") {
      correct2 = true;
      doorSound.play();
      room1.doorOpenRoom1 = true;
      count++;
    } else {
      wrongans.play();
    }
  } else if (count == 2) {
    if (
      codeAD1 == "Knowledge" ||
      codeAD1 == "knowledge" ||
      codeAD1 == "KNOWLEDGE"
    ) {
      correct3 = true;
      doorSound.play();
      room2.codeCheckBoolean = true;
      count++;
    } else {
      wrongans.play();
    }
  } else if (count == 3) {
    if (codeAD1=="671519"){
      room3.draweropen = true;
      room3.hint2 = false;
      correct4 = true;
  
      if (room3.playerchange1 ) {
      correct4 = true;
      console.log('correct4 is true!');
      room3.dooropenR3 = true;
      doorSound.play();
      count++;
      
      }
    }
     else {
      wrongans.play();
    }
  } else if (count == 0) {
    if (codeAD1 == "2510") {
      console.log(story1AD2.playerX)
      correct = true;
      story1AD2.dooropenAD2 = true;
      doorSound.play();
      count++;
    } else {
      wrongans.play();
    }
  }
}

function positionPlayer() {
  //checking position of the player
  if (story1AD2.playerX > 720) {
    playerP = true;
  }
  if (room1.playerX > 720) {
    playerP2 = true;
  }
  if (room2.playerRoom2.x > 970 && room2.playerRoom2.y > 65) {
    playerP3 = true;
  }
  //console.log(room3.playerX);
  if (room3.playerX > 486) {
    playerP4 = true;
    //console.log("reached")
  }
  if (story1AD1.playerX > -100) {
    playerP5 = true;
  }
}
