var ship;
var flowers = [];

function setup() {
  createCanvas(600, 400);
  ship = new Ship();
  for (var i = 0; i < 5; i++) {
    flowers[i] = new Flower(random(width), 20);
  }
}

function draw() {
  background(51);
  ship.show();
  for (var i = 0; i < 5; i++) {
    flowers[i].show();
  }
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    ship.move(1);
  } else if (keyCode === LEFT_ARROW) {
    ship.move(-1);
  }
}
