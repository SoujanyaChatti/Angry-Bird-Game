const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,ground;

function setup(){
    var canvas = createCanvas(1660,740);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(1200,650,80,80);
    box2=new Box(1500,650,80,80);
    box3= new Box(1200,500,80,80);
    box4=new Box(1500,500,80,80);
    box5=new Box(1350,390,80,80);

    ground = new Ground(830,700,1660,40);

    bird=new Bird(200,200);

    pig1=new Pig(1350,650);
    pig2=new Pig(1350,500);
    log1=new Log(1350,580,400,PI/2);
    log2=new Log(1350,430,400,PI/2);
    log3=new Log(1290,350,200,PI/7);
    log4=new Log(1450,350,200,-PI/7);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    log1.display();
    log2.display(); 
    log3.display();
    log4.display();
    pig1.display();
    pig2.display();
    bird.display();
    ground.display(); 
}