var carrot_garden; 
var carrotLog;

try {

	var fileName = "FilterListDialog.js";
	
	carrot_garden = Components.classes["@mozilla.org/carrot_garden/service;1"]
				.getService(Components.interfaces.cgICarrotGarden).wrappedJSObject;

	carrotLog = carrot_garden.log;
	carrotLog.info( fileName + " loaded" );
	
	window.addEventListener("load", loadFilterListDialog , false); 

	
} catch( ex ) {
	
	Components.utils.reportError( "carrot_garden: can not initialize: " + fileName );
	
}



function loadFilterListDialog() 
{
        var sortButton = document.createElement("button");
        sortButton.setAttribute("label","Carrot Sort");
        sortButton.setAttribute("id","sortButton");
        sortButton.setAttribute("oncommand","cmdFilterSort();")

        var sectionButton = document.createElement("button");
        sectionButton.setAttribute("label","New Section");
        sectionButton.setAttribute("id","sectionButton");
        sectionButton.setAttribute("oncommand","alert('Sorry, not implemented yet.');")

        
        var vboxElement = document.getElementById("newButton").parentNode;

        vboxElement.appendChild( sortButton );
        vboxElement.appendChild( sectionButton );
}


function cmdFilterSort(){

	var mailFilters = carrot_garden.mailFilters;
	
	// XXX do not do this, this will create duplicate file lock
	// var filterList = getLocalFolders().getFilterList ( null );
	
	var filterList = currentFilterList(); // original mozilla :: FilterListDialog.js // important to go via resource

	try {
		// must do a test save to make sure that we can save sort results
		mailFilters.saveToDefaultFile( filterList );
	} catch ( e ){
		var message = 
			"Can NOT 'saveToDefaultFile()' \n" +
			"try to delete all 'tmprules*.*' files and restart. \n" + 
			"Error was: \n" +
			e;
		alert( message );
		return;
	}
	
	var sortedFilterList;
	
	try {
		sortedFilterList = mailFilters.carrotFilterSort( filterList ); // will save
	} catch( e ) {
		var message =
			"Can NOT sort / save \n" + 
			"Error was: \n" + 
			e;
		alert( message );
		return;
	}
		
	var message =
		"Re-sorted \n" + 
		sortedFilterList.filterCount + "\n" +
		"filter items."
	alert( message );
	
	refresh(); // from original mozilla:: FilterListDialog.js
	
	carrot_garden.fileSys.backupFiltersFile(); // only local folders
	
}



//	var curFilterList = currentFilterList();
//	carrotLog.info( curFilterList );
//
//	var defaultFile = curFilterList.defaultFile;
//	carrotLog.info( defaultFile );
//	
//	var nativePath = defaultFile.nativePath;
//	carrotLog.info( nativePath );
//	
//	var outputStream = defaultFile.outputStream;
//	carrotLog.info( outputStream );
//	
//	var isStreamOpen = defaultFile.isStreamOpen();
//	carrotLog.info( isStreamOpen );
//	
//	if( isStreamOpen ){
//		defaultFile.flush();
//		defaultFile.closeStream();
//	}
//	
//	carrotLog.info( isStreamOpen );
//
//	outputStream = outputStream.QueryInterface( Components.interfaces.nsIOutputStream );
//	
//	// curFilterList.saveToFile( outputStream );
//	
//	var filterService = Components.classes["@mozilla.org/messenger/services/filters;1"]
//		.getService(Components.interfaces.nsIMsgFilterService);
//	
//	var filterFile = Components.classes["@mozilla.org/file/local;1"]
//		.createInstance(Components.interfaces.nsILocalFile);
//	
//	filterFile.initWithPath( "C:\\Data_Andrei_Pozolotin\\System\\ThunderBird_Files\\Mail\\Local Folders\msgFilterRules_XXX.dat" );
//	
//	var filterList = curFilterList.QueryInterface( Components.interfaces.nsIMsgFilterList );
//	
//	// alert( typeof( filterList ) + " : " + ( filterList == null ) );
//	// alert( typeof( filterFile ) + " : " + ( filterFile == null ) );
//	
//	filterService.SaveFilterList( filterList, filterList.defaultFile );
//	
