let bubbles = []

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 20; i++) {
    let x = random(width)
    let y = random(height)
    let r = random(10,30)
    bubbles[i] = new Bubbles(x,y,r)
  }
}

function draw() {
  background(0);
  //let d = dist(bubbles1.x,bubbles1.y,bubbles2.x,bubbles2.y)
  
  /*if (bubbles1.intersects(bubbles2)) {
    background(0,200,200)
  }*/
 for (bb of bubbles) {
   bb.show()
   bb.move()
   let overlapping = false 
   for (other of bubbles) {
    if (bb !== other && bb.intersects(other)) {
      overlapping = true
    } 
   }
    if (overlapping) {
      bb.changeColor(100)
    } else {
      bb.changeColor(0)
    }
 }
  
}

class Bubbles {
  constructor(x,y,r=50) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0
  }
  
  intersects(other) {
    let d = dist(this.x,this.y,other.x,other.y)
    return d < this.r + other.r
  }
  
  changeColor (bright) {
    this.brightness = bright
  } 
  
  contains(px, py) {
    let d = dist(px, py, this.x, this.y)
    if (d < this.r) {
      return true
    } else {
      return false
    }
  }
  
  move() {
    this.x = this.x + random(-3,3);
    this.y = this.y + random(-3,3);
  }

  show() {
    stroke(random(0,255))
    strokeWeight(2)
    fill(this.brightness, 100)
    ellipse(this.x, this.y, this.r * 2)
  }
}
