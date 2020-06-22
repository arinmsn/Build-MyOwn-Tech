// Algorithms used:
// Recursive backtracker
// Depth-first search

let cols, rows;
let w = 20;
let grid = [];
// current cell being visited
let current;
let stack = [];

function setup() {
  createCanvas(500, 500);
  cols = floor(width / w);
  rows = floor(height / w);
  frameRate(5);

  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      let cell = new Cell(i, j);
      grid.push(cell);
    }
  }
  current = grid[0];
}

function draw() {
  background(51);
  for (let i = 0; i < grid.length; i++) {
    grid[i].show();
  }
  current.visited = true;
  current.highlight();
  // // Step 1 Mark the current cell as visited
  let next = current.checkNeighbors();
  if (next) {
    next.visited = true;

    // Step 2
    stack.push(current);

    // Step 3: Remove wall between current cell and chosen cell
    removeWalls(current, next);

    // Step 4:
    current = next;
  } else if (stack.length > 0) {
    current = stack.pop();
  }
}

function index(i, j) {
  if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {
    return -1;
  }

  return i + j * cols;
}

function removeWalls(a, b) {
  // difference between current cell and neighboring cell
  let x = a.i - b.i;
  if (x === 1) {
    // left wall of cell
    a.walls[3] = false;
    // right wall of cell
    b.walls[1] = false;
  } else if (x === -1) {
    a.walls[1] = false;
    b.walls[3] = false;
  }

  let y = a.j - b.j;
  if (y === 1) {
    // top of cell
    a.walls[0] = false;
    // bottom wall of cell
    b.walls[2] = false;
  } else if (y === -1) {
    a.walls[2] = false;
    b.walls[0] = false;
  }
}
