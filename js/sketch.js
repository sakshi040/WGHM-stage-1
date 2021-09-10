const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg;
var ground;
var brick1,brick2,brick3;

function preload(){
bg=loadImage("images/brick wall.png")
}

function setup(){
createCanvas (1040,480)
    engine=Engine.create()
    world=Engine.world;

ground=new Ground(520,470,1040,30)
brick1=new Brick(160,400,100,30)
brick2=new Brick(270,350,100,30) 
brick3=new Brick(390,300,100,30) 
}

function draw(){
background(bg);
Engine.update(engine);

ground.display();
brick1.display();
brick2.display();
brick3.display();
}