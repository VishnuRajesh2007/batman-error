const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var batman;
var canvas;


function preload(){

}

function setup(){
   canvas=createCanvas(displayWidth-3,displayHeight-75);
   engine = Engine.create();
   world = engine.world;
   background(20,20,50);
    batman=new Batman();
   
}

function draw(){
   Engine.update(engine);
    batman.display();
}                       

