"use strict";

Components.utils.import("resource://${package}/modules/log.js");
const
logger = log.makeLogger("mailFilter.js", "Debug");
logger.debug("init");

Components.utils.import("resource://gre/modules/mailServices.js");

var EXPORTED_SYMBOLS = [ "mailFilter" ];

const
mailFilter = this;

//

logger.debug(MailServices.filters);

{
	
	var foo = iface.OpenFilterList();

	}