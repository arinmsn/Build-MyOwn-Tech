ArrayList<Cell> cells = new ArrayList<Cell>();

void setup(){
  size(700, 700);
  cells.add(new Cell());
  cells.add(new Cell());
}

void draw(){
  background(200);
  for (Cell c : cells){
    c.show();
  }
}