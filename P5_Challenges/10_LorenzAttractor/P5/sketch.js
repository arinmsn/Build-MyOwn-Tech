let x = 0.01;
let y = 0;
let z = 0;

// a = Sigma, b = Row, and c = Betha
let a = 10;
let b = 28;
let c = 8.0 / 3.0;

let points = new Array();

function setup() {
  createCanvas(800, 600, WEBGL);
  colorMode(HSB);
}

function draw() {
  background(0);
  // Change in time
  let dt = 0.01;
  let dx = a * (y - x) * dt;
  let dy = (x * (b - z) - y) * dt;
  let dz = (x * y - c * z) * dt;

  x = x + dx;
  y = y + dy;
  z = z + dz;
}
