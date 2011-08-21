Components.utils.import("resource://gre/modules/Services.jsm");
Components.utils.import("resource://modules/main.js");

function checkJsLib() {

	const
	url = "https://www.mozdevgroup.com/dropbox/jslib/jslib_current.xpi";

	const
	msg = "extension: ${extension} requires jsLib. \n"
			+ "Would you like to install jsLib now? \n" + url + "\n"
			+ " (restart required) \n";

	if (typeof (jslib) == "object") {

		Components.utils.reportError("jslib is present");

	} else {

		Components.utils.reportError("jslib is missing");

		if (confirm(msg)) {

			openAddonsMgr();

			try {

				 _content.location = url;

			} catch (e) {
				Components.utils.reportError(e);
			}


		} else {

		}

		// throw "Stopping any further code execution ...";

	}

}

//

var startup = {
	observe : function(subject, topic, data) {
		window.setTimeout(checkJsLib, 100);
	}
};

Services.obs.addObserver(startup, "mail-startup-done", false);
