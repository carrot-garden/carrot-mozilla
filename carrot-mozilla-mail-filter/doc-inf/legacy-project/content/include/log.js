//	LOG

//var log = {};

function componentServiceInitialize( object ){
//	log = object.log;
}



//	global console service for this extension
var consoleService = Components.classes['@mozilla.org/consoleservice;1'].
		getService(Components.interfaces.nsIConsoleService);

//	description of logging level types
var level = {
	report: -1,
	none: 0,
	error: 1,
	warning: 2,
	info: 3,
	debug: 4,
	detail: 5,
}

//	description of logging level names; used in output
var levelName = {
	report: 'report ',
	none: 	'none   ',
	error: 	'error  ',
	warning:'warning',
	info: 	'info   ',
	debug: 	'debug  ',
	detail: 'detail ',
}

//	level of logging detail - global, 
// 	unless overridden by functionLevel
this.currentLevel = level.none;

//	pref-controlled flag whether to use log file
this.useFile = false;

//	functionLevel == function name log hash,
//
//	it stores individual log levels,
//	must be set in calling function; 
//
//	usage:
//	1) in calling function:	
//		log.functionLevel['testFunction'] = log.level.debug; 
//		function testFunction(){ log.debug('a-a-a') }
//		testFunction()
//	2) testFunction call will now produce logging at 'debug' level
//		regardless of previous setting
//	3) to reset:
//		log.functionLevel['testFunction'] = null;
this.functionLevel = {};

//	default level
var defaultLevel = level.error;

//	informative header - i.e. extension name
var header = 'carrot_garden';

//	function name place holders
var global = 'global';
var anonymous = 'anonymous';

//	XXX obsolete - must be replaced
function logMessage( str ){
	var msg	= '';
	if( logMessage.caller == null ) {
		msg = 'global'; 
	} else {
		msg = logMessage.caller.name; 
		if ( msg == '' ) msg = 'anonymous';
	}
	msg = '[carrot_garden:' + msg + '] ' + str; 
	consoleService.logStringMessage( msg );
}

//
//	usage:
// 	var log = this_extension_name.log;
//	log.error( 'this error description' );
//
function report( message ){
	if( report.caller == null ) {
		var callerName = global; 
	} else {
		var callerName = report.caller.name != '' ? report.caller.name : anonymous ; 
	}
	logMessageDetail( header, levelName.report, callerName, message );
}
function error( message ){
	if( this.currentLevel < level.error ) return;
	if( error.caller == null ) {
		var callerName = global; 
	} else {
		var callerName = error.caller.name != '' ? error.caller.name : anonymous ; 
	}
	logMessageDetail( header, levelName.error, callerName, message );
}
function warning( message ){
	if( this.currentLevel < level.warning ) return;
	if( warning.caller == null ) {
		var callerName = global; 
	} else {
		var callerName = warning.caller.name != '' ? warning.caller.name : anonymous ; 
	}
	logMessageDetail( header, levelName.warning, callerName, message );
}
function info( message ){
	if( this.currentLevel < level.info ) return;
	if( info.caller == null ) {
		var callerName = global; 
	} else {
		var callerName = info.caller.name != '' ? info.caller.name : anonymous ; 
	}
	logMessageDetail( header, levelName.info, callerName, message );
}
function debug( message ){
	if( debug.caller == null ) {
		var callerName = global; 
	} else {
		var callerName = debug.caller.name != '' ? debug.caller.name : anonymous ; 
	}
	if( this.currentLevel >= level.debug || 
		this.functionLevel[callerName] != null && 
		this.functionLevel[callerName] >= level.debug ){
//			var message = arguments.join(' ');
			logMessageDetail( header, levelName.debug, callerName, message );
	}
}

function detail( message ){
	if( detail.caller == null ) {
		var callerName = global; 
	} else {
		var callerName = detail.caller.name != '' ? detail.caller.name : anonymous ; 
	}
	if( this.currentLevel >= level.detail || 
		this.functionLevel[callerName] != null && 
		this.functionLevel[callerName] >= level.detail )
		logMessageDetail( header, levelName.detail, callerName, message );
}

function arrayJoin( list, sep ){
	var out = '';
	for( var k = 0; k < list.length; k++ ) {
		out += list[k];
		out += ( k == list.length - 1 ) ? '' : sep;
	}
	return out;
}

function thisLevel( value ){
	if( thisLevel.caller == null ) {
		var callerName = global; 
	} else {
		var callerName = thisLevel.caller.name != '' ? thisLevel.caller.name : anonymous ; 
	}
	if( this.functionLevel[ callerName ] == null ){
		this.functionLevel[ callerName ] = value;
		consoleService.logStringMessage( 
			'[' + header + '::log.thisLevel] ' + callerName + ' set to ' + value );
	} 
}

function test(){
	if( test.caller == null ) {
		var callerName = global; 
	} else {
		var callerName = test.caller.name != '' ? test.caller.name : anonymous ; 
		consoleService.logStringMessage('callerName: ' + callerName)
		for( var item in test.caller ){
			consoleService.logStringMessage('item: ' + item )
		}
	}
}

function clear(){
	consoleService.logStringMessage( null );
}

//	common output methods
function logMessageDetail( header, type, callerName, message ){
	var msg	= '[' + header + ':' + type + ':' + callerName + '] ' + message;
	if( type == levelName.error ){
		//	http://developer.mozilla.org/en/docs/Components.utils.reportError
		Components.utils.reportError( msg );
	} else {
		//	http://www.xulplanet.com/references/xpcomref/ifaces/nsIConsoleService.html
		consoleService.logStringMessage( msg );
	}
}


//logMessage('### log module was run 1 ###')
//for ( var item in this.__parent__ ){
//	logMessage('item: ' + item )
//}
//logMessage('### log module was run 2 ###')
	