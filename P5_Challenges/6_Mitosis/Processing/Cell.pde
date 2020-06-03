class Cell {
 PVector pos;
 float r;
 color c;
 
 Cell(PVector pos, float r, color c){
   this.pos = pos.copy();
   this.r = r;
   this.c = c;
 }
 
 Cell(){
   this.pos = new PVector(random(width), random(height));
   this.r = 60; 
   this.c = color(random(100, 255), 0, random(100, 255), 100);
 }
 
 void show(){
   noStroke();
   fill(this.c);
   ellipse(this.pos.x, this.pos.y, this.r, this.r);
 }
}