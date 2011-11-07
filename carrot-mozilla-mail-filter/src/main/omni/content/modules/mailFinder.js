"use strict";

Components.utils.import("resource://${package}/modules/log.js");
var logger = log.makeLogger("mailFinder.js", "Debug");
logger.debug("init");

Components.utils.import("resource://gre/modules/FileUtils.jsm");

Components.utils.import("resource://${package}/modules/util.js");
Components.utils.import("resource://${package}/modules/mailStore.js");

var EXPORTED_SYMBOLS = [ "mailFinder" ];
var mailFinder = this;

//

var nsMsgFilterAction = Components.interfaces.nsMsgFilterAction;
logger.debug("nsMsgFilterAction \n" + JSON.stringify(nsMsgFilterAction));
var nsMsgSearchOp = Components.interfaces.nsMsgSearchOp;
logger.debug("nsMsgSearchOp \n" + JSON.stringify(nsMsgSearchOp));
var nsMsgFilterType = Components.interfaces.nsMsgFilterType;
logger.debug("nsMsgFilterType \n" + JSON.stringify(nsMsgFilterType));
var nsMsgSearchAttrib = Components.interfaces.nsMsgSearchAttrib;
logger.debug("nsMsgSearchAttrib \n" + JSON.stringify(nsMsgSearchAttrib));
var nsMsgSearchBooleanOp = Components.interfaces.nsMsgSearchBooleanOp;
logger.debug("nsMsgSearchBooleanOp \n" + JSON.stringify(nsMsgSearchBooleanOp));
var nsMsgPriority = Components.interfaces.nsMsgPriority;
logger.debug("nsMsgPriority \n" + JSON.stringify(nsMsgPriority));

//

function SearchTermBean() {
	this.endsGrouping;
	this.beginsGrouping;
	this.customId;
	this.hdrProperty;
	this.arbitraryHeader;
	this.booleanAnd; // nsMsgSearchBooleanOp
	this.value; // String
	this.op; // nsMsgSearchOp
	this.attrib; // nsMsgSearchAttrib
}

function isCustomAttrib(name) {
	return nsMsgSearchAttrib[name] === undefined;
}

function getAttribIndex(name) {
	if (isCustomAttrib(name)) {
		return ensureCustomHeader(name);
	} else {
		return nsMsgSearchAttrib[name];
	}
}

/**
 * @param bean :
 *            SearchTermBean
 * 
 * @returns searchTerm : nsIMsgSearchTerm
 */
function makeSearchTerm(bean) {

	var searchTerm = Components.classes["@mozilla.org/messenger/searchTerm;1"]
			.createInstance(Components.interfaces.nsIMsgSearchTerm);

	/**
	 * http://doxygen.db48x.net/mozilla/html/interfacensIMsgSearchValue.html
	 */
	function makeSearchValue() {

		var value = searchTerm.value
				.QueryInterface(Components.interfaces.nsIMsgSearchValue);

		if (isCustomAttrib(bean.attrib)) {
			value.str = bean.value;
		} else {
			switch (nsMsgSearchAttrib[bean.attrib]) {
			case nsMsgSearchAttrib.Subject:
			case nsMsgSearchAttrib.Sender:
			case nsMsgSearchAttrib.To:
			case nsMsgSearchAttrib.CC:
			case nsMsgSearchAttrib.ToOrCC:
			case nsMsgSearchAttrib.AnyText:
				value.str = bean.value;
				break;
			default:
				throw "TODO bean.attrib : " + bean.attrib;
			}
		}

		return value;

	}

	searchTerm.booleanAnd = nsMsgSearchBooleanOp[bean.booleanAnd];

	searchTerm.value = makeSearchValue();

	searchTerm.op = nsMsgSearchOp[bean.op];

	searchTerm.attrib = getAttribIndex(bean.attrib);

	return searchTerm;

}

function FilterActionBean() {
	this.action; // nsMsgFilterAction
	this.value; // String
}

/**
 * @param bean :
 *            FilterActionBean
 * 
 * 
 * @returns filterAction : nsIMsgRuleAction
 */
function makeFilterAction(bean) {

	var filterService = Components.classes["@mozilla.org/messenger/services/filters;1"]
			.getService(Components.interfaces.nsIMsgFilterService);

	var filterList = filterService.getTempFilterList(null); // nsIMsgFilterList
	var filter = filterList.createFilter(null); // nsIMsgFilter
	var action = filter.createAction(); // nsIMsgRuleAction

	/** set type first */
	action.type = nsMsgFilterAction[bean.action];

	switch (nsMsgFilterAction[bean.action]) { // nsMsgFilterAction
	case nsMsgFilterAction.MoveToFolder:
	case nsMsgFilterAction.CopyToFolder:
		var folder = mailStore.ensureLocalFolderPath(bean.value); // nsIMsgFolder
		logger.debug("folder.URI : " + folder.URI);
		action.targetFolderUri = folder.URI; // String
		break;
	case nsMsgFilterAction.Reply:
	case nsMsgFilterAction.Forward:
		action.strValue = bean.value;
		break;
	default:
		throw "TODO bean.action : " + bean.action;
	}

	return action;

}

function MessageFilterBean() {
	this.name; // String
	this.comment; // String
	this.searchTerms; // Array
	this.filterActions; // Array
}

/**
 * @param bean :
 *            MessageFilterBean
 * 
 * @returns messageFilter : nsIMsgFilter
 */
function makeMessageFilter(bean) {

	var // nsIMsgFolder
	folder = mailStore.getLocalRootFolder();

	var // nsIMsgFilterList
	filterList = folder.getFilterList(null);

	var // nsIMsgFilter
	filter = filterList.createFilter(null);

	filter.filterName = bean.name;
	filter.filterDesc = bean.comment;

	function appendTerm(bean, index, array) {
		filter.appendTerm(makeSearchTerm(bean));
	}

	bean.searchTerms.forEach(appendTerm);

	function appendAction(bean, index, array) {
		filter.appendAction(makeFilterAction(bean));
	}

	bean.filterActions.forEach(appendAction);

	return filter;

}

/**
 * @param filter :
 *            nsIMsgFilter
 * 
 * @param filename
 *            String
 * 
 * @returns void
 * 
 */
function saveMessageFilter(filter, filename) {

	var // nsIMsgFolder
	folder = mailStore.getLocalRootFolder();

	var // nsIMsgFilterList
	filterList = folder.getFilterList(null);

	if (filter !== undefined) {

		filterList.insertFilterAt(0, filter);

	}

	if (filename === undefined) {

		filterList.saveToDefaultFile();

	} else {

		var file = FileUtils.getFile("ProfD", [ "${package}", filename ]); // nsIFile

		var output = Components.classes["@mozilla.org/network/file-output-stream;1"]
				.createInstance(Components.interfaces.nsIFileOutputStream);

		output.init(file, -1, -1, 0);

		filterList.saveToFile(output);

	}

	logger.debug("saveMessageFilter : done");

}

/**
 * 
 */
function ensureCustomHeader(name) {

	var pref = Components.classes["@mozilla.org/preferences-service;1"]
			.getService(Components.interfaces.nsIPrefBranch);

	var prefName = "mailnews.customHeaders";

	var headerString = pref.getCharPref(prefName);

	if (headerString.toLowerCase().indexOf(name.toLowerCase()) == -1) {
		headerString += " " + name + ":";
		pref.setCharPref(prefName, headerString);
	}

	headerString = headerString.replace(/\s+/g, "");

	var headerArray = headerString.match(/[^:]+/g);

	var index = nsMsgSearchAttrib.OtherHeader + 1;

	for ( var k = 0; k < headerArray.length; k++) {
		if (headerArray[k].toLowerCase() == name.toLowerCase()) {
			return index;
		} else {
			index++;
		}
	}

}

/**
 * @param actionList
 *            nsISupportsArray
 * 
 * @param folder
 *            nsIMsgFolder
 * 
 */
function hasActionUsingFolder(actionList, folder) {

	var folderURI = folder.URI;

	var count = actionList.Count();

	// logger.debug("count=" + count);

	for ( var index = 0; index < count; index++) {

		var action = actionList.GetElementAt(index).QueryInterface(
				Components.interfaces.nsIMsgRuleAction);

		// logger.debug("action=" + action);

		var type = action.type;

		// logger.debug("type=" + type);

		switch (type) {
		case nsMsgFilterAction.MoveToFolder:
		case nsMsgFilterAction.CopyToFolder:
			var targetFolderUri = action.targetFolderUri;
			if (folderURI == targetFolderUri) {
				return true;
			}
			continue;
		default:
			continue;
		}

	}

	return false;

}

/**
 * @param folder
 *            nsIMsgFolder
 * 
 * @returns Array(nsIMsgFilter)
 */
function getFiltersUsingFolder(folder) {

	var filterList = folder.getFilterList(null); // nsIMsgFilterList

	var count = filterList.filterCount;

	var result = new Array();

	for ( var index = 0; index < count; index++) {

		var filter = filterList.getFilterAt(index); // nsIMsgFilter

		var actionList = filter.actionList; // nsISupportsArray

		// logger.debug("actionList=" + actionList);

		if (hasActionUsingFolder(actionList, folder)) {
			result.push(filter);
		}

	}

	return result;

}
