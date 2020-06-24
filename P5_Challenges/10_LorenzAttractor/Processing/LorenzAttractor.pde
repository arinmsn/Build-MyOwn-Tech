float x = 0.01;
float y = 0;
float z = 0;

// Constant signifying Sigma
float a = 10;
// Constant signifying Row
float b = 28;
// Constant signifying Betha
float c = 8.0/3.0;

void setup() {
  size(800, 600, P3D);
  background(0);
}

void draw(){
  // Change in time
  float dt = 1;
  // Change in x, y, and z
  float dx = a * (y - x);
  float dy = x * ((b-z) - y);
  float dz = x * y - (c*z);
  x = x + dx;
  y = y + dy;
  z = z + dz;

  translate(width/2, height/2);
  scale(5);
  stroke(255);
  point(x, y, z);
}