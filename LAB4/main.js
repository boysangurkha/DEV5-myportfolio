import './style.css'
import { Document } from './src/Document.js';

const document = new Document();
const scene = document.scene;
const camera = document.camera;
const renderer = document.renderer;

function animate() {
  requestAnimationFrame( animate );
  //rotate house

  renderer.render( scene, camera );
};

animate();
