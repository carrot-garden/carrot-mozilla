"use strict";

Components.utils.import("resource://${package}/modules/log.js", this);
var logger = log.makeLogger("filterApprove.js", "Debug");
logger.debug("init");

//

Components.utils.import("resource://${package}/modules/util.js", this);

//

function getArg(name) {
	return window.arguments[0][name];
}
function setArg(name, value) {
	if (value) {
		window.arguments[0][name] = value;
	}
}
function getDoc(name) {
	var item = document.getElementById(name);
	if (item) {
		return item.value;
	}
}
function setDoc(name, value) {
	var item = document.getElementById(name);
	if (item) {
		item.value = value;
	}
}
function copyArgIntoDoc() {
	for (name in window.arguments[0]) {
		setDoc(name, getArg(name));
	}
}
function copyDocIntoArg(name) {
	for (name in window.arguments[0]) {
		setArg(name, getDoc(name));
	}
}

//

function formLoad() {

	logger.debug("formLoad");

	copyArgIntoDoc();

	formUpdate();

}

function formUnload() {

	logger.debug("formUnload");

	copyDocIntoArg();

}

function formClose() {

	logger.debug("formClose");

}

function formUpdate() {

	copyDocIntoArg();

	logger.debug("formUpdate");

	var parameter = window.arguments[0];

	var template = util.clone(window.arguments[1]);

	// logger.debug("formUpdate template : " + JSON.stringify(template));

	util.substitute(template, parameter);

	// logger.debug("formUpdate template : " + JSON.stringify(template));

	setDoc("result", JSON.stringify(template, null, 3));

}
