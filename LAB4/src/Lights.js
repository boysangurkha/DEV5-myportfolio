import * as THREE from 'three';

export class Lights {
    constructor(scene) {
        this.scene = scene;
        this.ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        this.directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    }
    
    addLights() {
        this.scene.add(this.ambientLight);
        this.scene.add(this.directionalLight);
        this.directionalLight.position.x = 1;
        this.directionalLight.position.y = 2;
        this.directionalLight.position.z = 4;
    }
}