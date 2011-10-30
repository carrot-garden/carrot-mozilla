//

Components.utils.import("resource://${package}/modules/log.js");
const
logger = log.makeLogger("services.js", "Debug");
logger.debug("init");

//

let EXPORTED_SYMBOLS = [ "services" ];

const services = this;

function hello (window) {

	window.alert("hello services");

};
