//

Components.utils.import("resource://${package}/modules/log.js");
var logger = log.makeLogger("filter-comp", "Debug");
logger.debug("init");

//

const Ci = Components.interfaces;  
const Cu = Components.utils;  
  
Cu.import("resource://gre/modules/XPCOMUtils.jsm");  
  
const CLASS_NAME = "${compFilterName}";  
const CLASS_ID = Components.ID("${compFilterGuid}");  
const CONTRACT_ID = "${compFilterContract}";  
 
/**
 * @constructor
 * 
 * @implements {nsIAutoCompleteResult}
 * 
 * @param {string}
 *            searchString
 * @param {number}
 *            searchResult
 * @param {number}
 *            defaultIndex : Index of the default item that should be entered if
 *            none is selected
 * @param {string}
 *            errorDescription : A string describing the cause of a search
 *            failure
 * @param {Array.
 *            <string>} results
 * @param {Array.
 *            <string>|null=} comments
 */  
function ProviderAutoCompleteResult(searchString, searchResult,  
  defaultIndex, errorDescription, results, comments) {  
	
  this._searchString = searchString;  
  this._searchResult = searchResult;  
  this._defaultIndex = defaultIndex;  
  this._errorDescription = errorDescription;  
  this._results = results;  
  this._comments = comments;
  
}  
  
ProviderAutoCompleteResult.prototype = {  
		
  _searchString: "",  
  _searchResult: 0,  
  _defaultIndex: 0,  
  _errorDescription: "",  
  _results: [],  
  _comments: [],  
  
  /**
	 * @return {string} the original search string
	 */  
  get searchString() {  
    return this._searchString;  
  },  
  
  /**
	 * @return {number} the result code of this result object, either:
	 *         RESULT_IGNORED (invalid searchString) RESULT_FAILURE (failure)
	 *         RESULT_NOMATCH (no matches found) RESULT_SUCCESS (matches found)
	 */  
  get searchResult() {  
    return this._searchResult;  
  },  
  
  /**
	 * @return {number} the index of the default item that should be entered if
	 *         none is selected
	 */  
  get defaultIndex() {  
    return this._defaultIndex;  
  },  
  
  /**
	 * @return {string} description of the cause of a search failure
	 */  
  get errorDescription() {  
    return this._errorDescription;  
  },  
  
  /**
	 * @return {number} the number of matches
	 */  
  get matchCount() {  
    return this._results.length;  
  },  
  
  /**
	 * @return {string} the value of the result at the given index
	 */  
  getValueAt: function(index) {  
    return this._results[index];  
  },  
  
  /**
	 * @return {string} the comment of the result at the given index
	 */  
  getCommentAt: function(index) {  
    if (this._comments)  
      return this._comments[index];  
    else  
      return '';  
  },  
  
  /**
	 * @return {string} the style hint for the result at the given index
	 */  
  getStyleAt: function(index) {  
    if (!this._comments || !this._comments[index])  
      return null;  // not a category label, so no special styling
  
    if (index == 0)  {
        return 'suggestfirst';  // category label on first line of results
    } else{
        return 'suggesthint';   // category label on any other line of results
    }
  
  },  
  
  /**
	 * Gets the image for the result at the given index
	 * 
	 * @return {string} the URI to the image to display
	 */  
  getImageAt : function (index) {  
    return "";  
  },  
  
  /**
	 * Removes the value at the given index from the autocomplete results. If
	 * removeFromDb is set to true, the value should be removed from persistent
	 * storage as well.
	 */  
  removeValueAt: function(index, removeFromDb) {  
	  
    this._results.splice(index, 1);  
  
    if (this._comments){
        this._comments.splice(index, 1);  
    }
    
  },  
  
  getLabelAt: function(index) { return this._results[index]; },
  
  QueryInterface: XPCOMUtils.generateQI([ Ci.nsIAutoCompleteResult ])
  
};  
  
  
/**
 * @constructor
 * 
 * @implements {nsIAutoCompleteSearch}
 */  
function ProviderAutoCompleteSearch() {  
}  
  
ProviderAutoCompleteSearch.prototype = {  
  
  classID: CLASS_ID,  
  classDescription : CLASS_NAME,  
  contractID : CONTRACT_ID,  
  
  /**
	 * Searches for a given string and notifies a listener (either synchronously
	 * or asynchronously) of the result
	 * 
	 * @param searchString
	 *            the string to search for
	 * @param searchParam
	 *            an extra parameter
	 * @param previousResult
	 *            a previous result to use for faster searchinig
	 * @param listener
	 *            the listener to notify when the search is complete
	 */  
  startSearch: function(searchString, searchParam, previousResult, listener) {  
	  
	  try {

			logger.debug("start");
			
			var controller = searchParam;

			for(name in controller){
				logger.debug("name=" + name + " value=" + controller[name]);
			}

		    var resultArray = controller.makeResultArray(searchString);

			logger.debug("resultArray="+resultArray);

		    var autocompResult = new ProviderAutoCompleteResult(searchString,  
		        Ci.nsIAutoCompleteResult.RESULT_SUCCESS, 0, "", resultArray, null);
		  
		    listener.onSearchResult(this, autocompResult);

		} catch (e) {

			Components.utils.reportError(e);

		};

  },  
  
  /**
	 * Stops an asynchronous search that is in progress
	 */  
  stopSearch: function() {  
	  
	logger.debug("finish");

  },  
  
  QueryInterface: XPCOMUtils.generateQI([ Ci.nsIAutoCompleteSearch ])
  
};  
  
// The following line is what XPCOM uses to create components
const NSGetFactory = XPCOMUtils.generateNSGetFactory([ ProviderAutoCompleteSearch ]);

