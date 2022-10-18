import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export class Trees {
    constructor(scene) {
        this.scene = scene;
        this.addRandomTrees();
    }
    
    addTrees(x,z) {
        const loader = new GLTFLoader();
        loader.load('../assets/tree.glb', (gltf) => {
        const tree = gltf.scene;
        this.scene.add(tree);
        //scale and position the model
        tree.scale.set(0.02, 0.02, 0.02);
        tree.position.set(x, -0.67, z);
        });
    }

    addRandomTrees() {
        for(let i = 0; i < 60; i++) {
            const x = Math.random() * 200 - 100;
            const z = Math.random() * 200 - 100;
            this.addTrees(x, z);
        }
    }
}










