"use strict";

Components.utils.import("resource://${package}/modules/log.js");
var logger = log.makeLogger("filter.js", "Debug");
logger.debug("init");

//

var EXPORTED_SYMBOLS = [ "filter" ];
var filter = this;

//

function FilterDialogController(window) {

	this.window = window;

	this.document = window.document;

	this.textbox = this.makeTextbox();

	this.listbox = this.document.getElementById("filterList");

	this.vbox = this.listbox.parentNode;

	this.vbox.insertBefore(this.textbox, this.vbox.firstChild);

}

FilterDialogController.prototype.makeTextbox = function() {

	var XUL_NS = "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";

	var textbox = this.document.createElementNS(XUL_NS, "textbox");

	textbox.id = "${package}.auto";
	textbox.type = "autocomplete";
	textbox.autocompletesearch = "${filterName}";

	var controller = this;

	textbox.oninput = function() {
		controller.procTextbox();
	};

	return textbox;

};

FilterDialogController.prototype.procTextbox = function() {

	logger.debug("value=" + this.textbox.value);

};
