"use strict";

Components.utils.import("resource://${package}/modules/log.js");
const
logger = log.makeLogger("mail.js", "Debug");
logger.debug("init");

//

Components.utils.import("resource://${package}/modules/util.js");
Components.utils.import("resource://${package}/modules/mailStore.js");
Components.utils.import("resource://${package}/modules/mailFinder.js");

var EXPORTED_SYMBOLS = [ "mail" ];

const
mail = this;

const
XUL_NS = "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";

function test(window) {

	logger.debug("hello mail");

	var root = mailStore.getLocalRootFolder();

	logger.debug("hello mail : " + root.containsChildNamed("Inbox"));

	var folder = mailStore
			.ensureLocalFolderPath("Inbox/Employer Folder/IBM Inc. @ibm.com");

	logger.debug("hello mail folderURL : " + folder.folderURL);

	window.gFolderTreeView.selectFolder(folder);
	// window.gFolderDisplay.show(folder);

	var json1 = {
		key1 : "value2",
	};

	logger.debug("json1 : \n" + JSON.stringify(json1));

	var json2 = JSON.parse(' { "key2" : "value2"} ');

	logger.debug("json2 : \n" + JSON.stringify(json2));

	//

	var filter = mailFinder.makeMessageFilter(mailFinder.TEMPLATE);
	mailFinder.saveMessageFilter(filter);

};

function findEmailNode(window) {

	var node = window.findEmailNodeFromPopupNode(window.document.popupNode,
			'emailAddressPopup');

	return node;

}

function copyPopupNameAndEmail(window, portion) {

	var node = findEmailNode(window);

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

	var node = findEmailNode(window);

	var emailAddress = node.getAttribute("emailAddress");

	var url = 'http://www.' + util.getDomainFromEmailAddress(emailAddress);

	util.openUrl(url);

}

const
TYPE = {
	news : 'Add News',
	vendor : 'Add Vendor',
	employer : 'Add Employer',
};

function makePopupMenuitems(window) {
	for (type in TYPE) {
		makePopupMenuitem(window, type);
	}
}

function makePopupMenuitem(window, type) {

	var document = window.document;

	var menuitem = document.createElementNS(XUL_NS, "menuitem");

	menuitem.setAttribute("id", popupId + "." + type);
	menuitem.setAttribute("label", TYPE[type]);
	menuitem.setAttribute("oncommand", "window['${package}'].mail."
			+ "workPopupMenuitems(window,'" + type + "');");

	var popupId = "${package}.emailAddressPopup.menupopup";
	var menupopup = document.getElementById(popupId);
	menupopup.appendChild(menuitem);

	return menuitem;

}

function workPopupMenuitems(window, type) {

	var document = window.document;

	window.alert("hello : " + type);

	switch (type) {
	case TYPE.news:
		break;
	case TYPE.employer:
		break;
	case TYPE.vendor:
		break;
	default:
		break;
	}

}

function init(window) {

	makePopupMenuitems(window);

}
