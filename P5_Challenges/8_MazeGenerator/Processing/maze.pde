// Algorithms used:
// Recursive backtracker
// Depth-first search

int cols, rows;
int w = 20;
ArrayList<Cell> grid = new ArrayList<Cell>();

Cell current;

ArrayList<Cell> stack = new ArrayList<Cell>();

void setup(){
    size(600, 600);
    cols = floor(width/w);
    rows = floor(height/w);
    //frameRate(5);

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

    //Step 1
    Cell next = current.checkNeighbors();
    if (next != null){
        next.visited = true;

        //Step 2
        stack.add(current);

        //Step 3
        // remove Walls func.

        //Step 4
        current = next;
    } else if (stack.size() > 0){
        current = stack.remove(stack.size() - 1);
    }
}

int index(int i, int j){
    if (i < 0 || j < 0 || i > cols-1 || j > rows-1){
        return 0;
    }
    return i + j * cols;
}