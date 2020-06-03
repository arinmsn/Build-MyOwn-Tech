class Flower {
    float x, y, r, xdir;

    Flower(float x, float y){
        this.x = x;
        this.y = y;
        this.r = 30;

        this.xdir = 1;
    }

    void grow(){
        this.r = this.r + 2;
    }

    void shiftDown(){
        this.xdir *= -1;
        this.y += this.r;
    }

    void move(){
        this.x = this.x + this.xdir;
    }

    void show(){
        noStroke();
        fill(255, 0, 200, 150);
        ellipse(this.x, this.r*2, this.r*2);
    }
}