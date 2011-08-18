//	MAIL FILTERS

var log = {};

function componentServiceInitialize( object ){
	log = object.log;
}


function makeFilter( folder, filterName, termsString, actionsString ){
	
//	log.thisLevel( log.level.debug );
	
	var util = carrot_garden.util;
	var mailSearch = carrot_garden.mailSearch;
	
	var filterList = folder.getFilterList( null );	
	
	if ( filterList.getFilterNamed ( filterName ) ) {
		log.warning( '\n filter exists, will not re-create: \n ' + filterName );
		return filterList.getFilterNamed ( filterName )
	}
	
	var filter = filterList.createFilter ( filterName ); 
		
	var termsList = mailSearch.parseTermList( termsString );
	log.debug( termsString );
	for ( var k = 0; k < termsList.length; k++ ){
		var term = mailSearch.newSearchTerm( termsList[ k ] );
		log.debug( 'termAsString: ' + term.termAsString );
		filter.appendTerm( term );
	}

	var actionsList = mailSearch.parseActionList( actionsString );
	for ( var k = 0; k < actionsList.length; k++ ){
		var action = mailSearch.newFilterAction( actionsList[ k ] );
		log.debug( 'targetFolderUri: ' + action.targetFolderUri );
		filter.appendAction( action );
	}
	
	filter.enabled = true;
	filter.temporary = false;
	filter.filterDesc = carrot_garden.extensionName;
	
	filterList.insertFilterAt( 0, filter );
	
	try {
		saveToDefaultFile( filterList );
	} catch( ex ) {
		log.error( "Can NOT saveToDefaultFile()" );
	}
	
	return filter;
	
}


// global containers for filter sort
var gFilterItems = new Array(); // ( array index ([0]section, [1]name, [2] filter index ))
var gFilterSections = new Array(); // ( array index ([0]section, [1]position, [2] filter index ))

// used for "# section=Account: position=1000"
var gFilterSectionVar = "section"; 
var gFilterPositionVar = "position";
var gFilterSectionVarBase=1000;
var gFilterSectionVarStep=20;


function carrotFilterSort ( filterList ) {
	
	getFilterSections( filterList ); 
	setSectionHeaders ( filterList ); 
	sortFilterList ( filterList ); // will do save
	
	return filterList ;
}

function getFilterSections( filterList ) {

	gFilterSections = new Array();

	var myFilter;
	var myArray;
	var mySection;
	var myPosition;

	var foundSections = false;

//	var n = 0;

	for ( var i = 0; i < filterList.filterCount; i++ )
	{
		myFilter = filterList.getFilterAt ( i );

		if ( myFilter.filterName.match(/^#.*$/) )
			{
				myArray = myFilter.filterName.split(/\s/);

				if ( myArray[1].split(/=/)[0] == gFilterSectionVar ) {
					mySection = myArray[1].split(/=/)[1] 
				} else {
					throw "section value not found in filter " + i;
				}

				if ( myArray[2].split(/=/)[0] == gFilterPositionVar ) {
					myPosition = myArray[2].split(/=/)[1] 
				} else {
					throw "position value not found in filter " + i;
				}

				foundSections = true;

				//dump2( i + " " + myFilter.filterName + " " + mySection + " " + myPosition + "\n" );

//				gFilterSections[ n ] = Array( mySection, myPosition, i, 0);
				gFilterSections.push( new Array( mySection, myPosition, i, 0) );
				
//				n++;
				
			}

	}

	if ( foundSections == false) { 
		throw "no filter sections found" 
	}

	for( var i = 0; i < filterList.filterCount; i++ ) {

		myFilter = filterList.getFilterAt ( i );

		if ( myFilter.filterName.match( /^#.*$/ ) ) {
			continue;
		}

		foundSections = false;

		for ( var n = 0; n < gFilterSections.length; n++ ) {
			if ( myFilter.filterName.split(/\s/)[0] ==  gFilterSections[n][0] ) {
				foundSections = true;
				break;
			}
		}
	
		if ( foundSections == false ) { 
			throw "unknown section [" + myFilter.filterName.split(/\s/)[0] + "] filter line number [" +  i + "]"
		};

	}

}

function setSectionHeaders ( filterList ) {

	var sortNumber = carrot_garden.util.sortNumber; // array sort order function

	var myArray = new Array();
	var myFilter;

	for( var n = 0; n < gFilterSections.length; n++ ) { // shift scale
		gFilterSections[n][1] = gFilterSections[n][1] * 2; 
	} 

	for( var n = 0; n < gFilterSections.length - 1; n++ ) {// diffirentiate duplicate positions
		if ( gFilterSections[n][1] ==  gFilterSections[n+1][1] ) { gFilterSections[n+1][1]++; }  
	} 

	for( var n = 0; n < gFilterSections.length; n++ ) { // clone section positions
		myArray[n] = gFilterSections[n][1];
	}

	myArray.sort( sortNumber ); // sort existing positions, guaranteed to be unique
	
	for ( var n = 0; n < myArray.length; n++ )	//	iterate over new section positions
	{
		for ( var i = 0; i < gFilterSections.length; i++ )
		{
			if ( myArray[n] == gFilterSections[i][1] ) { // current position match
				 gFilterSections[i][3] = gFilterSectionVarStep * n + gFilterSectionVarBase; // set new position
			}
		}
	}

	for( var n = 0; n < gFilterSections.length; n++ )
	{
		myFilter = filterList.getFilterAt ( gFilterSections[n][2] ); // by filter index
		myFilter.enabled = false;
		// todo - set safe actions, terms, etc.
		myFilter.filterName = 
			"# " + gFilterSectionVar + 
			"=" + gFilterSections[n][0] + 
			" " + gFilterPositionVar + 
			"=" + gFilterSections[n][3];	// set new position
	}
	
}


function sortFilterList( filterList ) {
	
	var sortNumber = carrot_garden.util.sortNumber; // array sort order function

	var myArray = new Array();
	var myItems = new Array();
	var myResult = new Array();

	//dump2('gFilterSections.length ' + gFilterSections.length )

	for ( var n = 0; n < gFilterSections.length; n++ ) { // clone new positions
		myArray[n] = gFilterSections[n][1];
	}

	myArray.sort( sortNumber ); // sort new positions, guaranteed to be unique

	for ( var n = 0; n < myArray.length; n++ )	//	go through new sections positions
	{
		for ( var i = 0; i < gFilterSections.length; i++ )	//	
		{
			if ( myArray[n] == gFilterSections[i][1] ) // position match
			{
				myResult.push( filterList.getFilterAt ( gFilterSections[i][2] ) ) 

				getFilterItems ( filterList, gFilterSections[i][0]  ); // mySection

				for ( var k = 0; k < gFilterItems.length; k++ )	{
					myItems[k] = gFilterItems[k][1] // clone item names
				}

				myItems.sort(); // sort items by name

				for ( var k = 0; k < myItems.length; k++ )	//	iterate item names
				{
					for ( var j = 0; j < gFilterItems.length; j++ )	//	iterate items for this section
					{
						if ( myItems[k] == gFilterItems[j][1] )	//	match sorted name and non-sorted name
						{
							myResult.push( filterList.getFilterAt ( gFilterItems[j][2] ) ) //	store in sorted order
							break;	//	avoid duplicates
						}
					}
				}

			}
		}
	}

	myResult.reverse();

	//dump2 ( 'myResult ' + myResult.length  );
	//dump2 ( 'filterList ' + filterList.filterCount  );

	if ( myResult.length != filterList.filterCount ) { 
		throw "can not sort - counts do not match" ;
	}

	for ( var n = 0; n < filterList.filterCount; n++ ) {
		// the only place where we modify filter list; this makes new "tmprules*.dat"
		filterList.setFilterAt ( n, myResult.pop() );
	}

	// this will remove "tmprules*.dat"
	saveToDefaultFile( filterList ); 

}


function getFilterItems( filterList, mySection )
{
	
	gFilterItems = new Array();
	
	var myFilter;
	var myArray;	
	
	for( var i = 0; i < filterList.filterCount; i++ )
	{

		myFilter = filterList.getFilterAt ( i );
	
		if ( myFilter.filterName.match(/^#.*$/) ) {
			continue;
		}

		myArray = myFilter.filterName.split(" ");

		if( myArray[0] == mySection ) {
			myArray.shift();
//			gFilterItems.push( new Array ( mySection, myArray.join(" "), i, 0) );
			gFilterItems.push( new Array ( mySection, myFilter.filterName, i, 0) );
		}
	
	}
	
//	dump2 ( "Section: " + mySection + " Items: " + gFilterItems.length );

} 

function saveToDefaultFile( filterList ) {
	
	function cleanup( filterList ) {
		
		log.info( "cleanup of tmprules.dat"  );
		
		var folder = filterList.folder;
	//	log.info( "folder.folderURI : " + folder.folderURI ); // does not work
		
		var defaultFile = filterList.defaultFile;
	//	log.info( "defaultFile.nativePath : " + defaultFile.nativePath ); // OK
	//	log.info( "defaultFile.nativeTarget : " + defaultFile.nativeTarget ); // does not work
	//	log.info( "defaultFile.nativeLeafName : " + defaultFile.nativeLeafName ); // does not work
		
		var defaultFolder = defaultFile.parent;
	//	log.info( "defaultFolder.nativePath : " + defaultFolder.nativePath ); // OK
	
		var folder = Components.classes["@mozilla.org/file/local;1"]
	 		.createInstance(Components.interfaces.nsILocalFile);
		folder.initWithPath( defaultFolder.nativePath );
		
		var entries = folder.directoryEntries;
	
		var file;
		
		while( entries.hasMoreElements() ) {
			file = entries.getNext();
			file = file.QueryInterface( Components.interfaces.nsIFile );
			if ( file.path.match(/.*tmprules.*/) ) {
				log.info( "deleting file : " + file.path );
				file.remove( false );	
			}
		}
	}
	
	try {
		filterList.saveToDefaultFile();
		return;
	} catch( e ) {
		log.error( "#1 saveToDefaultFile() : " + e );
	}
	
	cleanup( filterList );
	
	try {
		filterList.saveToDefaultFile();
		return;
	} catch( e ) {
		log.error( "#2 saveToDefaultFile() : " + e );
	}
	
	throw "Can NOT saveToDefaultFile(); see error log for details."
	
}

	
//	while( ( item = entries.nextFile() ) != null ) {
//		// item = item.QueryInterface( Components.interfaces.nsIFile );
//		log.info( "item.nativePath : " + item.nativePath ); // OK
//	}
	// var entries = folder.directoryEntries.QueryInterface( Components.interfaces.nsIDirectoryEnumerator );
//	var folderEnum = Components.classes["@mozilla.org/file/directory_service;1"].
//            getService(Components.interfaces.nsIDirectoryService);

