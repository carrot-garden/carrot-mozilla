"use strict";

Components.utils.import("resource://${package}/modules/util.js");

var EXPORTED_SYMBOLS = [ "mail" ];
var mail = this;

function test(window) {
	window.alert("test");
	util.report();
};

function copyPopupNameAndEmail(window, portion) {

	var node = window.findEmailNodeFromPopupNode(window.document.popupNode,
	        'emailAddressPopup');

	var emailAddress = node.getAttribute("emailAddress");
	var displayName = node.getAttribute("displayName");

	var personName = util.patternPersonName(displayName);

	var text = '';

	switch (portion) {
	case 'email':
		text = emailAddress;
		break;
	case 'name':
		text = personName;
		break;
	default:
		text = personName + ' <' + emailAddress + '>';
		break;
	}

	util.clipboardPaste(text);

}

function openPopupWebSiteFromEmail(window) {

	var node = window.findEmailNodeFromPopupNode(window.document.popupNode,
	        'emailAddressPopup');

	var emailAddress = node.getAttribute("emailAddress");

	var url = 'http://www.' + util.getDomainFromEmailAddress(emailAddress);

	util.openUrl(url);

}
