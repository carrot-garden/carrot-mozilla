"use strict";

Components.utils.import("resource://${package}/modules/log.js");
var logger = log.makeLogger("mail.js", "Debug");
logger.debug("init");

//

Components.utils.import("resource://${package}/modules/util.js");
Components.utils.import("resource://${package}/modules/regexp.js");
Components.utils.import("resource://${package}/modules/mailStore.js");
Components.utils.import("resource://${package}/modules/mailFinder.js");
Components.utils.import("resource://${package}/modules/templates.js");

var EXPORTED_SYMBOLS = [ "mail" ];

var mail = this;

var XUL_NS = "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";

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

	var template = util.clone(templates.FILTER_COMPANY);

	logger.debug("hello template : \n" + JSON.stringify(template));

	var parameter = {
		"(TYPE)" : "Employer",
		"(FOLDER)" : "Inbox/Employers",
		"(COMPANY)" : "IBM Corp.",
		"(DOMAIN)" : "ibm.com",
	};

	util.substitute(template, parameter);

	//

	function visitor(root, name, value) {
		logger.debug(name + " : " + value);
	}

	util.visitProperty(template, visitor);

	//

	var filter = mailFinder.makeMessageFilter(template);
	mailFinder.saveMessageFilter(filter);

	//

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

function makePopupMenuitems(window) {
	function apply(entry) {
		makePopupMenuitem(window, entry);
	}
	templates.LIST.forEach(apply);
}

function makePopupMenuitem(window, entry) {

	logger.debug(entry);

	var document = window.document;

	var menuitem = document.createElementNS(XUL_NS, "menuitem");

	var popupId = "${package}.emailAddressPopup.menupopup";

	menuitem.setAttribute("id", popupId + "." + entry.id);
	menuitem.setAttribute("label", entry.menu);
	menuitem.setAttribute("oncommand", "window['${package}'].mail."
			+ "workPopupMenuitem(window,'" + entry.id + "');");

	var menupopup = document.getElementById(popupId);
	menupopup.appendChild(menuitem);

	return menuitem;

}
//

function PersonBean(entry) {

	logger.debug("entry = " + entry);

	/** http://dxr.mozilla.org/comm-central/comm-central/mailnews/mime/public/nsIMsgHeaderParser.idl.html */

	var parser = Components.classes["@mozilla.org/messenger/headerparser;1"]
			.getService(Components.interfaces.nsIMsgHeaderParser);

	this.name = parser.extractHeaderAddressNames(entry) || "";
	this.email = parser.extractHeaderAddressMailboxes(entry) || "";

	if (regexp.isEmail(this.name)) {
		this.name = util.getPersonFromEmailAddress(this.name);
	} else {
		this.name = util.getPersonFromEmailName(this.name);
	}

	this.toString = function() {
		return JSON.stringify(this);
	};

}

/**
 * @param header :
 *            nsIMsgDBHdr
 */
function HeaderBean(header) {

	var bean = this;

	this.author = new PersonBean(header.author);

	this.recipientArray = new Array();
	header.recipients.split(",").forEach(function(entry) {
		bean.recipientArray.push(new PersonBean(entry));
	});

	this.subject = header.subject;

	this.company = util.getCompanyFromEmailAddress(this.author.email);

	this.domain = util.getDomainFromEmailAddress(this.author.email);

	this.toString = function() {
		return JSON.stringify(this);
	};

}

function workPopupMenuitem(window, entryId) {

	function apply(entry) {
		if (entry.id == entryId) {

			var header = window.gFolderDisplay.selectedMessage; // nsIMsgDBHdr

			var bean = new HeaderBean(header);

			logger.debug("header = " + bean);

			var template = util.clone(entry.template);

			logger.debug("template = " + JSON.stringify(template))

			var parameter = {
				//
				"(ID)" : entry.id,
				"(TYPE)" : entry.type,
				"(FOLDER)" : entry.folder,
				//
				"(NAME)" : bean.author.name,
				"(EMAIL)" : bean.author.email,
				"(COMPANY)" : bean.company,
				"(DOMAIN)" : bean.domain,
				"(SUBJECT)" : bean.subject,
			};

			util.substitute(template, parameter);

			// util.visitProperty(template, function(root, name, value) {
			// logger.debug("### " + name + "=" + value);
			// });

			logger.debug("template = " + JSON.stringify(template))

			var folder = getSelectedMessageFolder(window); // nsIMsgFolder

			logger.debug("folder = " + folder);

			var filter = mailFinder.makeMessageFilter(template); // nsIMsgFilter
			var filterList = folder.getEditableFilterList(null);

			var args = {
				filter : filter,
				filterList : filterList,
				refresh : false,
			};

			window.openDialog("chrome://messenger/content/FilterEditor.xul",
					"", "chrome, modal, resizable,centerscreen,dialog=yes",
					args);

			logger.debug("refresh = " + JSON.stringify(args.refresh));

			if (args.refresh) {

				mailFinder.saveMessageFilter(filter);

				applyFilter(window, folder, filterList);

				var action = filter.getActionAt(0); // nsIMsgRuleAction
				var targetFolderUri = action.targetFolderUri; // String
				var actionFilder = mailStore.getFolderFromUri(targetFolderUri); // nsIMsgFolder

				window.gFolderTreeView.selectFolder(actionFilder);

			}

		}

	}

	templates.LIST.forEach(apply);

}

function getSelectedMessageFolder(window) {
	return window.gFolderDisplay.selectedMessage.folder; // nsIMsgFolder
}

/**
 * @param window
 *            nsIMsgWindow
 * 
 * @param folder
 *            nsIMsgFolder
 * @param filterList
 *            nsIMsgFilterList
 */
function applyFilter(window, folder, filterList) {

	var folderArray = Components.classes["@mozilla.org/supports-array;1"]
			.createInstance(Components.interfaces.nsISupportsArray);

	folderArray.AppendElement(folder); // nsISupportsArray

	var filterService = Components.classes["@mozilla.org/messenger/services/filters;1"]
			.getService(Components.interfaces.nsIMsgFilterService);

	// var filterList = filterService.getTempFilterList(null);

	filterService.applyFiltersToFolders(filterList, folderArray, null);

}

function init(window) {

	makePopupMenuitems(window);

}
