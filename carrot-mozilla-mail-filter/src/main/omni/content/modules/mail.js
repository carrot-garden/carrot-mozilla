"use strict";

Components.utils.import("resource://${package}/modules/log.js");
const
logger = log.makeLogger("mail.js", "Debug");
logger.debug("init");

//

Components.utils.import("resource://${package}/modules/util.js");

var EXPORTED_SYMBOLS = [ "mail" ];

const
mail = this;

function test(window) {

	const
	a = 10;

	window.alert("test mail = " + a);

	logger.debug("hello logger");

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

function makePopupMenuitems(window) {

	var document = window.document;

	// var node = window.findEmailNodeFromPopupNode(document.popupNode,
	// 'emailAddressPopup');

	// var emailAddress = node.getAttribute("emailAddress");
	// var displayName = node.getAttribute("displayName");

	var XUL_NS = "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";

	var popupId = "${package}.emailAddressPopup.menupopup";

	var menupopup = document.getElementById(popupId);

	var menuitem = document.createElementNS(XUL_NS, "menuitem");

	var type = "XXX";
	menuitem.setAttribute("id", popupId + "." + type);
	menuitem.setAttribute("label", type);
	menuitem.setAttribute("oncommand",
			"window['${package}'].mail.workPopupMenuitems(window,'" + type
					+ "');");

	menupopup.appendChild(menuitem);

}

function workPopupMenuitems(window, type) {

	window.alert("hello : " + type);

}

function init(window) {

	makePopupMenuitems(window);

}
