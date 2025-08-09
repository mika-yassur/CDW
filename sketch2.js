// sketch2.js — Matcha latte square pattern using p5 instance mode
var sketch2 = function(p) {
  // The setup function runs once at the start
  p.setup = function() {
    // Create a canvas of 800x400 pixels
    let canvas = p.createCanvas(800, 400);
    // Attach the canvas to the HTML element with ID "canvas-container-2"
    canvas.parent('canvas-container-2');

    // Draw only once, since the pattern is static
    p.noLoop();

    // Set background to white
    p.background(255);

    // Size of each square in the grid
    let squareSize = 40;
    // Space between squares
    let spacing = 10;
    // Offset to stagger the grid a bit from the edge
    let offset = spacing / 2;

    // Define a semi-transparent matcha green color
    let matchaGreen = p.color(180, 230, 160, 180); 

    // No outline for shapes
    p.noStroke();
    // Fill with the matcha green color
    p.fill(matchaGreen);
    // Draw rectangles from their center instead of the default top-left corner
    p.rectMode(p.CENTER);

    // Loop through rows (y-axis)
    for (let y = offset + squareSize / 2; y < p.height; y += squareSize + spacing) {
      // Loop through columns (x-axis)
      for (let x = offset + squareSize / 2; x < p.width; x += squareSize + spacing) {
        p.push(); // Save the current drawing style and transformation state
        p.translate(x, y); // Move to the square's position
        // Apply a random rotation between -45° and 45°
        p.rotate(p.random(-p.QUARTER_PI, p.QUARTER_PI));
        // Draw the square at the translated origin
        p.rect(0, 0, squareSize, squareSize);
        p.pop(); // Restore the previous style and transformation state
      }
    }
  };
};

// Create and run a new p5 instance with the above sketch
new p5(sketch2);
