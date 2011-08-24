Components.utils.reportError("dependencies");

var EXPORTED_SYMBOLS = [ "dependencies" ];

var dependencies = {};

dependencies.hello = function (window) {
			window.alert("hello dependencies");
};

dependencies.checkOK = function() {
	if ( typeof(jslib) != "object" ) {
		return false;
	}
	return true;
}

dependencies.checkJsLib = function(window) {

	return;

	const url = "https://www.mozdevgroup.com/dropbox/jslib/jslib_current.xpi";

	const msg = "${thisName} requires jsLib. \n"
			+ "Would you like to install jsLib now? \n" + url + "\n"
			+ " (restart required) \n";

	if ( typeof(jslib) == "object" ) {

		Components.utils.reportError("jslib is present");

	} else {

		Components.utils.reportError("jslib is missing");

		if (window.confirm(msg)) {

			window.openAddonsMgr();

			try {
				window.content.location = url;
			} catch (e) {
				Components.utils.reportError(e);
			};

		} else {

		}

		// throw "Stopping any further code execution ...";

	};

};

//

