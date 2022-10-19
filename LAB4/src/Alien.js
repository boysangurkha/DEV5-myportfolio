import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export class Aliens {
    constructor(scene) {
        this.scene = scene;
        this.addRandomAliens();
    }
    
    addAliens(x,z,a) {
        const loader = new GLTFLoader();
        loader.load('../public/alien.glb', (gltf) => {
        const alien = gltf.scene;
        this.scene.add(alien);
        //scale and position the model
        alien.scale.set(0.04, 0.04, 0.04);
        alien.position.set(x, -0.67, z);
        alien.rotation.y = a;
        });
    }

    addRandomAliens() {
        for(let i = 0; i < 10; i++) {
            const x = Math.random() * 60 - 30;
            const z = Math.random() * 60 - 30;
            const a = Math.random() * Math.PI * 2;
            this.addAliens(x, z, a);
        }
    }
}










