void setup(){
    size(300, 300);
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

void draw(){ 
    prinln(frameRate);
    
}