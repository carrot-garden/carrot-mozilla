/**
 * 
 * http://mxr.mozilla.org/mozilla/source/mailnews/public/MailNewsTypes2.idl
 * 
 * http://mxr.mozilla.org/mozilla/source/mailnews/base/search/public/nsMsgFilterCore.idl
 * 
 * http://mxr.mozilla.org/mozilla/source/mailnews/base/search/public/nsMsgSearchCore.idl 
 */


// nsMsgFilterType
var MsgFilterType = {
	InboxRule : 1,
	InboxJavaScript : 2,
	Inbox : 3,
	NewsRule : 4,
	NewsJavaScript : 8,
	News : 11,
	All : 15,
}

// nsMsgSearchAttrib
var MsgSearchAttrib = {
	'default' : -1,
	'subject' : 0,
	'sender' : 1,
	'from' : 1, // dup
	'body' : 2,
	'date' : 3,
	'priority' : 4,
	'msgstatus' : 5,
	'status' : 5,
	'to' : 6,
	'cc' : 7,
	'toorcc' : 8,
	'location' : 9,
	'messagekey' : 10,
	'ageindays' : 11,
	'folderinfo' : 12,
	'size' : 13,
	'anytext' : 14,
	'keywords' : 15,
	'name' : 16,
	'displayname' : 17,
	'nickname' : 18,
	'screenname' : 19,
	'email' : 20,
	'additionalemail' : 21,
	'phonenumber' : 22,
	'workphone' : 23,
	'homephone' : 24,
	'fax' : 25,
	'pager' : 26,
	'mobile' : 27,
	'city' : 28,
	'street' : 29,
	'title' : 30,
	'organization' : 31,
	'department' : 32,
	'hasattachmentstatus' : 46,
	'junkstatus' : 47,
	'label' : 48,
	'otherheader' : 49,
	'knummsgsearchattributes' : 100,
}

// nsMsgSearchOp
var MsgSearchOp = {
	'contains' : 0,
	'doesntcontain' : 1,
	'doesnotcontain' : 1, // dup
	'is' : 2,
	'isnt' : 3,
	'isnot' : 3, // dup
	'isempty' : 4,
	'isbefore' : 5,
	'isafter' : 6,
	'ishigherthan' : 7,
	'islowerthan' : 8,
	'beginswith' : 9,
	'endswith' : 10,
	'soundslike' : 11,
	'ldapdwim' : 12,
	'isgreaterthan' : 13,
	'islessthan' : 14,
	'namecompletion' : 15,
	'isinab' : 16,
	'isntinab' : 17,
	'isnotinab' : 17, // dup
	'knummsgsearchoperators' : 18,
}

// nsMsgSearchBooleanOp
var MsgSearchBooleanOp = {
	'booleanor' : 0,
	'or' : 0, // dup
	'booleanand' : 1,
	'and' : 1, // dup
}

// ???
var MsgSearchStatus = {
	'replied' : 0,
	'read' : 1,
	'new' : 2,
	'forwarded' : 3,
	'flagged' : 4,
}

// nsMsgPriority
var MsgSearchPriority = {
	'notset' : 0,
	'none' : 1,
	'lowest' : 2,
	'low' : 3,
	'normal' : 4,
	'high' : 5,
	'highest' : 6,
	'default' : 4, // dup
}

// ???
var MsgSearchJunkStatus = {
	'unclassified': 0,
	'good'		: 1,
	'junk'		: 2,
}

//	nsMsgFilterAction.html
var MsgFilterAction = {
	'none'  	: 0,
	'movetofolder' 	: 1,
	'changepriority': 2,
	'delete' 	: 3,
	'markread' 	: 4,
	'killthread' 	: 5,
	'watchthread' 	: 6,
	'markflagged' 	: 7,
	'label' 	: 8,
	'reply' 	: 9,
	'forward' 	: 10,
	'stopexecution' 	: 11,
	'deletefrompop3server' 	: 12,
	'leaveonpop3server' 	: 13,
	'junkscore' 	: 14,
	'fetchbodyfrompop3server' 	: 15,
	'copytofolder' 	: 16,
	'addtag' : 17,
	'killsubthread' : 18,	
}


