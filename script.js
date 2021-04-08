var canvas = new fabric.Canvas('myCanvas');
var block_image_width = 30;
var block_image_height = 30;
var player_object = "";
var block_image = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object = scaleToHeight(150);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}

function new_Image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top: player_x,
            left: player_y
        });
    })
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == '80') {
        console.log("p and shift is pressed together");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    };
    if (e.shiftKey == true && keyPressed == '77') {
        console.log("Shift and M is pressed together");
        if (block_image_width == 0) {
            block_image_width = 30;
        }
        if (block_image_height == 0) {
            block_image_height = 30;
        }
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    //body_parts
    if (keyPressed == '70') {
        new_Image('ironman_face.png');
        console.log("f");
    }
    if (keyPressed == '66') {
        new_Image('spiderman_body.png');
        console.log("b");
    }
    if (keyPressed == '76') {
        new_Image('hulk_legs.png');
        console.log("l");
    }
    if (keyPressed == '82') {
        new_Image('thor_right_hand.png');
        console.log("r");
    }
    if (keyPressed == '72') {
        new_Image('captain_america_left_hand.png');
        console.log("h");
    }
    //arrow keys
    if (keyPressed = '38') {
        up();
        console.log('up');
    }
    if (keyPressed = '40') {
        down();
        console.log('down');
    }
    if (keyPressed = '37') {
        left();
        console.log('left');
    }
    if (keyPressed = '39') {
        right();
        console.log('right');
    }
    //up, down, left, right
    function up() {
        if (player_y >= 0) {
            player_y = player_y - block_image_height;
            console.log("player_y = " + player_y);
            console.log("player_x = " + player_x);
            console.log("block image height = " + block_image_height);
            canvas.remove(player_object);
            player_update();
        }
    }

    function down() {
        if (player_y <= 500) {
            player_y = player_y + block_image_height;
            console.log("player_y = " + player_y);
            console.log("player_x = " + player_x);
            console.log("block image height = " + block_image_height);
            canvas.remove(player_object);
            player_update();
        }
    }

    function left() {
        if (player_x > 0) {
            player_x = player_x - block_image_width;
            console.log("player_y = " + player_y);
            console.log("player_x = " + player_x);
            console.log("block image width = " + block_image_width);
            canvas.remove(player_object);
            player_update();
        }
    }

    function right() {
        if (player_x <= 850) {
            player_x = player_x + block_image_width;
            console.log("player_y = " + player_y);
            console.log("player_x = " + player_x);
            console.log("block image width = " + block_image_width);
            canvas.remove(player_object);
            player_update();
        }
    }
}