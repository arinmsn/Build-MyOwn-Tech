// Algorithms used:
// Recursive backtracker
// Depth-first search

var cols, rows;
var w = 40;
var grid = [];
// current cell being visited
var current;

function setup() {
  createCanvas(400, 400);
  cols = floor(width / w);
  rows = floor(height / w);

  for (var j = 0; j < rows; j++) {
    for (var i = 0; i < cols; i++) {
      var cell = new Cell(i, j);
      grid.push(cell);
    }
  }
  current = grid[0];
}

function draw() {
  background(51);
  for (var i = 0; i < grid.length; i++) {
    grid[i].show();
  }
  current.visited = true;
  current.checkNeighbors();
}

function index(i, j) {
  return i + j * cols;
}

function Cell(i, j) {
  // column number
  this.i = i;

  // row number
  this.j = j;

  // [top, right, buttom, left]
  this.walls = [true, true, true, true];
  this.visited = false;

  this.checkNeighbors = function () {
    var neighbors = [];

    var top = grid[index(i, j - 1)];
    var right = grid[index(i + 1, j)];
    var bottom = grid[index(i, j + 1)];
    var left = grid[index(i - 1, j)];

    if (!top.visited) {
      neighbors.push(top);
    }

    if (!right.visited) {
      neighbors.push(right);
    }

    if (!bottom.visited) {
      neighbors.push(bottom);
    }

    if (!left.visited) {
      neighbors.push(left);
    }
  };

  this.show = function () {
    var x = this.i * w;
    var y = this.j * w;
    stroke(255);
    /*
    Top left corner: (x, y)
    Top right corner: (x+w, y)
    Bottom left corner (x, y+w)
    Bottom right corner (x+w, y+w)
    */
    if (this.walls[0]) {
      line(x, y, x + w, y);
    }

    if (this.walls[1]) {
      line(x + w, y, x + w, y + w);
    }

    if (this.walls[2]) {
      line(x + w, y + w, x, y + w);
    }

    if (this.walls[3]) {
      line(x, y + w, x, y);
    }

    if (this.visited) {
      fill(255, 0, 255, 100);
      rect(x, y, w, w);
    }
  };
}
