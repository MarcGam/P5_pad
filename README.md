# P5_pad
A simple pad for P5 projects. This pad can be useful in all cases where you have to choose directions of movement as in some games where you can not use the computer keyboard.
The use is very simple: you have to instantiate a Pad object and specify its position in the sketch and then use the four methods as in the following example:

// === CODE =====
let pad;
let msg = "Info";
let stepX = 0;
let stepY = 0;
function setup() {
    createCanvas(400, 400);
    pad = new Pad(355, 330); // Pad Instance
}
function draw() {
    background(180);
    pad.show(); // show the pad on the sketch

    pad.on_click_up(function () { // on_click_up method for the up arrow
        msg = "UP!";
        stepY -= 2;
    });
    pad.on_click_down(function () { // on_click_down method for the down arrow
        msg = "DOWN!";
        stepY += 2;
    });
    pad.on_click_left(function () { // on_click_left method for the left arrow
        msg = "LEFT!";
        stepX -= 2;
    });
    pad.on_click_right(function () { // on_click_right method for the right arrow
        msg = "RIGHT!";
        stepX += 2;
    });

    fill(20, 120, 12);
    textSize(24);
    text(msg, width / 2, 30);
    fill("red");
    square(100 + stepX, 100 + stepY, 32);
}
