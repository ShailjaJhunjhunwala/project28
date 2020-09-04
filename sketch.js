const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var ground,stone,tree,boy,mango1,mango2,mango3,mango4,mango5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 650);


	engine = Engine.create();
	world = engine.world;

	tree = createSprite(650,height-295,50,500)
	ground = new Ground(400,height-40,800,10)
	stone = new Stone()
	mango1 = new Mango(random(620,280),random(100,160),20)
	mango2 = new Mango(random(620,280),random(100,160),20)
	mango3 = new Mango(random(620,280),random(100,160),20)
	mango4 = new Mango(random(620,280),random(100,160),20)
	mango5 = new Mango(random(620,280),random(100,160),20)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  drawSprites();
 
}



