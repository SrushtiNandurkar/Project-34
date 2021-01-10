const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var engine, world;

function setup(){
    canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;

    dot1 = new Dot(200,300,"white");
    dot2 = new Dot(281,300,"white");
    dot3 = new Dot(362,300,"white");
    dot4 = new Dot(443,300,"white");
    dot5 = new Dot(524,300,"white");

    pendulum1 = new Pendulum(200,500,"black");
    pendulum2 = new Pendulum(281,500,"black");
    pendulum3 = new Pendulum(362,500,"black");
    pendulum4 = new Pendulum(443,500,"black");
    pendulum5 = new Pendulum(524,500,"black");

    rope1 = new Sling(pendulum1.body,dot1.body,+1,0);
    rope2 = new Sling(pendulum2.body,dot2.body,+1,0);
    rope3 = new Sling(pendulum3.body,dot3.body,+1,0);
    rope4 = new Sling(pendulum4.body,dot4.body,+1,0);
    rope5 = new Sling(pendulum5.body,dot5.body,+1,0);
}

function draw(){
    background(0);
    Engine.update(engine);

    dot1.display();
    dot2.display();
    dot3.display();
    dot4.display();
    dot5.display();

    pendulum1.display();
    pendulum2.display();
    pendulum3.display();
    pendulum4.display();
    pendulum5.display();

    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();
}

function mouseDragged(){
        Matter.Body.setPosition(pendulum1.body, {x: mouseX , y: mouseY});
}
