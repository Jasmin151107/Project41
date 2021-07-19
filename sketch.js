var issImg, spacecraftImg ,background1Img
var iss, spaceCraft, hasDocked;

function preload(){

  issImg = loadImage("iss.png");
  spacecraftImg = loadAnimation("spacecraft1.png","spacecraft2.png","spacecraft3.png","spacecraft4.png");
  background1Img = loadImage("spacebg.jpg")
}

function setup() {
  createCanvas(800,500);
  iss=createSprite(400, 200, 50, 50);
  iss.addImage("iss",issImg);

  spaceCraft = createSprite (350,400,50,50)
  spaceCraft.addAnimation("spacecraft",spacecraftImg);
   spaceCraft.scale = 0.3
  //hasDocked.visible = false;
}

function draw() {
  background("spacebg.jpg");  

  if(!hasDocked){
    
  }

  drawSprites();
}