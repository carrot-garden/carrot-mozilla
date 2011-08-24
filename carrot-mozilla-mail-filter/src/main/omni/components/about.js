const
Cc = Components.classes;
const
Ci = Components.interfaces;

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

	    Components.utils.reportError("observe: about");

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
