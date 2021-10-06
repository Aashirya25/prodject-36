var canvas, backgroundImage;

var questions;

var question, contestant, quiz;
var think, think2

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.start();
}


function draw(){
  background("#E8A49B");
think = createImg("think.png")
think.position(560,20)
think.size(40,40)
think2 = createImg("think.png")
think2.position(300,20)
think2.size(40,40)
}
