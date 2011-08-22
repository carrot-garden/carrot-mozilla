Components.utils.reportError("dependencies");

let EXPORTED_SYMBOLS = [ "dependencies" ];

let dependencies = {};

dependencies.hello = function (root) {
			root.window.alert("hello dependencies");
};

dependencies.checkOK = function() {
	if ( typeof(jslib) != "object" ) {
		return false;
	}
	return true;
}

dependencies.checkJsLib = function(root) {

	return;

	const url = "https://www.mozdevgroup.com/dropbox/jslib/jslib_current.xpi";

	const msg = "${thisName} requires jsLib. \n"
			+ "Would you like to install jsLib now? \n" + url + "\n"
			+ " (restart required) \n";

	if ( typeof(jslib) == "object" ) {

		Components.utils.reportError("jslib is present");

	} else {

		Components.utils.reportError("jslib is missing");

		if (root.window.confirm(msg)) {

			root.openAddonsMgr();

			try {
				 root._content.location = url;
			} catch (e) {
				Components.utils.reportError(e);
			};

		} else {

		}

		// throw "Stopping any further code execution ...";

	};

};

//

