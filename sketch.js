const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball, rect2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
    var ball_options = {
        restitution : 1,
        density : 5,
        friction : 3
    }
 
    ground = Bodies.rectangle(200,390,400,20,ground_options);
    ball = Bodies.circle(100, 200, 20, ball_options);
    rect2 = Bodies.rectangle(100, 100, 30, 30, ball_options);
    World.add(world,ground);
    World.add(world,ball);
    World.add(world,rect2);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    rect(rect2.position.x,rect2.position.y,30,30);
    ellipseMode(RADIUS)
    ellipse(ball.position.x, ball.position.y, 20, 20);
}