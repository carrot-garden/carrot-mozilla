var carrotLog = {};
var getWindowId = {};
var getWindowType = {};


function cmdTEST(){

	carrotLog.info( 'getWindowId: ' + getWindowId( window ) );
	carrotLog.info( 'getWindowType: ' + getWindowType( window ) );
	
	
	
}

//	###################################
//		body
//	###################################

try {

	var carrot_garden = Components.classes["@mozilla.org/carrot_garden/service;1"]
		.getService(Components.interfaces.cgICarrotGarden).wrappedJSObject;

	carrotLog = carrot_garden.log;
	carrotLog.info( 'SearchDialog.js loaded' )
	
	getWindowId = carrot_garden.gui.getWindowId;
	getWindowType = carrot_garden.gui.getWindowType;
					
	var carrotMail = new carrot_garden.gui.classMailCommands( window );
	window.addEventListener( "load", carrotMail.initElements, false );
//	window.addEventListener( "load", carrotMail.attachListenerMessagePaneContext, false );
//	window.addEventListener( "onfocus", carrotMail.listenerWindowFocus, false);
	
	var carrotFolderAction = new carrot_garden.gui.classFolderAction( window );

	window.addEventListener( "load", carrotFolderAction.initElements, false );
		
} catch( ex ) {
	
	Components.utils.reportError( 'carrot_garden: can not initialize' );
	
}

