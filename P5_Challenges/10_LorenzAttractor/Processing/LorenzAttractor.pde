float x = 0;
float y = 0;
float z = 0;

// Constant signifying Sigma
float a = 1;
// Constant signifying Row
float b = 1;
// Constant signifying Betha
float c = 1;

void setup() {
  size(800, 800);
}

void draw(){
  // Change in x, y, and z
  float dx = a * (y - x);
  float dy = x * ((b-z) - y);
  float dz = x * y - (c*z);
  x = x + dx;
  y = y + dx;
  z = z + dx;
}