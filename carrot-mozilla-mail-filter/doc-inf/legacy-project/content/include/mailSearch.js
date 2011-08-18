//	MAIL SEARCH

var log = {};

function componentServiceInitialize( object ){
	log = object.log;
}

//	http://www.xulplanet.com/references/xpcomref/ifaces/nsMsgFilterType.html
var MsgFilterType = {
	InboxRule: 1,
	InboxJavaScript: 2,
	Inbox: 3,
	NewsRule: 4,
	NewsJavaScript: 8,
	News: 11,
	All: 15,
}

//	http://www.xulplanet.com/references/xpcomref/ifaces/nsMsgSearchAttrib.html
var MsgSearchAttrib = {
	'default' 	: -1,
 	'subject'	: 0,
 	'sender'	: 1,
 	'from'		: 1,	//	dup
 	'body'	: 2,
 	'date'	: 3,
 	'priority'	: 4,
 	'msgstatus'	: 5,
 	'status'	: 5,
 	'to'	: 6,
 	'cc'	: 7,
 	'toorcc'	: 8,
 	'location'	: 9,
 	'messagekey'	: 10,
 	'ageindays'	: 11,
 	'folderinfo'	: 12,
 	'size'	: 13,
 	'anytext'	: 14,
 	'keywords'	: 15,
 	'name'	: 16,
 	'displayname'	: 17,
 	'nickname'	: 18,
 	'screenname'	: 19,
 	'email'	: 20,
 	'additionalemail'	: 21,
 	'phonenumber'	: 22,
 	'workphone'	: 23,
 	'homephone'	: 24,
 	'fax'	: 25,
 	'pager'	: 26,
 	'mobile'	: 27,
 	'city'	: 28,
 	'street'	: 29,
 	'title'	: 30,
 	'organization'	: 31,
 	'department'	: 32,
 	'hasattachmentstatus'	: 46,
 	'junkstatus'	: 47,
 	'label'	: 48,
 	'otherheader'	: 49,
 	'knummsgsearchattributes'	: 100,
}

//	http://www.xulplanet.com/references/xpcomref/ifaces/nsMsgSearchOp.html
var MsgSearchOp = {
 	'contains' 	: 0,
 	'doesntcontain' 	: 1,
 	'doesnotcontain' 	: 1,	//	dup
 	'is' 	: 2,
 	'isnt' 	: 3,
 	'isnot' 	: 3,	//	dup
 	'isempty' 	: 4,
 	'isbefore' 	: 5,
 	'isafter' 	: 6,
 	'ishigherthan' 	: 7,
 	'islowerthan' 	: 8,
 	'beginswith' 	: 9,
 	'endswith' 	: 10,
 	'soundslike' 	: 11,
 	'ldapdwim' 	: 12,
 	'isgreaterthan' 	: 13,
 	'islessthan' 	: 14,
 	'namecompletion' 	: 15,
 	'isinab' 	: 16,
 	'isntinab' 	: 17,
 	'isnotinab' 	: 17,	//	dup
 	'knummsgsearchoperators' 	: 18,
}

//	http://www.xulplanet.com/references/xpcomref/ifaces/nsMsgSearchBooleanOp.html
var MsgSearchBooleanOp = {
  	'booleanor'	: 0,
  	'or'  		: 0,	//	dup
 	'booleanand': 1,
 	'and' 		: 1,	//	dup
}

//	???
var MsgSearchStatus = {
  	'replied'	: 0,
  	'read'		: 1,	
   	'new'		: 2,
 	'forwarded'	: 3,
 	'flagged'	: 4,
}

//	http://www.xulplanet.com/references/xpcomref/ifaces/nsMsgPriority.html
var MsgSearchPriority = {
	'notset': 0,
	'none'	: 1,
	'lowest': 2,
	'low'	: 3,
	'normal': 4,
	'high'	: 5,
	'highest': 6,
	'default': 4,	//	dup
}

//	http://www.xulplanet.com/references/xpcomref/comps/c_messengerfilterplugin1namebayesianfilter.html
var MsgSearchJunkStatus = {
	'unclassified': 0,
	'good'		: 1,
	'junk'		: 2,
}

//	http://www.xulplanet.com/references/xpcomref/ifaces/nsMsgFilterAction.html
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
}

var rx = {
	parseTermList : new RegExp ( '((and|or)\\s*\\(\\s*(("[^"]*")|([^"()]))*\\s*\\))', "gi" ),
	parseTerm : new RegExp ( '(and|or)|(("[^"]*")|([^"(),]))+(?=,|\\))', "gi" ),
	parseActionList : new RegExp ( '(\\s*\\(\\s*(("[^"]*")|([^"()]))*\\s*\\))', "gi" ),
	parseAction : new RegExp ( '(("[^"]*")|([^"(),]))+(?=,|\\))', "gi" ),
	cleanupParameter : new RegExp ( "[\\s']", "g"),
	whiteSpace : new RegExp ( "[\\s]", "g" ),
	customHeader : new RegExp ( "[^:]+", "g"  ),
	charDoubleQuote : new RegExp ( '"', "g" ),
}


function cleanupStringParameter( parameter ){
	return parameter.toLowerCase().replace( rx.cleanupParameter, "" );
}


function getCustomHeaderAttrib( header ) {
	
	var validityMgr = Components.classes["@mozilla.org/mail/search/validityManager;1"]
		.getService(Components.interfaces.nsIMsgSearchValidityManager);
	
	var validityTbl = validityMgr.getTable(null);
	
	var attributes = validityTbl.getAvailableAttributes({});
	
	var prefBranch = Components.classes["@mozilla.org/preferences-service;1"]
		.getService(Components.interfaces.nsIPrefBranch);
	
	var hdrsArray = null;
	
	try {
	   var hdrs = prefBranch.getCharPref("mailnews.customHeaders");
	   hdrs = hdrs.replace( rx.whiteSpace, "" );
	   hdrsArray = hdrs.match( rx.customHeader );
	} catch(ex) {}
	
	if ( hdrsArray == null ) return null;
	
	var j=0;
	for (var i=0; i < attributes.length; i++) {
	   if( attributes[i] > Components.interfaces.nsMsgSearchAttrib.OtherHeader )  {
	      if ( hdrsArray[j++].toLowerCase() == header.toLowerCase() )
	         return attributes[i];
	   }
	}
	
	return null;
}

function parseTermList( strValue ) {
	var list = strValue.match( rx.parseTermList )
//	log.debug( list )
	return list;
}

function parseActionList( strValue ) {
	var list = strValue.match( rx.parseActionList )
//	log.debug( list )
	return list;
}



//	termString:
//	"OR (subject,contains,aaa@bbb.com)"
//	"AND (\"filter-display-separator\",contains,zzz)"
function newSearchTerm ( termString ) 
{
	var indexOf = { boolOp: 0, attrib: 1, op: 2, value: 3 }; 
	
	var termElements = termString.match( rx.parseTerm );
	
	if( termElements == null || 
		typeof(termElements) =='string' || 
		termElements.length != 4 ) 
		return null;
	
	var searchTerm = Components.classes["@mozilla.org/messenger/searchTerm;1"]
		.createInstance(Components.interfaces.nsIMsgSearchTerm);
	
	var boolOp = MsgSearchBooleanOp[ cleanupStringParameter( termElements[ indexOf.boolOp ] ) ];
	searchTerm.booleanAnd = ( boolOp == null ) ? MsgSearchBooleanOp.or : boolOp;
	
	var attribName = termElements[ indexOf.attrib ];
	var attrib = null;

	if( attribName.match( rx.charDoubleQuote ) ){
		attrib = getCustomHeaderAttrib( attribName.replace( rx.charDoubleQuote, "") );
		if ( attrib == null ) { log.debug('invalid custom attribute: ' + attribName )}
	} else {
		attrib = MsgSearchAttrib[ cleanupStringParameter( attribName ) ];
		if ( attrib == null ) { log.debug('invalid standard attribute: ' + attribName )}
	}
	searchTerm.attrib = attrib == null ? MsgSearchAttrib.subject : attrib;
	
	var op = MsgSearchOp[ cleanupStringParameter( termElements[ indexOf.op ] ) ];
	searchTerm.op = op == null ? MsgSearchOp.contains : op;

	var strValue = termElements[ indexOf.value ];
	strValue = strValue == null ? '' : strValue;
	strValue = carrot_garden.util.substituteVariables( strValue );
//	log.debug('strValue ' + strValue)

	var strValueClean = cleanupStringParameter( strValue );

	var intValue = parseInt( strValue );
	intValue = intValue ? intValue : 0;
//	log.debug('intValue ' + intValue)
	
	var junkValue = MsgSearchJunkStatus[ strValueClean ];
	junkValue = junkValue ? junkValue : MsgSearchJunkStatus.unclassified;
//	log.debug('junkValue ' + junkValue)

	var priorityValue = MsgSearchPriority[ strValueClean ];
	priorityValue = priorityValue ? priorityValue : MsgSearchPriority.notset;
//	log.debug('priorityValue ' + priorityValue)
	
	var statusValue = MsgSearchStatus[ strValueClean ];
	statusValue = statusValue ? statusValue : MsgSearchStatus.replied;
//	log.debug('statusValue ' + statusValue)

	var value = searchTerm.value
    	.QueryInterface(Components.interfaces.nsIMsgSearchValue);
	
    value.age = intValue;
//	value.date 
//	value.folder 
	value.junkStatus = junkValue;
	value.label = intValue;
//	value.msgKey 
	value.priority = priorityValue;
	value.size = intValue;
    value.status = statusValue;
    value.str = strValue;	
	//	must be last assignment:
    value.attrib = searchTerm.attrib;

	searchTerm.value = value;

//	searchTerm.arbitraryHeader = "";

	return searchTerm;
}


//	(actionName, actionValue):
//	action="Move to folder"
//	actionValue="mailbox://nobody@Local%20Folders/Inbox"
//	=> (Move to folder, mailbox://nobody@Local%20Folders/Inbox)
//	action="JunkScore"
//	actionValue="100"
//	=> (Junk Score, 100)

function newFilterAction( actionString ) {

//	log.thisLevel( log.level.debug );

	var indexOf = { type: 0, value: 1 }; 
	
	var actionElements = actionString.match( rx.parseAction );
	
	if( actionElements == null || 
		typeof( actionElements ) =='string' || 
		actionElements.length != 2 ){
			log.error('missing arguments');
			return null;
	} 

	var folder = carrot_garden.mailFolders.getLocalFolders();
	var filterList = folder.getFilterList(null);
	//	XXX todo what to do when there are no filteres in the list:
	var filter = filterList.getFilterAt(0);
	var action = filter.createAction();	
	
	var type = MsgFilterAction[ cleanupStringParameter( actionElements[ indexOf.type ] ) ];
	type = type? type : MsgFilterAction.markread;
	log.debug( 'type: ' + type );

	var strValue = actionElements[ indexOf.value ];
	strValue = strValue == null ? '' : strValue;
	strValue = carrot_garden.util.substituteVariables( strValue );
	log.debug('strValue: ' + strValue)

	var strValueClean = cleanupStringParameter( strValue );

	var intValue = parseInt( strValue );
	intValue = intValue ? intValue : 0;
	log.debug( 'intValue: ' + intValue )

	var priorityValue = MsgSearchPriority[ strValueClean ];
	priorityValue = priorityValue ? priorityValue : MsgSearchPriority.notset;
	log.debug( 'priorityValue: ' + priorityValue )

	action.type = type;

	switch ( type ){
		case 1:
		case 16:
			action.targetFolderUri = strValue;
			break;
		case 9:
		case 10:
			action.strValue = strValue;
			break;
		case 8:
			action.label = intValue;
			break;
		case 2:
			action.priority = priorityValue;
			break;
		case 14:
			action.junkScore = intValue;
			break;
		default:
			break;
	}

	return action;
}




//	actionName, actionValue:
//	action="Move to folder"
//	actionValue="mailbox://nobody@Local%20Folders/Inbox"
//	action="JunkScore"
//	actionValue="100"
function ZZZsetFilterAction_2( action, actionName, actionValue ){

	var type = MsgFilterAction[ cleanupStringParameter( actionName ) ];
	action.type = ( type == null ) ? MsgFilterAction.markread : type;
	
	var strValue = ( actionValue == null ) ? '' : actionValue;
	strValue = substituteVariables( strValue ).toString();

	var strValueClean = cleanupStringParameter( strValue );

	var intValue = parseInt( strValue );
	intValue = ( intValue == NaN ) ? 0 : intValue;

	var priorityValue = MsgSearchPriority[ strValueClean ];
	priorityValue = priorityValue == null ? MsgSearchPriority.notset : priorityValue;

	action.junkScore = intValue;
	action.label = intValue;
	action.priority = priorityValue;
	action.strValue = strValue;
	action.targetFolderUri = strValue;
	
	return action;
}


function makeFilterByArgs( args ) {
	
	log.thisLevel( log.level.debug );
	
	var folder = args.folder;
	var filterName = args.filterName;
	var filterTerms = args.filterTerms;
	var filterActions = args.filterActions;
	
	if( ! folder ||
		! filterName ||
		! filterTerms ||
		! filterActions
	) {
		log.error('missig agruments');
		return null;
	}
	
	var filterList = folder.getFilterList( null );	
	log.debug( 'filterCount :' + filterList.filterCount );
	
	var existingFilter = filterList.getFilterNamed ( filterName );
	
	if ( existingFilter ) {
		log.error ( 'filter exists: ' + filterName );
		return null;
	}
	
	var filter = filterList.createFilter ( filterName ); 
	
	for ( var k = 0; k < filterTerms.length; k++ )	{
//		filter.appendTerm ( newSearchTerm( filterTerms[k] ) );
		filter.appendTerm( filterTerms[k] );
	}

	for ( var k = 0; k < filterActions.length; k++ )	{
//		var action = filter.createAction();
//		action = setFilterAction( action, filterActions[k].name, filterActions[k].value );
		var action = filterActions[k];
		filter.appendAction( action );
	}
	
	filter.enabled = args.enabled ? true : false;
	filter.temporary = args.temporary ? true : false;
	filter.filterDesc = args.filterDesc ? args.filterDesc : "carrot_garden";
	
	filterList.insertFilterAt ( args.insertFilterAt ? args.insertFilterAt : 0, filter );
	
	if( ! filter.temporary ){
		carrot_garden.mailFilters.saveToDefaultFile( filterList );
	}
	
	return filter;
}



function newSearchTerm2 ( booleanAnd, attrib, op, str, beginsGrouping, endsGrouping )
{
	//	new seach element - part of terms colletion	
	var searchTerm = Components.classes["@mozilla.org/messenger/searchTerm;1"]
		.createInstance(Components.interfaces.nsIMsgSearchTerm);

		//searchTerm.arbitraryHeader = "";
		searchTerm.booleanAnd = booleanAnd;
		searchTerm.attrib = attrib;
		searchTerm.op = op;
					
	var value = searchTerm.value
    	.QueryInterface(Components.interfaces.nsIMsgSearchValue);
    value.str    = str; // "@carrot.com";
    value.attrib = searchTerm.attrib;
	searchTerm.value = value;

	if( beginsGrouping != null ) { searchTerm.beginsGrouping = beginsGrouping; };
	if( endsGrouping != null ) { searchTerm.endsGrouping = endsGrouping; };

	return searchTerm; 
}

function TEST(){
	
	log.thisLevel( log.level.debug );
	
	var searchTerms = [
		newSearchTerm2 ( 1, 1, 0, 'username', false, true ),
		newSearchTerm2 ( 0, 1, 0, 'carrot.com', null, null ),
	];
	
	var searchActions = [
		newFilterAction( '(move to folder,mailbox://nobody@Local%20Folders/Inbox/TEST)' ),
	];
	
	var args = {
		folder: carrot_garden.mailFolders.getLocalFolders(),
		filterName: 'AAA_123',
		filterTerms: searchTerms,
		filterActions: searchActions,
		enabled: true,
		temporary: true,
		filterDesc: "AAA_123",
	}
	
	var filter = makeFilterByArgs( args );
	
	log.debug( 'filter.filterName: ' + filter.filterName );
	
	var terms = filter.searchTerms;
	
	log.debug( 'terms.count() ' + terms.Count() );
	 
	for( var k = 0; k < terms.Count(); k++ ){
		var term = terms.GetElementAt(k)
			.QueryInterface(Components.interfaces.nsIMsgSearchTerm);
		log.debug( 'booleanAnd : ' + term.booleanAnd  + ' | termAsString: ' + term.termAsString +
			' | ' + term.beginsGrouping + 
			' | ' + term.endsGrouping + 
		'');
	}
	
	var actions = filter.actionList;

	log.debug( 'actionList.count() ' + actions.Count() );

	for( var k = 0; k < actions.Count(); k++ ){
		var action = actions.GetElementAt(k)
			.QueryInterface(Components.interfaces.nsIMsgRuleAction);
		log.debug( 'type : ' + action.type + ' | targetFolderUri: ' + action.targetFolderUri );
	}
	
}
	