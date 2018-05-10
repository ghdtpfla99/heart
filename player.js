var image;

var player = new Array(2);

var dir, xPos, yPos;

  

function setup() {

  createCanvas(500,500);

  player[0] = loadImage('1.png');

  player[1] = loadImage('4.png');

  dir=0;

  xPos=0;

  yPos=0;
  
   img=loadImage('14.png');

  image(img, 0, 0);
 

}

 

function draw() {

  background(255);
  

   image(player[dir], xPos, yPos);
}

 

function keyPressed() {

    if (keyCode === LEFT_ARROW) {

      dir=0;

      xPos -= 10;

    }

    else if (keyCode === RIGHT_ARROW) {

      dir = 1;

      xPos+=10;

    }

    if (keyCode === UP_ARROW) {

      dir = 0;

      yPos -= 10;

  }

   else if (keyCode === DOWN_ARROW) {

      dir = 1;

      yPos += 10;

    }

}
