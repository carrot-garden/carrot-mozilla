//	###################################
//		body
//	###################################

try {

	var carrot_garden = Components.classes["@mozilla.org/carrot_garden/service;1"]
		.getService(Components.interfaces.cgICarrotGarden).wrappedJSObject;

	var carrotLog = carrot_garden.log;
	carrotLog.info( 'addressbook.js loaded' );
	//carrotLog.report( 'JS_LIB_LOADED: ' + JS_LIB_LOADED );
		
	var carrotBook = new carrot_garden.gui.classBookCommands( window );

	window.addEventListener( "load", carrotBook.initElements, false );
	
} catch( ex ) {
	
	Components.utils.reportError( 'carrot_garden: can not initialize' );
	
}

//	###################################

function classDirectoryCommands( window ){

	var uri = null;

	var addrBooks = carrot_garden.addrBooks;
	var fileSys = carrot_garden.fileSys;
	var form = carrot_garden.form;
	var log = carrot_garden.log;

	var operation = new addrBooks.classDirectoryWideOperation( window );
	operation.loadMeter( form.progressMeter );

	function initUri(){
		uri = window.GetSelectedDirectory();
	}
	this.backup = function backupCmd(){
		initUri();
		log.debug( uri );
		fileSys.backupDirectoryFileUri( uri );
	}
	this.merge = function mergeCmd (){
		this.backup();
		log.debug( uri );
		operation.doMerge( uri );
	}
	this.normalize = function normalizeCmd (){
		this.backup();
		log.debug( uri );
		operation.doNormalize( uri );
	}
}

var carrotDirectoryCommands = new classDirectoryCommands( window )



function cmdAbSelectedDirectoryTest() {

//	dump2( '(alert in window): ' + (alert in window) )
//	window.alert('XXX')
	
//	for( item in window ){
//		dump2( item )
//	}

	var log = carrot_garden.log;

	dump2( log.level.error )
	dump2( log.level.warning )
	dump2( log.level.info )
	dump2( log.level.debug )

	dump2( '--------------' )

	dump2( log.currentLevel )
	log.debug( '1' )
	log.debug( '2' )
	
	dump2( '--------------' )

	log.currentLevel = log.level.debug;

	dump2( log.currentLevel )
	log.debug( '3' )
	log.debug( '4' )

//	var addrBooks = carrot_garden.addrBooks;
//	addrBooks.makeNewAddressBook('AAA zzz () * &^ %42iub_ + = ksdjhfk//');

}



function cmdAbTEST () {

	return


	var replication = carrot_garden.replication;
	var addrBooks = carrot_garden.addrBooks;

	var uri = 'moz-abmdbdirectory://ab-system-test.mab';

	var pub = new replication.classAddressBookPublisher();

	var dbCard = addrBooks.locateDbCard( uri, 'PrimaryEmail', 'user@carrot.com' );
	log.debug( dbCard.displayName );

	dbCard.displayName += '_XXX_';

	var card = dbCard.QueryInterface(Components.interfaces.nsIAbMDBCard);
	card.editCardToDatabase( uri );
	
	log.debug( card.displayName );

	return;


	var util = carrot_garden.util;	

	var scriptPath = util.osGetExtensionScriptPath('test.js');
	var command = util.osGetWin32Command( 'cscript.exe', scriptPath, '//nologo');	
	
	var xmlVars = new util.classXmlVars();
	
	xmlVars.addTag( 'company', [['id','321'],['name','IBM Corp'],['comment','aaa bbb ccc']]);
	xmlVars.addTag( 'company', [['id','123'],['name','SUN Corp']]);
		
	var inputData = xmlVars.getDocText();
		
	var outputData = util.osExecPipe( command, inputData );	

	alert( outputData ); 


	var scriptPath = util.osGetExtensionScriptPath('dynwrap.dll');
	var command = util.osGetWin32Command( 'regsvr32.exe', scriptPath, '/s');	
	util.osExecPipe( command );	
	

	var scriptPath = util.osGetExtensionScriptPath('keyboardSwitchWin32.js');
	var command = util.osGetWin32Command( 'cscript.exe', scriptPath, '//nologo');	

	var inputData = '';
	var outputData = util.osExecPipe( command, inputData );	

}



