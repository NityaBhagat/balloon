var bow,Arrow,background,red_balloon,green_balloon,
blue_balloon,pink_balloon,background20;
var bowImage,arrowImage,backgroundImage,red_balloonImage,
green_balloonImage,blue_balloonImage,pink_balloonImage;


function preload(){
 //load your images here 
 bowImage = loadImage("bow0.png")
 backgroundImage = loadImage("background0.png");
blue_balloonImage = loadImage("blue_balloon0.png");
red_balloonImage = loadImage("red_balloon0.png");
green_balloonImage = loadImage("green_balloon0.png");
pink_balloonImage = loadImage("pink_balloon0.png");
arrowImage = loadImage("arrow0.png");
}

function setup() {
  createCanvas(600, 600);
  
  //add code here
  bow =createSprite(480,220,20,50);
  bow.addImage(bowImage);
  bow.scale = 1;
 
  background =createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 2.5;
  
 for(var i=60;i<390;i=i+60){
  blue_balloon = createSprite(50, i, 1, 1);
  blue_balloon.addImage(blue_balloonImage);
  blue_balloon.scale = 0.1;
}
  for(var a=110;a<390;a=a+60){
  red_balloon = createSprite(100, a, 10, 10);
  red_balloon.addImage(red_balloonImage);
  red_balloon.scale = 0.1;
}
for(var b=130;b<350;b=b+60){  
  green_balloon = createSprite(140, b, 10, 10);
  green_balloon.addImage(green_balloonImage);
  green_balloon.scale=0.1;
}
for(var c=180;c<250;c=c+60){
  pink_balloon = createSprite(180, c, 10, 10);
  pink_balloon.addImage(pink_balloonImage);
  pink_balloon.scale = 1.2;
}

}

function draw() {

  //moving ground
  background= createSprite(0,250,600,0);
background.addImage("background20",backgroundImage);
background.x = background.width /1;
background.velocityX = -4;
  
  //moving bow
 bow.y = mouseY;
 
   // release arrow when space key is pressed
  if (keyDown("space")) {
    var temp_arrow = createarrow();
    temp_arrow.addImage(arrowImage);
     temp_arrow.y = bow.y;
  }

drawSprites();
   }
  
//arrow for bow to shoot balloon
function createarrow(){
  arrow = createSprite(360,100,5,10);
  arrow.velocityX = -6;
  arrow.scale =0.3
  return arrow;
}

  