let speedX;

function setup() {
  ellipseMode(CORNER)
  createCanvas(400, 400);
  speedX = 3;
  sprite1 = new sprite(0, 100, 1, "lightblue");
}

function draw() {
  background("black");

  sprite1.show();
  sprite1.move();
}

class sprite {
  constructor(x, y, r, spriteFill) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.spriteFill = spriteFill;
  }
  show() {
    push();
    translate(this.x, this.y);
    scale(this.r);
    fill(this.spriteFill);
    noStroke();
    ellipse(0, 0, 30);
    triangle(15, -14, 3, 6, 27, 6);
    pop();
  }
  move(){
    this.x = this.x + speedX
    if (this.x < 0 || this.x > 370){
      speedX = speedX * -1
    }
  }
}
