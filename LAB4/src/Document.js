import * as THREE from 'three';

export class Document{
    constructor(){
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( this.renderer.domElement );    
        
        this.camera.position.z = 50;
        this.camera.position.y = 50;
        this.camera.position.x = 50;
    }
}



