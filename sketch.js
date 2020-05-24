

var supply;
var helicopter;
var bucket;

function setup(){
    var canvas = createCanvas(400,400);
   helicopter=createSprite(350,200,50,20);
   helicopter.velocityX=2;
   helicopter.Animation("helicopter.png");
 

   supply=createSprite(350,200,10,10);
supply.velocityX=helicopter.velocityX;
supply.Animation("package.png");
   
}

function draw(){
    background(0);
   

   if(keyDown("DOWN_ARROW"))
{
   supply.velocityY=-2;
}

}