let scene, camera, renderer;

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, 800 / 400, 0.1, 1000);
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(800, 400);
  document.body.appendChild(renderer.domElement);
  
  // create a box geometry: width, height, depth
  let boxGeometry = new THREE.BoxGeometry(1, 1, 1);
  let boxMaterial = new THREE.MeshBasicMaterial({color: 0x00ff00});
  let box = new THREE.Mesh(boxGeometry, boxMaterial);
  box.position.set(-2, 0, 0);
  scene.add(box);
  
  // create a sphere geometry: radius, width segments, height segments
  let sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);
  let sphereMaterial = new THREE.MeshBasicMaterial({color: 0xff0000});
  let sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  sphere.position.set(0, 0, 0);
  scene.add(sphere);
  
  // create a cylinder geometry: radius top, radius bottom, height
  let cylinderGeometry = new THREE.CylinderGeometry(0.5, 0.5, 1, 32);
  let cylinderMaterial = new THREE.MeshBasicMaterial({color: 0x0000ff});
  let cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
  cylinder.position.set(2, 0, 0);
  scene.add(cylinder);
  
  camera.position.z = 5;
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

init();
animate();