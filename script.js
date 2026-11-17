import * as THREE from 'three';

// 1. Membuat Scene
const scene = new THREE.Scene();

// 2. Membuat Kamera (Field of View, Aspect Ratio, Near, Far)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// 3. Membuat Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 4. Membuat Objek 3D (Geometri + Material = Mesh)
const geometry = new THREE.BoxGeometry(1, 1, 1); // Bentuk kotak
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Warna hijau
const cube = new THREE.Mesh(geometry, material);
scene.add(cube); // Masukkan kotak ke dalam scene

camera.position.z = 5; // Mundurkan posisi kamera agar bisa melihat kotak

// 5. Membuat Fungsi Animasi / Render Loop
function animate() {
  requestAnimationFrame(animate);

  // Putar kotak perlahan
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();
