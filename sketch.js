
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



var ball;

var groundObj;
var left1;
var right1;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	ball = Bodies.circle(200, 100, 20, ball_options);
	World.add(world, ball);

	groundObj = new Ground(600,380,1200, 10);
	left1 = new Ground(800,312,14,125)
	right1 = new Ground(1000,312,14,125)

	rectMode(CENTER);
	ellipseMode(RADIUS);

	Engine.run(engine);
  
}


function draw() {
  background(51);
  groundObj.display();
  left1.display();
  right1.display();
  Engine.update(engine);

  ellipse(ball.position.x, ball.position.y, 20);

  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball, {x:0, y:0}, {x:80, y:0});
		Matter.Body.applyForce(ball, {x:0, y:0}, {x:0, y:-60});
	}
}
