import * as THREE from 'https://unpkg.com/three/build/three.module.js';

function initialSceneSetup(gameWindow) {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x7777777);
  const camera = new THREE.PerspectiveCamera(75, gameWindow.offsetWidth / gameWindow.offsetHeight, 0.1, 1000);
  camera.position.z = 5;
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(gameWindow.offsetWidth, gameWindow.offsetHeight);
  gameWindow.appendChild(renderer.domElement);

  return {
    scene,
    camera,
    renderer
  }
}

export function createScene() {
  const gameWindow = document.getElementById('render-target');
  const { scene, camera, renderer } = initialSceneSetup(gameWindow);

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  const mesh = new THREE.Mesh(geometry, material);

  scene.add(mesh);

  function draw() {
    renderer.render(scene, camera);
  }

  function start() {
    renderer.setAnimationLoop(draw);
  }

  function stop() {
    renderer.setAnimationLoop(null);
  }

  return {
    start,
    stop
  }
}