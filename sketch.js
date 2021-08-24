var runner,runnerImg
var path,pathImg

function preload(){
  pathImg = loadImage("path.png"); 
  runnerImg = loadImage("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  runner = createSprite(200,350,10,10)
  runner.addImage(runnerImg);
  runner.scale = 0.09;
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;
}

function draw() {
  background(0);
 if(path.y > 400){
   path.y = height/2;
 }
 path.depth = runner.depth;
 runner.depth = runner.depth + 1;
   drawSprites()
}
