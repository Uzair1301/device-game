var path,boy,cash,diamonds,jwellery,sword;
var parthImg,boyImg,cashImg,dimondsImg,jwelleryImg,swordImg;
var treasureCollection=0;
var cashG,dimondG,jwelleryG,swordG,swordGroup;
var gameOver,  ending
//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload (){
  pathImg=loadImage("road,png")
  boyImg=loadAnimation("Runner-1pn g,Runner-2.png");
cashImg=loadImage("cash.png");
diamonds = loadImage("diamonds.png");
jwelleryIng=IoadImage("jwell.png");                     
swordImg=loadImage("sword.png");
endImg=loadImage("gamOver.png");
}

function setup(){   

 createCanvas(400,600);
// Movcing bavckground
path=ceateSprite(200,200);
path.addImage(pathImg);
path.velocityY=4;


//creating boy running
boy=createSprite(70,580,20,20);
boy.addAnimation("sahilRunning",boyImg)
boy.scle=0.08

  
  gameOver=createSprite(200,300,50,50);
  gameOver.visiable=false 

cashG=new Group();
dimondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();
}

function draw(){

if(gameState===PLAY){
background(0);
boy.x=worlg.muuseX;

edges=createEdgesSprite(); 
boy.colllide(edges);
} 
//code to reset the background
  if(path.y>500){
  path.y= height/2
  }
  
 createCash(); 
createDiamonds();
  
 if(cashG.isTounching(boy)){ 
cashG.destroyEach()
treasureCollection=treasuresCollection+50;
 }
  
  else if(dimondsG.istounching(boy)){
  dimondsG.destoryEacg();
  treasureCollection=treasuresCollection+50
  } 
  
  else if(jwelleryG.istoncing(boy)){
  jwellaryG.destroyEach();
  treasureCollection=treasureCollection+50;
  }
  
 else
  if(swordGroup.isTounching(boy)){
  gameState=END
  gameover.visiable=true
  gameOver.addImage(endTime)
  }
    
   boy.X=200
  boy.y=300
  boy.visiable=alse
    cashG.visiable=false
    dimondsG.visiable=false
    jwelleryG.visiableY=0;
    path.velocityY=o;
    cashG.destroyEach();
    cashG.set.velocityYEach(0);
    dimonddG.destory();
    dimondsG.setVelocitYEach(0);
    jwelleryGdestoryEach();
     jwellaryG.setVelocityYEach(0);
}