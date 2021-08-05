var path ;  
var pathImg;
var boy;
var runningImg1;  //always make a variable.
var runningImg2;
var running;



function preload()

{
   //pre-load images
   pathImg=loadImage("path.png")
   running=loadAnimation("Runner-1.png","Runner-2.png"); // makes an animation of the boy walking.
}



function setup()

 {
    createCanvas(400,400);
    //create sprites here

  //moving background
  path=createSprite(200,200);     //(ask teacher how to make the path stay on the canvas for longer ....**)
  path.addImage(pathImg);
  path.velocityY= -1.5;          //creates the path, path speed(velocity),its scale size too.
  path.scale=1.2;
  

  boy=createSprite(200,350,30,30);
  boy.addAnimation("running",running);
  boy.scale = 0.1;                           //creates the boy,its scale,make sure to add its animation if MORE THAN ONE IMAGE ONLY.


  //(making the invisible ground for left and right sides of the canvas?- ask for help...****)


 //(also ask how to make the boy collide with the invisible walls, so it doesn't go ou of the canvas. ...***)

//(ask how to make the boy move with the mouse using mouseX....***) 

  }

function draw()

    {
      background(0);
    
    

      //code to reset the background
    if(path.y > 400){
      path.y = height/2;          //makes the the background repeat based on its height.
    }

      drawSprites();  // always write draw sprites and if condtions in function draw. and velocity? idk
    }
    

