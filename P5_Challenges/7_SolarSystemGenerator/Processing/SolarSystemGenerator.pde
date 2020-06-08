import peasy.*;
import peasy.org.apache.commons.math.*;
import peasy.org.apache.commons.math.geometry.*;
import peasy.test.*;

Planet sun;
PeasyCam cam;

void setup(){
  size(600, 600, P3D);
  // Camera will look 100 units away
  cam = new PeasyCam(this, 500);
  sun = new Planet(50, 0, 0);
  sun.spawnMoons(1, 1);
}

void draw() {
  background(0); 
  lights();
  sun.show();
  sun.orbit();
}