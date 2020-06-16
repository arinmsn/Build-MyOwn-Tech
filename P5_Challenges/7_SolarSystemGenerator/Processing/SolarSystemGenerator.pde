import peasy.*;
import peasy.org.apache.commons.math.*;
import peasy.org.apache.commons.math.geometry.*;
import peasy.test.*;

Planet sun;
PeasyCam cam;

Pimage sunTexture;
Pimage[] textures = new PImage[3];

void setup(){
  size(600, 600, P3D);

  sunTexture = loadImage("sun.jpg");
  textures[0] = loadImage("mars.jpg");
  textures[1] = loadImage("earth.jpg");
  textures[2] = loadImage("mercury.jpg");

  // Camera will look 100 units away
  cam = new PeasyCam(this, 500);
  sun = new Planet(50, 0, 0, sunTexture);
  sun.spawnMoons(1, 1);
}

void draw() {
  background(0); 
  lights();
  // Light will be coming from the Sun.
  //pointLight(255, 255, 255, 0, 0, 0);
  sun.show();
  sun.orbit();
}