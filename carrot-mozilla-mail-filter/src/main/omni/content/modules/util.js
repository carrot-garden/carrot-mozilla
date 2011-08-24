"use strict";

Components.utils.import("resource://${package}/modules/regexp.js");

var EXPORTED_SYMBOLS = [ "util" ];
var util = this;

function test(window) {
	window.alert("test util");
}

function report() {
	Components.utils.reportError("report");
}

function getPopupNodeAttribute(document) {
	var value = new Object();
	for ( var k = 1; k < arguments.length; k++) {
		value[arguments[k]] = document.popupNode.getAttribute(arguments[k]);
	}
	// for( prop in document.popupNode ){
	// log.debug( 'document.popupNode ' + prop )
	// }
	// log.debug( 'document.popupNode.nodeType ' + document.popupNode.nodeType )
	return value;
}

function patternPersonName(person) {

	if (arguments[0] == null) {
		return "";
	}

	var value = person.toString();
	value = value.replace(regexp.nonPersonChars, "");
	value = value.replace(regexp.multiBlanks, " ");
	value = capitalLetters(value);
	value = trim(value);

	return value;

}

function capitalLetters(sentence) {

	var words = sentence.split(" ");
	var firtsLetter = "";
	var remaningLetters = "";

	for ( var i = 0; i < words.length; i++) {
		if (words[i].length == 1) {
			words[i] = words[i].toUpperCase();
		} else {
			firtsLetter = words[i].substring(0, 1);
			remaningLetters = words[i].substring(1);
			words[i] = firtsLetter.toUpperCase()
					+ remaningLetters.toLowerCase();
		}
	}

	return words.join(" ");

}

function trimLeft(value) {
	var re = /\s*((\S+\s*)*)/;
	return value.replace(re, "$1");
}

function trimRight(value) {
	var re = /((\s*\S+)*)\s*/;
	return value.replace(re, "$1");
}

function trim(value) {
	return trimLeft(trimRight(value));
}

function clipboardPaste(strValue) {

	var helper = Components.classes["@mozilla.org/widget/clipboardhelper;1"]
			.getService(Components.interfaces.nsIClipboardHelper);

	helper.copyString(strValue);

}
