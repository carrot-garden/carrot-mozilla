Components.utils.reportError("services");

var EXPORTED_SYMBOLS = [ "services" ];

var services = {};

services.hello = function (root) {

	root.window.alert("hello services");

};

