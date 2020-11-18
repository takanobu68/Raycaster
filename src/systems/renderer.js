import { WebGLRenderer, sRGBEncoding } from '../../node_modules/three/build/three.module.js';

function createRenderer(container) {
	const renderer = new WebGLRenderer({
		antialias: true,
	});

	renderer.setSize(container.clientWidth, container.clientHeight);
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.physicallyCorrectLights = true;
	renderer.outputEncoding = sRGBEncoding;

	return renderer;
}

export { createRenderer };
