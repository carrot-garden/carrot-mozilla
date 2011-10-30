//

Components.utils.import("resource://${package}/modules/log.js");
const
logger = log.makeLogger("about.js", "Debug");
logger.debug("init");

//

const
Cc = Components.classes, Ci = Components.interfaces;

//

Components.utils.import("resource://gre/modules/XPCOMUtils.jsm");

function about() {
};

about.prototype = {

	classDescription : "about:${package}",

	contractID : "@mozilla.org/network/protocol/about;1?what=${package}",

	classID : Components.ID("{C5FEF7EA-CC4A-11E0-8538-03004924019B}"),

	QueryInterface : XPCOMUtils
			.generateQI([ Ci.nsIAboutModule, Ci.nsIObserver ]),

	observe : function() {

		logger.debug("hello observe");

	},

	getURIFlags : function(aURI) {
		return Ci.nsIAboutModule.ALLOW_SCRIPT;
	},

	newChannel : function(aURI) {

		let
		ios = Cc["@mozilla.org/network/io-service;1"]
				.getService(Ci.nsIIOService);

		let
		channel = ios.newChannel(
				"chrome://${package}/content/about/about.xhtml", null, null);
		channel.originalURI = aURI;

		return channel;

	}

};

var components = [ about ];

var NSGetFactory = XPCOMUtils.generateNSGetFactory(components);
