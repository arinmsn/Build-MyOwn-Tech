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

 void spawnMoons(int total, int level){
     planets = new Planet[total];
     for (int i = 0; i < planets.length; i++){
         float r = radius/(level*2);
         // (radius + r) means child move on edge of Sun 
         float d =  random((radius+r), (radius+r)*2);
         float o = random(-0.1, 0.1);
         planets[i] = new Planet(r, d/level, o);
         if (level < 2) {
           int num = int(random(0, 4));
           planets[i].spawnMoons(num, level+1);
         }
         
     }
 }
 
 void show(){
    // Like a save
    pushMatrix();
    noStroke();
    fill(255);
    rotate(angle);
    translate(distance, 0);
    sphere(radius);
    //ellipse(0, 0, radius*2, radius*2);
   
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