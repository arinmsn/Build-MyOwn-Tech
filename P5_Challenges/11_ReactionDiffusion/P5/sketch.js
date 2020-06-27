var grid;

function setup() {
  createCanvas(200, 200);
  pixelDensity(1);
  grid = [];
  for (let x = 0; x < innerWidth; x++) {
    grid[x] = [];
    for (let y = 0; y < innerHeight; y++) {
      grid[x][y] = {
        a: 0,
        b: 0,
      };
    }
  }
}

function draw() {
  background(51);
}
