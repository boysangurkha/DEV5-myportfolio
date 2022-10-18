import './style.css'
import { Document } from './src/Document.js';
import { Lights } from './src/Lights.js';
import { House } from './src/House.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
//import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const document = new Document();
const scene = document.scene;
const camera = document.camera;
const renderer = document.renderer;

const lights = new Lights(scene);
lights.addLights();

const controls = new OrbitControls(camera, renderer.domElement);

const house = new House(scene);

/*const addTrees = (x, z) => {
  const loader = new GLTFLoader();
  loader.load('./assets/tree.glb', (gltf) => {
    const tree = gltf.scene;
    scene.add(tree);
    //scale and position the model
    tree.scale.set(0.02, 0.02, 0.02);
    tree.position.set(x, -0.67, z);
  });
}

for(let i = 0; i < 60; i++) {
  const x = Math.random() * 80 - 40;
  const z = Math.random() * 80 - 40;
  addTrees(x, z);
}*/


function animate() {
  requestAnimationFrame( animate );
  house.rotate();
  renderer.render( scene, camera );
};

animate();
