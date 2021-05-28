var button;

var score = 0; 


function setup() {
 createCanvas(1260,450);

 button = new Page();
 
}

function draw() {
  background(78,198,222);

  textSize(20);
  fill("black");
  text("Points :"+ score, 1000, 80);
  

  button.display();
  


  drawSprites();
}


