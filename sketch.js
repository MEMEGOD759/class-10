var trex,trex_running,trex_collided;
var ground,invisibleGround,groundImage;

function preload(){
    trex_running=loadAnimation('trex1.png','trex3.png','trex4.png');
    trex_collided=loadImage('trex_collided.png');
    groundImage=loadImage('ground2.png');
}

function setup(){
    createCanvas(600,200);

    //creating trex sprite
    trex=createSprite(50,180,20,50);
    trex.addAnimation('running',trex_running);
    trex.scale=0.5;
    trex.x=50;

    //create ground sprite
    ground=createSprite(200,180,400,20);
    ground.addImage('ground',groundImage);
    ground.x=ground.width/2;
}

function draw(){
    background('gray');

    ground.velocityX=-2

    if(ground.x<0){
        ground.x=ground.width/2;
    }

    //making the trex jump when space key is pressed
    if(keyDown('space')){
        trex.velocityY=-10;
    }

    trex.velocityY=trex.velocityY+0.8;
    trex.collide(ground);
    drawSprites();
}