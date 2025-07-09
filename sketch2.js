// sketch2.js — Matcha latte square pattern using p5 instance mode
var sketch2 = function(p) {
  p.setup = function() {
    let canvas = p.createCanvas(800, 400);
    canvas.parent('canvas-container-2');
    p.noLoop(); // Only draw once (static pattern)
    p.background(255);

    let squareSize = 40;
    let spacing = 10;
    let offset = spacing / 2;

    let matchaGreen = p.color(180, 230, 160, 180); // Matcha latte tone with some transparency

    p.noStroke();
    p.fill(matchaGreen);
    p.rectMode(p.CENTER);

    for (let y = offset + squareSize / 2; y < p.height; y += squareSize + spacing) {
      for (let x = offset + squareSize / 2; x < p.width; x += squareSize + spacing) {
        p.push();
        p.translate(x, y);
        p.rotate(p.random(-p.QUARTER_PI, p.QUARTER_PI)); // Random rotation between -45° and 45°
        p.rect(0, 0, squareSize, squareSize);
        p.pop();
      }
    }
  };
};

new p5(sketch2);
