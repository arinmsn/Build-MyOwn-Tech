function setup() {
  createCanvas(600, 600);
  sun = new Planet(50, 0);
}

function draw() {
  background(51);
  translate(width / 2, height / 2);
  sun.show();
}
