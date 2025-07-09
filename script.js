document.addEventListener('DOMContentLoaded', function() {  // Wait for HTML to fully load before running code
    console.log('JavaScript is now running!');              // Print message to browser console for debugging
    
    // Find HTML elements by their IDs
    const button = document.getElementById('demoButton');      // Get the button element by its ID
    const messageArea = document.getElementById('messageDisplay');  // Get the message area element by its ID
    
    // Add click event listener to the button
    button.addEventListener('click', function() {              // Listen for clicks on the button
        console.log('Button was clicked!');                    // Print message to console when button is clicked
        
        // Create a message with current time
        const currentTime = new Date().toLocaleTimeString();   // Get current time as a readable string
        const message = 'Hello! You clicked the button at ' + currentTime;  // Create message combining text and time
        
        // Display the message in our HTML
        messageArea.textContent = message;                     // Put the message text into the HTML element
        
        // Change button text temporarily
        button.textContent = 'Thanks for clicking!';           // Change what the button displays
        
        // Reset button text after 2 seconds
        setTimeout(function() {                                // Run a function after a delay
            button.textContent = 'Click Me!';                  // Change button text back to original
        }, 2000);                                              // Wait 2000 milliseconds (2 seconds)
    });
});
document.getElementById('demoButton').addEventListener('click', function() {
this.classList.add('float-away');
});
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