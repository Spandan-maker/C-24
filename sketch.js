const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1;
var log1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);

    box1 = new Box(200, 330,30,100);
    box2 = new Box(350, 330,30,100);

    pig1 = new pig(280,300);

    log1 = new log(280, 280, 300, PI/2);
}

function draw(){
    background(0);

    Engine.update(engine);
    
    box1.display(); 
    box2.display();
    
    pig1.display();
    
    log1.display();

    ground.display();
}
