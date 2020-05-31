  // middle of the screen
 float x = width/2;
 // top of the screen
 float y = 0;
 float yspeed = 1;
 
 void fall(){
   y = y + yspeed;
 }
 
 void show() {
   stroke(138, 43, 226);
   line(x, y, x, y+10);
 }
  
}