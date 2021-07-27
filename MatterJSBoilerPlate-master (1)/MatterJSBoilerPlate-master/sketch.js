
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
const Render = Matter.Render
var tree11, stone1, ground1, launcher1
var mango1, mango2, mango3, mang04,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12
var world,body
var launchingForce=100
function preload()
{
	boy=loadImage("boy.png")
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
stone1=new stone(235,420,30)
tree1=new tree(1050,508)
ground1=new ground(width/2, 600,width, 20)
launcher1=new launcher(stone1.body, {x:235,y:420})
mango1=new mango(1100,100,30)
mango2=new mango(1170,100,30)
mango3=new mango(1010,140,30)
mango4=new mango(1000,70,30)
mango5=new mango(1100,70,30)

mango6=new mango(1000,230,30)
mango7=new mango(900,230,40)
mango8=new mango(1140,150,40)
mango9=new mango(1100,230,40)
mango10=new mango(1200,200,40)
mango11=new mango(1120,50,40)
mang012=new mango(900,160,40)







	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  //frameRate(2)
 // Engine.update(engine)
  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);
  image(boy ,200,340,200,300);
  //Engine.update(engine)
  

  tree1.display();
  stone1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
 mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  stone1.display();

  ground1.display();
  launcher1.display();
  detectollision(stone1,mango1);
  detectollision(stone1,mango2);
  detectollision(stone1,mango3);
  detectollision(stone1,mango4);
  detectollision(stone1,mango5);
  detectollision(stone1,mango6);
  detectollision(stone1,mango7);
  detectollision(stone1,mango8);
  detectollision(stone1,mango9);
  detectollision(stone1,mango10);
  detectollision(stone1,mango11);
  detectollision(stone1,mango12);
}

function mouseDragged()
{
	Matter.Body.setPosition(stone1.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcher1.fly();
    // distance=int(dist(stone.x,stone.y,mango1.x,mango1.y));
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone1.body, {x:235, y:420}) 
	  launcher1.attach(stone1.body);
	}
  }

  function detectollision(lstone,lmango){
	/*var collision = Matter.SAT.collides(lstone,lmango);
	if(collision.collided){
		console.log("collided");
		Matter.Body.setStatic(lmango,false);	
	}*/
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  //console.log(distance)
 // console.log(lmango.r+lstone.r)
  	if(distance<=lmango.r+lstone.r)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }

