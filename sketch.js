const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;

var ball;

var boton1;
var boton2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  boton1 = createImg("right.png");
  boton1.position(250,31);
  boton1.size(50,50);
  boton1.mouseClicked(hForce);
  
  boton2 = createImg("up.png");
  boton2.position(25,31);
  boton2.size(50,50);
  boton2.mouseClicked(vForce);


  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
  var ball_options = {
    restitution:0.95
  }

ball = Bodies.circle(200,100,20,ball_options);
World.add(world,ball);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{ 
  background(51);
  ellipse(ball.position.x,ball.position.y,20);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
}

function hForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}
function vForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
