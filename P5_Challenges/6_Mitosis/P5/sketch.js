var cell;

function setup() {
  createCanvas(400, 400);
  cell = new Cell();
}

function draw() {
  background(51);
  cell.move();
  cell.show();
}
