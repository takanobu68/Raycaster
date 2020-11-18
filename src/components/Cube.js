import {
	Mesh,
	MeshStandardMaterial,
	BoxBufferGeometry,
} from '../../node_modules/three/build/three.module.js';

class Cube extends Mesh {
	constructor(name, color) {
		super();

		// Material
		this.material = new MeshStandardMaterial({
			color: color,
		});

		// Geometrias
		this.geometry = new BoxBufferGeometry(2, 2, 2);

		// name
		this.name = name;
	}
}

export { Cube };
