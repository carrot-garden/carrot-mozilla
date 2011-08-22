const Cc = Components.classes;
const Ci = Components.interfaces;

Components.utils.import("resource://gre/modules/XPCOMUtils.jsm");

function about() {
};

about.prototype = {

    classDescription: "about:${thisHost}",

    contractID: "@mozilla.org/network/protocol/about;1?what=${thisHost}",

    classID: Components.ID("{C5FEF7EA-CC4A-11E0-8538-03004924019B}"),

    QueryInterface: XPCOMUtils.generateQI([Ci.nsIAboutModule]),

    getURIFlags: function(aURI) {
        return Ci.nsIAboutModule.ALLOW_SCRIPT;
    },

    newChannel: function(aURI) {

        let ios = Cc["@mozilla.org/network/io-service;1"].getService(Ci.nsIIOService);

        let channel = ios.newChannel("chrome://${thisHost}/content/about/about.xhtml",
                                     null, null);
        channel.originalURI = aURI;

        return channel;

    }

};


var components = [about];

var NSGetFactory = XPCOMUtils.generateNSGetFactory(components);
