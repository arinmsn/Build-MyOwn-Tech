// Purple Rain
// (138, 43, 226)
// (230, 230, 250) // background

Drop[] drops = new Drop[100];

void setup(){
  size(640, 360);
  d = new Drop();
}

void draw() {
  background(230, 230, 250);
  d.fall();
  d.show();
}