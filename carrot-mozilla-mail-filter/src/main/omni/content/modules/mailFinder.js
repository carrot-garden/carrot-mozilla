"use strict";

Components.utils.import("resource://${package}/modules/log.js");
var logger = log.makeLogger("mailFinder.js", "Debug");
logger.debug("init");

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

/**
 * @param bean :
 *            SearchTermBean
 * 
 * @returns searchTerm : nsIMsgSearchTerm
 */
function makeSearchTerm(bean) {

	/**
	 * http://doxygen.db48x.net/mozilla/html/interfacensIMsgSearchValue.html
	 */
	function makeSearchValue() {

		var value = searchTerm.value
				.QueryInterface(Components.interfaces.nsIMsgSearchValue);

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

		return value;

	}

	var searchTerm = Components.classes["@mozilla.org/messenger/searchTerm;1"]
			.createInstance(Components.interfaces.nsIMsgSearchTerm);

	searchTerm.booleanAnd = nsMsgSearchBooleanOp[bean.booleanAnd];

	searchTerm.value = makeSearchValue();

	searchTerm.op = nsMsgSearchOp[bean.op];

	searchTerm.attrib = nsMsgSearchAttrib[bean.attrib];

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
 * @returns void
 * 
 */
function saveMessageFilter(filter) {

	var // nsIMsgFolder
	folder = mailStore.getLocalRootFolder();

	var // nsIMsgFilterList
	filterList = folder.getFilterList(null);

	filterList.insertFilterAt(0, filter);

	filterList.saveToDefaultFile();

}
