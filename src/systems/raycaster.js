import { Raycaster, Vector2 } from '../../node_modules/three/build/three.module.js';

function createRaycaster(e, camera, scene) {

	const raycast = new Raycaster();
	let mouse = new Vector2();

	mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
	mouse.y = (e.clientY / window.innerHeight) * -2 + 1;
	raycast.setFromCamera(mouse, camera);
	const items = raycast.intersectObjects(scene.children);

	return items;
}

export { createRaycaster };
