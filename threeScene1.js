// threeScene1.js

let scene, camera, renderer;
let cubes = [];
const cubeCount = 50;

function init() {
  // Scene setup
  scene = new THREE.Scene();

  // Add fog (white, starting at 5 units, fully fogged at 15 units)
  scene.fog = new THREE.Fog(0xffffff, 5, 15);

  // Camera setup
  const container = document.getElementById('three-container-1');
  const width = 800;
  const height = 400;
  camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100);
  camera.position.z = 10;

  // Renderer setup
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
  renderer.setSize(width, height);
  container.appendChild(renderer.domElement);

  // Matcha green color for cubes
  const matchaGreen = 0xb4e6a0;

  // Cube geometry and material
  const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
  const material = new THREE.MeshLambertMaterial({ color: matchaGreen });

  // Create cubes at random positions within a box volume
  for (let i = 0; i < cubeCount; i++) {
    let cube = new THREE.Mesh(geometry, material);
    cube.position.set(
      THREE.MathUtils.randFloatSpread(10),  // x between -5 and 5
      THREE.MathUtils.randFloatSpread(10),  // y between -5 and 5
      THREE.MathUtils.randFloatSpread(10)   // z between -5 and 5
    );
    // Store random drift speed and direction for soft floating effect
    cube.userData = {
      driftSpeed: new THREE.Vector3(
        THREE.MathUtils.randFloat(-0.002, 0.002),
        THREE.MathUtils.randFloat(-0.001, 0.001),
        THREE.MathUtils.randFloat(-0.002, 0.002)
      )
    };
    scene.add(cube);
    cubes.push(cube);
  }

  // Add some subtle lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(5, 10, 7);
  scene.add(directionalLight);

  animate();
}

function animate() {
  requestAnimationFrame(animate);

  // Update cube positions with soft drifting motion
  cubes.forEach(cube => {
    cube.position.add(cube.userData.driftSpeed);

    // Keep cubes within a box volume: reset position if out of bounds
    ['x', 'y', 'z'].forEach(axis => {
      if (cube.position[axis] > 5) cube.position[axis] = -5;
      else if (cube.position[axis] < -5) cube.position[axis] = 5;
    });

    // Optional: slow rotation for more life
    cube.rotation.x += 0.002;
    cube.rotation.y += 0.004;
  });

  renderer.render(scene, camera);
}

window.onload = init;
