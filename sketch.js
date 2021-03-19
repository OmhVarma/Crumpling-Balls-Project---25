
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var paper1;
var dustbin1,dustbin2,dustbin3;
var image1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

  ground = new Ground(0,700,1600,20);

	paper1 = new Paper(100,640,40);

	dustbin1 = new Dustbin(515,625,10,120);
  dustbin3 = new Dustbin(595,625,10,120);
  dustbin2 = new Dustbin(555,680,90,20);

  image1 = loadImage("sprites/dustbingreen.png");


	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(255);
  k();
  drawSprites();
 
  ground.display();

  paper1.display();

  dustbin1.display();
  dustbin3.display();
  dustbin2.display();

  image(image1,505,560,100,130);

}

function k(){
  if (keyDown("space")){
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:10,y:-20});
  }
}



