
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, slingShot;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
  mango2=new mango(1120,180,30);
  mango3=new mango(1000,70,30);
  mango4=new mango(1150,100,30);
  mango5=new mango(950,150,30);

	stoneObj=new stone(300,500,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
  slingShot = new Slingshot(stoneObj.body,{x:240,y:420});

	Engine.run(engine);

}
function mouseDragged(){
  Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}




function draw() {

  background(230);
  //Add code for displaying text here!
  
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  groundObject.display();
  stoneObj.display();
  slingShot.display();

  collision(stoneObj,mango1);
  collision(stoneObj,mango2);
  collision(stoneObj,mango3);
  collision(stoneObj,mango4);
  collision(stoneObj,mango5);
  
  fill("black")
  textSize(50)
  text("Press SPACE to try again",250,150);

}

function collision(stone,mango){
  pos1=stone.body.position;
  pos2=mango.body.position;

  var distance = dist(pos1.x,pos1.y,pos2.x,pos2.y);
  if(distance<=stone.r+mango.r){
    Matter.Body.setStatic(mango.body,false)
  }
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stoneObj.body,{x:240,y:420})
    slingShot.attach(stoneObj.body);
  }
  
}