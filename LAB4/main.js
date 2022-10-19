import './style.css'
import * as THREE from 'three';
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


const house = new House(scene);

let zoom = true;
function zoomIn() {
  if(zoom == true){
    if (camera.position.x > 5) {
      camera.position.x -= 0.1;
      camera.position.y -= 0.1;
      camera.position.z -= 0.1;
    } 
    else {
      zoom = false;
      controls.enabled = true;
    }
  }
}

let rotate = true;
function rotateHouse() {
  if(zoom == true){
    rotate = true;
  }
  else{
    rotate = false;
    house.rotate();
  }
}



const controls = new OrbitControls(camera, renderer.domElement);
controls.enabled = false;
const animation = requestAnimationFrame( animate );

//limit controls
controls.minDistance = 5;
controls.maxDistance = 100;
//limit control angle only above the ground
controls.maxPolarAngle = Math.PI / 2;




function animate() {
  requestAnimationFrame( animate );
  zoomIn();
  rotateHouse();
  renderer.render( scene, camera );
};

animate();
