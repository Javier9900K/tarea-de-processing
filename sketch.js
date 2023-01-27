function setup() {
  createCanvas(600, 500);
}

function draw() {
  background(255);
  strokeWeight(2);
  stroke(0);
  fill(255, 255, 255);
  
 
  
  //Dibujando un sol 
  fill(255,255,0);
  ellipse(70, 60, 60,60);
  
  
  
  //Cuerpo
  fill(255,180,0);
  rect(200, 200, 50, 100);
  
  //Cabeza
  ellipse(225, 150, 50, 50);
  
  //Brazos
  line(200, 200, 150, 150);
  line(250, 200, 300, 150);
  
  //Piernas
  line(225, 300, 200, 350);
  line(225, 300, 250, 350);
  
  //Dibujando una nube
  noStroke();
  fill(0,0,255);
  ellipse(400,60,180,60);
  
  //Dibujando cesped y un arbol
  fill(0,143,57);
  rect(0, 352, 600, 50);
  fill(139, 69, 19);
  rect(90, 262, 30, 90);
  fill(0, 255, 0);
  ellipse(100, 200, 150, 150);
  ellipse(70, 150, 100, 100);
  ellipse(130, 150, 100, 100);
  
}