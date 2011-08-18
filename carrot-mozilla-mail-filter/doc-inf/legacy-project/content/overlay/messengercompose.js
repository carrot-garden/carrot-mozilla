// global

try {

	var carrot_garden = Components.classes["@mozilla.org/carrot_garden/service;1"]
				.getService(Components.interfaces.cgICarrotGarden).wrappedJSObject;
	
	var carrotGui = carrot_garden.gui;
	var carrotLog = carrot_garden.log;
	carrotLog.info( 'messengercompose.js loaded' )
	
//	carrotLog.clear();
//	carrotLog.test();
	
	//	XXX remove
	var dump2 = carrot_garden.dump2;
			

	function testCarrotAttachment(){
	
		var gui = carrot_garden.gui;
		var util = carrot_garden.util;
		var pref = carrot_garden.pref;
		
		var fcc_settings_rdf = 'mailFeatures.accountManager.parameters.fcc_settings_rdf';
		
		var dsPrefString = pref.getPref( fcc_settings_rdf );
		alert( 'dsPrefString: ' + dsPrefString );
		dump2( 'dsPrefString: ' + dsPrefString );
		
			
	}
	
	//var addressCol1 = document.getElementById("addressCol1#1");
	//var menuitemsAC1 = addressCol1.getElementsByTagName('menuitem')
	//value="addr_to" 
	//menuitemsAC1[0].setAttribute( "style", "background-color: #33DD00;" ) // background-color: #33DD00;
	//addressCol1.selectedItem = 2;
	
	
	var carrotComposeOverRide = new carrotGui.classComposeOverRide( window );
	window.addEventListener("load", carrotComposeOverRide.init, false);	//	non capturing event
	
	var carrotCompose = new carrotGui.classComposeCommands( window );
	window.addEventListener("keypress", carrotCompose.listenerKeyPress, false);	//	non capturing event
	
	var carrotMail = new carrotGui.classMailCommands( window );
	
	
	//	setup "copy on send" FCC processor object 
	var carrotCopySent = new carrotGui.classCopySent( window, carrotGui.xul.fccFolderPicker );
	
	//	setup message "copy on send" keys
	window.addEventListener("load", carrotCopySent.initElements, false);	//	non capturing event
	
	//	setup message "copy on send" life cycle management events
	window.addEventListener("load", carrotCopySent.listenerLoad, false);	//	non capturing event
	window.addEventListener('compose-window-init',  carrotCopySent.listenerInit, true);	//	top level event capture
	window.addEventListener('compose-from-changed', carrotCopySent.listenerFrom, true);	//	top level event capture
	window.addEventListener('compose-send-message', carrotCopySent.listenerSend, true);	//	top level event capture	
	window.addEventListener('compose-window-close', carrotCopySent.listenerClose, true);	//	top level event capture
	window.addEventListener('unload', carrotCopySent.listenerUnload, false);	//	non capturing event
		
} catch( e ) {
	
	Components.utils.reportError( 'carrot_garden: can not initialize : ' + e );
	
}

