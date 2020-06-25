const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(rand,300,50,50);
    box2 = new Box(200,100,50,50);
    Ground1 = new Ground(width/2,385,400,30)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
}