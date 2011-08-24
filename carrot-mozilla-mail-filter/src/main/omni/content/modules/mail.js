"use strict";

Components.utils.import("resource://${package}/modules/util.js");

var EXPORTED_SYMBOLS = [ "mail" ];
var mail = this;

function test(window) {
	window.alert("test");
	util.report();
};

function copyPopup(document,portion) {

	var text = '';
	var input = util.getPopupNodeAttribute(document, "emailAddress",
			"displayName");

	switch (portion) {
	case 'email':
		text = input.emailAddress;
		break;
	case 'name':
		text = util.patternPersonName(input.displayName);
		break;
	default:
		text = util.patternPersonName(input.displayName) + ' <'
				+ input.emailAddress + '>';
		break;
	}

	util.clipboardPaste(text);

}
