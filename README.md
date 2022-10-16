![img_pad](https://user-images.githubusercontent.com/111884001/196042111-e8ba5e25-8b45-493c-9ed4-bf2574bc3d4b.png)
# P5_pad
A simple pad for P5 projects. This pad can be useful in all cases where you have to choose directions of movement as in some games where you can not use the computer keyboard.
Place the P5_pad.js file in the script tag after the p5.js file.
<script src="p5.min.js"></script><br>
<script src="P5_pad.js"></script>
The use of P5_pad is very simple: in the skecth.js file you have to instantiate a Pad object and specify its position in the sketch and then use the four methods as in the following example:

![code](https://user-images.githubusercontent.com/111884001/196049318-5ae224f4-f94e-4477-a145-80726fcb41f8.png)

<code>

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
</code>
