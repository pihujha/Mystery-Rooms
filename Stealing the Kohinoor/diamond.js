function diamond(xDiamond, yDiamond, scaleDiamond) {
  push();
  strokeWeight(2);
  scale(scaleDiamond);
  translate(xDiamond, yDiamond);
  //upper
  quad(120, 100, 80, 140, 280, 140, 240, 100);
  //lower
  triangle(80, 140, 280, 140, 180, 260);
  //lines
  line(120, 100, 150, 140);
  line(150, 140, 180, 100);
  line(180, 100, 210, 140);
  line(210, 140, 240, 100);
  line(150, 140, 180, 260);
  line(210, 140, 180, 260);
  pop();
}
