
var paper,dustbin1,dustbin2,dustbin3,ground;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(1200, 600);
	rectMode(CENTER);
	engine=Engine.create();
	world = engine.world;
    
	
	
	//dustbin2=createSprite (300,430,20,150);
	
	//dustbin3=createSprite(500,430,20,150);

	dustbin2=new Dustbin(300,430,10,150);

	dustbin3=new Dustbin(500,430,20,150);
	
	ground=new Ground(600,550,1200,50);

	paper=new Paper(990,500,40);

	dustbin1= new Dustbin(400,430,250,0);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
 
  //Engine.update(engine);
	
    ground.display();
	
	dustbin2.display();

	dustbin3.display();
	
	dustbin1.display();
	
	paper.display();
	
  drawSprites();
 
}

function keyPressed (){
	if (keyCode === UP_ARROW){
		
		Matter.Body.applyForce(paper.body,paper.body.position,{x:-200,y:-350});

}

}	


