var carrotLog = {};

try {

	var carrot_garden = Components.classes["@mozilla.org/carrot_garden/service;1"]
				.getService(Components.interfaces.cgICarrotGarden).wrappedJSObject;

	carrotLog = carrot_garden.log;
	carrotLog.info( 'messageWindow.js loaded' )

	var carrotMail = new carrot_garden.gui.classMailCommands( window );

	var carrotFolderAction = new carrot_garden.gui.classFolderAction( window );

	window.addEventListener( "load", function() 
		{ carrot_garden.gui.initGuiElementsKeys( window, 'mailGui.messageWindow.elements' )}, 
		false );

	window.addEventListener( "load", carrotFolderAction.initElements, false );
	
} catch( ex ) {
	
	Components.utils.reportError( 'carrot_garden: can not initialize' );
	
}
