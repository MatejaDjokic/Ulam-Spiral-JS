
let x, y;
let step = 1;
let stepSize = 5;
let numSteps = 1;
let state = 0;
let turnCounter = 0;
let px, py = 0;
let totalSteps = 0;

function setup() {
  createCanvas(500, 500);

  const cols = width / stepSize;
  const rows = height / stepSize;

  totalSteps = cols * rows;
  x = width / 2;
  y = height / 2;
  
  background(0);
}

function isPrime(value) {
  if (value == 1) return false;
  for (let i = 2; i <= sqrt(value); i++) {
    if (value % i == 0) {
      return false;
    }
  }
  return true;
}

function draw() {
  
  //textSize(stepSize);
  //textSize(CENTER, CENTER);
  //text(step, x, y);
  fill(255);
  stroke(255);
  
  if (isPrime(step)) {
    circle(x, y, stepSize * 0.5);
  }
  line(x, y, px, py);
  px = x;
  py = y;

  switch (state) {
    case 0: x += stepSize; break;
    case 1: y -= stepSize; break;
    case 2: x -= stepSize; break;
    case 3: y += stepSize; break;
  }

  if (step % numSteps == 0) {
    state = (state + 1) % 4;
    turnCounter++;
    if (turnCounter % 2 == 0)
    numSteps++;
  }
  step++;

  if (step > totalSteps) {
    noLoop();
  }
}