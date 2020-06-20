// Algorithms used:
// Recursive backtracker
// Depth-first search

int cols, rows;
int w = 20;

ArrayList<Cell> grid = new ArrayList<Cell>();

Cell current;

void setup(){
    size(600, 600);
    cols = floor(width/w);
    rows = floor(height/w);

    for (int j = 0; j < rows; j++){
        for (int i = 0; i < cols; i++){
            Cell cell = new Cell(i, j);
            grid.add(cell);
        }
    }
    current = grid.get(0);
}

void draw(){
    background(51);
    for (int i = 0; i < grid.size(); i++){
        grid.get(i).show();
    }
    current.visited = true;
    current.highlight();
}

int index(int i, int j){
    if (i < 0 || j < 0 || i > cols-1 || j > rows-1){
        return 0;
    }
    return i + j * cols;
}