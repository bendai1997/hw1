var x;
var y;
var radius;

function setup() {
  createCanvas(600, 400);
  x = random(width);
  y = random(height);
  radius = 50;
}

function draw() {
  background(255);

  if (dist(mouseX, mouseY, x, y) < radius) {
    if (mouseIsPressed) {
      x = random(width);
      y = random(height);
    }
    fill(255, 245, 100, 30);
  }
  else {
    fill(255, 20, 133, 200);
  }

  ellipse(x, y, radius * 2);
  x += random(-1, 1);
  y += random(-1, 1);
}
