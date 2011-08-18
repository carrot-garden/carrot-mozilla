
var listString = gAccountsVendorDomainList.join("|") + "|" + gHomeDomainList.join("|");  
var ignoreListExternal = listString.split("|");
var ignoreListAll = gAccountsVendorDomainList;


//############################
//	MENU BAR
//############################

function cmdTEST(){

	var mailSearch = carrot_garden.mailSearch;
	
	mailSearch.TEST();


	return;

	var update = carrot_garden.update;

	update.makeExtensionListInstalled();

	return;
	
	var fileSys = carrot_garden.fileSys;
	
//	fileSys.TEST();

	fileSys.setSpecialFolderTemporaryFiles();

	return;

///	alert(123)

	var list = new Array();
	
	var ascii = [
	'q','w','e','r','t','y','u','i','o','p',
	'a','s','d','f','g','h','j','k','l',
	'z','x','c','v','b','n','m',
	];

	return;

//	#####################

	var simple = Components.classes["@carrot.com/simple;1"]
		.createInstance();

	simple = simple.QueryInterface(Components.interfaces.nsISimple);

	var obj = {}
	
	simple.write( "aaa 123" )	
	
	alert( simple + ' ' + Components.interfaces.nsISimple +' ' + obj.value )	

}

function cmdLOOP(){
	for ( var k = 0; k < 1000; k++ ){
		cmdAccounts.membersCreate();
		dump2 ("cmdLOOP: " + k );	
	}
}





function accountsCommands(){

	var subfolders = new Array();

	var Init = function() {
		var folder = carrotMsgFolderFromUri( gAccountsFolderURI );
		subfolders = carrotGetSubFolders ( folder, 0); // regular folders only
			return subfolders.length;	//	size of K iteration, starting with 0
	}
	var Exit = function() {
		//	saveVirtualFolders();
		backupVirtualFoldersFile();
	    Alert ( window, "Done. ThunderBird will restart now.");
		restartApplication();
	}
	var genericsCreateLoop = function (K) {
		accountsSfGenericsCreate( subfolders[K] );
		return subfolders[K].name;
	}
	var genericsDeleteLoop = function (K) {
		accountsSfGenericsDelete ( subfolders[K], deleteFolder ) ;
		return subfolders[K].name;
	}
	var membersCreateLoop = function (K) {
		accountsSfMembersCreate( subfolders[K], ignoreListExternal );
		return subfolders[K].name;
	}
	var membersDeleteLoop = function (K) {
		accountsSfMembersDelete ( subfolders[K], deleteFolder ) ;
		return subfolders[K].name;
	}
	var answer = function () {
		return Confirm ( window, "WARNING \n\n" +
			"This will affect a lot of folders,\n"+
			"and will require a restart.\n\n" +
			"ARE YOU SURE?"
		);
	}
	this.genericsCreate = function () {
		if ( ! answer()) return;
		progressMeter( { Init: Init, Loop: genericsCreateLoop, Exit: Exit } );
	}
	this.genericsDelete = function () {
		if ( ! answer()) return;
		progressMeter( { Init: Init, Loop: genericsDeleteLoop, Exit: Exit } );
	}
	this.membersCreate = function () {
		if ( ! answer()) return;
		progressMeter( { Init: Init, Loop: membersCreateLoop, Exit: Exit } );
	}
	this.membersDelete = function () {
		if ( ! answer()) return;
		progressMeter( { Init: Init, Loop: membersDeleteLoop, Exit: Exit } );
	}
	this.responseCreate = function() {
		myResponseCreate ( gAccountsFolderURI, gAccountsFolderMyResponse );
	}
	this.responseDelete = function() {
		deleteFolderURI2 ( gAccountsFolderURI, gAccountsFolderMyResponse );
	}
}


var cmdAccounts = new accountsCommands(); 


function XXXcmdBackupFilters(){
	backupFiltersFile ();	
}

function XXXcmdBackupVirtualFolders(){
	backupVirtualFoldersFile ();
}

function cmdSelectFolder ( folderName ){

	switch (folderName){
		case ("inbox"):
			uri = "mailbox://nobody@Local%20Folders/Inbox/_ME_"
			break;
		case ("accounts"):
			uri = gAccountsFolderURI + "/" + gAccountsFolderMyResponse
			break;
		case ("managers"): 
			uri = gManagersFolderURI + "/" + gManagersFolderMyResponse
			break;
		case ("vendors"): 
			uri = gVendorsFolderURI + "/" + gVendorsFolderMyResponse
			break;
	}
	
//	alert ( uri )
	SelectFolder ( convertToUri ( uri ) );
	
}
	

//############################
//	FOLDER PANE
//############################

function folderComandsForSelected(){

	var folderURI = "";
	var folder = Object;

	function Exit (){
		backupVirtualFoldersFile ();
	}	
	
	function Init (){
		folderURI = GetSelectedFolderURI();
		folder = carrotMsgFolderFromUri (folderURI);
	}
	this.genericsCreate = function (){
		Init ();
		accountsSfGenericsCreate ( folder );
		Exit ();
	}
	this.genericsDelete = function (){
		Init ();
		accountsSfGenericsDelete ( folder, deleteFolder2 );
		Exit ();
	}
	this.membersCreate = function (type){
		Init ();
		switch (type){
			case ("external"):
				accountsSfMembersCreate( folder, ignoreListExternal );
				break;
			case ("internal"):
				alert( "not implemented" );
				break;
			case ("all"): // except vendors, that are already included in GENERIC account folders
				accountsSfMembersCreate( folder, ignoreListAll );
				break;
		}
		Exit ();
	}
	this.membersDelete = function (){
		Init ();
		accountsSfMembersDelete ( folder, deleteFolder2 );
		Exit ();
	}
	this.allDelete = function (){
		Init ();
		deleteSearchFolders( folder, deleteFolder2 );
		Exit ();
	}
}

var cmdAccountsSelected = new folderComandsForSelected(); 


//############################
//	MESSAGE PANE
//############################


function XXXcmdManagerCreate(){
	
	var parentURI = gManagersFolderURI;
	var displayName = "Andrei Pozolotin";
	var statusValid = false;

	var emailAddress = document.popupNode.getAttribute("emailAddress");
	var displayName  = document.popupNode.getAttribute("displayName");
	
	var parser = emailParser ( emailAddress, displayName ) ;
	
	var args = {
		parentURI: parentURI,
		displayName: displayName,
		statusValid: statusValid
	};
	
	window.openDialog("chrome://carrot_garden/content/window/formManager.xul",
		"carrot_garden", "chrome,modal,centerscreen", args );	

	if ( args.statusValid ) {

		///	new folder
		var folder = carrotCreateFolder( args.parentURI, args.displayName );
		if ( ! folder ) { 
			alert ("cmdManagerCreate: \n\n folder create errror"); 
			return; 
		};

//dump2 ("convertToUri " + convertToUri ( folder.URI ))

		var filterTerms = Array(); var filterActions = Array();

//		appendFilterTerm ( filter, filterTerms[k].attrib, filterTerms[k].str , filterTerms[k].op, filterTerms[k].booleanAnd );
//		appendFilterAction ( filter, filterActions[k].type, filterActions[k].uri );

		filterTerms.push({ attrib: gAttribSender, str: parser.prefix, op: gOpContains, booleanAnd: gBooleanAND });
		filterActions.push({ type: gActMoveToFolder, uri: convertToUri ( folder.URI ) });

		//	XXX
		var filterName = gFilterManagerPrefix + " " + args.displayName;

		var filter = createFilter ( folder, filterName, filterTerms, filterActions );
		if ( ! filter ) { 
			alert ("cmdManagerCreate: \n\n filter create errror"); 
			return; 
		};
	
		// re-arrange filters;
		//carrotFilterSort (); 
	
		//	backups
		//backupFiltersFile();
		
		if ( Confirm ( window, "Run Filters on this folder?" ) ) {
			// apply filters to current folder
			goDoCommand('cmd_applyFilters'); 
		}

		var cardInfo = {
	        BusinessEmail         : parser.emailAddress,
	        FirstName             : parser.firstName,
	        LastName              : parser.lastName,
	        DisplayName           : parser.displayName
		};
		
		addCardInfoToDirectoryUri( cardInfo, gAbNotJunkURI )
		
		//SelectFolder(folder.URI);
		
		//Alert ( window, "Done with new Manager.");
	
	}
	
	
}


function cmdManagersResponseCreate(){
	myResponseCreate ( gManagersFolderURI, gManagersFolderMyResponse );
}

function cmdManagersResponseDelete(){
	deleteFolderURI2 ( gManagersFolderURI, gManagersFolderMyResponse );
}


function cmdVendorsResponseCreate(){
	myResponseCreate ( gVendorsFolderURI, gVendorsFolderMyResponse );
}

function cmdVendorsResponseDelete(){
	deleteFolderURI2 ( gVendorsFolderURI, gVendorsFolderMyResponse );
}

function cmdFiltersConfig(){
	var args = { refresh: true, folder: getLocalFolders() };
	MsgFilterList( args );	// original mozilla
}

function cmdFiltersRun() {
	goDoCommand('cmd_applyFilters'); // original mozilla
}


function XXXcmdMailListCreate(){

	var parentURI = gListsURI;
	var displayName = "Some Mail List";
	var statusValid = false;

	var emailAddress = document.popupNode.getAttribute("emailAddress");
	var displayName  = document.popupNode.getAttribute("displayName");
	
	var parser = emailParser ( emailAddress, displayName ) ;
	
	var args = {
		parentURI: parentURI,
		displayName: displayName,
		statusValid: statusValid
	};
	
	window.openDialog("chrome://carrot_garden/content/window/formManager.xul",
		"carrot_garden", "chrome,modal,centerscreen", args );	

	if ( args.statusValid ) {

		///	new folder
		var folder = carrotCreateFolder( args.parentURI, args.displayName );
		if ( ! folder ) { 
			alert ("cmdListCreate: \n\n folder create errror"); 
			return; 
		};

//dump2 ("convertToUri " + convertToUri ( folder.URI ))

		var filterTerms = Array(); var filterActions = Array();

//		appendFilterTerm ( filter, filterTerms[k].attrib, filterTerms[k].str , filterTerms[k].op, filterTerms[k].booleanAnd );
//		appendFilterAction ( filter, filterActions[k].type, filterActions[k].uri );

		filterTerms.push({ attrib: gAttribSender, str: parser.emailAddress, op: gOpContains, booleanAnd: gBooleanOR });
		filterActions.push({ type: gActMoveToFolder, uri: convertToUri ( folder.URI ) });

		//	XXX
		var filterName = gFilterListPrefix + " " + args.displayName;

		var filter = createFilter ( folder, filterName, filterTerms, filterActions );
		if ( ! filter ) { 
			alert ("cmdListCreate: \n\n filter create errror"); 
			return; 
		};
	
		// re-arrange filters;
		// carrotFilterSort (); 
	
		//	backup local folders filters
		// backupFiltersFile();
		
		if ( Confirm ( window, "Run Filters on this folder?" ) ) {
			// apply filters to current folder
			goDoCommand('cmd_applyFilters'); 
		}

		var cardInfo = {
	        BusinessEmail         : parser.emailAddress,
	        FirstName             : parser.firstName,
	        LastName              : parser.lastName,
	        DisplayName           : parser.displayName
		};
		
		addCardInfoToDirectoryUri( cardInfo, gAbNotJunkURI )
		
		//SelectFolder(folder.URI);
		
		//Alert ( window, "Done with new Manager.");
	
	}
	
}




//	###################################
//		GLOBAL
//	###################################

try {

	var carrot_garden = Components.classes["@mozilla.org/carrot_garden/service;1"]
		.getService(Components.interfaces.cgICarrotGarden).wrappedJSObject;

	var carrotLog = carrot_garden.log;
	carrotLog.info( 'messenger.js loaded' )
		
	//	XXX remove
	var dump2 = carrot_garden.dump2;

	if( carrot_garden.compactorProcess == null ) { 
		// background process; innstaniated only once.
		carrot_garden.compactorProcess = new carrot_garden.mailFolders.classCompactFolders();
	}

	//	mailWindowOverlay.xul
	var carrotViewSearchBar = new carrot_garden.gui.classMailVeiwSearchBar( window );

			
	var carrotMail = new carrot_garden.gui.classMailCommands( window );

	window.addEventListener( "load", carrotMail.initElements, false );

	window.addEventListener( "load", carrotMail.attachListenerMessagePaneContext, false );

//	window.addEventListener( "onfocus", carrotMail.listenerWindowFocus, false);
	
	
	//	thisFolderAction.xul
	var carrotFolderAction = new carrot_garden.gui.classFolderAction( window );

	window.addEventListener( "load", carrotFolderAction.initElements, false );
	
//	will be used for license verification
//	var carrotFolderListener = new carrot_garden.mailFolders.classMailListener();
//	window.addEventListener( "load", carrotFolderListener.attachListener, false );

//	XXX move to service:	
//	var carrotExtensionUpdate = new carrot_garden.update.classExtensionUpdate();
//	window.addEventListener( "load", carrotExtensionUpdate.windowOnLoad, false );
	
} catch( e ) {
	
	Components.utils.reportError( 'carrot_garden: can not initialize : ' + e );
	
}

