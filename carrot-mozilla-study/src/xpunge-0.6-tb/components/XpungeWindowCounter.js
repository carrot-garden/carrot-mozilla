Components.utils.import("resource://gre/modules/XPCOMUtils.jsm");

/***************************************************************************************************
 * class definition
 **************************************************************************************************/

// class constructor
function XpungeWindowCounter() {
	this.windowCounter = 0;
	this.wrappedJSObject = this;
}

// class definition
XpungeWindowCounter.prototype = {

	// properties required for XPCOM registration:
	// this must match whatever is in chrome.manifest!
	classID : Components.ID("{c7775fbc-b758-4871-b8a4-d46dadd3395c}"),

	QueryInterface : XPCOMUtils.generateQI(),

	getWindowCounter : function() {
		return this.windowCounter;
	},

	setWindowCounter : function(newValue) {
		this.windowCounter = newValue;
	},

};

var NSGetFactory = XPCOMUtils.generateNSGetFactory([ XpungeWindowCounter ]); // Gecko 2.0 and higher
