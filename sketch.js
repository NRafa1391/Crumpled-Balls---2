const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var DustbinImage;

function preload(){
	DustbinImage = loadImage("sprites/dustbingreen.png")
}
function setup() {
    createCanvas(800, 700);

	dustbinImage = createSprite(600, 450, 2, 2);
	dustbinImage.addImage(DustbinImage);


    engine = Engine.create();
    world = engine.world;

    paper = new Paper(120, 540, 20);
    ground = new Ground(400, 350, 800, 10);
    dustbin = new Dustbin(600, 590);
    dustbin2 = new Dustbin2(705, 545);
    dustbin3 = new Dustbin3(500, 545);


    Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(255);


  paper.display();
  ground.display();
  dustbin2.display();
  dustbin.display();
  dustbin3.display();


  createEdgeSprites();

  drawSprites();

}

function keyPressed() {
    if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paper.body, paper.body.position, {x:120, y:-300})
    }

}



