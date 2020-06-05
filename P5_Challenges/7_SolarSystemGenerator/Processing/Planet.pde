class Planet {

 float radius;
 float angle;
 float distance;
 Planet[] planets;
 float orbitSpeed;
 
 Planet(float r, float d, float o) {
   radius = r;
   distance = d;
   angle = random(TWO_PI);
   orbitSpeed = o;
 }

 void orbit() {
     angle = angle + orbitSpeed;
     if (planets != null){
         for (int i = 0; i < planets.length; i++){
             planets[i].orbit();
         }
     }
 }

 void spawnMoons(int total){
     planets = new Planet[total];
     for (int i = 0; i < planets.length; i++){
         float r = radius * 0.5;
         float d =  random(75, 300);
         float o = random(0.001, 0.2);
         planets[i] = new Planet(r, d, o);
     }
 }
 
 void show(){
    // Like a save
    pushMatrix();
    fill(255, 100);
    rotate(angle);
    translate(distance, 0);
    ellipse(0, 0, radius*2, radius*2);
   
    if (planets != null) {
     // children or sub-planets
     for (int i = 0; i < planets.length; i++){
       planets[i].show();
     }
   }
   // Like a restore
   popMatrix();
 }
  
}