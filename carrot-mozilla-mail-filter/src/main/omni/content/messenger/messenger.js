Components.utils.reportError("messenger");

try {

	let
	load = Components.utils.import;

	let
	gre = {};
	load("resource://gre/modules/Services.jsm", gre);

	let
	ext = {};
	load("resource://${thisHost}/modules/dependencies.js", ext);
	load("resource://${thisHost}/modules/services.js", ext);
	load("resource://${thisHost}/modules/mail.js", ext);

	this["${thisPath}"] = ext;

	let
	root = this;

	let
	initMail = {
		observe : function(subject, topic, data) {
			function checkLib() {
				ext.dependencies.checkJsLib(root);
			}
			;
			window.setTimeout(checkLib, 100);
		}
	};

	gre.Services.obs.addObserver(initMail, "mail-startup-done", false);

	let
	initWindow = function() {
		let
		menu = document.getElementById("${thisHost}.menu");
		menu.disabled = false;
	};

	window.addEventListener("load", initWindow, false);

} catch (e) {

	Components.utils.reportError(e);

}
