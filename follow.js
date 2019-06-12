let player
let invis

function setup() {
    createCanvas(600, 400);
    player = new Bubbles(300,200,30)
    invis = new invBubbles(30,random(0,400),30)
}

function draw() {
    background(0);
    player.x = mouseX
    player.y = mouseY
    let d = dist(player.x,player.y,invis.invX,invis.invY)
    if (d < player.r + invis.invR) {
        col = 255
    } else {
        col = 50
    }

    player.show()
    invis.invShow()
    invis.follow()
}

class Bubbles {
    constructor(x,y,r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }



    show() {
        stroke(255)
        strokeWeight(2)
        fill(col)
        ellipse(this.x, this.y, this.r * 2)
    }
}

class invBubbles {
    constructor(invX,invY,invR) {
        this.invX = invX;
        this.invY = invY;
        this.invR = invR;
    }

    follow() {
        player.x = mouseX;
        let dx = player.x - this.invX;
        this.invX += dx * 0.03;

        player.y = mouseY;
        let dy = player.y - this.invY;
        this.invY += dy * 0.03;
    }

    invShow() {
        stroke(50)
        strokeWeight(2)
        noFill()
        ellipse(this.invX,this.invY,this.invR * 2)
    }
}







