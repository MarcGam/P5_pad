let pad;
let msg = "Info";
let stepX = 0;
let stepY = 0;
function setup() {
    createCanvas(400, 400);
    pad = new Pad(355, 330);

}
function draw() {
    background(180);
    pad.show();

    pad.on_click_up(function () {
        msg = "UP!";
        stepY -= 2;
    });
    pad.on_click_down(function () {
        msg = "DOWN!";
        stepY += 2;
    });
    pad.on_click_left(function () {
        msg = "LEFT!";
        stepX -= 2;
    });
    pad.on_click_right(function () {
        msg = "RIGHT!";
        stepX += 2;
    });

    fill(20, 120, 12);
    textSize(24);
    text(msg, width / 2, 30);
    fill("red");
    square(100 + stepX, 100 + stepY, 32);
}