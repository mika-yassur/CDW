<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Transparent Spheres Field with Orbit Controls</title>
  <style>
    body { margin: 0; overflow: hidden; }
    canvas { display: block; }
  </style>
</head>
<body>
  <script src="https://cdn.jsdelivr.net/npm/three@0.153.0/build/three.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three@0.153.0/examples/js/controls/OrbitControls.min.js"></script>

  <script>
    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 1000);
    camera.position.set(30, 30, 30);

    const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Orbit Controls
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // smooth orbit
    controls.dampingFactor = 0.05;

    // Transparent Spheres Material
    const sphereMaterial = new THREE.MeshStandardMaterial({
      color: 0x3399ff,
      transparent: true,
      opacity: 0.3,
      roughness: 0.5,
      metalness: 0.1,
      side: THREE.DoubleSide
    });

    // Add a grid of spheres
    const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
    const spacing = 4;
    const gridSize = 5;

    for (let x = -gridSize; x <= gridSize; x++) {
      for (let y = -gridSize; y <= gridSize; y++) {
        for (let z = -gridSize; z <= gridSize; z++) {
          const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
          sphere.position.set(x * spacing, y * spacing, z * spacing);
          scene.add(sphere);
        }
      }
    }

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(20, 50, 10);
    scene.add(directionalLight);

    // Handle window resize
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth/window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }
    animate();
  </script>
</body>
</html>
