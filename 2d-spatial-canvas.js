<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.7.0/p5.min.js"></script>
// Sketch using p5.js instance mode
var sketch1 = function(p) {
  // All variables are scoped to this instance
var canvasWidth = 800;
var canvasHeight = 400;
p.setup = function() {
    var canvas = p.createCanvas(canvasWidth, canvasHeight);
    canvas.parent('canvas-container-1'); // Attach to specific container
};

p.draw = function() {
    p.background(250);
    let circles = [];

function setup() {
createCanvas(400, 400);

  // Initialize three circles with different positions and sizes
circles.push({ x: 100, y: 200, size: 50 });
circles.push({ x: 200, y: 200, size: 80 });
circles.push({ x: 300, y: 200, size: 65 });
}

function draw() {
background(240);

for (let circle of circles) {
    // Calculate vector from mouse to circle
    let dx = circle.x - mouseX;
    let dy = circle.y - mouseY;
    let distSq = dx * dx + dy * dy;
    let dist = sqrt(distSq);

    // If mouse is within 100 pixels, push the circle away
    if (dist < 100) {
      let pushStrength = map(dist, 0, 100, 5, 0); // Stronger push when closer
      circle.x += (dx / dist) * pushStrength;
      circle.y += (dy / dist) * pushStrength;
    }

    // Draw the circle
    fill(100, 150, 255, 200);
    noStroke();
    ellipse(circle.x, circle.y, circle.size);
}
}

};
};

// Create the instance
var myp5_1 = new p5(sketch1, 'canvas-container-1');

// Sketch using p5.js instance mode
var sketch1 = function(p) {
  // All variables are scoped to this instance
var canvasWidth = 800;
var canvasHeight = 400;

p.setup = function() {
    var canvas = p.createCanvas(canvasWidth, canvasHeight);
    canvas.parent('canvas-container-1'); // Attach to specific container
};

p.draw = function() {
    p.background(250);
    function setup() {
createCanvas(400, 400);
  noLoop(); // Static pattern
background(255);

  let squareSize = 40;
  let spacing = 10;
  let offset = spacing / 2;

  // Matcha latte green – creamy and soft
  let matchaGreen = color(180, 230, 160, 180); // RGBA with transparency

noStroke();
fill(matchaGreen);

for (let y = offset + squareSize / 2; y < height; y += squareSize + spacing) {
    for (let x = offset + squareSize / 2; x < width; x += squareSize + spacing) {
    push();
    translate(x, y);
      rotate(random(-QUARTER_PI, QUARTER_PI)); // Random rotation between -45° and 45°
    rectMode(CENTER);
    rect(0, 0, squareSize, squareSize);
    pop();
    }
  }
}

};
};

// Create the instance
var myp5_1 = new p5(sketch1, 'canvas-container-1');