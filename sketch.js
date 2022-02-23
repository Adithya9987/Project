var crane
var bricks
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload (){
 loadImage("crane.jpg");
 loadImage("images.png");
}


function setup() {
  createCanvas(600,700);

  engine = Engine.create();
  world = engine.world;
  
   
  crane = createImg("crane.jpg");
  crane.position(50,300);
  crane.size(200,200);

  bricks = createImg("images.png")
  bricks.position(300,300)
}




function draw() 
{
  background(51);
  image(bg_img,0,0,width,height);
  Engine.update(engine);
  

  if(mousePressed()){
    crane.positionX= crane.positionX+1
    crane.positionY = crane.position+1
  }
}

if(crane.isTouching(bricks)){
  bricks.destroy();
}