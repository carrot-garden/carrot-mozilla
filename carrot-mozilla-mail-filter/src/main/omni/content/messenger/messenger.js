Components.utils.reportError("messenger");

let
gre = {};
Components.utils.import("resource://gre/modules/Services.jsm", gre);

let
ext = {};
Components.utils.import("resource://${thisHost}/modules/dependencies.js", ext);
Components.utils.import("resource://${thisHost}/modules/services.js", ext);

// ext.dependencies.hello(this);

let
root = this;

let
startup = {
	observe : function(subject, topic, data) {
		function checkLib() {
			ext.dependencies.checkJsLib(root);
		}
		;
		window.setTimeout(checkLib, 100);
	}
};

gre.Services.obs.addObserver(startup, "mail-startup-done", false);

let
carrotMail = {};
