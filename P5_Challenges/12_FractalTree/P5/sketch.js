function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(51);
  stroke(255);
  translate(200, height);
  branch(100);
}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  // 45 deg
  rotate(PI / 4);
  if (len > 4) {
    branch(len * 0.67);
  }
  // line(0, 0, 0, -len * 0.67);
}
