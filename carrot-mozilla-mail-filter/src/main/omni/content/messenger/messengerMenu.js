let ext = {};
Components.utils.import("resource://${thisHost}/modules/dependencies.js", ext);

let startup = function(){
	let menu = document.getElementById("${thisHost}.menu");
	menu.disabled = false;
};

window.addEventListener("load", startup, false);
