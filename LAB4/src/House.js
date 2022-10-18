import * as THREE from 'three';

export class House {
    constructor(scene) {
        this.scene = scene;
        this.houseGeometry = new THREE.BoxGeometry(3, 1.3, 2);
        this.material = new THREE.MeshLambertMaterial( { color: 0xFFF8DC } );
        this.house = new THREE.Mesh( this.houseGeometry, this.material );

        this.doorGeometry = new THREE.BoxGeometry(0.4, 0.8, 0.1);
        this.doorMaterial = new THREE.MeshLambertMaterial( { color: 0xDEB887 } );
        this.door = new THREE.Mesh( this.doorGeometry, this.doorMaterial );
        this.door.position.z = 0.97;
        this.door.position.y = -0.25;
        this.door.position.x = 0.3;

        this.group = new THREE.Group();
        this.group.add(this.house);
        this.group.add(this.door);
        
        this.scene.add(this.group);
    }
}

