
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground, r;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
  
  monkey = createSprite(75,300,10,10);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1
  monkey.velocityY = 5;
  
  
  ground = createSprite(300,425,900,150);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  
  score = 0;
  
}


function draw() {
  background("lightgreen");
  if (ground.x < 200){
      ground.x = ground.width/2;
    }
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 1;
 monkey.collide(ground);
  
  score = score + Math.round(getFrameRate()/60);
  text("Score: "+score, 500,50);
  food();
  obstacles();
  drawSprites();
}

function food(){
  if(World.frameCount % 80 === 0){
    banana = createSprite(500,100,10,10);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -7;
    banana.lifetime = 200;
    
    r = Math.round(random(120,200));
    banana.y = r;
  }
  
}
function obstacles(){
  if(World.frameCount % 300 === 0){
    obstacle = createSprite(600,330,20,20);
    obstacle.addImage(obstaceImage);
    obstacle.velocityX = -9;
    obstacle.scale = 0.2
    obstacle.lifetime = 200;
  }
}




