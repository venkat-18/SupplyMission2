var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var rect1,rect2,rect3;
//var key;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
rect1=createSprite(350,630,10,70);
rect1.shapeColor="red";
rect2=createSprite(450,630,10,70);
rect2.shapeColor="red";
rect3=createSprite(400,658,100,10);
rect3.shapeColor="red";

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
		helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	 rect1=Bodies.rectangle(350,630,10,70,{isStatic:true});
	 World.add(world,rect1);

	 rect2=Bodies.rectangle(450,630,10,70,{isStatic:true});
	 World.add(world,rect2);

	 rect3=Bodies.rectangle(400,658,100,10,{isStatic:true});
	 World.add(world,rect3);

	Engine.run(engine);
  
}


function draw() {
  
  background(0);

  
  rectMode(CENTER);
  packageSprite.x= packageBody.position.x ;
   packageSprite.y= packageBody.position.y ;
  keyPressed();
  drawSprites();
 
}

function keyPressed(event) {
//	key=event.keyCode;
 if (keyCode=== DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
// packageSprite.velocityY=1;
    Matter.Body.setStatic(packageBody,false);
  }
}



