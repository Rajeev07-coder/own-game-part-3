var playingC,nonPlayingC;

function setup() {
  createCanvas(displayWidth,displayHeight);
 
}

function draw() {
  background("yellow");

 nonPlayingC = createSprite(displayWidth/2+150,displayHeight/2+150,40,70);
 nonPlayingC.shapeColor="red";
 spawnPlayingCharacter();
  drawSprites();
}

function spawnPlayingCharacter(){
  if(frameCount%80==0){
    playingC = createSprite(displayWidth/2,displayHeight/2-50,70,40);
  playingC.shapeColor="orange";
  playingC.velocityX = 2;
  }
  
}