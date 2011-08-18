//	UPDATE

var log = {};

function componentServiceInitialize( object ){
	log = object.log;
}

var extensionListInstalled = {};


var extensionListRequired = {
	'{DF8E5247-8E0A-4de6-B393-0735A39DFD80}': {
		'name': 'jsLib',
		'minVersion': '0.1.347',
		'maxVersion': '0.1.347',
	},
	'{847b3a00-7ab1-11d4-8f02-006008948af5}': {
		'name': 'Enigmail',
		'minVersion': '0.94.1',
		'maxVersion': '0.94.1',
	},
};


var extensionListIncompatible = {
	'copysent2current@ggbs.de': {
		'name': 'Copy Sent to Current',
		'minVersion': '*',
		'maxVersion': '*',
	},	
};

var extensionListPolicy = {
	'{f6090211-2004-44d8-9090-be3c2adfd66f}': {
		'name': 'Change quote and reply format',
		'minVersion': '0.4.13',
		'maxVersion': '0.4.13',
	},	
};

function classExtensionUpdate(){
	
	var CI = Components.interfaces;
	var CC = Components.classes;
	
	//	http://www.xulplanet.com/references/xpcomref/ifaces/nsITimerCallback.html
	function classTimerCallback() {

		this.notify = function notify( timer ){
			log.debug( 'timer A : ')
		}

	}
	
	var timerID = 'carrot_garden.timer';
	var timerCallback = new classTimerCallback();

//	var timerCallback = timerManager.QueryInterface(Components.interfaces.nsITimerCallback);
//	timerCallback.notify = function notify( timer ){
//		log.debug( 'timerX: ')
//	}	

	var timerInterval = 100;
	
	this.windowOnLoad = function windowOnLoad() {
//		timerManager.registerTimer( timerID, timerCallback, timerInterval );
		timerManager.registerTimer( timerID, ( new classTimerCallback() ), timerInterval );
		log.debug( 'timer registered ')
	}
	
}

function makeExtensionListInstalled(){

	log.thisLevel( log.level.debug );

	var extMgr = Components.classes["@mozilla.org/extensions/manager;1"]
		.getService(Components.interfaces.nsIExtensionManager);
	
	var nsIUpdateItem = Components.interfaces.nsIUpdateItem;
	
	var itemType = nsIUpdateItem.TYPE_EXTENSION;
	
	var list = [];
	
	try {
		list = extMgr.getItemList( itemType, { } );
	} catch( ex ) {
		list = extMgr.getItemList( null, itemType, { } );
	}
	
	if( list ) {
		for( var item in list ) {
			var eKey = list[item].id;
			var eName = list[item].name
			var eVersion = list[item].version 
			
			extensionListInstalled[ eKey ] = {
				'name': eName,
				'version': eVersion,
			}
			log.debug( 'eKey: ' + eKey + '  eName: ' + eName + '  eVersion: ' + eVersion );
		}
	}
}
		