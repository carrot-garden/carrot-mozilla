/**
 * nsIAutoCompleteSession
 */
function FilterAutocomplete(textbox) {

	this.textbox = textbox;

	this.results = Components.classes["@mozilla.org/autocomplete/results;1"]
			.getService(Components.interfaces.nsIAutoCompleteResults);

}

FilterAutocomplete.prototype.onStartLookup = function(searchString,
		previousSearchResult, listener) {

	var itemArray = this.results.items;

	itemArray.Clear();

	var add = function(value) {

		var item = Components.classes["@mozilla.org/autocomplete/item;1"]
				.createInstance(Components.interfaces.nsIAutoCompleteItem);

		item.value = value;

		itemArray.AppendElement(item);

	};

	add("test");

	this.results.searchString = searchString;

	this.results.defaultItemIndex = 0;

	listener.onAutoComplete(this.results, 1);

};

FilterAutocomplete.prototype.onStopLookup = function() {
};

FilterAutocomplete.prototype.onAutoComplete = function(searchString,
		previousSearchResult, listener) {
};

FilterAutocomplete.prototype.QueryInterface = function(iid) {

	if (iid.equals(Components.interfaces.nsIAutoCompleteSession)) {
		return this;
	} else {
		throw Components.results.NS_NOINTERFACE;
	}

};
