class Cell {
    int i, j;

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
        rect(x, y, w, w);
    }
}