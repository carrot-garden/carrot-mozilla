//

Components.utils.import("resource://${package}/modules/log.js");
const
logger = log.makeLogger("dependencies.js", "Debug");
logger.debug("init");

//

var EXPORTED_SYMBOLS = [ "dependencies" ];

const
dependencies = this;

function hello (window) {
	window.alert("hello dependencies");
};

function checkOK () {
	if (typeof (jslib) != "object") {
		return false;
	}
	return true;
}

function checkJsLib (window) {

	return; // XXX

	const
	url = "https://www.mozdevgroup.com/dropbox/jslib/jslib_current.xpi";

	const
	msg = "${thisName} requires jsLib. \n"
			+ "Would you like to install jsLib now? \n" + url + "\n"
			+ " (restart required) \n";

	if (typeof (jslib) == "object") {

		Components.utils.reportError("jslib is present");

	} else {

		Components.utils.reportError("jslib is missing");

		if (window.confirm(msg)) {

			window.openAddonsMgr();

			try {
				window.content.location = url;
			} catch (e) {
				Components.utils.reportError(e);
			}
			;

		} else {

		}

		// throw "Stopping any further code execution ...";

	}
	;

};

//

