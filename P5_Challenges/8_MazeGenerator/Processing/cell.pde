class Cell {
    int i, j;
    boolean[] walls = {true, true, true, true};

    Cell(int ii, int jj){
        i = ii;
        j = jj;
    }

    void highlight(){
        int x = this.i * w;
        int y = this.j * w;
        noStroke();
        fill(0, 0, 255, 100);
        rect(x, y, w, w);
    }

    void show(){
        int x = this.i * w;
        int y = this.j * w;
        stroke(255);
        noFill();
        // rect(x, y, w, w);

        if (this.walls[0]) {
            line(x, y, x+w, y);
        }

        if (this.walls[1]) {
            line(x+w, y, x+w, w);
        }

        if (this.walls[2]) {
            line(x+w, y+w, x, y+w);
        }

        if (this.walls[3]) {
            line(x, y+w, x, y);
        }
        
        
    }
}