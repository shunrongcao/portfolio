
let points = [];
var num = 20;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  stroke(98, 150, 112, 50);
  strokeWeight(0.3);

  for (let i=0; i<num; i++) {
    let p = {
      x: random(width),
      y: random(height),
      r: random(5,15),
      dx: random(-1,1),//direction of x
      dy: random(-1,1),//direction of y
      vx: random(2,3),//velocity of x
      vy: random(2,3),
    };
//    points.push(p);
    points[i] = p;
  }
}

// Form: circle.
// Behaviour 1: wander by a random walk.
// Behaviour 2: if leaving one edge of the canvas, appear at the other edge of the canvas.

function draw() {
  background(200,20);
  for (let i=0; i<num; i++){
  let p = points[i];    
  //boundary functions, bouncing 
    if(p.x <= 0){
      p.dx = abs(p.dx);
    } else if (p.x >= width){
      p.dx = abs(p.dx) * -1;
    }
    
    if(p.y <= 0){
      p.dy = abs(p.dy);
    } else if (p.y >= height){
      p.dy = abs(p.dy) * -1;
    }
    
    //update the position
    p.x += p.vx * p.dx * random(0,2);
    p.y += p.vy * p.dy * random(0,2);
//    p.y += p.vy * p.vy * random(2);
    
    ellipse(p.x, p.y, p.r);
  }
  
  for (let p of points) {
    fill(p.x%255, 150,150);
    ellipse(p.x, p.y, p.r);

    for (let q of points) {
      line(p.x, p.y, q.x, q.y);
    }
  }
}
