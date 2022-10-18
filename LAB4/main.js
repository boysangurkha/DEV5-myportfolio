import './style.css'
import { Document } from './src/Document.js';
import { Lights } from './src/Lights.js';

const document = new Document();
const scene = document.scene;
const camera = document.camera;
const renderer = document.renderer;

const lights = new Lights(scene);
lights.addLights();


function animate() {
  requestAnimationFrame( animate );
  //rotate house

  renderer.render( scene, camera );
};

animate();
