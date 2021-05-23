const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2 , box3 ,box4 ,box5 ,box6 ,box7 ,box8 ,box9 ,box10, box11 ,box12 ,box13 ,box14 ,box15 ,box16,box17 ,box18, box19, box20;
var ball, rope ;

var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;

function preload() {

}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    ball = new Ball(200,700,40);

    ground = new Ground(600,height,1200,20);

    box1 = new Box(700,320,70,70);
    box2 = new Box(700,320,70,70);
    box3 = new Box(700,320,70,70);
    box4 = new Box(700,320,70,70);
    box5 = new Box(700,400,70,70);
    box6 = new Box(600,400,70,70);
    box7 = new Box(600,480,70,70);
    box8 = new Box(600 ,560,70,70);
    box9 = new Box(600,640,70,70);
    box10 = new Box(600,720,70,70);
    

    rope = new Rope(ball.body,{x:200, y:50});
}

function draw(){
background("white")
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
    Engine.update(engine);
    //strokeWeight(4);

    ball.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();

    ground.display();
    rope.display();
  
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    rope.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       rope.attach(ball.body);
    }
}

//async function getBackgroundImg(){
    //var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    //var responseJSON = await response.json();

    //var datetime = responseJSON.datetime;
    //var hour = datetime.slice(11,13);
    
    //if(hour>=0600 && hour<=1900){
      //  bg = "sprites/bg1.png";
   // }
    //else{
  //      bg = "sprites/bg2.jpg";
   // }

  //  backgroundImg = loadImage(bg);
 //   console.log(backgroundImg);
//}