var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
    music = loadSound ("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(510,580,200,30);
    block3.shapeColor = "red"

    block4 = createSprite(720,580,200,30);
    block4.shapeColor = "green"

    //create two more blocks i.e. block3 and block4 here

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = blue(200,255,255);
    //write code to add velocityX and velocityY
    ball.velocityY = 5;
    ball.velocityX = 4;
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    music.play();
    // if(block1.isTouching(ball) && ball.bounceOff(block1)){
    // ball.shapeColor = "blue";
    // music.play();
    // }
    // if(block2.isTouching(ball)){
    // ball.shapeColor = "orange";

        //write code to set velocityX and velocityY of ball as 0

        //write code to stop music
    music.stop()
    

    //write code to bounce off ball from the block3 and block4
    if(isTouching(ball,block4))
    {
        ball.shapeColor = "green"
    }
    if(isTouching(ball,block1))
    {
        ball.shapeColor = "blue"
    }
    if(isTouching(ball,block2))
    {
        ball.shapeColor = "yellow"
    }
    if(isTouching(ball,block3))
    {
        ball.shapeColor = "red"
    }

    
    
    drawSprites();
}

function isTouching(block3,block4){
    if (block3.x - block4.x < block4.width/2 + block3.width/2
        && block4.x - block3.x < block4.width/2 + block3.width/2
        && block3.y - block4.y < block4.height/2 + block3.height/2
        && block4.y - block4.y < block4.height/2 + block3.height/2) 
        {
         return true;
        }
      else {
        return false;
      }

}
    
