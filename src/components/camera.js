import { PerspectiveCamera } from '../../node_modules/three/build/three.module.js';

function createCamera(container) {
	const camera = new PerspectiveCamera(
		35, // fov
		container.clientWidth / container.clientHeight, // Aspect
		0.1, // near
		1000 // Far
	);

	camera.position.set(0, 0, 15);

	return camera;

}

export {createCamera};
