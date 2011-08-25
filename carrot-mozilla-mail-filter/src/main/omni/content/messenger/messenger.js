"use strict";

Components.utils.reportError("messenger");

try {

	let
	gre = {};
	Components.utils.import("resource://gre/modules/Services.jsm", gre);

	let
	ext = {};
	window["${package}"] = ext;
	Components.utils.import("resource://${package}/modules/dependencies.js",
	        ext);
	Components.utils.import("resource://${package}/modules/services.js", ext);
	Components.utils.import("resource://${package}/modules/mail.js", ext);

	let
	initMail = {
		observe : function(subject, topic, data) {
			function checkLib() {
				ext.dependencies.checkJsLib(window);
			}
			window.setTimeout(checkLib, 100);
		}
	};

	gre.Services.obs.addObserver(initMail, "mail-startup-done", false);

	let
	initWindow = function() {

		var menu = document.getElementById("${package}.menu");
		menu.disabled = false;

		ext.mail.init(window);

	};

	window.addEventListener("load", initWindow, false);

} catch (e) {

	Components.utils.reportError(e);

}
