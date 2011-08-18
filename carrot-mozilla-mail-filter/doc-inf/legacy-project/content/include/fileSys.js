//	FILE SYSTEM

var log = {};
var carrotRoot = {};

function componentServiceInitialize( object ){
	carrotRoot = object;
	log = object.log;
}


specialFolders = {

  /** 
   * /root/.mozilla/Default User/k1m30xaf.slt
   */
   "PrefD": '', 
  
  /**
   * /usr/src/mozilla/dist/bin/chrome
   */
   "AChrom": '', 
  
  /**
   * /root/.mozilla
   */
   "DefProfRt": '',  
  
  /**
   * /root/.mozilla/Default User/k1m30xaf.slt
   */
   "ProfD": '',      
  
  /**
   * /root/.mozilla
   */
   "AppRegD": '', 
  
  /** 
   * /root/.mozilla/appreg
   */
//   "AppRegF": '', 
  
  /** 
   * /usr/src/mozilla/dist/bin/defaults 
   */
   "DefRt": '',   
  
  /**
   * /usr/src/mozilla/dist/bin/defaults/pref
   */
   "PrfDef": '',  
  
  /**
   * /usr/src/mozilla/dist/bin/defaults/profile/US
   */
   "profDef": '', 
  
  /** 
   * /usr/src/mozilla/dist/bin/defaults/profile 
   */
   "ProfDefNoLoc": '', 
  
  /** 
   * /usr/src/mozilla/dist/bin/res
   */
   "ARes": '', 
  
  /** 
   * /usr/src/mozilla/dist/bin/plugins
   */
   "APlugns": '', 
  
  /** 
   * /usr/src/mozilla/dist/bin/searchplugins
   */
   "SrchPlugns": '', 
  
  /**
   * /root/.mozilla/Default User/k1m30xaf.slt/prefs.js
   */
//   "PrefF": '', 
  
  /** 
   * /root/.mozilla/Default User/k1m30xaf.slt/chrome
   */
   "UChrm": '', 
  
  /** 
   * /root/.mozilla/Default User/k1m30xaf.slt/localstore.rdf
   */
 //  "LclSt": '', 
  
  /** 
   * /root/.mozilla/Default User/k1m30xaf.slt/history.dat
   */
//   "UHist": '', 
  
  /** 
   * /root/.mozilla/Default User/k1m30xaf.slt/panels.rdf
   */
//   "UPnls": '', 
  
  /** 
   * /root/.mozilla/Default User/k1m30xaf.slt/mimeTypes.rdf
   */
//   "UMimTyp": '', 
  
  /** 
   * /root/.mozilla/Default User/k1m30xaf.slt/bookmarks.html 
   */
//   "BMarks": '', 
  
  /** 
   * /root/.mozilla/Default User/k1m30xaf.slt/search.rdf
   */
//   "SrchF": '', 
  
  /**
   * /root/.mozilla/Default User/k1m30xaf.slt/Mail
   */
   "MailD": '', 
  
  /**
   * /root/.mozilla/Default User/k1m30xaf.slt/ImapMail
   */
   "IMapMD": '', 
  
  /**
   * /root/.mozilla/Default User/k1m30xaf.slt/News
   */
   "NewsD": '', 
  
  /** 
   * /root/.mozilla/Default User/k1m30xaf.slt/panacea.dat
   */
//   "MFCaD": '', 
   
  /** 
   * /usr/src/mozilla/dist/bin
   */
   "CurProcD": '', 
  
   "Desk": '',
  
  /** 
   * /root
   */
   "Home": '', 
  
  /** 
   * /tmp
   */
   "TmpD": '', 
  
  /**
   * /usr/src/mozilla/dist/bin/components
   */
   "ComsD": '', 
  
};

function getBackupFolderPath(){
	var path = carrot_garden.pref.getPref( 'fileSystem.folderBackupFiles' );
	var folder = getSpecialSubFolder( path );
	return folder.path; 
}

//	depends on jslib library extension installed
//	http://jslib.mozdev.org/
//
function backupFileByArgs ( args ) {

//	args.sourceNativeFilePath 
//	args.sourceProfileFilePath 
//	args.targetFileNamePrefix 
//	args.targetFileNameExt
//	args.makePrefixSubDir

	//	global jslib function and constants
	include( jslib_file );	
	include( jslib_fileutils );	
	include( jslib_dir );
	include( jslib_dirutils );
	include( jslib_date );

	var rv=0;
	
	var fileUtils = new FileUtils(); //	global jslib function 
	var dirUtils = new DirUtils();	 //	global jslib function 

	var profileDirPath = dirUtils.getMozUserHomeDir();
	var backupDirPath = getBackupFolderPath();	// fileUtils.append ( profileDirPath, args.backupDirName )

	var backupDir = new Dir( backupDirPath );	 //	global jslib function 
	rv = backupDir.create();

	if ( args.makePrefixSubDir ) {
		backupDirPath = fileUtils.append ( backupDirPath, args.targetFileNamePrefix );
		var backupDir = new Dir( backupDirPath );	 //	global jslib function 
		rv = backupDir.create();
	}

	var timeNow = new Date();	//	http://developer.mozilla.org/en/docs/Core_JavaScript_1.5_Guide:Predefined_Core_Objects:Date_Object

	var backupFileName = args.targetFileNamePrefix +"_" + 
			jslibDate( "Y_m_d_His", timeNow ) + "." + 	 //	global jslib function 
			args.targetFileNameExt;

	var backupFilePath = fileUtils.append( backupDirPath, backupFileName );
	
	log.info( backupFilePath );
	
	if ( args.sourceNativeFilePath ){
		var defaultFilePath = args.sourceNativeFilePath;		
	} else {
		var defaultFilePath = fileUtils.append( profileDirPath, args.sourceProfileFilePath );				
	}
	
	var defaultFile = new File( defaultFilePath );	 //	global jslib function 
	
	rv = defaultFile.open( "r" );
	rv = defaultFile.copy( backupFilePath );	
	rv = defaultFile.close();
	
	defaultFile = null;
	
}


function backupDirectoryFileUri( uri ) {

	var addrBooks = carrot_garden.addrBooks;
	
    var directory = addrBooks.getDirectoryFromUri( uri );
	var directoryProperties = directory.directoryProperties;
	var fileName = directoryProperties.fileName;
	
	var args = {
		sourceNativeFilePath : false, 
		sourceProfileFilePath: fileName, 
		targetFileNamePrefix: fileName.replace('.mab', ''), 
		targetFileNameExt: "mab",
		makePrefixSubDir: true,	
	}

	backupFileByArgs ( args );	
}


function backupFiltersFile () { // NOTE: works only for LOCAL FOLDERS
	
	var mailFolders = carrot_garden.mailFolders;
	
	var folder = mailFolders.getLocalFolders()
	var filters = folder.getFilterList( null );	
	var nativeFilePath = filters.defaultFile.nativePath

	var args = {
		sourceNativeFilePath : nativeFilePath, 
		sourceProfileFilePath: false, 
		targetFileNamePrefix: "msgFilterRules", 
		targetFileNameExt: "dat",
		makePrefixSubDir: true,	
	}

	backupFileByArgs ( args );	
}


function backupVirtualFoldersFile () {
	
	var args = {
		sourceNativeFilePath : false, 
		sourceProfileFilePath: "virtualFolders.dat", 
		targetFileNamePrefix: "virtualFolders", 
		targetFileNameExt: "dat",
		makePrefixSubDir: true,	
	}

	backupFileByArgs ( args );	
}

function getSpecialFolder( folderKey ) {
	var directoryService = Components.classes['@mozilla.org/file/directory_service;1']
		.getService(Components.interfaces.nsIProperties);
	return directoryService.get( folderKey, Components.interfaces.nsIFile);
}

function getSpecialFolderPath( folder ) {
	return getSpecialFolder( folder ).path;
}

function getLocalFile( filePath ) {
	try {
		var localFile = Components.classes["@mozilla.org/file/local;1"]
			.createInstance(Components.interfaces.nsILocalFile);
		localFile.initWithPath( filePath );
		return localFile;
	} catch( ex ) {
		return null;
	}
}

function openFolder( folder ) {
	openFolderPath( folder.path );
}

function openFolderPath( folderPath ) {
	var folder = getLocalFile( folderPath  );
	try {
		folder.reveal();
	} catch( ex ) {
		var folderUri = Components.classes["@mozilla.org/network/io-service;1"]
			.getService(Components.interfaces.nsIIOService)
			.newFileURI( folder );
		var protocolService = Components.classes["@mozilla.org/uriloader/external-protocol-service;1"]
			.getService(Components.interfaces.nsIExternalProtocolService);
		protocolService.loadUrl( folderUri );
	}
}



//	used to re-define system folders, such as TmpD, etc.
//	folderKey = 'TmpD'; folderObject = nsIFile;
//
function setSpecialFolder( folderKey, folderObject ){	

//	log.thisLevel( log.level.debug );

	if( ! ( folderKey in specialFolders ) ){
		log.error( 'unknown value: folderKey = ' + folderKey );
		return null;
	}
	
	if( ! folderObject ){
		log.error( 'missing argument: folderObject' );
		return null;
	}
	
	if( ! ( folderObject instanceof Components.interfaces.nsIFile ) ) {
		log.error( 'wrong type of argument: folderObject' );
		return null;
	}
	
	var dirService = null;
	try{
		dirService = Components.classes["@mozilla.org/file/directory_service;1"]
             .getService(Components.interfaces.nsIProperties);
	} catch( ex ) {}
	
	if( ! dirService ) {
		log.error( 'could not create: @mozilla.org/file/directory_service;1' );
		return null;
	}
	
	try{
		//	this sequence is a bug workaround:
		var newDir = folderObject.QueryInterface(Components.interfaces.nsISupports); 
		dirService.get( folderKey, Components.interfaces.nsIFile );
		dirService.undefine( folderKey );
		dirService.set( folderKey, newDir );
	} catch( ex ) {
		log.error( 'can not set new dir for: folderKey = ' + folderKey );
		return null;
	}
	
	return newDir;
                     
}


function setSpecialFolderTemporaryFiles(){
	var path = carrot_garden.pref.getPref( 'fileSystem.folderTemporaryFiles' );
	var folder = getSpecialSubFolder( path );
	setSpecialFolder( 'TmpD', folder );
}


//	expected format:
//	path = [system_dir_name]my_name/my_name/my_name/...
//	i.e. = [ProfD]/folder/subfolder
//	http://kb.mozillazine.org/File_IO
//
function getSpecialSubFolder( path ){

//	log.thisLevel( log.level.debug );
	
	log.debug( 'path: ' + path );
	
	var rx = {
		head: RegExp( '\\[[^\\[\\]]+\\]', 'g'),
		brackets: RegExp( '[\\[\\]]', 'g'),
		slash: RegExp( '\\/', 'g'),
	}
	
	var head = path.match( rx.head )[0];
	
	if( ! head ){
		log.error( 'invalid path format: ' + path );
		return null;
	} 
	
	var folderKey = head.replace( rx.brackets, '' );
	
	if( ! ( folderKey in specialFolders ) ) {
		log.error( 'invalid path head: ' + path );
		return null;
	}
	
	var tail = path.replace( rx.head , '' );
	
	var tailList = tail.split( rx.slash );
	
	log.debug( 'folderKey: ' + folderKey + ' tailList: ' + tailList );

	var dirService = null;
	try{
		dirService = Components.classes["@mozilla.org/file/directory_service;1"]
                 .getService(Components.interfaces.nsIProperties);
	} catch( ex ) {}
	
	if( ! dirService ){
		log.error( 'could not create: mozilla.org/file/directory_service' );
		return null;
	}
	
	var dir = null;
	try{
		dir = dirService.get( folderKey, Components.interfaces.nsIFile );
	} catch( ex ) {};

	if( ! dir ){
		log.error( 'could not retrive dir for folderKey: ' + folderKey );
		return null;
	}
	
	for( var k = 0; k < tailList.length; k++ ){
		dir.append( tailList[k] );
	}

	try{
		if( ! dir.exists() ) {   
			dir.create( Components.interfaces.nsIFile.DIRECTORY_TYPE, 0664 );
		}	
	} catch( ex ) {
		log.error( 'could not create dir for path: ' + path );
		return null;
	}
	
	return dir;
}

function TEST(){

	log.thisLevel( log.level.debug );
	
	carrot_garden.loadScriptLibrary( 'jslib' );
	
	include( jslib_file );
	include( jslib_fileutils );
	include( jslib_dir );
	include( jslib_dirutils );
	include( jslib_date );
	
	
	var fileUtils = new FileUtils(); 
	var dirUtils = new DirUtils();
	
	var tempDirPath = dirUtils.getTmpDir();
	log.debug( 'tempDirPath ' + tempDirPath );

	dirUtils.useObj = true;
	var tempDir = dirUtils.getTmpDir();
	var profileDirPath = dirUtils.getMozUserHomeDir();
	var newDirPath = dirUtils.getMozUserHomeDir();

	log.debug( 'tempDir.path ' + tempDir.path );

	newDirPath.append('carrot_garden')
	newDirPath.append('temp_files')
	newDirPath.create();
	log.debug( 'newDirPath.path ' + newDirPath.path );
	
	setSpecialFolder( 'TmpD', newDirPath.nsIFile );
	
	dirUtils.useObj = false;
	tempDirPath = dirUtils.getTmpDir();
	log.debug( tempDirPath );
	
	getSpecialSubFolder( '[ProfD]carrot_garden/temporary_files' )
	
}

	