"use strict";

Components.utils.import("resource://${package}/modules/regexp.js");

var EXPORTED_SYMBOLS = [ "util" ];
var util = this;

function test(window) {

	const a = 10;

	window.alert("test util = " + a);
	
	
}

//function report() {
//	Components.utils.reportError("report");
//}

function getNodeAttribute(node) {

	var value = new Object();

	for ( var k = 1; k < arguments.length; k++) {
		value[arguments[k]] = node.getAttribute(arguments[k]);
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

function clipboardPaste(text) {

	var helper = Components.classes["@mozilla.org/widget/clipboardhelper;1"]
	        .getService(Components.interfaces.nsIClipboardHelper);

	helper.copyString(text);

}

function openUrl(url) {

	try {

		var ios = Components.classes["@mozilla.org/network/io-service;1"]
		        .getService(Components.interfaces.nsIIOService);

		var uri = ios.newURI(url, null, null);

		var eps = Components.classes["@mozilla.org/uriloader/external-protocol-service;1"]
		        .getService(Components.interfaces.nsIExternalProtocolService);

		eps.loadUrl(uri);

	} catch (ex) {
	}

}

function getDomainFromEmailAddress(emailAddress) {
	return emailAddress.split('@')[1];
}
