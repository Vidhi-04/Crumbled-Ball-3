var log1;
var ground;
var ball;
var Slingshot;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
  rectMode(CENTER);
  createCanvas(1200, 600);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,570,1200,20);
  log1=new Bin(900,320,300,300);
  ball=new Ball(500,55);
  Slingshot = new launcher(ball.body, {x: 500, y: 55})
  Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("black");
  Engine.update(engine);
  
  ball.display();
  log1.display();
  ground.display();
  Slingshot.display();

}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY})
}
function mouseReleased(){
  Slingshot.fly();
}