var windowWidth = innerWidth;
var windowHeight = innerHeight;

function setup() {
    createCanvas(windowWidth, windowHeight);
}
function draw() {
    
    background(90);

    playerStateMachine();
    movePlayer();
    drawPlayer();

    drawWall();
}