let newArray;

function setup() {
  ellipseMode(CORNER)
  createCanvas(400, 400);
  
  newArray = [];
  
  colorArray = ["blue", "lightblue", "violet", "purple", "indigo"];
  randomColor = random(colorArray);
  
  for(let i = 0; i < 50; i++){
    sprite1 = new sprite(0, random(10, 350), 1, randomColor, 5);
    newArray.push();
  }
}

function draw() {
  background("black");

  sprite1.show();
  sprite1.move();
}

class sprite {
  constructor(x, y, r, spriteFill, spriteSpeed) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.spriteFill = spriteFill;
    this.spriteSpeed = spriteSpeed;
  }
  show() {
    push();
    translate(this.x, this.y);
    scale(this.r);
    fill(this.spriteFill);
    this.spriteSpeed = this.spriteSpeed
    noStroke();
    ellipse(0, 0, 30);
    triangle(15, -14, 3, 6, 27, 6);
    pop();
  }
  move(){
    this.x = this.x + this.spriteSpeed
    if (this.x < 0 || this.x > 370){
      this.spriteSpeed = this.spriteSpeed * -1
    }
  }
}
