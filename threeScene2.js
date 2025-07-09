// threeScene2.js
(() => {
  let scene, camera, renderer, controls;

  function init() {
let scene, camera, renderer, controls;

function init() {
  // Scene and fog
  scene = new THREE.Scene();
  const fogColor = 0xeeeeee;
  scene.fog = new THREE.Fog(fogColor, 20, 100);

  // Camera
  const container = document.getElementById('three-container-2');
  const width = 800;
  const height = 400;
  camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 200);
  camera.position.set(0, 20, 40);

  // Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(width, height);
  renderer.setClearColor(fogColor);
  container.appendChild(renderer.domElement);

  // Orbit Controls
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
  scene.add(ambientLight);

  const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
  dirLight.position.set(10, 20, 10);
  scene.add(dirLight);

  // Cone material (transparent, soft green tint)
  const coneMaterial = new THREE.MeshPhongMaterial({
    color: 0xa0d8a0,
    transparent: true,
    opacity: 0.4,
    shininess: 30
  });

  // Cone geometry
  const coneGeometry = new THREE.ConeGeometry(0.5, 2, 16);

  // Grid of cones
  const gridSize = 20;
  const spacing = 3;

  for (let x = -gridSize / 2; x < gridSize / 2; x++) {
    for (let z = -gridSize / 2; z < gridSize / 2; z++) {
      const cone = new THREE.Mesh(coneGeometry, coneMaterial);
      cone.position.set(x * spacing, 1, z * spacing);
      scene.add(cone);
    }
  }

  animate();
}

function animate() {
  requestAnimationFrame(animate);
  controls.update(); // orbit controls damping
  renderer.render(scene, camera);
}

}


  window.addEventListener('load', init);
})();