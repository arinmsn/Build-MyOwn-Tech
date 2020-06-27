let grid;
let next;

function setup() {
  createCanvas(200, 200);
  pixelDensity(1);
  grid = [];
  next = [];
  for (let x = 0; x < innerWidth; x++) {
    grid[x] = [];
    next[x] = [];
    for (let y = 0; y < innerHeight; y++) {
      grid[x][y] = {
        a: 0,
        b: 0,
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
  loadPixels();
  for (let x = 0; x < innerWidth; x++) {
    for (let y = 0; y < innerHeight; y++) {
      var c = color(255, 0, 100);
      var pix = (x + y * width) * 4;
      pixels[pix + 0] = grid[x][y].a;
      pixels[pix + 1] = 0;
      pixels[pix + 2] = grid[x][y].b;
      pixels[pix + 3] = 255;
    }
  }
  updatePixels();
}
