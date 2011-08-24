Components.utils.reportError("mail");

var EXPORTED_SYMBOLS = [ "mail" ];

var mail = {};

mail.test = function(root) {
	root.window.alert("test");
}
