class Planet {
  constructor(radius, distance) {
    this.radius = radius;
    this.distance = distance;
  }

  show() {
    fill(255);
    translate(this.distance, 0);
    ellipse(0, 0, this.radius * 2, this.radius * 2);
  }
}
