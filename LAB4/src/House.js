import * as THREE from 'three';


export class House {
    constructor(scene) {
        this.scene = scene;

        this.textureLoader = new THREE.TextureLoader();

        this.houseGeometry = new THREE.BoxGeometry(3, 1.3, 2);
        this.houseMaterial = new THREE.MeshLambertMaterial( { color: 0xFFF8DC } );
        this.house = new THREE.Mesh( this.houseGeometry, this.houseMaterial );

        this.doorTexture = this.textureLoader.load('../assets/door2.jpg');

        this.doorGeometry = new THREE.BoxGeometry(0.4, 0.8, 0.1);
        this.doorMaterial = new THREE.MeshStandardMaterial( { color: 0xffffff } );
        this.doorMaterial.map = this.doorTexture;
        this.doorMaterial.side = THREE.DoubleSide;
        this.door = new THREE.Mesh( this.doorGeometry, this.doorMaterial );
        this.door.position.z = 0.97;
        this.door.position.y = -0.25;
        this.door.position.x = 0.3;

        this.door2Geometry = new THREE.BoxGeometry(0.4, 0.8, 0.1);
        this.door2Material = new THREE.MeshLambertMaterial( { color: 0xDEB887 } );
        this.door2 = new THREE.Mesh( this.door2Geometry, this.doorMaterial );
        this.door2.position.z = 0.97;
        this.door2.position.y = -0.25;
        this.door2.position.x = 0.73;

        this.balkGeometry = new THREE.BoxGeometry(1, 0.1, 0.1);
        this.balkMaterial = new THREE.MeshLambertMaterial( { color: 0x5C4033 } );
        this.balk = new THREE.Mesh( this.balkGeometry, this.balkMaterial );
        this.balk.position.z = 1;
        this.balk.position.y = 0.2;
        this.balk.position.x = 0.515;

        this.windowTexture = this.textureLoader.load('../assets/window.jpg');

        this.windowGeometry = new THREE.BoxGeometry(0.8, 0.5, 0.1);
        this.windowMaterial = new THREE.MeshLambertMaterial( { color: 0x87CEFA } );
        this.windowMaterial.map = this.windowTexture;
        this.windowMaterial.side = THREE.DoubleSide;
        this.window = new THREE.Mesh( this.windowGeometry, this.windowMaterial );
        this.window.position.z = 0.97;
        this.window.position.y = 0;
        this.window.position.x = -0.7;

        this.photoTexture = this.textureLoader.load('../assets/boy.jpg');
        this.photoGeometry = new THREE.BoxGeometry(1, 1, 0.1);
        this.photoMaterial = new THREE.MeshLambertMaterial( { color: 0xffffff} );
        this.photoMaterial.map = this.photoTexture;
        this.photo = new THREE.Mesh( this.photoGeometry, this.photoMaterial );
        this.photo.position.x = -2.5;
        this.photo.position.y = 0.5;

        //add cilinder
        this.cilinderGeometry = new THREE.CylinderGeometry(0.05, 0.05, 0.65, 32);
        this.cilinderMaterial = new THREE.MeshLambertMaterial( { color: 0x5C4033 } );
        this.cilinder = new THREE.Mesh( this.cilinderGeometry, this.cilinderMaterial );
        this.cilinder.position.x = -2.5;
        this.cilinder.position.y = -0.325;



        this.pts = [
            new THREE.Vector3(1.5, 1, 1),
            new THREE.Vector3(0, 0, 0),
            new THREE.Vector3(0, 0, 2),
            new THREE.Vector3(3, 0, 2),
            new THREE.Vector3(3, 0, 0)
        ];

        this.geom = new THREE.BufferGeometry().setFromPoints(this.pts);
        this.geom.setIndex([
            0, 1, 2,
            0, 2, 3, 
            0, 3, 4,
            0, 4, 1,
            1, 3, 2,
            1, 4, 3
        ]);
        this.geom.computeVertexNormals();

        this.roofTexture = this.textureLoader.load('../assets/roof2.jpg');
        this.roofMaterial = new THREE.MeshStandardMaterial({color: "white", flatShading: true});
        this.roofMaterial.map = this.roofTexture;
        this.roofMaterial.side = THREE.DoubleSide;
        this.roof = new THREE.Mesh(this.geom, this.roofMaterial);
        this.roof.position.set(-1.5, 0.65, -1);


        this.grassTexture = this.textureLoader.load('../assets/grass.jpg');
        this.grassMaterial = new THREE.MeshStandardMaterial({color: "white"});
        this.grassMaterial.map = this.grassTexture;
        this.grassMaterial.side = THREE.DoubleSide;
        this.grassGeometry = new THREE.PlaneGeometry(100, 100);
        this.grass = new THREE.Mesh(this.grassGeometry, this.grassMaterial);
        this.grass.rotation.x = -Math.PI / 2;
        this.grass.position.y = -0.65;

        this.group = new THREE.Group();
        this.group.add(this.house);
        this.group.add(this.door);
        this.group.add(this.door2);
        this.group.add(this.balk);
        this.group.add(this.window);
        this.group.add(this.roof);
        this.group.add(this.photo);
        this.group.add(this.cilinder);
        this.group.add(this.grass);

        this.scene.add(this.group);
    }
}

