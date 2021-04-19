var ball
var pad1, pad2
var groundup
var gameState
END = 0;
PLAY = 1;
gameState = 1

function setup() {
  //canvas
  createCanvas(400, 400);

  //sprites
  ball = createSprite(200,200,10,10);
  pad1 = createSprite(200,20,90,10);
  pad2 = createSprite(200,380,90,10);
  groundup = createSprite(200,400,400,10);
  groundup.visible = false;
  ball.velocityX = 8;
  ball.velocityY = 6;
  
}

function draw() {
  
  if (gameState === PLAY){
    pad2.x = World.mouseX;
  pad1.x = ball.x;
  Edges = createEdgeSprites();
  ball.bounceOff(Edges)
  ball.bounceOff(pad2)
  ball.bounceOff(pad1)
  }
  
  if (ball.isTouching(groundup)){
  gameState = END;
  
  }
  if (gameState === END){
    ball.velocityX = 0;
  ball.velocityY = 0;
  text("You Lost (MADE BY KANISKA MAITI)",100,150);
    textColor("")
  }
  
  background(225);
  line(0,200,400,200)
  drawSprites()
}