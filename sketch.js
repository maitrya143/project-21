
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj;
var leftside;
var rightside;
var upside;
var world;
var radius = 40;

function setup() {
	createCanvas(1600, 800);
	rectMode(CENTER);

	
	engine = Engine.create();
	world = engine.world;


	var ball_options={
		isstatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	//Create the Bodies Here.
    ball = Bodies.circle(260,100,radius/2,ball_options)
	World.add(world,ball)

	
	

	groundObj=new ground(width/2,670,width,20);
	leftside =new ground(1000,600,20,120);
	rightside =new ground(1255,600,20,120);
	upside=new ground(1100,550,160,20);

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  textSize(100)
  text("Keep Your City Clean.",200,100);

  ellipse(ball.position.x,ball.position.y,radius,radius);

  groundObj.display();
  leftside.display();
  rightside.display();
  upside.display();

  
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
	}

}





