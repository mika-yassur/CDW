var sketch1 = function(p) {
let circles = [];

p.setup = function() {
    let canvas = p.createCanvas(800, 400);
    canvas.parent('canvas-container-1');

    circles.push({ x: 100, y: 200, size: 50 });
    circles.push({ x: 200, y: 200, size: 80 });
    circles.push({ x: 300, y: 200, size: 65 });
};

p.draw = function() {
    p.background(240);

for (let circle of circles) {
    let dx = circle.x - p.mouseX;
    let dy = circle.y - p.mouseY;
      let dist = p.sqrt(dx * dx + dy * dy);

    if (dist < 100) {
        let pushStrength = p.map(dist, 0, 100, 5, 0);
        circle.x += (dx / dist) * pushStrength;
        circle.y += (dy / dist) * pushStrength;
    }

    p.fill(100, 150, 255, 200);
    p.noStroke();
    p.ellipse(circle.x, circle.y, circle.size);
    }
  };
};

new p5(sketch1);
