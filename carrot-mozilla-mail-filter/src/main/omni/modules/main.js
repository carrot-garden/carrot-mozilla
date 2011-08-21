var EXPORTED_SYMBOLS = [ "test" ];


Components.utils.import("resource://gre/modules/XPCOMUtils.jsm");
Components.utils.import("resource://gre/modules/Services.jsm");
Components.utils.import("resource://gre/modules/AddonManager.jsm");

var startup = {
		observe: function(subject, topic, data) {
			Components.utils.reportError("### here ###");
		}
};

Services.obs.addObserver(startup, "mail-startup-done", false);

Components.utils.reportError("### init ###");

//

function test(){

	Components.utils.reportError("### test ###");

}
