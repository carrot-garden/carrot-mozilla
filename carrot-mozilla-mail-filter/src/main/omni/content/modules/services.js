Components.utils.reportError("services");

let EXPORTED_SYMBOLS = [ "services" ];

let services = {};

services.hello = function (root) {

	root.window.alert("hello services");

};
