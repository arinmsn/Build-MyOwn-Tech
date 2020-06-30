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
        a: 1,
        b: 0,
      };
      next[x][y] = {
        a: 1,
        b: 0,
      };
    }
  }

  for (var i = 100; i < 110; i++) {
    for (var j = 100; j < 110; j++) {
      grid[i][j].b = 1;
    }
  }
}

function draw() {
  background(51);

  for (let x = 1; x < width - 1; x++) {
    for (let y = 1; y < height - 1; y++) {
      let a = grid[x][y].a;
      let b = grid[x][y].b;
      next[x][y].a = a + dA * laplaceA(x, y) - a * b * b + feed * (1 - a);
      next[x][y].b = b + dB * laplaceB(x, y) + a * b * b - (k + feed) * b;

      next[x][y].a = constrain(next[x][y].a, 0, 1);
      next[x][y].b = constrain(next[x][y].b, 0, 1);
    }
  }

  loadPixels();
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      var pix = (x + y * width) * 4;
      let a = next[x][y].a;
      let b = next[x][y].b;
      let c = floor((a - b) * 255);
      c = constrain(c, 0, 255);
      pixels[pix + 0] = c;
      pixels[pix + 1] = c;
      pixels[pix + 2] = c;
      pixels[pix + 3] = 255;
    }
  }
  updatePixels();
  swap();
}

function laplaceA(x, y) {
  let sumA = 0;
  // sumA += center a given grid * weight
  sumA += grid[x][y].a * -1;
  // cell adjacent to left
  sumA += grid[x - 1][y].a * 0.2;
  // cell adjacent to right
  sumA += grid[x + 1][y].a * 0.2;
  // top and bottom cells
  sumA += grid[x][y + 1].a * 0.2;
  sumA += grid[x][y - 1].a * 0.2;
  // upper left cell
  sumA += grid[x - 1][y - 1].a * 0.05;
  sumA += grid[x + 1][y - 1].a * 0.05;
  sumA += grid[x + 1][y + 1].a * 0.05;
  sumA += grid[x - 1][y + 1].a * 0.05;
  return sumA;
}

function laplaceB(x, y) {
  let sumB = 0;
  // sumA += center a given grid * weight
  sumB += grid[x][y].b * -1;
  // cell adjacent to left
  sumB += grid[x - 1][y].b * 0.2;
  // cell adjacent to right
  sumB += grid[x + 1][y].b * 0.2;
  // top and bottom cells
  sumB += grid[x][y + 1].b * 0.2;
  sumB += grid[x][y - 1].b * 0.2;
  // upper left cell
  sumB += grid[x - 1][y - 1].b * 0.05;
  sumB += grid[x + 1][y - 1].b * 0.05;
  sumB += grid[x + 1][y + 1].b * 0.05;
  sumB += grid[x - 1][y + 1].b * 0.05;
  return sumB;
}

function swap() {
  var temp = grid;
  grid = next;
  next = temp;
}
