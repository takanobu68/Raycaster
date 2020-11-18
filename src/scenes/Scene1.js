import * as THREE from '../../node_modules/three/build/three.module.js';
import { Cube } from '../components/Cube.js';
import { createLights } from '../components/lights.js';

class Scene1 extends THREE.Scene {
	constructor() {
		super();
		this.background = new THREE.Color('skyblue');
		this.create();
		this.velocity = 0.05;
	}

	create() {
		this.cube1 = new Cube('cube1', 'blue');
		this.cube2 = new Cube('cube2', 'red');
		this.cube1.position.set(3, 0, 0);
		this.cube2.position.set(-3, 0, 0);

		this.add(this.cube1, this.cube2);

		const { ambientLight, mainLight } = createLights();
		this.add(ambientLight, mainLight);
	}

	update(items) {
		if (items !== undefined && items.length !== 0) {
			const item = items[0];

			item.object.rotation.x += 0.01;
			item.object.rotation.y += 0.01;

			item.object.position.y += this.velocity;

			if (item.object.position.y > 3 || item.object.position.y < -3) {
				this.velocity = this.velocity * -1;
			}
		}
	}
}

export { Scene1 };
