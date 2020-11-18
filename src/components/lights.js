import { DirectionalLight, HemisphereLight } from '../../node_modules/three/build/three.module.js';

function createLights() {
	const ambientLight = new HemisphereLight(
		0xffffbb,
		0x080820,
		.5);

	const mainLight = new DirectionalLight(0xffffff, 1);
	mainLight.position.set(.8, 2, 4);

	return { ambientLight, mainLight };
}

export { createLights };
