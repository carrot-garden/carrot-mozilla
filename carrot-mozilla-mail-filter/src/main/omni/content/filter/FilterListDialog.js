"use strict";

try {

	let
	Cu = Components.utils;

	let
	ext = {};
	window["${package}"] = ext;
	Cu.import("resource://${package}/modules/log.js", ext);
	Cu.import("chrome://${package}/content/filter/filter.js", ext);

	let
	logger = ext.log.makeLogger("FilterListDialog.js", "Debug");

	let
	initWindow = function() {

		window[ext.filter.CONTROLLER] = //
		new ext.filter.FilterDialogController(window);

	};

	window.addEventListener("load", initWindow, false);

	//

	logger.debug("init");

} catch (e) {

	Components.utils.reportError(e);

}
