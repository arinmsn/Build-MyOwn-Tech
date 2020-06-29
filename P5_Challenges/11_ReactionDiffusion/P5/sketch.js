let grid;
let next;

let dA = 1;
let dB = 0.5;
// rate at which chemcial A is added at a given "feed" rate
let feed = 0.055;
// kill rate, how quickly B chemicals are being removed
let k = 0.062;

function setup() {
  createCanvas(500, 500);
  pixelDensity(1);
  grid = [];
  next = [];
  for (let x = 0; x < width; x++) {
    grid[x] = [];
    next[x] = [];
    for (let y = 0; y < height; y++) {
      grid[x][y] = {
        a: random(1),
        b: random(1),
      };
      next[x][y] = {
        a: 0,
        b: 0,
      };
    }
  }
}

function draw() {
  background(51);

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let a = grid[x][y].a;
      let b = grid[x][y].b;
      next[x][y].a = a + (dA + laplaceA() * a) - a * b * b + feed * (1 - a);
      next[x][y].b = b + (dB + laplaceB() * b) + a * b * b - (k + feed) * b;
    }
  }

  loadPixels();
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      var c = color(255, 0, 100);
      var pix = (x + y * width) * 4;
      pixels[pix + 0] = floor(grid[x][y].a * 255);
      pixels[pix + 1] = 0;
      pixels[pix + 2] = floor(grid[x][y].b * 255);
      pixels[pix + 3] = 255;
    }
  }
  updatePixels();

  swap();
}

function swap() {
  var temp = grid;
  grid = next;
  next = temp;
}
