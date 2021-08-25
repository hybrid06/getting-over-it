var back
var backimage
var ch;
var chImage;
var ground,groundImage;
var rock1
var rock1Image
var rock2
var rck2Image



function preload(){
backimage=loadImage("images/bg.jpg");
chImage=loadImage("images/ch.png");
rock1Image=loadImage("images/rockimg.png")
groundImage=loadImage("images/ground2.png")
}




function setup(){
createCanvas(800,800);
   back = createSprite(350,350,800,800);
back.addImage(backimage);
back.scale=2;

ch = createSprite(100,400,10,10);
ch.addImage(chImage);
ch.scale=.5;
ch.setCollider("rectangle",0,0,100,250);
ground = createSprite(400,535,1000,10);
ground.visible=true;
ground.addImage(groundImage);
ground.scale=3
rock1 = createSprite(600,400);
rock1.addImage(rock1Image);
rock1.scale=.15;

ch.debug=true;
}


function draw(){
   background("black");
if(keyDown(UP_ARROW)) { 
   ch.velocityY=-9;
ground.velocityX= -5;

}
if(keyWentUp(UP_ARROW)){
   ch.velocityY=0;
   ch.velocityY=5;
}

ch.collide(ground);

if(ground.x<0){
   ground.x=400;
}

drawSprites();

}

function obstacles(){




}