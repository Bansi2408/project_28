const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var pointA, paper; 
var Slingshot;

function mouseDragged()
{
  Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}

function mouseReleased()
{
  slingshot.fly();
}

function setup() {
	createCanvas(800,700);

  engine = Engine.create();
	world = engine.world; 
  Engine.run(engine);

  paper = new Paper(100,520, 40);
  dustbin = new Dustbin(500,650);
  ground = new Ground(600,height,1200,20);

  slingshot=new SlingShot(paper.body,{x:200,y:100});

}
 
function draw() {
  background("pink");
  rectMode(CENTER);

  dustbin.display();
  ground.display();
  paper.display();
  slingshot.display();
  
  drawSprites();
 
}


function keyPressed() 
{ if (keyCode === UP_ARROW) 
  { Matter.Body.applyForce(paper.body,paper.body.position,
    {x:50,y:-50}); 
  }
}





