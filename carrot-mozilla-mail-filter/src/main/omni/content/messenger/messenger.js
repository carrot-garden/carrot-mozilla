"use strict";

try {

	let
	Cu = Components.utils;

	let
	gre = {};
	Cu.import("resource://gre/modules/Services.jsm", gre);

	let
	ext = {};
	window["${package}"] = ext;
	Cu.import("resource://${package}/modules/dependencies.js", ext);
	Cu.import("resource://${package}/modules/services.js", ext);
	Cu.import("resource://${package}/modules/mail.js", ext);
	// Cu.import("resource://${package}/modules/log.js", ext);

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

	//

	Cu.import("resource://${package}/modules/file.js", ext);
	ext.file.textSaveThis();

	// ext.log.logger("mail", "Debug").debug("hello mail logger");

} catch (e) {

	Components.utils.reportError(e);

}
