function scrollToGallery() {
  document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
}
// GSAP Animations
gsap.from('.glass-panel', { opacity: 0, y: -50, duration: 1 });
gsap.from('.card', { opacity: 0, y: 50, duration: 1, stagger: 0.3 });
// Three.js Brain Model
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 600/400, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('brainCanvas'), alpha: true });
renderer.setSize(600, 400);
const geometry = new THREE.SphereGeometry(2, 32, 32);
const material = new THREE.MeshStandardMaterial({ color: 0xff7e5f, roughness: 0.5 });
const brain = new THREE.Mesh(geometry, material);
scene.add(brain);
const light = new THREE.PointLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);
camera.position.z = 5;
function animate() {
  requestAnimationFrame(animate);
  brain.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();