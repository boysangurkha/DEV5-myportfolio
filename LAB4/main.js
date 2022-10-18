import './style.css'
import { Document } from './src/Document.js';
import { Lights } from './src/Lights.js';
import { House } from './src/House.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const document = new Document();
const scene = document.scene;
const camera = document.camera;
const renderer = document.renderer;

const lights = new Lights(scene);
lights.addLights();

const controls = new OrbitControls(camera, renderer.domElement);

const house = new House(scene);

function animate() {
  requestAnimationFrame( animate );
  //rotate house
  house.group.rotation.y += 0.01;

  renderer.render( scene, camera );
};

animate();
