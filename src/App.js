// import * as THREE from '../node_modules/three/build/three.module.js';
import { Scene1 } from './scenes/Scene1.js';

import { createCamera } from './components/camera.js';
import { createRenderer } from './systems/renderer.js';
import { createRaycaster } from './systems/raycaster.js';

let items;

class App {
	constructor(container) {
		this.container = container;

		this.scene = new Scene1();

		this.camera = createCamera(this.container);

		this.renderer = createRenderer(this.container);

		this.container.appendChild(this.renderer.domElement);

		this.render();
	}

	getTarget(e) {
		items = createRaycaster(e, this.camera, this.scene);
	}

	onResize() {
		this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
		this.camera.aspect = this.container.clientWidth / this.container.clientHeight
		this.camera.updateProjectionMatrix();
	}

	render() {
		this.scene.update(items);
		this.renderer.render(this.scene, this.camera);
		this.renderer.setAnimationLoop(() => this.render());
	}
}

export { App };
