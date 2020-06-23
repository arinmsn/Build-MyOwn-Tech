let cols, rows;
//scale
let scl = 20;
let w = 1400;
let h = 1000;

let terrain = [];

function setup() {
  createCanvas(600, 600, WEBGL);
  cols = w / scl;
  rows = h / scl;

  for (let x = 0; x < cols; x++) {
    terrain[x] = [];
    for (let y = 0; y < rows; y++) {
      terrain[x][y] = 0;
    }
  }
}

function draw() {
  background(0);
  translate(0, 50);
  fill(200, 200, 200, 50);
}
