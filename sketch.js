var pacmanx = 0; // x location where pacman moves
var pacmany = 100; // y location where pacman moves
var Pokeballbutton = (255); // click smaller circle on pokeball and background changes color

function setup() {
  createCanvas(600, 600); // how big canvas is

}

function draw() {
  background(Pokeballbutton);

  //pokeball
  fill(255, 0, 0)
  stroke(0);
  ellipse(200, 200, 300, 300);

  fill(0);
  rect(50, 170, 300, 50)

  fill(0);
  ellipse(200, 200, 80, 80);

  fill(255);
  ellipse(width / 3, height / 3, 50, 50)
  var d = dist(width / 3, height / 3, mouseX, mouseY);
  if (d < 25 && mouseIsPressed) {
    Pokeballbutton = 255;
  } else {
    Pokeballbutton = (0);

  }

  //Playstation buttons

  fill(0);
  rect(50, 550, 50, 50);

  stroke(118, 175, 255);
  line(100, 550, 50, 600);

  stroke(118, 175, 255);
  line(50, 550, 100, 600);

  stroke(232, 140, 228);
  fill(0);
  rect(0, 500, 50, 50);


  stroke(26, 255, 190);
  triangle(50, 500, 100, 500, 75, 450);

  stroke(255, 0, 0);
  ellipse(130, 525, 55, 55);


  //Zelda Triforce Symbol


  fill(255, 248, 13);
  triangle(350, 300, 300, 400, 400, 400);


  fill(255, 248, 13);
  triangle(400, 400, 450, 300, 500, 400);

  fill(255, 248, 13);
  triangle(350, 300, 450, 300, 400, 200);


//Pacman
  move();
  display();

  function move() {
    pacmanx += random(5, 50) // random speed between 5 and 50 is selected when the run button is pressed

    if (pacmanx > width) { // when pacmanx reaches the end of the canvas width, x returns to 0
      pacmanx = 0;
    }
  }

  function display() {
    fill(255, 239, 0); // fill color of ellipse is yellow
    arc(pacmanx, pacmany, 55, 55, 0, radians(320)); // dimentions of circle

  }
}