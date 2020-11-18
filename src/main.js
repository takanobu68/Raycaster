import { App } from './App.js';

const container = document.querySelector('#container');
const app = new App(container);

window.addEventListener('resize',()=>{
	app.onResize();
})

container.addEventListener('click',(e)=>{
	app.getTarget(e);
})
