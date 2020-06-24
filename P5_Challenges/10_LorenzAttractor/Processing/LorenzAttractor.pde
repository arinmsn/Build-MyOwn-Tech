import peasy.*;

float x = 0.01;
float y = 0;
float z = 0;

// Constant signifying Sigma
float a = 10;
// Constant signifying Row
float b = 28;
// Constant signifying Betha
float c = 8.0/3.0;

ArrayList<PVector> points = new ArrayList<PVector>();

PeasyCam cam;

void setup() {
  size(800, 600, P3D);
  color(HSB);
  cam = new Peasy(this, 500);
}

void draw(){
  background(0);
  // Change in time 
  float dt = 0.01;
  // Change in x, y, and z
  float dx = a * (y - x);
  float dy = x * ((b-z) - y);
  float dz = x * y - (c*z);
  x = x + dx;
  y = y + dy;
  z = z + dz;

  points.add(new PVector(x, y, z));

  translate(width/2, height/2);
  scale(5);
  noStroke(255);
  noFill();

  float hue = 0
  beginShape();
  for (PVector v : points) {
     stroke(hue, 255, 255);
     vertex(v.x, v.y, v.z); 
     hue += 0.01;
     if (hu > 255){
         hu = 0;
     }
  }
  endShape();
}