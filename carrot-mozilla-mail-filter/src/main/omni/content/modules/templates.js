"use strict";

Components.utils.import("resource://${package}/modules/log.js");
var logger = log.makeLogger("templates.js", "Debug");
logger.debug("init");

//

var EXPORTED_SYMBOLS = [ "templates" ];

var templates = this;

//

var COMMENT = "{ id : '(ID)',  name : '(NAME)', email: '(EMAIL)', subject : '(SUBJECT)' }";

var FILTER_FROM_OR_TOCC = {
	name : "(TYPE): (NAME) (EMAIL)",
	comment : COMMENT,
	searchTerms : [ {
		booleanAnd : "BooleanOR", // nsMsgSearchBooleanOp
		attrib : "Sender", // nsMsgSearchAttrib
		op : "Contains", // nsMsgSearchOp
		value : "(EMAIL)", // String
	}, {
		booleanAnd : "BooleanOR", // nsMsgSearchBooleanOp
		attrib : "ToOrCC", // nsMsgSearchAttrib
		op : "Contains", // nsMsgSearchOp
		value : "(EMAIL)", // String
	} ],
	filterActions : [ {
		action : "MoveToFolder", // nsMsgFilterAction
		value : "(FOLDER)/(NAME) (EMAIL)", // String
	} ],
};

var FILTER_FROM_OR_TOCC_OR_REPL = {
	name : "(TYPE): (NAME) (EMAIL)",
	comment : COMMENT,
	searchTerms : [ {
		booleanAnd : "BooleanOR", // nsMsgSearchBooleanOp
		attrib : "Sender", // nsMsgSearchAttrib
		op : "Contains", // nsMsgSearchOp
		value : "(EMAIL)", // String
	}, {
		booleanAnd : "BooleanOR", // nsMsgSearchBooleanOp
		attrib : "ToOrCC", // nsMsgSearchAttrib
		op : "Contains", // nsMsgSearchOp
		value : "(EMAIL)", // String
	}, {
		booleanAnd : "BooleanOR", // nsMsgSearchBooleanOp
		attrib : "Reply-To", // nsMsgSearchAttrib
		op : "Contains", // nsMsgSearchOp
		value : "(EMAIL)", // String
	} ],
	filterActions : [ {
		action : "MoveToFolder", // nsMsgFilterAction
		value : "(FOLDER)/(NAME) (EMAIL)", // String
	} ],
};

var FILTER_FROM_OR_TO = {
	name : "(TYPE): (NAME) (EMAIL)",
	comment : COMMENT,
	searchTerms : [ {
		booleanAnd : "BooleanOR", // nsMsgSearchBooleanOp
		attrib : "Sender", // nsMsgSearchAttrib
		op : "Contains", // nsMsgSearchOp
		value : "(EMAIL)", // String
	}, {
		booleanAnd : "BooleanOR", // nsMsgSearchBooleanOp
		attrib : "To", // nsMsgSearchAttrib
		op : "Contains", // nsMsgSearchOp
		value : "(EMAIL)", // String
	} ],
	filterActions : [ {
		action : "MoveToFolder", // nsMsgFilterAction
		value : "(FOLDER)/(NAME) (EMAIL)", // String
	} ],
};

var FILTER_FROM_DOMAIN = {
	name : "(TYPE): (COMPANY) @(DOMAIN)",
	comment : COMMENT,
	searchTerms : [ {
		booleanAnd : "BooleanOR", // nsMsgSearchBooleanOp
		attrib : "Sender", // nsMsgSearchAttrib
		op : "Contains", // nsMsgSearchOp
		value : "(DOMAIN)", // String
	} ],
	filterActions : [ {
		action : "MoveToFolder", // nsMsgFilterAction
		value : "(FOLDER)/(COMPANY) @(DOMAIN)", // String
	} ],
};

var FILTER_FROM_DOMAIN_2 = {
	name : "(TYPE): (NAME) @(DOMAIN)",
	comment : COMMENT,
	searchTerms : [ {
		booleanAnd : "BooleanOR", // nsMsgSearchBooleanOp
		attrib : "Sender", // nsMsgSearchAttrib
		op : "Contains", // nsMsgSearchOp
		value : "(DOMAIN)", // String
	} ],
	filterActions : [ {
		action : "MoveToFolder", // nsMsgFilterAction
		value : "(FOLDER)/(NAME) @(DOMAIN)", // String
	} ],
};

var FILTER_FROM_EMAIL = {
	name : "(TYPE): (NAME) (EMAIL)",
	comment : COMMENT,
	searchTerms : [ {
		booleanAnd : "BooleanOR", // nsMsgSearchBooleanOp
		attrib : "Sender", // nsMsgSearchAttrib
		op : "Contains", // nsMsgSearchOp
		value : "(EMAIL)", // String
	} ],
	filterActions : [ {
		action : "MoveToFolder", // nsMsgFilterAction
		value : "(FOLDER)/(NAME) (EMAIL)", // String
	} ],
};

var FILTER_COMPANY_PERSON = {
	name : "(TYPE): (COMPANY) @(DOMAIN) : (EMAIL)",
	comment : COMMENT,
	searchTerms : [ {
		booleanAnd : "BooleanOR", // nsMsgSearchBooleanOp
		attrib : "Sender", // nsMsgSearchAttrib
		op : "Contains", // nsMsgSearchOp
		value : "(EMAIL)", // String
	}, {
		booleanAnd : "BooleanOR", // nsMsgSearchBooleanOp
		attrib : "To", // nsMsgSearchAttrib
		op : "Contains", // nsMsgSearchOp
		value : "(EMAIL)", // String
	} ],
	filterActions : [ {
		action : "MoveToFolder", // nsMsgFilterAction
		value : "(FOLDER)/(COMPANY) @(DOMAIN)", // String
	} ],
};

var FILTER_NAME_AND_DOMAIN = {
	name : "(TYPE): (NAME) @(DOMAIN)",
	comment : COMMENT,
	searchTerms : [ {
		booleanAnd : "BooleanAND", // nsMsgSearchBooleanOp
		attrib : "Sender", // nsMsgSearchAttrib
		op : "Contains", // nsMsgSearchOp
		value : "(NAME)", // String
	}, {
		booleanAnd : "BooleanAND", // nsMsgSearchBooleanOp
		attrib : "Sender", // nsMsgSearchAttrib
		op : "Contains", // nsMsgSearchOp
		value : "(DOMAIN)", // String
	} ],
	filterActions : [ {
		action : "MoveToFolder", // nsMsgFilterAction
		value : "(FOLDER)/(NAME) @(DOMAIN)", // String
	} ],
};

//

/** keep last */
var LIST = [ {
	id : "employer-1",
	menu : "Employer (hr company)",
	type : "Employer",
	folder : "Employers",
	template : FILTER_FROM_DOMAIN,
}, {
	id : "employer-2",
	menu : "Employer (hr person)",
	type : "Employer",
	folder : "Employers",
	template : FILTER_COMPANY_PERSON,
}, {
	id : "news-group-1",
	menu : "News Group",
	type : "EventsNews",
	folder : "News",
	template : FILTER_FROM_OR_TOCC_OR_REPL,
}, {
	id : "blogger-1",
	menu : "Blogger",
	type : "Blog",
	folder : "Blogs",
	template : FILTER_NAME_AND_DOMAIN,
}, {
	id : "vendor-1",
	menu : "Vendor (domain)",
	type : "Vendor",
	folder : "Vendors",
	template : FILTER_FROM_DOMAIN,
}, {
	id : "vendor-2",
	menu : "Vendor (name)",
	type : "Vendor",
	folder : "Vendors",
	template : FILTER_FROM_DOMAIN_2,
}, {
	id : "person-1",
	menu : "Person",
	type : "Person",
	folder : "People",
	template : FILTER_FROM_EMAIL,
} ];

//

