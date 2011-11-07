"use strict";

Components.utils.import("resource://${package}/modules/log.js");
var logger = log.makeLogger("filter.js", "Debug");
logger.debug("init");

//

Components.utils.import("resource://${package}/modules/mailFinder.js");

//

var EXPORTED_SYMBOLS = [ "filter" ];
var filter = this;

//

var CONTROLLER = "${package}.FilterDialogController";

var XUL_NS = "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";

function FilterDialogController(window) {

	this.window = window;

	this.document = window.document;

	this.textbox = this.makeTextbox();

	this.listbox = this.document.getElementById("filterList");

	//

	var vboxList = this.listbox.parentNode;

	vboxList.insertBefore(this.textbox, vboxList.firstChild);

	this.textbox.addSession(new FilterAutocomplete(this));

	//

	var button = this.document.getElementById("newButton");

	var vboxBttn = button.parentNode;

	this.buttonSort = this.makeButtonSort();

	vboxBttn.insertBefore(this.buttonSort, vboxBttn.firstChild);

}

FilterDialogController.prototype.makeButtonSort = function() {

	var button = this.document.createElementNS(XUL_NS, "button");

	button.setAttribute("id", "${package}.buttonSort");
	button.setAttribute("label", "Sort");

	button.setAttribute("oncommand", //
	"window['" + CONTROLLER + "'].procButtonSort();");

	return button;

};

function SectionBean(section) {
	this.section = section;
	this.toString = function() {
		return JSON.stringify(this);
	};
}

FilterDialogController.prototype.procButtonSort = function() {

	var millis = Date.now();

	var filename = "message-filter-backup-" + millis + ".dat";

	logger.debug("button=" + filename);

	mailFinder.saveMessageFilter(undefined, filename);

	//

	var filterList = this.window.gCurrentFilterList; // nsIMsgFilterList

	var count = filterList.filterCount;

	var sectionArray = new Array();

	var filtersArray = new Array();

	for ( var index = 0; index < count; index++) {

		var filter = filterList.getFilterAt(index); // nsIMsgFilter

		if (filter.filterName.indexOf("#") == 0) {

			filter.enabled = false;
			sectionArray.push(filter);

			// var name = filter.filterName;
			// var termArray = name.split(" ");
			// name = termArray[1];
			// name = name.replace("section=", "");
			// name = name.replace(":", "");
			// var bean = new SectionBean(name);
			// logger.debug("bean=" + bean);
			// filter.filterName = "# " + bean;

		} else {

			filter.enabled = true;
			filtersArray.push(filter);

		}

	}

	//

	var sectionNameArray = new Array();

	sectionArray.forEach(function(filter) {
		var name = filter.filterName.substring(1); // remove "#"
		var bean = JSON.parse(name);
		logger.debug("bean.section=" + bean.section);
		sectionNameArray.push(bean.section);
	});

	function sectionIndex(name) {
		var result = 0;
		sectionNameArray.forEach(function(sect, index) {
			if (name.indexOf(sect) == 0) {
				result = index;
			}
		});
		return result;
	}

	function compare(f1, f2) {

		var n1 = f1.filterName;
		var n2 = f2.filterName;

		var i1 = sectionIndex(n1);
		var i2 = sectionIndex(n2);

		if (i1 < i2) {
			return -1;
		}
		if (i1 > i2) {
			return +1;
		}

		if (n1 < n2) {
			return -1;
		}

		if (n1 > n2) {
			return +1;
		}

		return 0;

	}

	filtersArray.sort(compare);

	//

	while (filterList.filterCount > 0) {
		filterList.removeFilterAt(0);
	}

	var resultsArray = new Array();

	function append(filter) {
		resultsArray.push(filter);
	}

	sectionArray.forEach(append);
	filtersArray.forEach(append);

	resultsArray.reverse();

	resultsArray.forEach(function(filter) {
		filterList.insertFilterAt(0, filter);
	});

	this.window.rebuildFilterList(filterList);

	mailFinder.saveMessageFilter();

};

FilterDialogController.prototype.makeTextbox = function() {

	var textbox = this.document.createElementNS(XUL_NS, "textbox");

	textbox.setAttribute("id", "${package}.textbox");
	textbox.setAttribute("type", "autocomplete");
	textbox.setAttribute("maxrows", "15");

	// textbox.setAttribute("autocompletesearch", "${compFilterName}");
	// textbox.setAttribute("autocompletesearchparam", "text only");

	textbox.setAttribute("oninput", //
	"window['" + CONTROLLER + "'].procTextbox();");

	return textbox;

};

FilterDialogController.prototype.procTextbox = function() {

	logger.debug("value=" + this.textbox.value);

};

// ///////////////////////////////////////////////

/**
 * nsIAutoCompleteSession
 */
function FilterAutocomplete(controller) {

	this.controller = controller;

	this.results = Components.classes["@mozilla.org/autocomplete/results;1"]
			.getService(Components.interfaces.nsIAutoCompleteResults);

}

function ItemBean(value, comment) {

	this.value = value;
	this.comment = comment;

	this.toString = function() {
		return value;
	};

}

FilterAutocomplete.prototype.onStartLookup = function(searchString,
		previousResults, listener) {

	var itemArray = this.results.items;

	function append(value, comment) {

		var item = Components.classes["@mozilla.org/autocomplete/item;1"]
				.createInstance(Components.interfaces.nsIAutoCompleteItem);

		item.value = value;
		item.comment = comment;

		itemArray.AppendElement(item);

	}

	var searchTerms = searchString.split(" ");

	function match(text) {
		var count = 0;
		searchTerms.forEach(function(term) {
			if (text.indexOf(term.toLowerCase()) != -1) {
				count++;
			}
		});
		if (count == searchTerms.length) {
			return true;
		} else {
			return false;
		}
	}

	try {

		logger.debug("onStartLookup");

		itemArray.Clear();

		//

		logger.debug("onStartLookup count=" + count);

		var filterList = this.controller.window.gCurrentFilterList; // nsIMsgFilterList

		var count = filterList.filterCount;

		var array = new Array();

		for ( var index = 0; index < count; index++) {

			var filter = filterList.getFilterAt(index); // nsIMsgFilter

			var name = filter.filterName;
			var comment = filter.filterDesc;

			var text = (name + " " + comment).toLowerCase();

			if (match(text)) {
				var bean = new ItemBean(name, index);
				array.push(bean);
			}

		}

		array.sort();

		array.forEach(function(bean) {
			append(bean.value, bean.comment);
		});

		//

		this.results.defaultItemIndex = 0;
		this.results.searchString = searchString;

		listener.onAutoComplete(this.results, 1);

	} catch (e) {

		Components.utils.reportError(e);

	}

};

FilterAutocomplete.prototype.onStopLookup = function() {

	logger.debug("onStopLookup");

};

FilterAutocomplete.prototype.onAutoComplete = function(searchString,
		previousResults, listener) {

	try {

		var textbox = this.controller.textbox;

		var count = textbox.getResultCount(null);

		var comment = null;

		for ( var k = 0; k < count; k++) {
			var item = textbox.getResultAt(k); // nsIAutoCompleteItem
			if (textbox.value == item.value) {
				comment = item.comment;
				break;
			}
		}

		if (comment == null) {
			return;
		}

		logger.debug("onAutoComplete comment=" + comment);

		var index = comment;

		var listbox = this.controller.listbox;

		listbox.ensureIndexIsVisible(index);
		listbox.selectedIndex = index;
		listbox.focus();

		textbox.value = previousResults.searchString;

		// this.controller.window.setTimeout(function() {
		// textbox.value = previousResults.searchString;
		// logger.debug("onAutoComplete searchString="
		// + previousResults.searchString);
		// }, 1000);

	} catch (e) {

		Components.utils.reportError(e);

	}

};

FilterAutocomplete.prototype.QueryInterface = function(iid) {

	if (iid.equals(Components.interfaces.nsIAutoCompleteSession)) {
		return this;
	} else {
		throw Components.results.NS_NOINTERFACE;
	}

};

//

function Wrapper(param) {
	this.param = param;
};

Wrapper.prototype = {

	QueryInterface : function(iid) {
		if (iid.equals(Components.interfaces.nsISupports)) {
			return this;
		} else {
			throw Components.results.NS_ERROR_NO_INTERFACE;
		}
	}

};
