player = {

    state: "idle",

    x: windowWidth/2,
    y: windowHeight/2,
    width: 30,
    height: 30,

    velh: 0,
    velv: 0,
    max_velc: 5,

    up: 0,
    down: 0,
    left: 0,
    right: 0,

    keyPressedH: 0,
    keyPressedV: 0,

    alive: true,

}

class Wall {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}

function playerStateMachine() {
    switch(player.state){

        case "idle":
            {
                player.velh = 0;
                player.velv = 0;
                if(player.keyPressedH != 0 || player.keyPressedV != 0) {
                    player.state = "moving";
                }
                break;
            }
        
        case "moving":
            {
                player.x += player.velh;
                player.y += player.velv;
                break;
            }
    }
}

function movePlayer() {

    player.keyPressedH = player.right - player.left;
    player.keyPressedV = player.down - player.up;

    if(keyIsDown(LEFT_ARROW)) {
        player.left = 1;
    } else {
        player.left = 0;
    }

    if(keyIsDown(RIGHT_ARROW)) {
        player.right = 1;
    } else {
        player.right = 0;
    }

    if(keyIsDown(UP_ARROW)) {
        player.up = 1;
    } else {
        player.up = 0;
    }

    if(keyIsDown(DOWN_ARROW)) {
        player.down = 1;
    } else {
        player.down = 0;
    }

    player.velh = player.max_velc * player.keyPressedH;
    player.velv = player.max_velc * player.keyPressedV;



}

function drawPlayer() {

    if(player.alive === true){
        rect(player.x - player.width/2, player.y - player.height/2, player.width, player.height);
    }

}

function drawWall() {

    let wallC = [[0, windowHeight - 50, windowWidth, 50], [1300, 20, 50, 500]];

    for(let i = 0; i < wallC.length; i++) {

        //draw player

        let wall = new Wall(wallC[i][0], wallC[i][1], wallC[i][2], wallC[i][3]);

        rect(wall.x, wall.y, wall.width, wall.height);

        //image(lavaWall, wall.x, wall.y, wall.width, wall.height);

        ////////////////////////////////////////////////////////////////////////

        //wall collision with player
        if(player.x + player.width/2 >= wall.x && player.x - player.width/2 <= wall.x + wall.width && player.y + player.height/2 >= wall.y && player.y - player.height/2 <= wall.y + wall.height) {
            player.alive = false;
        }

    }
}