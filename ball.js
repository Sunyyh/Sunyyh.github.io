var bubble = {
    x:100,y:100,xspd:4,yspd:2
}

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
    ellipse(bubble.x,bubble.y,50,50)

    if (bubble.x > width || bubble.x < 0) {
        bubble.xspd = bubble.xspd * -1;
    }
    if (bubble.y > height || bubble.y < 0) {
        bubble.yspd = bubble.yspd * -1;
    }

    bubble.x = bubble.x + bubble.xspd;
    bubble.y = bubble.y + bubble.yspd;
}
