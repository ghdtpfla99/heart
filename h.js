var h = new Array[2][3];
var i, j;
var x, y;

function setup() {
  createCanvas(500,500);
  i = 0;
  j = 0;
  imageMode(CENTER);
  h[0][0] = loadImage('1.png');
  h[0][1] = loadImage('2.png');
  h[0][2] = loadImage('3.png');
  h[1][0] = loadImage('4.png');
  h[1][1] = loadImage('5.png');
  h[1][2] = loadImage('6.png');
  x = 100;
  y = 100;
  frameRate(18);
}


function draw() {
  background(255);
  image(h[i][j], x, y);

  
  if (i==0) {
    if (j<2) {
      j++;
    } else if (j==2) {
      j = 0;
    }
  }
  if (keyPressed == false) {
    i=0;
  }
}

function keyPressed(){
  if(key == CODED){
    if (keyCode == LEFT){
      i=0;
      x=x-2;
      j++;
      if(j>2)j=0;
    }
    else if( keyCode == RIGHT){
      i=1;
      x=x+2;
      j++;
      if(j>2)j=0;
    }
  }
  if(key == CODED){
    if (keyCode == UP){
      i=0;
      y=y-2;
      j++;
      if(j>2)j=0;
    }
    else if( keyCode == DOWN){
      i=1;
      y=y+2;
      j++;
      if(j>2)j=0;
    }
  }
}
