//	TEST SCRATCHPAD

var log;
var mailFolders;
var util;

function componentServiceInitialize( object ){
	log = object.log;
	mailFolders = object.mailFolders;
	util = object.util;
}

//	USE THIS: 'INTEGER PRIMARY KEY AUTOINCREMENT'
//	http://www.sqlite.org/autoinc.html
//		conn.createTable( tableName,
//			'id INTEGER PRIMARY KEY AUTOINCREMENT,'+


var gMsgDBParser;
var gSelTemp;


function testMain( window ){

//	window.alert('YES')
	//listComponentsResults();
	//testSql();
	//testOneFolder();
	//testParseDatabase();
	//testSleep();
	
//	parseMessageHeadersToSqlite();
//	return;

	var args = {
		view: treeView,
		valid : false,
		validate : function (){},
		collapseXul : [],
		readonlyXul : [],
	};

	gDBconn = makeConnection( "test.sqlite" );
	
	var SQL = gDBconn.executeSimpleSQL;
	var STM = gDBconn.createStatement;

	SQL( 'PRAGMA temp_store = MEMORY' );
	
	SQL( 'DROP VIEW msg_header_view' );
	gSql_msg_header_view = new classSql_msg_header_view( gDBconn ); 
	
	SQL( 'CREATE TEMP TABLE msg_header_view_sort '+
		'( id INTEGER PRIMARY KEY AUTOINCREMENT, id_header INTEGER )' );

	SQL( 'INSERT INTO msg_header_view_sort ( id_header ) '+
		'SELECT id_header FROM msg_header_view' );

	gSelTemp = STM('SELECT id_header FROM msg_header_view_sort WHERE id = ?1 ');	

	treeView.rowCount = gSql_msg_header_view.getCount();

	formTest( window, args );

	
};

var gDBconn;
var gSql_msg_header_view;

var treeView = {
    
    rowCount : 0,
    
    mLastRow: -1,
    
    mRowObj: null,

    getCellText : function( row, column ){

		if( this.mLastRow != row ){
			this.mLastRow = row;
			this.mRowObj = gSql_msg_header_view.getRow( row );
			//log.report( 'row: ' + row + '  column : ' + column.id )
		}
		
		switch( column.id ){
			case 'colRowIndex': 
				return this.mRowObj.rowIndex;
			case 'colId':
				return this.mRowObj.id_header; 
			case 'colSubject': 
				return this.mRowObj.subject;
			case 'colEmailTerm': 
				return this.mRowObj.email_term;
			case 'colFolderUri': 
				return this.mRowObj.folder_uri;
			default: 
				throw 'invalid column';	
		};
    },

    setTree: function(treebox){ this.treebox = treebox; },
    isContainer: function(row){ return false; },
    isSeparator: function(row){ return false; },
    isSorted: function(){ return false; },
    getLevel: function(row){ return 0; },
    getImageSrc: function(row,col){ return null; },
    getRowProperties: function(row,props){},
    getCellProperties: function(row,col,props){},
    getColumnProperties: function(colid,col,props){},
};


function formTest( window, formArguments ){
	window.openDialog( 
		carrot_garden.extensionContentWindow + 'formTest.xul',
		carrot_garden.extensionName, 'chrome,modal,resizable,centerscreen',
		formArguments);
}

function buildView(){

	var mDBConn = makeConnection( "test.sqlite" );

	var msg_header_view = new classSql_msg_header_view( mDBConn ); 
	
}

var SQL_MSG_FROM = 1;
var SQL_MSG_TO = 2;
var SQL_MSG_CC = 4;

function classSqlConnection( mozConn ){
	var SQL = mozConn.executeSimpleSQL;
	var conn = {
		//	native
		//	http://lxr.mozilla.org/mozilla/source/storage/public/mozIStorageConnection.idl
		executeSimpleSQL: mozConn.executeSimpleSQL,
		createTable: mozConn.createTable,
		createFunction: mozConn.createFunction,
		tableExists: mozConn.tableExists,
		indexExists: mozConn.indexExists,
		beginTransaction: mozConn.beginTransaction,
		commitTransaction: mozConn.commitTransaction,
		rollbackTransaction: mozConn.rollbackTransaction,
		preload: mozConn.preload,
		//	native overloaded
		createStatement: function createStatement( statement ){
			try{
				return mozConn.createStatement( statement );
			}catch( ex ){
				log.report( 
					'error in statement: \n' + statement + '\n' +
					'sqlite message: ' + mozConn.lastErrorString
				);
				throw 'can not continue';				
			}
		},
		//	new custom		
		checkTable: function checkTable( tableName, callback ){
			if( ! mozConn.tableExists( tableName ) ) callback( tableName );
		},
		dropTable: function dropTable( tableName ){
			SQL( 'DROP TABLE IF EXISTS ' + tableName );
		},
		getIndexName: function getIndexName( tableName, indexSuffix ){
			return 'index_' + tableName + '_' + indexSuffix;
		},
		createIndex: function createIndex( tableName, indexSuffix, indexSchema ){
			SQL( 'CREATE INDEX IF NOT EXISTS ' + this.getIndexName( tableName, indexSuffix ) + ' ON ' + 
				tableName + ' ( ' + indexSchema + ' ) ' );
		},
		dropIndex: function dropIndex( tableName, indexSuffix ){
			SQL( 'DROP INDEX IF EXISTS ' + 
				this.getIndexName( tableName, indexSuffix )  );
		},
		createView: function createView( viewName, viewSchema ){
			if( ! this.viewExists( viewName ) )
				SQL( 'CREATE VIEW ' + viewName + ' AS ' + viewSchema );
		},
		dropView: function dropView( viewName ){
			if( this.viewExists( viewName ) )
				SQL( 'DROP VIEW ' + viewName );
		},
		checkView: function checkView( viewName, callback ){
			if( ! this.viewExists( viewName ) ) callback( viewName );
		},
		viewExists: function viewExists( viewName ){
			var exists = true;
			try{	//	something simple
				SQL('SELECT oid FROM ' + viewName + ' WHERE oid = 0' );
			} catch( ex ) {
				exists = false;
			};
			log.report(' E: ' + exists )
			return exists;
		},
	};

	conn.__defineGetter__( 'lastInsertRowID', 
		function lastInsertRowID() { return mozConn.lastInsertRowID ; });

	return conn;
}

function makeConnection( fileName ){
	var file = Components.classes["@mozilla.org/file/directory_service;1"]
		.getService(Components.interfaces.nsIProperties)
		.get("ProfD", Components.interfaces.nsIFile);
	file.append( fileName );
	var storageService = Components.classes["@mozilla.org/storage/service;1"]
		.getService(Components.interfaces.mozIStorageService);

	var mozConn = storageService.openDatabase( file );

	var conn = new classSqlConnection( mozConn );
	
	return conn;
}

function parseMessageHeadersToSqlite(){

	log.thisLevel( log.level.debug );

	var mDBConn = makeConnection( "test.sqlite" );

	var sql_msg_folder = new classSql_msg_folder( mDBConn );
	var sql_msg_email_term = new classSql_msg_email_term( mDBConn );
	var sql_msg_header = new classSql_msg_header( mDBConn );
	var sql_msg_header_email_term = new classSql_msg_header_term( mDBConn );

	var msg_header_view = new classSql_msg_header_view( mDBConn ); 

	var id_folder;

	var args = {
		
//		parentFolder: null,

		folderFunction: function( folder ){
			id_folder = sql_msg_folder.store( folder.URI );
		}, 

		messageFunction: function messageFunction( header ){
			//log.thisLevel( log.level.debug );
			
			var emailTerm, emailTermList, emailTermArray;
			var id_from, list_id_to, list_id_cc, id_header;

			//	FROM:			
			emailTerm = header.mime2DecodedAuthor;
			if( emailTerm ) 
				id_from = sql_msg_email_term.store( emailTerm );			

			//	TO:
			emailTermList = header.mime2DecodedRecipients;
			list_id_to = [];
			if( emailTermList ) {
				emailTermArray = util.getEmailTermsFromHeader( emailTermList );
				for( var k = 0; k < emailTermArray.length; k++ ) {
					list_id_to[k] = sql_msg_email_term.store( emailTermArray[k] );			
				}
			}

			//	CC:
			emailTermList = header.ccList;
			list_id_cc = [];
			if( emailTermList ) {
				emailTermList = util.parseHeaderFromRfc2047( emailTermList );
				emailTermArray = util.getEmailTermsFromHeader( emailTermList );
				for( var k = 0; k < emailTermArray.length; k++ ) {
					list_id_cc[k] = sql_msg_email_term.store( emailTermArray[k] );			
				}
			}
			
			//	HEADER			
			id_header = sql_msg_header.store( 
				header.messageId, header.mime2DecodedSubject, 
				id_from, id_folder 
				);
				
			//	HEADER FROM:
				sql_msg_header_email_term.store( id_header, id_from, SQL_MSG_FROM );			

			//	HEADER LIST TO:	
			for( var k = 0; k < list_id_to.length; k++ ) {
				sql_msg_header_email_term.store( id_header, list_id_to[k], SQL_MSG_TO );			
			}
			//	HEADER LIST CC:	
			for( var k = 0; k < list_id_cc.length; k++ ) {
				sql_msg_header_email_term.store( id_header, list_id_cc[k], SQL_MSG_CC );			
			}

		},
		
		startFunction: function startFunction(){
			mDBConn.beginTransaction();
		},
		
		finishFunction: function finishFunction(){
			mDBConn.commitTransaction();
		},
	}

	gMsgDBParser = new mailFolders.classDatabaseParser( args );
	gMsgDBParser.start();
}


function classSql_msg_header_term( conn ){
	var SQL = conn.executeSimpleSQL;
	var STM = conn.createStatement;

	var tableName = 'msg_header_email_term';

	this.store = function store( id_header, id_email_term, term_type ){
		ins.bindInt32Parameter( 0, id_header );		
		ins.bindInt32Parameter( 1, id_email_term );		
		ins.bindInt32Parameter( 2, term_type );		
		ins.execute();
	}
	this.deleteAll = function deleteAll(){
		SQL( 'DELETE FROM ' + tableName );
	};
	this.init = function init(){
		conn.dropTable( tableName );
		conn.createTable( tableName,
			'id INTEGER PRIMARY KEY AUTOINCREMENT,'+
			'id_header INTEGER,' +
			'id_email_term INTEGER,' +
			'term_type INTEGER' +
			'' );
		conn.createIndex( tableName, '1', 'id_header' );
		conn.createIndex( tableName, '2', 'id_email_term' );
	}
	
	conn.checkTable( tableName, this.init );
		
	var ins = STM( 'INSERT INTO '+ tableName + 
		'( id_header, id_email_term, term_type ) VALUES ( ?1, ?2, ?3 )' );

}

function classSql_msg_header_view( conn ){
	var SQL = conn.executeSimpleSQL;
	var STM = conn.createStatement;

	var viewName = 'msg_header_view';

	this.init = function init(){
		conn.dropView( viewName );
		conn.createView( viewName,
			'SELECT '+
			'msg_header.id AS id_header, '+
			'msg_header.subject AS subject, '+
			'msg_email_term.term AS email_term, '+
			'msg_folder.uri AS folder_uri '+
			'FROM msg_header '+
			'JOIN msg_email_term ON msg_header.id_from = msg_email_term.id '+
			'JOIN msg_folder ON msg_header.id_folder = msg_folder.id ' +
			'ORDER BY email_term ' +  
		'');
	};
		
	conn.checkView( viewName, this.init );
	
	var selSubject = STM( 
		'SELECT subject FROM msg_header_view WHERE id_header = ?1 LIMIT 1' );
	var selCount = STM( 
		'SELECT count(*) FROM msg_header_view' );
	
	var selRow = STM( 
		'SELECT id_header, subject, email_term, folder_uri '+
//		'FROM msg_header_view LIMIT 1 OFFSET ?1 ' );
		'FROM msg_header_view WHERE id_header = ?1 ' );
	
	this.getSubject = function getSubject( id ){
		selSubject.bindInt32Parameter( 0, id );
		var result = selSubject.executeStep();
		var value = '';
		if( result ) value = selSubject.getUTF8String( 0 );
		selSubject.reset();
		return value;
	};
	
	this.getCount = function getCount(){
		var result = selCount.executeStep();
		var count =  selCount.getInt32( 0 );
		selCount.reset();
		return count;
	}
	
	this.getRow = function getRow( id ){
		//log.report('id: ' + id)		
		
		gSelTemp.bindInt32Parameter( 0, id );
		
		var result = gSelTemp.executeStep();
		var id2 = 0
		if( result ){
			id2 = gSelTemp.getInt32( 0 );
		}
		gSelTemp.reset();

		//log.report('id2: ' + id2)		
		
		selRow.bindInt32Parameter( 0, id2 );
		var result = selRow.executeStep();
		var row = {};
		if( result ){
			row.id_header = selRow.getInt32( 0 );
			row.subject = selRow.getUTF8String( 1 );
			row.email_term = selRow.getUTF8String( 2 );
			row.folder_uri = selRow.getUTF8String( 3 );
			row.rowIndex = selRow.getInt32( 4 );
		};
		selRow.reset();
		return row;
	}
	
}

//CREATE VIEW msg_header_view AS 
//		SELECT msg_header.id AS id_header,  msg_header.subject,  msg_email_term.term, msg_folder.uri 
//		FROM msg_header 
//		JOIN msg_email_term ON msg_header.id_from = msg_email_term.id 
//		JOIN msg_folder ON msg_header.id_folder = msg_folder.id 

function classSql_msg_header( conn ){
	var SQL = conn.executeSimpleSQL;
	var STM = conn.createStatement;

	var tableName = 'msg_header';

	this.init = function init(){
		conn.dropTable( tableName );
		conn.createTable( tableName,
			'id INTEGER PRIMARY KEY AUTOINCREMENT,'+
			'messageId TEXT,'+
			'subject TEXT,'+
			'id_from INTEGER, '+
			'id_folder INTEGER '+
			'' );
		conn.createIndex( tableName, '1', 'subject' );
		conn.createIndex( tableName, '2', 'id_from' );
		conn.createIndex( tableName, '3', 'id_folder' );
	}
	this.deleteAll = function deleteAll(){
		SQL( 'DELETE FROM msg_header' );
	};	
	
	conn.checkTable( tableName, this.init );

	var selSubject = STM( 
		'SELECT id, subject FROM msg_header WHERE subject LIKE ?1 ' );
	var insAll = STM( 
		'INSERT INTO msg_header ( messageId, subject, id_from, id_folder ) VALUES ( ?1, ?2, ?3, ?4 )' );

	this.store = function store( messageId, subject, id_from, id_folder ){
		insAll.bindStringParameter( 0, messageId );
		insAll.bindUTF8StringParameter( 1, subject );
		insAll.bindInt32Parameter( 2, id_from );
		insAll.bindInt32Parameter( 3, id_folder );
		insAll.execute();
		return conn.lastInsertRowID;	//	must be PK?
	}
}

function classSql_msg_folder( conn ){
	var SQL = conn.executeSimpleSQL;
	var STM = conn.createStatement;

	var tableName = 'msg_folder';

	this.store = function store( url ){
		var id = this.getId( url );
		if( id == 0 ){
			ins.bindUTF8StringParameter( 0, url );		
			ins.execute();
			return conn.lastInsertRowID;	//	must be PK?
		} else {
			return id;
		}
	}
	this.getId = function getId( url ){
		sel.bindUTF8StringParameter( 0, url );
		var result = sel.executeStep();
		var id = 0;
		if( result ) id = sel.getInt32( 0 );
		sel.reset();
		return id;
	}
	this.init = function init(){
		conn.dropTable( tableName );
		conn.createTable( tableName,
			'id INTEGER PRIMARY KEY AUTOINCREMENT,'+
			'uri TEXT'+
			'' );
		conn.createIndex( tableName, '1', 'uri' );
	}
	this.deleteAll = function deleteAll(){
		SQL( 'DELETE FROM msg_folder' );
	};	

	conn.checkTable( tableName, this.init );
	
	var sel = STM( 'SELECT id FROM msg_folder WHERE uri = ?1 LIMIT 1' );
	var ins = STM( 'INSERT INTO msg_folder ( uri ) VALUES ( ?1 )' );

}

function classSql_msg_email_term( conn ){
	var SQL = conn.executeSimpleSQL;
	var STM = conn.createStatement;

	var tableName = 'msg_email_term';

	this.store = function store( emailTerm ){
		var id = this.getId( emailTerm );
		if( id == 0 ){
			ins.bindUTF8StringParameter( 0, emailTerm );		
			ins.execute();
			return conn.lastInsertRowID;	//	must be PK?
		} else {
			return id;
		}
	}
	this.getId = function getId( emailTerm ){
		sel.bindUTF8StringParameter( 0, emailTerm );
		var result = sel.executeStep();
		var id = 0;
		if( result ) id = sel.getInt32( 0 );
		sel.reset();
		return id;
	}
	this.init = function init(){
		conn.dropTable( tableName );
		conn.createTable( tableName,
			'id INTEGER PRIMARY KEY AUTOINCREMENT,'+
			'term TEXT'+
			''	);
		conn.createIndex( tableName, '1', 'term' );
	}
	this.deleteAll = function deleteAll(){
		SQL( 'DELETE FROM msg_email_term' );
	};	

	conn.checkTable( tableName, this.init );

	var sel = STM( 'SELECT id FROM msg_email_term WHERE term = ?1 LIMIT 1' );
	var ins = STM( 'INSERT INTO msg_email_term ( term ) VALUES ( ?1 )' );
}

//	@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

function testSql(){

	log.thisLevel( log.level.debug );

	var file = Components.classes["@mozilla.org/file/directory_service;1"]
	                     .getService(Components.interfaces.nsIProperties)
	                     .get("ProfD", Components.interfaces.nsIFile);

	file.append("test.sqlite");

	//	http://developer.mozilla.org/en/docs/Storage
	//	http://lxr.mozilla.org/seamonkey/source/storage/public/mozIStorageService.idl	

	var storageService = Components.classes["@mozilla.org/storage/service;1"]
	                        .getService(Components.interfaces.mozIStorageService);
	                        
	var mDBConn = storageService.openDatabase(file);

	try {
		mDBConn.executeSimpleSQL( 'CREATE TABLE main (a INTEGER) ');
	} catch (ex) {	}
	try {
		mDBConn.executeSimpleSQL( 'CREATE TABLE msg_email_term ( author )' );
	} catch (ex) {	}
	
	mDBConn.executeSimpleSQL("INSERT INTO main (a) VALUES(2)");

	var sqlInsertEmail = mDBConn.createStatement( 'INSERT INTO msg_email_term ( author ) VALUES ( ?1 )' );
	
	var local = mailFolders.getLocalFolders();
	log.debug( local.prettyName );
	
	
	function messageFunction( header ){
	//	log.thisLevel( log.level.debug );
	//	sqlInsertEmail.bindStringParameter( 0, header.author.toString() );		
	//	sqlInsertEmail.execute();
	}
	function folderFunction( folder ){
	//	log.thisLevel( log.level.debug );
	//	log.debug( folder.prettyName );
		iterateMessages( folder, messageFunction )
	}
	
	mDBConn.beginTransaction();
	
	mailFolders.iterateFoldersFunction( local, folderFunction );

	mDBConn.commitTransaction();
	
	sqlInsertEmail.reset();
	
}
	

function iterateMessages( folder, messageFunction ) {

	log.thisLevel( log.level.debug );

	var database;
	var enumerator;
	var header;
	var parseComplete;

	var abrName = folder.abbreviatedName;

//	var resource = folder.QueryInterface(Components.interfaces.nsIRDFResource);
//	var thisFolder = resource.QueryInterface(Components.interfaces.nsIMsgFolder); 
	
	if( folder.flags & 0x0020 ) return;

	//log.debug( 'abrName: ' + abrName );

	localMailFolder = folder.QueryInterface(Components.interfaces.nsIMsgLocalMailFolder);
	
	var listener = {
		OnStartRunningUrl: function OnStartRunningUrl ( url ){
			log.thisLevel( log.level.debug );
			log.debug( 'OnStartRunningUrl ' + url.asciiSpec );
		},   
		OnStopRunningUrl: function OnStopRunningUrl ( url, exitCode ) {
			log.thisLevel( log.level.debug );
			log.debug( 'OnStopRunningUrl ' + url.asciiSpec  );
			parseComplete = true;
		},		
	}
	
	try {
		
//		database = folder.getMsgDatabase(null);
//		database = localMailFolder.getDatabaseWithReparse( listener, msgWindow ); 

		database = localMailFolder.getDatabaseWithReparse( listener, null ); 

//		if( database == null ) log.debug( 'database null for: ' + abrName );
		
		//enumerator  = database.EnumerateMessages();
		//	Error: [n-b:error  :iterateMessages] exception: Component returned failure code: 
		// 	0x80550005 [nsIMsgFolder.getMessages]
		//	http://lxr.mozilla.org/mailnews/source/mailnews/base/public/msgCore.h#116
	} catch( ex ){

		//log.error( 'exception: ' + ex.message );
		//throw 'PROBLEMS @: ' + abrName;
		//	see # 5 & #6 here:
		//	http://lxr.mozilla.org/mailnews/source/mailnews/base/public/msgCore.h#116

		if ( ex.message.match(/.*0x80550005.*/) || ex.message.match(/.*0x80550006.*/) ) {
			log.debug( 'ERROR: ' + abrName );
			//localMailFolder = folder.QueryInterface(Components.interfaces.nsIMsgLocalMailFolder);
			//localMailFolder.parseFolder( null, null );
		} else {
			//log.error( 'can not get msg db for folder: ' + thisFolder.prettyName );
			log.error( 'exception: ' + ex.message );
			throw 'PROBLEM #1'
			return;		
		}

	}

	return;

	while ( enumerator.hasMoreElements  ){ // iterate through all messages

		try { header = enumerator.getNext(); } 
		catch (ex) { break; };	// finished on getNext() exception

		if ( header instanceof Components.interfaces.nsIMsgDBHdr ){ 
			header = header.QueryInterface( Components.interfaces.nsIMsgDBHdr );
	    	messageFunction( header );
		}
	}
	
}

function getMsgWindow( window ){
    var msgWindow = Components.classes['@mozilla.org/messenger/msgwindow;1']
    	.createInstance(Components.interfaces.nsIMsgWindow);
    //msgWindow.statusFeedback = gStatusFeedback;
    msgWindow.SetDOMWindow(window);
}

function parseFolder( folder ) {

	log.thisLevel( log.level.debug );
		
	try {
		var db = folder.getMsgDatabase( null );
	} catch( ex ){
		//	see # 5 & #6 here:
		//	http://lxr.mozilla.org/mailnews/source/mailnews/base/public/msgCore.h#116
		if ( ex.message.match(/.*0x80550005.*/) || ex.message.match(/.*0x80550006.*/) ) {
			
			folder.parseFolder( null, null )

		}
	}
	
	
}

function listComponentsResults(){
	log.thisLevel( log.level.debug );
	for( item in Components.results ){
		log.debug( 'item ' + item );
	}
}


//	############################################################################################
	
	
function ZZZ_iterateMessages( folder, messageFunction ) {

	log.thisLevel( log.level.debug );

	var db = Object; 
	var enumerator = Object; 
	var header = Object;

	try {
		//	XXX has known problems if *.msf is invalid
		db = folder.getMsgDatabase( null );
	}
	catch( ex ){
		log.error( 'can not get msg db for folder: ' + folder.prettyName );
		throw 'PROBLEMS #1'
		return;		
	}
	try {
		//	XXX has known problems if *.msf is invalid
		enumerator = db.EnumerateMessages();
	}
	catch( ex ){
		log.error( 'can not get enumrrator for folder: ' + folder.prettyName );
		throw 'PROBLEMS #1'
		return;		
	}

	while ( enumerator.hasMoreElements  ){ // iterate through all messages

		try { header = enumerator.getNext(); } // workaround for folders being updated
		catch (ex) { break; };

		if ( header instanceof Components.interfaces.nsIMsgDBHdr ){ // trick to make type conversion
			header = header.QueryInterface( Components.interfaces.nsIMsgDBHdr );
	    	messageFunction( header );
		}
	}
	
	db.clearCachedHdrs();
	//	db.Close( false );
}
	
	
	
/*	
	
[n-b:debug  :testOneFolder] ex: QueryInterface : function QueryInterface() {
    [native code]
}
 ----------
[n-b:debug  :testOneFolder] ex: message : Component returned failure code: 0xc1f30001 (NS_ERROR_NOT_INITIALIZED) [nsIMsgLocalMailFolder.getDatabaseWithReparse]
 ----------
[n-b:debug  :testOneFolder] ex: result : 3253927937
 ----------
[n-b:debug  :testOneFolder] ex: name : NS_ERROR_NOT_INITIALIZED
 ----------
[n-b:debug  :testOneFolder] ex: filename : chrome://carrot_garden/content/include/test.js
 ----------
[n-b:debug  :testOneFolder] ex: lineNumber : 75
 ----------
[n-b:debug  :testOneFolder] ex: columnNumber : 0
 ----------
[n-b:debug  :testOneFolder] ex: location : JS frame :: chrome://carrot_garden/content/include/test.js :: testOneFolder :: line 75
 ----------
[n-b:debug  :testOneFolder] ex: inner : null
 ----------
[n-b:debug  :testOneFolder] ex: data : null
 ----------
[n-b:debug  :testOneFolder] ex: initialize : function initialize() {
    [native code]
}
	
*/
	
function ZZZ_gProcessFolder(){
	log.thisLevel( log.level.debug );
	var uri = gRunParse.folderArray[gRunParse.folderIndex];
	log.debug( 'processFolder: ' + gRunParse.folderIndex + ' : ' + uri );
	var folder = mailFolders.getFolderFromUri( uri );
	var localFolder = folder.QueryInterface(Components.interfaces.nsIMsgLocalMailFolder);
	var database = null;
	try {
		database = localFolder.getDatabaseWithReparse( gUrlListener, null );
	} catch( ex ) {
		log.debug( 'ex: ' + ex.message );
		return;
	}
	if( database == null ) {
			throw 'bda: database == null after reparse';
	}

	log.debug( 'processFolder: ' + folder.name );
	
	if( ++gRunParse.folderIndex < gRunParse.folderArray.length ){
		//gRunParse.folderIndex++;
		log.debug( 'processFolder: NEXT' );
		runFuctionInParallel( gProcessFolder );
	}
			
}
	
var urlListener = {
	OnStartRunningUrl: function OnStartRunningUrl ( url ){
		log.thisLevel( log.level.debug );
		log.debug( 'OnStartRunningUrl ' + url.asciiSpec );
	},   
	OnStopRunningUrl: function OnStopRunningUrl ( url , exitCode ) {
		log.thisLevel( log.level.debug );
		log.debug( 'OnStopRunningUrl ' + url.asciiSpec  );
//		var mailUrl = url.QueryInterface(Components.interfaces.nsIMsgMailNewsUrl);
//		var folder = mailUrl.folder;
//		log.debug( 'folder.prettyName  ' + folder.prettyName  );
		FLAG = true;		
	},		
}

var ZZZ_FLAG = false;
	
function ZZZ_testOneFolder(){
	
	log.thisLevel( log.level.debug );
	
	var uri = 'mailbox://nobody@Local%20Folders/Inbox/vendors';
	
	var folder = mailFolders.getFolderFromUri( uri );

	//	http://lxr.mozilla.org/mailnews/source/mailnews/local/src/nsLocalMailFolder.cpp#376	
	//folder.GetSubFolders();

	log.debug( folder.prettyName );
	
//	var db = folder.getMsgDatabase( null );

	localFolder = folder.QueryInterface(Components.interfaces.nsIMsgLocalMailFolder);

//	var db = localFolder.getDatabaseWithReparse( listener, msgWindow ); 
//	localFolder.parseFolder( null, urlListener );
	
	try{
		FLAG = false;
		var db = localFolder.getDatabaseWithReparse( urlListener, null ); 
	} catch ( ex ){
		if( ex.result in  NS_DB_ERRORS ){
			log.debug( 'NS_DB_ERRORS: ' + ex.result );
		} 
		for( k = 0; k < 50; k ++ ){
			sleep( 100 );
			if( FLAG ) break;
		}
	}

	var db = localFolder.getDatabaseWOReparse( ); 

	log.debug( 'OK' );
	
}


var ZZZ_runnable = {
	run: function run(){
		log.thisLevel( log.level.debug );
		log.debug( 'runnable: ' );
		for( var k = 0; k < 10; k++ ){
	        sleep( 500 );
			log.debug( 'sleep: ' + k );
		}
	}
}

function ZZZ_testSleep(){
	gThreadService.init( runnable, 0, 0, 0, 0 );
}

var ZZZ_gUrlListener = {
	OnStartRunningUrl: function OnStartRunningUrl ( url ){
		//log.thisLevel( log.level.debug );
		//log.debug( 'OnStartRunningUrl ' + url.asciiSpec );
	},   
	OnStopRunningUrl: function OnStopRunningUrl ( url, exitCode ) {
		//log.thisLevel( log.level.debug );
		//log.debug( 'OnStopRunningUrl ' + url.asciiSpec );
		//log.debug( 'OnStopRunningUrl exitCode: ' + exitCode );
		if( exitCode != NS_OK ) throw 'OnStopRunningUrl exitCode: ' + exitCode;
		runFuctionInParallel( gProcessFolder );
	},		
}

var ZZZ_gRunParse = {

	folderArray: [],

	folderIndex: 0, 

	run: function run(){
		log.thisLevel( log.level.debug );
		this.makeFolderArray();
		runFuctionInParallel( gProcessFolder );
		log.debug( 'OK' );
	},
	
	makeFolderArray: function makeFolderArray(){
		var uri = 'mailbox://nobody@Local%20Folders/Inbox/vendors';
		this.folderArray = [];
		this.folderIndex = 0;
		this.folderArray.push( 'mailbox://nobody@Local%20Folders/Inbox/vendors' );	
		this.folderArray.push( 'mailbox://nobody@Local%20Folders/Inbox/competitor' );	
	},
	
};



var ZZZ_gThreadService = Components.classes["@mozilla.org/thread;1"]
		.getService(Components.interfaces.nsIThread);

//	must be used in a separate thread; will 'sleep' its current thread completely
function ZZZ_sleep( time ){
	gThreadService.currentThread.sleep( time );
}
