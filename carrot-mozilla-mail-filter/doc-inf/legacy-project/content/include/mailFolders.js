//	MAIL FOLDERS

var log = {};

function componentServiceInitialize( object ){
	log = object.log;
}


//	http://lxr.mozilla.org/mailnews/source/mailnews/base/public/msgCore.h
var NS_OK = 0x00000000;
var NS_ERROR_FAILURE = 0x80004005;
//	db errors
var NS_ERROR_NOT_INITIALIZED = 0xc1f30001;
var NS_MSG_ERROR_FOLDER_SUMMARY_OUT_OF_DATE = 0x80550005;
var NS_MSG_ERROR_FOLDER_SUMMARY_MISSING = 0x80550006;
//	collection
var NS_DB_ERRORS = {};
NS_DB_ERRORS[ NS_ERROR_NOT_INITIALIZED ]= 0;
NS_DB_ERRORS[ NS_MSG_ERROR_FOLDER_SUMMARY_OUT_OF_DATE ]= 0;
NS_DB_ERRORS[ NS_MSG_ERROR_FOLDER_SUMMARY_MISSING ]= 0;


//	keep in sync with 
//	http://lxr.mozilla.org/mozilla/source/mailnews/base/public/nsMsgFolderFlags.h
var gFolderFlags = {
	MSG_FOLDER_FLAG_VIRTUAL: 0x0020,
	MSG_FOLDER_FLAG_TRASH: 0x0100,
	MSG_FOLDER_FLAG_SENTMAIL: 0x0200,
	MSG_FOLDER_FLAG_DRAFTS: 0x0400,
	MSG_FOLDER_FLAG_QUEUE: 0x0800,
	MSG_FOLDER_FLAG_INBOX: 0x1000,
	MSG_FOLDER_FLAG_TEMPLATES: 0x400000,
	MSG_FOLDER_FLAG_JUNK: 0x40000000
};


//	known folder mask
var gFolderMask = 
	gFolderFlags.MSG_FOLDER_FLAG_VIRTUAL +
	gFolderFlags.MSG_FOLDER_FLAG_TRASH +
	gFolderFlags.MSG_FOLDER_FLAG_SENTMAIL + 
	gFolderFlags.MSG_FOLDER_FLAG_DRAFTS +
	gFolderFlags.MSG_FOLDER_FLAG_QUEUE +
	gFolderFlags.MSG_FOLDER_FLAG_INBOX +
	gFolderFlags.MSG_FOLDER_FLAG_TEMPLATES +
	gFolderFlags.MSG_FOLDER_FLAG_JUNK; 


function rebuildSummaryFile( folder ) {	//	see widgetglue.js::RebuildSummaryFile(msgFolder)
  var msgDB = folder.getMsgDatabase( null );
  msgDB.summaryValid = false;
  msgFolder.ForceDBClosed();
  msgFolder.updateFolder( null );
}


function createFolder( parentURI, folderName )
{

	folderURI = parentURI + "/" + folderName;
	log.debug("folderURI: " + folderURI );

	var parentFolder = getFolderFromUri ( parentURI );
	log.debug("#1" );
	
//	SelectFolder(parentURI);
//	log.debug ("#2" );

	if ( existsFolder ( parentFolder, folderName  ) ){
		alert ( "Create Folder: folder already exists\n\n" + decodeURI ( folderURI ) );		
		return carrotMsgFolderFromUri ( folderURI );
	}
	
	//	from mozilla::mailCommands.js
	NewFolder( folderName, parentURI)
	log.debug("#3" );
		
	var folder = getFolderFromUri( folderURI );
	log.debug("#4 " );
	
	if ( ! folder ) {
		alert ("Create Folder: \n\n could not create\n\n" + folderURI );
		return null;
	}
	
	parentFolder.NotifyItemAdded (folder);
	log.debug ("#5");
	
//	parentFolder.updateFolder ( null );

//	XXX this causes ex		
//	SelectFolder(folder.URI);
//	log.debug ("carrotCreateFolder: " + folder.name );
		
	return folder;		
}

function makeFolder( window, parentUri, folderName ){

	var alert =  window.alert;

	var util = carrot_garden.util;

	folderUri = util.convertToUri( parentUri + "/" + folderName );
//	log.debug ("folderUri: " + folderUri );

	var parentFolder = getFolderFromUri ( parentUri );
//	log.debug ("#1" );
	
//	SelectFolder( parentUri );
//	log.debug ("#2" );

	if ( existsParentFolderChildName( parentFolder, folderName  ) ){
		window.SelectFolder( folderUri );
		alert ( "folder exists: " + folderName );		
		return getFolderFromUri ( folderUri );
	}
	
	//	mailCommands.js::
	window.NewFolder( folderName, parentUri)
//	log.debug ("#3" );
		
	var folder = getFolderFromUri( folderUri );
//	log.debug ("#4 " );
	
	if ( ! folder ) {
		alert ("could not make: " + folderUri );
		return null;
	}
	
	parentFolder.NotifyItemAdded( folder );
//	log.debug ("#5");
	
//	parentFolder.updateFolder ( null );

	//	from mozilla::msgMail3PaneWindow.js
//	SelectFolder( folderUri );
	log.info("created: " + folder.name );
		
	return folder;		
} 

function makeSearchFolder( folderName, parentFolder, searchFolderURIs, termsString, searchOlnine ) {

	log.info( "name: " + parentFolder.name + "/" + folderName );

	var util = carrot_garden.util;
	var mailSearch = carrot_garden.mailSearch;
	
	var searchTerms = new util.newInstanceSupportsArray();

	var termsList = mailSearch.parseTermList( termsString );

	for ( k = 0; k < termsList.length; k++ ){
		searchTerms.AppendElement ( mailSearch.newSearchTerm( termsList[ k ] ) );
	}
	// from mozilla:: commandglue.js :: 
	CreateVirtualFolder( folderName, parentFolder, searchFolderURIs, searchTerms, searchOlnine );
	
}

function makeSearchFolderForParent ( parentFolder, folderName, termsString ) {
	var searchFolderURIs = parentFolder.URI;
	makeSearchFolder( folderName, parentFolder, searchFolderURIs, termsString, false );
}

function makeSearchFolderForParentUri ( parentUri, folderName, termsString ) {
	var parentFolder = getFolderFromUri( parentUri );
	makeSearchFolderForParent ( parentFolder, folderName, termsString );
}



function getParentFolderFromUri( uri ) 
{
	var uriArray = uri.split('/');

	uriArray.pop();
	
	var newUri = uriArray.join('/');
	
	log.debug(uri);
	log.debug(newUri)
	
	return getFolderFromUri( newUri );
}



function getFolderFromUri( uri ) // borrowed from mozilla::widgetglue.js
{
	var resource = getResourceFromUri( uri );
	
	return resource.QueryInterface(Components.interfaces.nsIMsgFolder);
}


function getResourceFromUri( uri ) // borrowed from mozilla::widgetglue.js
{
    var rdf = Components.classes['@mozilla.org/rdf/rdf-service;1'].getService()
    	.QueryInterface(Components.interfaces.nsIRDFService);

    var resource = rdf.GetResource( uri );

    return resource;
}

function existsParentFolderChildName( parentFolder, folderName ) {
	return parentFolder.containsChildNamed ( folderName );
}

function existsParentFolderUriChildName( parentUri, folderName ) {
	var parentFolder = getFolderFromUri( parentUri )
	return parentFolder.containsChildNamed ( folderName );
}


//	fast delete, but durty - requires restart of TB
function deleteFolder(parentFolder, folder){
	if (existsFolder ( parentFolder, folder.name )) {
		folder.Delete();
		parentFolder.NotifyItemRemoved ( folder );
	}
}

//	slow delete, bot correct
function deleteFolder2(parentFolder, folder){
	if (existsFolder ( parentFolder, folder.name )) {
	    var folderResource = folder
	    	.QueryInterface(Components.interfaces.nsIRDFResource);
	    var parentResource = parentFolder
	    	.QueryInterface(Components.interfaces.nsIRDFResource);
	    messenger.DeleteFolders(GetFolderDatasource(), parentResource, folderResource);
	}
}

function deleteFolderUri2 ( parentURI, folderName ) {

	var parentFolder = getFolderFromUri ( parentURI );

	if (existsFolder ( parentFolder, folderName )) {

		var folder = getFolderFromUri ( carrot_garden.util.convertToUri(parentURI + "/" + folderName) );

		deleteFolder2( parentFolder, folder);
	}
}

function existsFolderUri( folderUri ){
	var folder = getFolderFromUri ( folderUri );
	var parentFolder = folder.parentMsgFolder;
	return parentFolder ? true : false;
}

function dropFolderUri ( window, folderUri ){

	var folder = getFolderFromUri ( folderUri );
	
	var parentFolder = folder.parentMsgFolder;

	if ( ! parentFolder ) return null;

    var folderResource = folder
    	.QueryInterface(Components.interfaces.nsIRDFResource);

    var parentResource = parentFolder
    	.QueryInterface(Components.interfaces.nsIRDFResource);

    window.messenger.DeleteFolders( 
    	window.GetFolderDatasource(), parentResource, folderResource);
}

function deleteSearchFolders( folder, deleteFunction) {

	var subfolders = Array(); var k = 0;

	if ( folder.hasSubFolders ){
		var subfolders = carrotGetSubFolders( folder, 
			gFolderFlags.MSG_FOLDER_FLAG_VIRTUAL); // only virtual

	    for ( k=0; k < subfolders.length; k++ ) {
	    	deleteFunction ( folder, subfolders[k] );
			saveVirtualFolders();
		}
    }
}


// XXX currently all features are limited to "server = local folders" only
function getLocalFoldersServer() {
	var service = Components.classes["@mozilla.org/messenger/account-manager;1"]
			.getService( Components.interfaces.nsIMsgAccountManager );
	var server = service.localFoldersServer;
	return server;
}

// XXX currently all features are limited to "server = local folders" only
function getLocalFolders() {
	var server = getLocalFoldersServer();
	var folder = server.rootFolder;
	return folder;
}



function getFolderTreeUriArray( parentFolder, flag ){
	var uri = Array();
	if ( parentFolder.hasSubFolders ) {
		var subfolders = getSubFolders( parentFolder, flag ); 
		for ( var k = 0; k < subfolders.length; k++ ){
			uri.push( subfolders[k].URI );
			var subUri = getFolderTreeUriArray( subfolders[k], flag );
			for ( var n = 0; n < subUri.length; n++ ){
				uri.push( subUri[ n ] );				
			}
		}
	}
	return uri;	
}

function getSubFolders( folder, flags ) {
	var subfolders = new Array;
	if (folder.hasSubFolders) {
    	var subFolderEnumerator = folder.GetSubFolders();
    	var done = false;
    	while ( ! done ) {
      		var next = subFolderEnumerator.currentItem();
      		if (next) {
		        var nextFolder = next.QueryInterface(Components.interfaces.nsIMsgFolder);
		        if ( nextFolder && ( (nextFolder.flags & gFolderMask) == flags ))  {
			        	subfolders.push( nextFolder );      
						///log.debug("carrotGetSubFolders: " + nextFolder.name + " flag: " + nextFolder.flags );
			        }
			}
			try { subFolderEnumerator.next(); }
		    catch (ex) { done = true; }
		}
		
		if ( subfolders.length > 0 ) { subfolders.sort( compareFolderSortKey ); }
		return subfolders;
	}
}


function compareFolderSortKey( folder1, folder2 ) {
  return folder1.compareSortKeys( folder2 );
}



function makeSearchFolderForTreeUri ( parentUri, folderName, treeRootUri, termsString ) {
	
	var util = carrot_garden.util;
	
	var parentFolder = getFolderFromUri ( parentUri );
	var treeRootFolder = getFolderFromUri ( treeRootUri );

	var uriArray = getFolderTreeUriArray ( treeRootFolder, 0); 

//	log.debug(uriArray.length)

	for ( var k=0; k < uriArray.length; k++ ){
//		log.debug(uriArray[k])
		uriArray[k] = util.convertToUri( uriArray[k] );
	}
	
	var searchFolderURIs = uriArray.join("|");
	
	makeSearchFolder( folderName, parentFolder, searchFolderURIs, termsString, false )	
	
}

function getFoldersConversations() {
	var nodeFolders = carrot_garden.pref.getPrefList2('mailStore.folderConversations.searchFolders');
}

function rebuildSerachFolders( window, nodeName ) {

	var nodeFolders = carrot_garden.pref.getPrefList2( nodeName );

	for( var nodeId in nodeFolders ) {
		
		var parentUri = nodeFolders[ nodeId ].parentUri;
		var folderName = nodeFolders[ nodeId ].folderName;
		var treeUri	= nodeFolders[ nodeId ].treeUri;			
		var termsString = nodeFolders[ nodeId ].filter;

		var uri = carrot_garden.util.convertToUri( parentUri + '/' + folderName );	
		
		if( existsParentFolderUriChildName( parentUri, folderName ) ){
			//	msgMail3PaneWindow.js::
			window.SelectFolder( uri ); 
			dropFolderUri( window, uri );
		}
		
		makeSearchFolderForTreeUri ( parentUri, folderName, treeUri, termsString );
	}		
}
	
	
//	implements
//		nsIAutoCompleteSession 
//	http://www.xulplanet.com/references/xpcomref/ifaces/nsIAutoCompleteSession.html

function classFoldersAutoComplete(  ){

	//	default:true = search for regular folders; false = exclude special folders
	this.flagIncludeRegularFolders = true;
	
	//	default:gFolderFlags.MSG_FOLDER_FLAG_INBOX = exclude all special folders but inbox from search
	this.flagSpecialFoldersMask =  gFolderFlags.MSG_FOLDER_FLAG_INBOX;
	
	//	default:true = stop folder drilldown after flag mismatch; false = search subfolders
	this.flagStopMismatchDrilldown = true;
	
	//	default:true = search in long name; false = in leaf name only
	this.flagSearchLongName = true;
	
	
	//	http://www.xulplanet.com/references/xpcomref/ifaces/nsIAutoCompleteResults.html
	this.searchResults = Components.classes["@mozilla.org/autocomplete/results;1"]
		.getService(Components.interfaces.nsIAutoCompleteResults);

	var mSearchItems = this.searchResults.items;
		
	this.QueryInterface = function QueryInterface (iid) {
		if ( iid.equals( Components.interfaces.nsIAutoCompleteSession ) ) {
			return this;
		} else {
			throw Components.results.NS_NOINTERFACE;
			return 0;
		}
	}

	var mCollection = new carrot_garden.util.classCollection();
			
	this.initSearch = function initSearch(){
		var flagIncludeRegularFolders = this.flagIncludeRegularFolders;
		var flagSpecialFoldersMask = this.flagSpecialFoldersMask;
		var flagStopMismatchDrilldown = this.flagStopMismatchDrilldown;

		function appendFolderInfo( folder ){
				if( ! matchFolderFlags( 
					folder, 
					flagIncludeRegularFolders, 
					flagSpecialFoldersMask ) ){ 
						if( flagStopMismatchDrilldown )
							return true; 	//	stop iteration
						else
							return false;	//	contunue iteration
				}
				var longName = getLongFolderNameFromFolder( folder );			
				mCollection.add( longName, folder );
			}

		mCollection.removeAll();
		iterateServersFunction( appendFolderInfo );
		//mCollection.sortBy('key');	//	by longName
	}
	
	var mRx = {
		allspace: new RegExp( '(\\s+)', 'ig' ),
		specials: new RegExp( '([\\x00-\\x1F]|[\\x21-\\x2F]|[\\x3A-\\x40]|[\\x5B-\\x60]|[\\x7B-\\x7F])', 'ig' ),
//		asterisk: new RegExp( '([\\x2A])', 'ig' ),
	}
	
	this.onStartLookup = function onStartLookup( searchString, previousSearchResult, listener ) {
		//log.debug('start')
	
		mSearchItems.Clear();

		var flagSearchLongName = this.flagSearchLongName;
	
		function matchFolder( longName, folder ){	//	item.key, item.value

			var folderName = flagSearchLongName ? longName : folder.prettyName;
			var folderText = folderName.replace( mRx.allspace, ' ' );
			
			var searchText = searchString.replace( mRx.allspace, ' ' );
			searchText = searchText.replace( mRx.specials, '\\$1' );
			searchText = searchText.replace( mRx.allspace, '.+' );
//			searchText = searchText.replace( mRx.asterisk, '.+' );
//			log.debug( searchText )

			var matchThis = new RegExp( searchText, 'i' );
	
			if( folderText.match( matchThis )){
				
				var newItem = Components.classes["@mozilla.org/autocomplete/item;1"]
					.createInstance(Components.interfaces.nsIAutoCompleteItem);
					
				newItem.value = longName;
				newItem.comment =  folder.URI;
				
				mSearchItems.AppendElement( newItem );
			}
		}	//	matchFolder
		
		//	iterate(functionName) :: functionName( item.key, item.value, item.memo );
		mCollection.iterate( matchFolder );	
		
		this.searchResults.defaultItemIndex = 0;
		this.searchResults.searchString = searchString;
		
		/*
		http://www.xulplanet.com/references/xpcomref/ifaces/nsIAutoCompleteListener.html
		http://people.mozilla.com/~axel/doxygen/html/interfacensIAutoCompleteStatus.html
		nsIAutoCompleteStatus ::
			failed = -1
			noMatch = 0
			matchFound = 1
			ignored = 2
			failureItems = 3
		*/
		listener.onAutoComplete( this.searchResults, 1 );	//	matchFound = 1
		
	}
	
	this.onAutoComplete = function onAutoComplete( searchString, previousSearchResult, listener ){
		//log.debug('copmlete')
	}
	
	this.onStopLookup = function onStopLookup() {
		//log.debug('stop')
	}

}


function getLongFolderNameFromFolder( folder ) {

  var longName = folder.prettyName;

  while( ! folder.isServer ) {
    folder = folder.parent;
    longName = folder.prettyName + "/" + longName;
  }

  return longName;
	
}

function getFolderFromLongFolderName( longNameValue ){

	var folder = null;

	var longName = longNameValue.toLowerCase();

	function stopOnFolderMatch( folderValue ){
		if( getLongFolderNameFromFolder( folderValue ).toLowerCase() == longName ) { 
			folder = folderValue; 
			return true; 	//	stop iteration
		} else 
			return false;
	}

	iterateServersFunction( stopOnFolderMatch );

	return folder;
}


//	iterateServersFunction and iterateFoldersFunction
//	take folderFunction function name parameter;
//	folderFunction must return 'true' to stop iteration or 'false' to continue iteration.

function iterateServersFunction( folderFunction ){

	var service = Components.classes["@mozilla.org/messenger/account-manager;1"]
		.getService(Components.interfaces.nsIMsgAccountManager);
	
	var servers = service.allServers;

	var alreadyProcessed = new Object();

	for( var k = 0; k < servers.Count(); k++ ) {

		var server = servers.GetElementAt( k )
			.QueryInterface(Components.interfaces.nsIMsgIncomingServer);

		var parentFolder = server.rootMsgFolder;

		var parentFolderName = parentFolder.prettyName;
		//log.debug('parentFolderName ' + parentFolderName)

		if ( alreadyProcessed[ parentFolderName ] ) {
			// 	prevent duplicate servers
		} else {
			alreadyProcessed[ parentFolderName ] = true;
			iterateFoldersFunction( parentFolder, folderFunction );
		}
	}
}

//	calls recursively 'folderFunction( folder )' for parentFolder and all its subfolders;
//	parentFolder must be supplied as nsIMsgFolder;
//
function iterateFoldersFunction( parentFolder, folderFunction ){	

	//	log.thisLevel( log.level.debug );
	//	log.debug( 'parentFolder.prettyName ' + parentFolder.prettyName )

	if( ! parentFolder.isServer ) { 
		//	apply fuction to folder and see if need to stop iteration  
		if( folderFunction( parentFolder ) ){ return; }
	}

	if( parentFolder.hasSubFolders ) {

		var subFolders = parentFolder.GetSubFolders();

		var collection = new carrot_garden.util.classCollection();

		var done = false;
		while( ! done ) {

			var folder = subFolders.currentItem()
				.QueryInterface(Components.interfaces.nsIMsgFolder);
				
			var folderName = folder.prettyName.toLowerCase();
			
			collection.add( folderName, folder );	//	(key,value,memo)

			try { subFolders.next(); }
			catch( ex ) { done = true; }
		}

		collection.sortBy('key');
		//log.debug( collection.size() )
		
		function iterateThis( folderName, folder ){		//	(key,value,memo)
		//	log.thisLevel( log.level.debug );
		//	log.debug( folderName );
			iterateFoldersFunction( folder, folderFunction );
		}
		
		collection.iterate( iterateThis );

	}
}

function matchFolderFlags( folder, flagIncludeRegularFolders, flagSpecialFoldersMask ){
	var maskedFlags = folder.flags & gFolderMask; 
	if(	( ( maskedFlags == 0 ) && flagIncludeRegularFolders ) || 
		( maskedFlags &  flagSpecialFoldersMask ) ){
		return true;
	} else {
		return false;
	}
}

//	http://www.xulplanet.com/references/xpcomref/ifaces/nsIFolderListener.html
		/*	example use:
		  try {
		    var nsIFolderListener = Components.interfaces.nsIFolderListener;
		    var notifyFlags = nsIFolderListener.removed | nsIFolderListener.event | nsIFolderListener.intPropertyChanged;
		    mailSession.AddFolderListener(folderListener, notifyFlags);
		  } catch (ex) {
		    dump("Error adding to session: " +ex + "\n");
		  }
		*/
//
function classFolderListener( args ){

	function dumpInfo( type, parentItem, item, view ){
		var parentUri = parentItem.Value;
		if ( item instanceof Components.interfaces.nsIMsgDBHdr) 
//			var itemHeader = item.QueryInterface(Components.interfaces.nsIMsgDBHdr);
		var itemSubject = item.subject; 
		
		log.debug( type + ': ' + 'parentUri: ' + parentUri + ' subject: ' + itemSubject );
	}

	// arrived messages
	this.OnItemAdded = function OnItemAdded( parentItem, item, view ){
		dumpInfo( 'add: ', parentItem, item, view );
	}
	//	deleted messages
	this.OnItemRemoved = function OnItemRemoved( parentItem, item, view ){
		dumpInfo( 'del: ', parentItem, item, view );
	}
	//	global event
	this.OnItemEvent = function OnItemEvent( folder, event ){  
	    var eventType = event.toString();
	    if (eventType == "FolderLoaded");
	    if (eventType == "FolderCreateCompleted");
	    if (eventType == "FolderCreateFailed");
	    if (eventType == "DeleteOrMoveMsgCompleted");
	    if (eventType == "DeleteOrMoveMsgFailed");
	    if (eventType == "JunkStatusChanged");
	    if (eventType == "ImapHdrDownloaded");
	}
	//
	this.OnItemPropertyChanged = function OnItemPropertyChanged( item, property, oldValue, newValue ){
	}
	//
	this.OnItemIntPropertyChanged = function OnItemIntPropertyChanged( item, property, oldValue, newValue ){
	}
	//
	this.OnItemBoolPropertyChanged = function OnItemBoolPropertyChanged( item, property, oldValue, newValue ){
	}
	//
	this.OnItemUnicharPropertyChanged = function OnItemUnicharPropertyChanged( item, property, oldValue, newValue ){
	}
	//
	this.OnItemPropertyFlagChanged = function OnItemPropertyFlagChanged( item, property, oldFlag, newFlag ){
	}
	
}


	
function classMailListener( args ){

	var mMailSession = Components.classes["@mozilla.org/messenger/services/session;1"]
		.getService(Components.interfaces.nsIMsgMailSession);
		
	var mNotifyFlags = Components.interfaces.nsIFolderListener.all;
	
	var mFolderListener = new classFolderListener( args ); 
	
	this.attachListener = function attachListener(){
		mMailSession.AddFolderListener( mFolderListener, mNotifyFlags );
	}

	this.removeListener = function removeListener(){
		mMailSession.RemoveFolderListener( mFolderListener );
	}
	
}	
	

function  CreateVirtualFolder(newName, parentFolder, searchFolderURIs, searchTerms, searchOnline)
{
  // ### need to make sure view/folder doesn't exist.
  if (searchFolderURIs && (searchFolderURIs != "") && newName && (newName != "")) 
  {
    try
    {
      var newFolder = parentFolder.addSubfolder(newName);
      newFolder.prettyName = newName;
      newFolder.setFlag( gFolderFlags.MSG_FOLDER_FLAG_VIRTUAL );
      var vfdb = newFolder.getMsgDatabase( null );
      var searchTermString = getSearchTermString(searchTerms);
      var dbFolderInfo = vfdb.dBFolderInfo;
      // set the view string as a property of the db folder info
      // set the original folder name as well.
      dbFolderInfo.setCharPtrProperty("searchStr", searchTermString);
      dbFolderInfo.setCharPtrProperty("searchFolderUri", searchFolderURIs);
      dbFolderInfo.setBooleanProperty("searchOnline", searchOnline);

      vfdb.summaryValid = true;
      vfdb.Close(true);
      parentFolder.NotifyItemAdded(newFolder);
      var accountManager = Components.classes["@mozilla.org/messenger/account-manager;1"].getService(Components.interfaces.nsIMsgAccountManager);
      accountManager.saveVirtualFolders();
    }
    catch(e)
    {
      throw(e); // so that the dialog does not automatically close
      dump ("Exception : creating virtual folder \n");
    }
  }
  else 
  {
    dump("no name or nothing selected\n");
  }   
}

function getSearchTermString( searchTerms )
{
  var searchIndex;
  var condition = "";
  var count = searchTerms.Count();
  for (searchIndex = 0; searchIndex < count; )
  {
    var term = searchTerms.QueryElementAt(searchIndex++, Components.interfaces.nsIMsgSearchTerm);
    
    if (condition.length > 1)
      condition += ' ';
    
    condition += (term.booleanAnd) ? "AND (" : "OR (";
    condition += term.termAsString + ')';
//    log.debug( term.termAsString )
  }
  return condition;
}


function classDatabaseParser( args ){	//	note: if 'args == null', this class will cause *.msf file rebuilt for corrupt local folders

	var mFolderArray = [];	//	all folders being processed
	var mFolderIndex = 0;	//	currently procecessed folder

	//	used for perfomance profiling reporting
	var mTimeStarted;
	var mTimeFinished;
	
	//	need to keep persistent reference to timer; hence create timer object on class level;
	//	http://www.xulplanet.com/references/xpcomref/ifaces/nsITimer.html
    var mTimer = Components.classes["@mozilla.org/timer;1"].createInstance(Components.interfaces.nsITimer);

	//	used for pause / resume timer control
	var mActive = false;
			
	//	starts runFunction in 'separate thread' / forks away
	function startNewProcess( runFunction ) {
		if( ! mActive ) return;	//	disables timer calls in 'pause' state
	    var callback = { notify: runFunction };	//	callback wrapper object	
	    mTimer.initWithCallback( callback, mDelay, mTimer.TYPE_ONE_SHOT );	//	runs 'runFunction' once after 'mDelay' delay
	}	

	//	placeholder defaul no-operation fucntion for optional function args
	function noopFunction(){
		//	noop;
	}

	//	args and their default settins
	var mDelay = 10;	//	use to balance parse load (in miliseconds)
	var mParentFolder = getLocalFolders();		//	type = nsIMsgFolder
	var mFolderFunction = noopFunction;		//	folderFunction( folder );	runs for each folder;	must be syncronous function
	var mMessageFunction = noopFunction;	//	messageFunction( header );	runs for each message;	must be syncronous function
	var mStartFunction = noopFunction;		//	startFunction();	runs before any folder is precessed
	var mFinishFunction = noopFunction;		//	finishFunction();	runs after all folders are done
		
	this.init = function init( args ){
		if( args ){	//	setup non-null args
			mDelay = args.delay ? args.delay : mDelay;
			mParentFolder = args.parentFolder ? args.parentFolder : mParentFolder;
			mFolderFunction = args.folderFunction ? args.folderFunction : mFolderFunction;
			mMessageFunction = args.messageFunction ? args.messageFunction : mMessageFunction;
			mStartFunction = args.startFunction ? args.startFunction : mStartFunction;
			mFinishFunction = args.finishFunction ? args.finishFunction : mFinishFunction;
		}
	}

	//	http://www.xulplanet.com/references/xpcomref/ifaces/nsIUrlListener.html
	function classUrlListener( callback ) {
		this.OnStartRunningUrl = function OnStartRunningUrl( url ){
		}   
		this.OnStopRunningUrl = function OnStopRunningUrl( url, exitCode ) {
			//log.thisLevel( log.level.debug );
			//log.debug( 'OnStopRunningUrl ' + url.asciiSpec );
			if( exitCode != NS_OK ) {
				throw	'OnStopRunningUrl exitCode: ' + exitCode + '\n' + 
						'folder URL: ' + url.asciiSpec + '\n' +
						'can not continue' + '\n' +
						'';
			} else {
				startNewProcess( callback );
				return NS_OK;
			}
		}		
	}
	
	var mListener = new classUrlListener( processFolder ); // see below
	
	function makeFolderArray(){
		function pushFolderUri( folder ){
			mFolderArray.push( folder.URI );
		}
		iterateFoldersFunction( mParentFolder, pushFolderUri );
	}

	function processFolder(){
		log.thisLevel( log.level.debug );
		var uri = mFolderArray[ mFolderIndex ];
		//log.debug( 'processFolder: ' + mFolderIndex + ' : ' + uri );
		var folder = getFolderFromUri( uri );
		var localFolder = folder.QueryInterface( Components.interfaces.nsIMsgLocalMailFolder );
		var database = null;
		try {	//	will return valid DB or will start DB reparse
			database = localFolder.getDatabaseWithReparse( mListener, null );	//	mListener gets notifications on start and finish;	
		} catch( ex ) {
			if( ex.result in  NS_DB_ERRORS ){	//	these are 'good' errors
				log.debug( 'folder needs reparse - NS_DB_ERRORS: ' + ex.result );
				log.debug( 'folder reparse started: ' + folder.prettyName );
				return;	//	now leaving processFolder(); will re-enter processFolder() on mListener.OnStopRunningUrl() event
			} else {	//	these are 'bad' errors; should not happen
				throw 'can not continue: unknown NS_DB_ERRORS';
			}
		}
		if( database == null )//	should not happen
			throw 'can not continue: null database after getDatabaseWithReparse()';

		//log.debug( 'processFolder: ' + folder.name );
		mFolderFunction( folder );	//	external callback on each folder in array

		if( ( mFolderIndex % 50 ) == 0 ) //	folders done progress indicator
			log.debug( 'folders processed: ' + mFolderIndex + '/' + mFolderArray.length );

		if( database == null )//	should not happen
			throw 'can not continue: null database mFolderFunction()';

		processMessages( database );	//	iterate all messages in DB
		
		//	XXX	find a way to detect if DB is still in use by other proceesee; i.e. count references to it (?); in this case - do not close
		database.Close( true );	//	parameter::	forceCommit:true
		database.ForceClosed();	//	force mork to release / unload *.msf file to avoid getting out of memory / crash condition
		
		if( ++mFolderIndex < mFolderArray.length ){
			//	more folers
			startNewProcess( processFolder );	//	poceed to next folder
		} else {	
			//	finished all folders
			startNewProcess( afterRunner );		//	run finalizing callback
		}
		
	}
	
	function processMessages( database ) {	//	scanns every message
		if( mMessageFunction == noopFunction ) {
			return; // noo need to look at messages
		}
		var header;
		var enumerator = database.EnumerateMessages();
		while( true ){ // iterate through all messages
			try { header = enumerator.getNext(); }	//	this hack is normal way to use this enumerator
			catch( ex ) { break; };	// 'while' is finished when we get getNext() exception
			if ( header ){ 
				header = header.QueryInterface( Components.interfaces.nsIMsgDBHdr );
		    	mMessageFunction( header );	//	external callback on each message
			} else {	//	should not happen
				log.error( 'invalid header' );
			}
		}		
	}
	
	function foreRunner(){
		log.thisLevel( log.level.debug );
		makeFolderArray();
		mStartFunction();	//	external callback before parser start
		mTimeStarted  = new Date;
		log.debug( 'Running folders: ' + mFolderArray.length );
		startNewProcess( processFolder );	//	start parse & fork away
	}
	
	function afterRunner(){
		log.thisLevel( log.level.debug );
		mActive = false;	//	de-activate timer
		mTimer = null;	//	destroy timer; now start(), pause(), cancel() will return errors
		mTimeFinished  = new Date;
		var timeDiff = (mTimeFinished - mTimeStarted)/1000;
		log.debug( 'Done. Run Time: ' + timeDiff + ' sec' );
		mFinishFunction();	//	external callback after parser finish
	}
	
	this.start = function start(){
		mActive = true;
		startNewProcess( foreRunner );
	}
	this.pause = function pause(){
		mActive = false;
		mTimer.cancel();
	}
	this.resume = function resume(){
		mActive = true;
		startNewProcess( processFolder );
	}

	this.waitDone = function waitDone(){
		throw	"not implemented";
	}

	
	this.init( args );

}


function classCompactFolders(){ // local folders only

	var $Messenger;	// internal messenger object
	var $MailNews;	// internal mail news rdf datasource 
	var $Composite;	// internal composite rdf datasource
	
	var makeVars = function makeVars(){
		$Messenger = Components.classes["@mozilla.org/messenger;1"].createInstance()
			.QueryInterface( Components.interfaces.nsIMessenger );
		$MailNews = Components.classes["@mozilla.org/rdf/datasource;1?name=mailnewsfolders"]
			.createInstance( Components.interfaces.nsIRDFDataSource );
		$Composite = Components.classes["@mozilla.org/rdf/datasource;1?name=composite-datasource"]
			.createInstance( Components.interfaces.nsIRDFCompositeDataSource );
		$Composite.AddDataSource( $MailNews );	
	}

	var dropVars = function dropVars(){
		$Messenger = null;
		$MailNews =  null;
		$Composite = null;
	}

	var compactFolder = function compactFolder( folder ) { // folder : nsIMsgFolder
  		try {
			var expungedBytes = folder.expungedBytes;
		  	if( expungedBytes > 0 ) { // only compact when there is a need
	  			var resource = folder.QueryInterface( Components.interfaces.nsIRDFResource );
		  		$Messenger.CompactFolder( $Composite, resource, true );
		  		log.report( "compacted : " + folder.folderURL + " : " + expungedBytes + " bytes" );
		  	}
  		} catch( e ) {
  			log.error( "compact error : " + folder.folderURL + " \n " + e );
  		}
	}
	
	var parserArgs = {
		startFunction : makeVars,
		finishFunction : dropVars,
		folderFunction : compactFolder,
		delay : 10 * 1000 /* 10 seconds */ 
	}
	
	var parser = new classDatabaseParser( parserArgs );
	
	parser.start();
	
	log.report( "started" );
	
}


	