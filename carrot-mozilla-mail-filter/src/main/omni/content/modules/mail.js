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

};

function testFolder(window) {

	var folder = window.gFolderDisplay.displayedFolder;

	logger.debug("hello mail folder : " + folder);

};

//

// var ID_FODER_POPUP = "${package}.folderPopup.menupopup";

function killFolderPopup(window, menupopup) {

	var childNodes = menupopup.childNodes; // NodeList

	for ( var index = 0; index < childNodes.length; index++) {

		var element = childNodes[index];

		// logger.debug("menuitem id=" + menuitem.getAttribute("id"));
		// logger.debug("menuitem dynamic=" + menuitem.getAttribute("dynamic"));

		if (element.getAttribute("dynamic") == "true") {
			menupopup.removeChild(element);
		}

	}

}

function makeFolderPopup(window, menupopup) {

	logger.debug("makeFolderPopup popup : " + menupopup.id);

	var folder = window.gFolderDisplay.displayedFolder; // nsIMsgFolder

	logger.debug("makeFolderPopup folder : " + folder);

	var filterArray = mailFinder.getFiltersUsingFolder(folder);

	logger.debug("makeFolderPopup filterArray : " + filterArray);

	function apply(filter) {
		makeFolderPopupItem(window, menupopup, filter);
	}

	filterArray.forEach(apply);

	return true;

}

function makeFolderPopupItem(window, menupopup, filter) {

	var document = window.document;

	var menuitem = document.createElementNS(XUL_NS, "menuitem");

	var name = filter.filterName;

	logger.debug("name=" + name);

	menuitem.setAttribute("id", menupopup.id + "." + name);
	menuitem.setAttribute("dynamic", "true");
	menuitem.setAttribute("label", name);
	menuitem.setAttribute("oncommand", "window['${package}'].mail."
			+ "workFolderPupupItem(window,'" + name + "');");

	menupopup.appendChild(menuitem);

	return menuitem;

}

function workFolderPupupItem(window, name) {

	logger.debug("workFolderPupupItem : " + name);

	var folder = mailStore.getLocalRootFolder(); // nsIMsgFolder

	var filterList = folder.getFilterList(null); // nsIMsgFilterList

	var count = filterList.filterCount;

	logger.debug("workFolderPupupItem count=" + count);

	var filter = null; // nsIMsgFilter

	for ( var index = 0; index < count; index++) {
		var lookup = filterList.getFilterAt(index);
		if (lookup.filterName == name) {
			filter = lookup;
			break;
		}
	}

	if (filter == null) {
		window.alert("filter not found; name=" + name);
		return;
	}

	var args = {
		filter : filter,
		filterList : filterList,
		refresh : false,
	};

	window.openDialog("chrome://messenger/content/FilterEditor.xul",
			"FilterEditor", "chrome,modal,titlebar,resizable,centerscreen",
			args);

	if (args.refresh) {
		mailFinder.saveMessageFilter();
	}

}

//

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

function makeEmailPopupMenu(window) {
	function apply(entry) {
		makeEmailPopupItem(window, entry);
	}
	templates.LIST.forEach(apply);
}

function makeEmailPopupItem(window, entry) {

	logger.debug(entry);

	var document = window.document;

	var menuitem = document.createElementNS(XUL_NS, "menuitem");

	var popupId = "${package}.emailAddressPopup.menupopup";

	menuitem.setAttribute("id", popupId + "." + entry.id);
	menuitem.setAttribute("label", entry.menu);
	menuitem.setAttribute("oncommand", "window['${package}'].mail."
			+ "workEmailPopupItem(window,'" + entry.id + "');");

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

function workEmailPopupItem(window, entryId) {

	var folder = getSelectedMessageFolder(window); // nsIMsgFolder

	var header = window.gFolderDisplay.selectedMessage; // nsIMsgDBHdr

	var node = findEmailNode(window);

	var name = node.getAttribute("displayName");
	var email = node.getAttribute("emailAddress");

	var company = util.getCompanyFromEmailAddress(email);
	var domain = util.getDomainFromEmailAddress(email);

	var subject = header.subject;

	if (name == null || name == "") {
		name = util.getPersonFromEmailAddress(email);
	} else {
		name = util.getPersonFromEmailName(name);
	}

	function apply(entry) {
		if (entry.id == entryId) {

			var parameter = {
				//
				"(ID)" : entry.id,
				"(TYPE)" : entry.type,
				"(FOLDER)" : entry.folder,
				//
				"(NAME)" : name,
				"(EMAIL)" : email,
				"(COMPANY)" : company,
				"(DOMAIN)" : domain,
				"(SUBJECT)" : subject,
				//
				accept : false,
			};

			var template = util.clone(entry.template);

			window.openDialog(
					"chrome://${package}/content/filter/filterApprove.xul", "",
					"chrome,modal,resizable,centerscreen,dialog=yes",
					parameter, template);

			if (!parameter.accept) {
				return;
			}

			var template = util.clone(entry.template);

			logger.debug("template = " + JSON.stringify(template));

			util.substitute(template, parameter);

			logger.debug("template = " + JSON.stringify(template));

			//

			var filter = mailFinder.makeMessageFilter(template); // nsIMsgFilter
			var filterList = folder.getEditableFilterList(null);

			var argument = {
				filter : filter,
				filterList : filterList,
				refresh : false,
			};

			window.openDialog("chrome://messenger/content/FilterEditor.xul",
					"", "chrome,modal,resizable,centerscreen,dialog=yes",
					argument);

			logger.debug("refresh = " + JSON.stringify(argument.refresh));

			if (argument.refresh) {

				mailFinder.saveMessageFilter(filter);

				applyFilter(window, folder, filterList);

				var action = filter.getActionAt(0); // nsIMsgRuleAction
				var targetFolderUri = action.targetFolderUri; // String
				var actionFolder = mailStore.getFolderFromUri(targetFolderUri); // nsIMsgFolder

				window.gFolderTreeView.selectFolder(actionFolder);

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

	makeEmailPopupMenu(window);

}
