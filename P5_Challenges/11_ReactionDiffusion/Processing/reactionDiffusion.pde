Cell[][] grid;
Cell[][] prev;

void setup(){
    size(300, 300);
    grid = new Cell[width][height];
    prev = new Cell[width][height];

    for (int i = 0; i < width; i++){
        for (int j = 0; j < height; j++){
            float a = 1;
            float b = 0;
            grid[i][j] = new Cell(a, b);
            prev[i][j] = new Cell(a, b);
        }
    }

    for (int n = 0; n < 10; n++){
        int startx = int(random(20, width-20));
        int starty = int(random(20, height-20));

        for (int i = startx; i < startx + 10; i++){
            for (int j = starty; j < starty+10; j++){
                float a = 1;
                float b = 1;
                grid[i][j] = new Cell(a, b);
                grid[i][j] = new Cell(a, b);
            }
        }
    }
}

float dA = let dA = 1;
let dB = 0.5;
// rate at which chemcial A is added at a given "feed" rate
let feed = 0.055;
// kill rate, how quickly B chemicals are being removed
let k = 0.062;

Class Cell {
    float a;
    float b;

    Cell(float a_, float b_){
        a = a_;
        b = b_;
    }
}

void update(){
    for (int i = 1; i < width - 1; i++){
        for (int j = 1; j < height - 1; j++){
            Cell spot = prev[i][j];
            Cell newspot = grid[i][j];

            float a = spot.a;
            float b = spot.b;
            float laplaceA = 0;
            float laplaceB = 0;
        }
    }
}

void swap(){
    Cell[][] temp = prev;
    prev = grid;
    grid = temp;
}

void draw(){ 
    prinln(frameRate);

}