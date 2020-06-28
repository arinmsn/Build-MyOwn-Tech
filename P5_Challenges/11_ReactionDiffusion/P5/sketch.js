let grid;
let next;

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
      next[x][y].a = grid[x][y].a * 0.2;
      next[x][y].b = grid[x][y].b * 1.2;
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
}
