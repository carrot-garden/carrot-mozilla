let ext = {};
Components.utils.import("resource://${package}/modules/dependencies.js", ext);

let startup = function(){
	let menu = document.getElementById("${package}.menu");
	menu.disabled = false;
};

window.addEventListener("load", startup, false);
