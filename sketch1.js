// Define a p5.js instance mode sketch
var sketch1 = function(p) {
    // Array to hold circle objects
    let circles = [];

    // p5.js setup function (runs once at the start)
    p.setup = function() {
        // Create a canvas of 800x400 pixels
        let canvas = p.createCanvas(800, 400);
        // Attach the canvas to an HTML element with ID "canvas-container-1"
        canvas.parent('canvas-container-1');

        // Add three circles with starting positions and sizes
        circles.push({ x: 100, y: 200, size: 50 });
        circles.push({ x: 200, y: 200, size: 80 });
        circles.push({ x: 300, y: 200, size: 65 });
    };

    // p5.js draw function (runs continuously, ~60fps by default)
    p.draw = function() {
        // Set the background color to light gray (240)
        p.background(240);

        // Loop over each circle object
        for (let circle of circles) {
            // Calculate horizontal and vertical distance from the mouse
            let dx = circle.x - p.mouseX;
            let dy = circle.y - p.mouseY;
            // Calculate the straight-line distance from the mouse to the circle's center
            let dist = p.sqrt(dx * dx + dy * dy);

            // If the mouse is within 100 pixels of the circle
            if (dist < 100) {
                // Map the distance so that closer = stronger push, farther = weaker push
                let pushStrength = p.map(dist, 0, 100, 5, 0);
                // Push the circle away from the mouse position
                circle.x += (dx / dist) * pushStrength;
                circle.y += (dy / dist) * pushStrength;
            }

            // Set fill color to semi-transparent blue
            p.fill(100, 150, 255, 200);
            // Disable stroke outlines
            p.noStroke();
            // Draw the circle at its updated position
            p.ellipse(circle.x, circle.y, circle.size);
        }
    };
};

// Create and run a new p5 instance with the sketch defined above
new p5(sketch1);
