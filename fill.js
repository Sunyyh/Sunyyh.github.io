let bubbles = []

function setup() {
    createCanvas(600, 400);
    for (let i = 0; i < 10; i++) {
        let x = random(width);
        let y = random(height);
        let r = random(15,45);
        bbl = new Bubbles(x, y, r);
        bubbles.push(bbl)
    }
}

function mousePressed() {
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].bubbleClick(mouseX, mouseY)
    }
}

function draw() {
    background(0);
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].move()
        bubbles[i].show()
    }
}

class Bubbles {
    constructor(x,y,r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.bright = 0
    }

    bubbleClick(mx,my) {
        let d = dist(mx, my, this.x, this.y);
        if (d < this.r) {
            this.bright = 150
        }
    }

    move() {
        this.x = this.x + random(-3,3);
        this.y = this.y + random(-3,3);
    }

    show() {
        stroke(255)
        strokeWeight(2)
        fill(this.bright, 100)
        ellipse(this.x, this.y, this.r * 2)
    }
}


