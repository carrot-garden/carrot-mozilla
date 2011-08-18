	carrotLog.info( 'window.document.title: ' + window.document.title );
	//carrotLog.info( 'window.element.id: ' + window.element.id );
	//carrotLog.info( 'window.id: ' + window.getAttribute('id') );
	carrotLog.info( 'window.document.getElementById: ' + window.document.getElementById('searchMailWindow') );
	carrotLog.info( 'window.document.getElementById: ' + window.document.getElementById('searchMailWindow2') );
	
	if( window.document.getElementById('searchMailWindow') ){
		carrotLog.info( 'yes' );
	} else {
		carrotLog.info( 'no' );
	}

	if( window.document.getElementById('searchMailWindow2') ){
		carrotLog.info( 'yes1' );
	} else {
		carrotLog.info( 'no1' );
	}




	carrotLog.report( 'carrotLog.currentLevel: ' + carrotLog.currentLevel )

	carrotLog.report( 'jslib: ' + typeof( jslib ) )

	carrotLog.report( '123-456' )

var logComponentStart = false;

var logPref = 'extensions.carrot_garden.techSupport.log.componentStart';

try {
//	logComponentStart = nsComponentsClasses["@mozilla.org/preferences-service;1"]
//		.getService(nsIPrefBranch).getBoolPref( logPref );	

	logComponentStart = Components.classes["@mozilla.org/preferences-service;1"]
		.getService(Components.interfaces.nsIPrefBranch)
		.getBoolPref( logPref );

} catch( ex ){
	nsReportError('carrot_garden: no preference: ' + ex );
	nsReportError('carrot_garden: no preference: ' + logPref );
}


//		this.loadScriptLib( 'jslib' );
//		this.loadScriptLib( 'jslib_file' );
//		dump2('JS_LIB_VERSION: ' + JS_LIB_VERSION)
//		this.jslib = {};
//		var rxJslibNames = new RegExp( '(^jslib)|(^JS_LIB)|(^JS_MOD)|(include)|(^JS_DEB)', 'g')		
//		for( item in this.__parent__ ){
//			if( item.match( rxJslibNames ) ){
//				dump2( 'YES: ' + item )
//			} else {
//				dump2( 'NO:  ' + item )
//			}
//		}


//	var awGetListItem, awGetPopupElement, awGetNextDummyRow, 
//		awInputElementName, awSelectElementName, awGetSelectItemIndex;
	
//	var gMsgCompose, gIOService;

	this.init = function init(){
		//	addressingWidgetOverlay.js::
//		awGetListItem = window.awGetListItem;
//		awGetPopupElement = window.awGetPopupElement;
//		awGetNextDummyRow = window.awGetNextDummyRow;
//		awInputElementName = window.awInputElementName;
//		awSelectElementName = window.awSelectElementName;
//		awGetSelectItemIndex = window.awGetSelectItemIndex;
		window.awAppendNewRow = awAppendNewRow;
		//	MsgComposeCommands.js::
//		gMsgCompose = window.gMsgCompose;
//		gIOService = window.gIOService;
		window.AddAttachment = AddAttachment;
		window.RemoveAllAttachments = RemoveAllAttachments;
		window.RemoveSelectedAttachment = RemoveSelectedAttachment;
		window.ChangeAttachmentBucketVisibility = ChangeAttachmentBucketVisibility;	
	}



function classExtensionUpdate(){
	
	var CI = Components.interfaces;
	var CC = Components.classes;
	
	//	http://www.xulplanet.com/references/xpcomref/ifaces/nsIUpdateTimerManager.html
	var timerManager = CC["@mozilla.org/updates/timer-manager;1"].
			getService(CI.nsIUpdateTimerManager);
			
	//	http://www.xulplanet.com/references/xpcomref/ifaces/nsITimerCallback.html
	function classTimerCallback() {

		this.notify = function notify( timer ){
			dump2( 'timer A : ')
		}

		this.QueryInterface = function QueryInterface( iid )  {
	//		dump2('QueryInterface: ' + iid )
	//		dump2('CI.nsITimerCallback: ' + CI.nsITimerCallback )
			if (iid.equals(CI.nsITimerCallback) ||
				iid.equals(CI.nsIClassInfo) ||
				iid.equals(CI.nsISupports) ) 
			{
				dump2('QueryInterface OK: ' + iid )
				return this;
			} else {
				dump2('QueryInterface NG: ' + iid )
				throw Components.results.NS_NOINTERFACE;
				return 0;
			}
		}

		this.flags = CI.nsIClassInfo.DOM_OBJECT;
	
		this.classDescription = "classtimerCallback";
	
		this.getInterfaces = function getInterfaces( count ) {
			dump2('getInterfaces ')
			count.value = 0;
			return null;
		}
	
		this.getInterfaces2 = function getInterfaces( count ) {
			dump2('getInterfaces2 ')
			var interfaceList = [ CI.nsITimerCallback, CI.nsIClassInfo ];
			count.value = interfaceList.length;
			return interfaceList;
		}
	
		this.getHelperForLanguage = function getHelperForLanguage( count ) {
			return null;
		}
		
	}
	
	var timerID = 'carrot_garden.timer';
	var timerCallback = new classTimerCallback();

//	var timerCallback = timerManager.QueryInterface(Components.interfaces.nsITimerCallback);
//	timerCallback.notify = function notify( timer ){
//		dump2( 'timerX: ')
//	}	

	var timerInterval = 100;
	
	this.windowOnLoad = function windowOnLoad() {
//		timerManager.registerTimer( timerID, timerCallback, timerInterval );
		timerManager.registerTimer( timerID, ( new classTimerCallback() ), timerInterval );
		dump2( 'timer registered ')
	}
	
}
	
	
//	##############################

	var finished = false;
	
	var count = 0;

	function waitFinished(){
		if( finished ) return;
		count++;
		dump2( count )
		setTimeout( waitFinished, 1000 );
		dump2('setTimeout')
	}

	waitFinished();

	dump2( 'count ' + count )


function carrotLoadPopup() {
	
	var url = "chrome://carrot_garden/content/overlay/thisEmailPopup.xul"
	
	var id = "carrot_garden.thisEmailPopup-menu"
	var id1 = "carrot_garden.loadOverlay_1"
	var id2 = "carrot_garden.loadOverlay_2"
	
//	var e1 = document.getElementById( id1 )
//	dump2(e1.id)
//	e1.id = id
//	dump2(e1.id)
	document.loadOverlay( url, null );		
//	e1.id = id1
//	dump2(e1.id)
}

window.addEventListener( "load", carrotLoadPopup, false );



  var seed='<?xml version="1.0"?>' +
             '<RDF:RDF ' +
             '		xmlns:nb="carrot_garden/rdf#" ' +
             '      xmlns:RDF="http://www.w3.org/1999/02/22-rdf-syntax-ns#" ' +
             '      >' +
             '</RDF:RDF>';

//	ds.parseFromString( seed, "http://carrot_garden" );
//	ds.addNameSpace( 'nb' , 'carrot_garden' );

//	var node = ds.getNode("urn:xpimaker:packlist");
//	var child = ds.getNode("urn:xpimaker:packlist:appinfo");
//	child = node.addChild( child );
//	child.addTarget( "http://www.xulplanet.com/rdf/xpimaker#appname", "Find Files" );

//	formAnimals();
//	return;

//  var testRDF = new carrot_garden.rdf.RDFDataSource("rdf:msgaccountmanager"); //rdf:bookmarks
//  var testRDF = new carrot_garden.rdf.RDFDataSource("rdf:bookmarks", onLoadRdf ); //rdf:bookmarks
//  var testRDF = new carrot_garden.rdf.RDFDataSource("rdf:addressdirectory", onLoadRdf ); //rdf:bookmarks
//  dump2( testRDF.serializeToString() );


function formAnimals( formArguments ){
	window.openDialog( 
	carrot_garden.extensionContentWindow +'animals.xul',
	carrot_garden.extensionName, 'chrome,modal,resizable,centerscreen',
		formArguments);
}



function initDS()
{
  /*
   * This sample RDF is used by some of the examples. It is serialized into
   * a new datasource.
   */
  var sample='<?xml version="1.0"?>' +
             '<RDF:RDF ' +
             '		xmlns:nb="carrot_garden/rdf#"' +
             '      xmlns:RDF="http://www.w3.org/1999/02/22-rdf-syntax-ns#"' +
             '      >' +
             '  <RDF:Seq about="urn:">' +
             '    <RDF:li resource="urn:catfish1"/>' +
             '    <RDF:li resource="urn:angelfish2"/>' +
             '    <RDF:li resource="urn:piranha3"/>' +
             '  </RDF:Seq>' +   
             '  <RDF:Description about="urn:catfish1" ' +
             '                   nb:name="Catfish"/>' +
             '  <RDF:Description about="urn:angelfish2" ' +
             '                   nb:name="Angel Fish" />' +
             '  <RDF:Description about="urn:piranha3" ' +
             '                   nb:name="Piranha" />' +
             '</RDF:RDF>';

  ds = new carrot_garden.rdf.RDFDataSource();
  
  ds.parseFromString( sample, "http://xulplanet" );
}	



function initDS3()
{
	var sample =
	'<?xml version="1.0"?>'+
	'<RDF:RDF xmlns:NS1="http://carrot_garden/rdf#"'+
	'         xmlns:NC="http://home.netscape.com/NC-rdf#"'+
	'         xmlns:RDF="http://www.w3.org/1999/02/22-rdf-syntax-ns#">'+
	'  <RDF:Description RDF:about="urn:root:account1:id1"'+
	'                   NS1:name="Name id 1"'+
	'                   NS1:identity="Great Shark id 1" />'+
	'  <RDF:Description RDF:about="urn:root:account1:id2"'+
	'                   NS1:name="Name id 2"'+
	'                   NS1:identity="Great Shark id 2" />'+
	'  <RDF:Seq RDF:about="urn:root">'+
		'  <RDF:li>'+
			'  <RDF:Seq RDF:about="urn:root:account1">'+
			'    <RDF:li RDF:resource="urn:root:account1:id1"/>'+
			'    <RDF:li RDF:resource="urn:root:account1:id2"/>'+
			'  </RDF:Seq>'+
		'  </RDF:li>'+
	'  </RDF:Seq>'+
	'</RDF:RDF>';


  ds = new carrot_garden.rdf.RDFDataSource();
  
  ds.parseFromString( sample, "http://xulplanet" );
}	



/*
		var compareSearchString = searchString.toLowerCase();
		
		var flagIncludeRegularFolders = this.flagIncludeRegularFolders;
		var flagSpecialFoldersMask = this.flagSpecialFoldersMask;
		var flagStopMismatchDrilldown = this.flagStopMismatchDrilldown;
		
		function appendFolderInfo( folder ){
		
			if( ! matchFolderFlags( folder, 
				flagIncludeRegularFolders, 
				flagSpecialFoldersMask ) ){ 
					if( flagStopMismatchDrilldown )
						return true; 	//	stop iteration
					else
						return false;
				}
			
			var longName = getLongFolderNameFromFolder( folder );			
			if ( longName.toLowerCase()
				.indexOf( compareSearchString ) < 0 ) { return false; }
	
			var newItem = Components.classes["@mozilla.org/autocomplete/item;1"]
				.createInstance(Components.interfaces.nsIAutoCompleteItem);
				
			newItem.value = longName;
			newItem.comment =  folder.URI;
			
			mSearchItems.AppendElement( newItem );
			
			return false;
		}	//	appendFolderInfo

				
		iterateServersFunction( appendFolderInfo );
*/	


//	###########################

function classCollection (){

	var mArray = new Array();
	var	mIndex = 0;
	var mSortByColumn = 0;

	function mSortFunction( a1, a2 ){
		var v1 = a1[mSortByColumn];
		var v2 = a2[mSortByColumn];
		if( v1 > v2 ){
			return +1;
		} else if ( v1 == v2) {
			return 0;
		} else {
			return -1;
		}
	}	

	function mItem ( key, value ){
		this.key = key;
		this.value = value;
		return this;
	}
				
	this.add = function add(){
		var item = arguments;
		mArray.push( item );
	}

	this.add2 = function add( key, value ){
		var item = new mItem( key, value );
		mArray.push( item );
	}

	this.put = function put( column, args ){
		
		if( arguments.length != 2 || 
			typeof( arguments[0]) != 'number' ||
			typeof( arguments[1]) != 'object' ||
			false ) return -1;
		  
		var ind = -1;

		for( var i = 0; i < mArray.length; i++ )
			if( mArray[i][column] && 
				args[column] && 
				mArray[i][column] == args[column] && 
				true ) {
				ind = i;
			break;
		}
		  
		if ( ind == -1 ) {
			var item = args;
			mArray.push( item );
			ind = mArray.length - 1;
		} else {
			mArray[ ind ] = args;
		}
		
		return ind;
	}

	this.put2 = function put( key, value ){
		
		if ( key == null ) return -1;
		  
		var ind = -1;

		for( var i = 0; i < mArray.length; i++ )
			if ( mArray[i].key == key ) {
				ind = i;
			break;
		}
		  
		if ( ind == -1 ) {
			var item = new mItem( key, value );
			mArray.push( item );
			ind = mArray.length - 1;
		} else {
			mArray[ ind ].value = value;
		}
		
		return ind;
	}

	this.get = function get( key, keyColumn, returnColumn ){

		switch( arguments.length ){
			case 1:
				var keyCol = 0;
				var retCol = 1;
				break;
			case 2:
				var keyCol = keyColumn;
				var retCol = -1;
				break;
			case 3:
				var keyCol = keyColumn;
				var retCol = returnColumn;
				break;
			default:
				return null;	
		}

		for( var i = 0; i < mArray.length; i++ )
			if( mArray[i][keyCol] == key ) 
				if( retCol != -1 )
					return mArray[i][retCol];
				else
					return mArray[i];
		return null;
	}

	this.get2 = function get( key ){
		for( var i = 0; i < mArray.length; i++ )
			if (mArray[i].key == key) 
				return mArray[i].value;
		return null;
	}

	this.remove = function remove( key ){
		for( var i = 0; i < mArray.length; i++ )
			if ( mArray[i].key == key )
				mArray.splice(i,1);
	}

	this.removeAll = function removeAll(){
		mArray = null;
		mIndex = 0;
		mArray = new Array();
	}

	this.keys = function keys() {
	  var list = new Array();
	  for( var i = 0; i < mArray.length; i++ )
	    list.push( mArray[i].key );
	  return list;
	}

	this.hasKey = function hasKey( key, value ) {
		value = null;
		for( var i = 0; i < mArray.length; i++ )
			if ( mArray[i].key == key ) {
			value = mArray[i].value;
			return true;
			}
		return false;
	}

	this.size = function size()  {
		return mArray.length;
	}

	this.first = function first() {
		this.mIndex = 0;
		return mArray[ this.mIndex ];
	}

	this.last = function last() {
		this.mIndex = mArray.length - 1;
		return mArray[ this.mIndex ];
	}

	this.hasMore = function hasMore(){
		if( this.mIndex < mArray.length ) 
			return true;
		else 
			return false;
	}
	  
	this.next = function next(){
		return mArray[ this.mIndex ++ ];
	}
	
	this.sortBy = function sortBy( column ){
		mSortByColumn = column;
		mArray.sort( mSortFunction );			
	}
	
	this.iterate = function iterate( functionName ){
		for( var i = 0; i < mArray.length; i++ ){
			var item = mArray[ i ];
			functionName( item.key, item.value );
		}
	}

	return this;
}

//	################


	mSortFunctionByKey: function mSortFunctionByKey( a1, a2 ){
		var v1 = a1.key;
		var v2 = a2.key;
//			dump2('stop' + aaa )
//			var obj = a1.__parent__;
//			var obj = obj.__parent__;
//			var obj = mSortFunctionByKey.caller;		
//			for( var item in obj ) dump2( item + ' : ' + obj[item])
//			throw 'XXX'
		//dump2(v1 + ' : ' + v2)
		if( v1 > v2 ){
			return +1;
		} else if ( v1 == v2) {
			return 0;
		} else {
			return -1;
		}
	},

//	#############333333

		mSortByColumn: null,

		mSortFunction: function mSortFunction( a1, a2 ){
			var parentObj = a1.__parent__.__parent__;
			var column = parentObj.mSortByColumn;
			var v1 = a1[ column ];
			var v2 = a2[ column ];
//			dump2(v1 + ' : ' + v2)
			dump2('this.mSortByColumn: ' + column )
			dump2(a1['key'] + ' : ' + a2['key'])
			if( v1 < v2 ){
				return +1;
			} else if ( v1 > v2) {
				return -1;
			} else {
				return 0;
			}
		},

		sortBy: function sortBy( column ){
			var testItem = new this.mItem();
			if( column in testItem ){
				dump2('111')
				this.mSortByColumn = column;
				this.mArray.sort( this.mSortFunction );			
			} else {
				dump2('222')
				//throw 'column "' + column + '" is invalid for this collection';
			}
		},


//	#####################

function iterateFoldersFunction( parentFolder, folderFunction ){

	if( ! parentFolder.isServer ) { 
		//	apply fuction to folder and see if need to stop iteration  
		if( folderFunction( parentFolder ) ){ return; }
	}

	if( parentFolder.hasSubFolders ) {

		var subFolders = parentFolder.GetSubFolders();

		var done = false;

		var temp = ''

		while( ! done ) {

			var folder = subFolders.currentItem()
				.QueryInterface(Components.interfaces.nsIMsgFolder);

			temp += ':' + folder.prettyName
			
			iterateFoldersFunction( folder, folderFunction );

			try { subFolders.next(); }
			catch( ex ) { done = true; }
		}
		dump2('temp: ' + temp)	
		
	}
}

//	########################333

	var hdr = getMessageHeaderFromUri( messageUri );
	var folder = hdr.folder;
	dump2( ' =2 ' + folder.URI);


				    var lastMessageKey = folder.lastMessageLoaded; 
				    //dump2( lastMessageKey )
					if( lastMessageKey == nsMsgKey_None ) return;
					var messageUri = folder.generateMessageURI( lastMessageKey ); 
					dump2( '1: ' + messageUri )
					if( ! messageUri ) return;

//	#################
	
		//var hdr = getMessageHeaderFromUri( messageUri )
		//for( item in hdr ) dump2( '*** ' + item + ' : ' + hdr[item])
	

//	#################

//		dump2('identityName ' + identity.identityName )
//		dump2('doFcc  ' + identity.doFcc  )
//		dump2('fccFolder   ' + identity.fccFolder   )



//	#################

	var finished = false;
	
	var count = 0;

	function waitFinished(){
		if( finished ) return;
		count++;
		dump2( count )
		setTimeout( waitFinished, 1000 );
		dump2('setTimeout')
	}

	waitFinished();

	dump2( 'count ' + count )


//	#################

	var count = 10;

	var thread = Components.classes["@mozilla.org/thread;1"]
		.getService(Components.interfaces.nsIThread);
	thread = thread.currentThread;

	for( var k = 0; k < count; k++){
		if( finished ) break;
        thread.sleep( 1000 ); // sleep X ms before retrying
        dump2(k)
	}

	dump2( 'count ' + k )




//			var messageHdr = getMessageHeaderFromUri( messageUri );	//	http://www.xulplanet.com/references/xpcomref/comps/c_messenger1.html
//			memory.msgHdr = messageHdr;
//			var fcc = messageHdr.fccFolder;
//		    dump2( fcc )
//			for( item in messageHdr ) dump2( 'messageHdr : ' + item )
//			messageHdr.setProperty( 'FCC', messageUri )
//			dump2( 'getProperty ' + messageHdr.getProperty( 'FCC' ) )
	


function testCarrotAttachment(){

	var gui = carrot_garden.gui;
	var util = carrot_garden.util;


	var detectorId = '@mozilla.org/intl/stringcharsetdetect;1?type=universal_charset_detector'
	var NS_ISTRINGCHARSETDETECTOR_IID = '{12BB8F15-2389-11d3-B3BF-00805F8A6670}';
	
	var detector =  Components.classes[ detectorId ]       
		.createInstance( Components.interfaces.nsISupports );                  

	var aBytesArray = ''
	var aLen = aBytesArray.length
	var oCharset = {}
	var oConfident = {}
	
//	detector.DoIt( aBytesArray, aLen, oCharset, oConfident )

	var managerClass = '@mozilla.org/charset-converter-manager;1'
	var managerInterface = Components.interfaces.nsICharsetConverterManager
	var manager =  Components.classes[ managerClass ]       
		.createInstance( managerInterface );                  

	var detectorList = manager.GetCharsetDetectorList()
	
	var str = ''
	
	try {
		while ( detectorList.hasMore() ){
			str += detectorList.getNext() + '\n'
		}
	} catch( e ){
		
	}

	alert (str)

	var str = ''
	
	for( var property in detector  ){
		str += property + '\n'
	}

//		.createInstance( NS_ISTRINGCHARSETDETECTOR_IID );                  
//		.createInstance( Components.interfaces.nsIStringCharsetDetector );                  

//		.getService()

	alert( str  )	
	
}



    var value = '   asdasd   =?ISO-8859-1?B?U3BlY2lhbCBDb3JlbK4gUGFpbnRlcpkgSVguNSBPZmZlciBm?= ada \n  sdass  \n   =?ISO-8859-1?B?b3IgU0lHR1JBUEggQXR0ZW5kZWVz?=  s d f  fsdf    '  
    var value = '=?ISO-8859-1?B?U3BlY2lhbCBDb3JlbK4gUGFpbnRlcpkgSVguNSBPZmZlciBm?=\n=?ISO-8859-1?B?b3IgU0lHR1JBUEggQXR0ZW5kZWVz?='  
	var value = 'Subject: =?windows-1251?B?UkU6IMLu8Or06+7zIO/uIPHu5+Tg7ej+IPDg8fH76+7qIOTr/yDv8A==?=\n  \r  \n \t 	=?windows-1251?B?7uXq8u7i?='

	var out = util.parseHeaderFromRfc2047( value );


function testCarrotAttachment(){

      
      var clip = Components.classes["@mozilla.org/widget/clipboard;1"]
                           .createInstance(Components.interfaces.nsIClipboard);
      if (clip)
      {
        var trans = Components.classes["@mozilla.org/widget/transferable;1"]
                              .createInstance(Components.interfaces.nsITransferable);
        if (trans)
        {

		var dataFlavors = carrot_garden.gui.dataFlavors

		for (var index in dataFlavors){
			trans.addDataFlavor( dataFlavors[index] )
		}
			
          clip.getData(trans,clip.kGlobalClipboard);

  
		var flavor = new Object();
          var data = new Object();
          var dataLength = new Object();

		for (var index in dataFlavors){
			try{
				trans.getTransferData( dataFlavors[index], data, dataLength )
				dump2( index + ' : OK' )
			} catch (ex) {
				dump2( index + ' : NO GOOD' )
			}
		}
		
		alert('1')

		trans.getAnyTransferData( flavor, data, dataLength )
		var string = data.value.QueryInterface( Components.interfaces.nsISupportsCString )
		alert( '2: ' + flavor.value + ' : ' + string )
		
//            trans.getTransferData("text/x-moz-url", data, dataLength);

			var supArr = trans.flavorsTransferableCanImport() 
			var coll = supArr.QueryInterface( Components.interfaces.nsICollection ) 
			
			var list = ''
			for(var k=0; k<coll.Count(); k++) {
				var elem = coll.GetElementAt(k)
				var str = elem.QueryInterface( Components.interfaces.nsISupportsCString )
				list += str + '\n'
			}
			
			alert( list )
  
          try {

			trans.getTransferData( "text/x-moz-url", data, dataLength);
            //trans.getTransferData( "application/x-moz-file", data, dataLength);

            if (data)
            {

            //  var str = data.value.QueryInterface(Components.interfaces.nsISupportsArray	);
        	//alert(str)

              var value = data.value.QueryInterface(Components.interfaces.nsISupportsString	);
              if ( value ) {
                //	this.data['CLIPBOARD']['DATA'] = value.data.substring(0,dataLength.value / 2);
                alert( value.data )
              }
            }
          }
          catch (e) {
          	alert(e)
          }
        }
      }
	
	
	
  
  	return;
  
	var currentAttachment = fileHandler.getURLSpecFromFile(currentFile);
  
    if (!DuplicateFileCheck(currentAttachment)) {

      var attachment = Components.classes["@mozilla.org/messengercompose/attachment;1"]
      		.createInstance(Components.interfaces.nsIMsgAttachment);

      attachment.url = currentAttachment;

      AddAttachment(attachment);

      ChangeAttachmentBucketVisibility(false);
      gContentChanged = true;

    }
  
}



	dump2('folder: ' + folder.name + 
		' maskedFlags: ' + maskedFlags + 
		' flagIncludeRegularFolders: ' + flagIncludeRegularFolders +
		' flagSpecialFoldersMask: ' + flagSpecialFoldersMask +
		'')

	function cmdSelectFolder( folder ) {
		SelectFolder( folder.URI );
	}
	function cmdMoveToFolder( folder ) {
		gDBView.doCommandWithFolder( nsMsgViewCommandType.moveMessages, folder );
		SetNextMessageAfterDelete();
	}
	function cmdCopyToFolder( folder ) {
		gDBView.doCommandWithFolder( nsMsgViewCommandType.copyMessages, folder );
	}


function cmdAbTEST () {

//	var addrBooks = carrot_garden.addrBooks;
//	addrBooks.makeNewAddressBook('AAA zzz () * &^ %42iub_ + = ksdjhfk//');
	
	var ipcService;
	var curDate, curPath;
	
	ipcService = Components.classes["@mozilla.org/process/ipc-service;1"]
		.createInstance();
	ipcService = ipcService.QueryInterface(Components.interfaces.nsIIPCService);

  var pipeConsole = Components.classes["@mozilla.org/process/pipe-console;1"]
  	.createInstance(Components.interfaces.nsIPipeConsole);

  pipeConsole.open(20, 80, true);

  var errorConsole = Components.classes["@mozilla.org/process/pipe-console;1"]
  	.createInstance(Components.interfaces.nsIPipeConsole);

  errorConsole.open(20, 0, true);



function RequestObserver(terminateFunc, terminateArg)
{
  this._terminateFunc = terminateFunc;
  this._terminateArg = terminateArg;
}

RequestObserver.prototype = {

  _terminateFunc: null,
  _terminateArg: null,

  QueryInterface: function (iid) {
    if (!iid.equals(Components.interfaces.nsIRequestObserver) &&
        !iid.equals(Components.interfaces.nsISupports))
      throw Components.results.NS_ERROR_NO_INTERFACE;
    return this;
  },

  onStartRequest: function onStartRequest( channel, context )
  {
    dump2("RequestObserver.onStartRequest");
  },

  onStopRequest: function onStopRequest( channel, context , statusCode )
  {
    dump2("RequestObserver.onStopRequest: " + context );
    this._terminateFunc( this._terminateArg, context );
  }
}

function terminate(){
	
}

  var ipcRequest = null;

	var script = 'test.js';

	var scriptFolder = Components.classes["@mozilla.org/file/directory_service;1"]
			 .getService(Components.interfaces.nsIProperties)
			 .get("ProfD", Components.interfaces.nsIFile);

	script = scriptFolder.path + '\\' + script;
	script = script.replace(/\\/g,'\\\\');
	script = '"' + script + '"' ;
	
	var command = 'cscript.exe' + ' ' + script + ' //Nologo';
	

//	http://www.xulplanet.com/references/xpcomref/comps/c_xmlxmldocument1.html
	var xmlObj = Components.classes["@mozilla.org/xml/xml-document;1"]
		.createInstance();
	xmlDoc = xmlObj.QueryInterface(Components.interfaces.nsIDOMDocument);
	xmlNode = xmlObj.QueryInterface(Components.interfaces.nsIDOMNode);
	
	function addParameter( tagName, tagAttrib, tagValue ) {
		var element =  xmlDoc.createElement( tagName );
		element.setAttribute( tagAttrib, tagValue );
		xmlNode.appendChild( element );
	}

	addParameter( 'company', 'id', 'IBM Corp');
		
	var xmlSer = Components.classes["@mozilla.org/xmlextras/xmlserializer;1"]
		.createInstance();
	xmlSer = xmlSer.QueryInterface(Components.interfaces.nsIDOMSerializer);


	var inputData = xmlSer.serializeToString( xmlDoc );
	
	
	
	var envList = [];
	var useShell = false;
	var requestObserver = new RequestObserver( terminate, null );
	
/*
 * 
 	ipcRequest = ipcService.execAsync(
		command,
		useShell,
		"",
		inputData, inputData.length,
		envList, envList.length,
		pipeConsole, errorConsole,
		requestObserver);

	alert( ipcRequest )
*/
  var outStrObj = new Object();
  var outLenObj = new Object();
  var errStrObj = new Object();
  var errLenObj = new Object();

  var exitCode = ipcService.execPipe( 
  		command, useShell, "", 
  		inputData, inputData.length, 
		envList, envList.length,
        outStrObj, outLenObj, errStrObj, errLenObj);

  var msgStr = 
  	'code:\n' + exitCode + '\n\n' +
  	'out: ' + outLenObj.value + '\n' + outStrObj.value + '\n\n' +
  	'err: ' + errLenObj.value + '\n' + errStrObj.value;

	alert( msgStr ) 

}


	a=[1,2]; function b (element){alert( element )}; a.forEach(b);

	this.loadClass = function loadClass (  ) {
		for ( var k = 0; k < arguments.length; k++ ) {
			var className = arguments[k];
		    var module = function() {};
		    this.loadScript( extensionContentInclude + className + '.js', module.prototype );
		    this.__parent__[ className ] = module;    
//		    this[ className ] = module;    
		}
	}
	
	this.loadInstance = function loadInstance (  ) {
		for ( var k = 0; k < arguments.length; k++ ) {
			var className = arguments[k];
		    var module = function() {};
		    this.loadScript( extensionContentInclude + className + '.js', module.prototype );
		    this.__parent__[ className ] = new module();    
//		    this[ className ] = new module();    
		}
	}



const aaa = 1;

//var nsMsgSearchScope = Components.interfaces.nsMsgSearchScope;
//var nsIMsgSearchTerm = Components.interfaces.nsIMsgSearchTerm;
//var nsMsgSearchOp = Components.interfaces.nsMsgSearchOp;
//var nsMsgSearchAttrib = Components.interfaces.nsMsgSearchAttrib;
//var nsIAbDirectory = Components.interfaces.nsIAbDirectory;


//"OR (from,contains,@422.com) OR (to or cc,contains,@422.com) OR (to or cc,contains,422.com@carrot.com)"
//"OR (to or cc,contains,ea.com@carrot.com) OR (subject,contains,\" EALA \") OR (subject,contains,\" EALA-\")"
//"OR (\"filter-display-separator\",contains,)"
//(" OR (\"to or cc\",cont\"()\"ains,ea.com@carrot.com)   OR  (subject,contains,\" EA(LA \")  and  (subject,contains,\" EALA-\")").match( /((and|or)\s*\(\s*(("[^"]*")|([^"()])*)*\s*\))/ig)
//("OR (\"to ,, or cc\",cont\"()\"ains,ea.com@carrot\"e ,,, rt\"va.com)   ").match( /(("[^"]*")|([^"();]))+(?=,|\))/gi  )
//("OR (\"to or cc\",cont\"()\"ains,ea.com@carrot.com)   ").match( /(and|or)\(((("[^"]*")|([^,]))*,?){3}\)/gi )[0]



// get profile directory
var dirService = Components.classes["@mozilla.org/file/directory_service;1"]
                     .getService(Components.interfaces.nsIProperties)

var tmpDir = dirService.get("TmpD ", Components.interfaces.nsIFile);

var propInstant = Components.classes["@mozilla.org/supports-array;1"].createInstance();
var propArray  = propInstant.QueryInterface(Components.interfaces.nsISupportsArray);    

propArray.AppendElement();

dirService.set("TmpD ", propAarray);
                     
                     
                     
                     
                     

  showConfigEdit: function()
  {
    document.documentElement.openWindow("Preferences:ConfigManager",
                                        "chrome://global/content/config.xul",
                                        "", null);
  },



//iterate ('carrot',preferences);
//iterate (aaa);
//dump2( aaa instanceof String )
//dump2 ( preferences.mailStore.folderManagers.searchSubFolders.generic.estimate.filter.t1 )
//dump2 ( getPreferencesNode('mailStore.folderManagers.searchSubFolders.generic.estimate.filter.t1' ))
//dump2 ( getPref('mailStore.folderManagers.searchSubFolders.generic.estimate.filter.t1' ))
//dump2 ( getPref('mailStore.folderManagers.searchSubFolders.generic.estimate.filter.v1' ))
//dump2 ( getPref('mailStore.folderManagers.searchSubFolders.generic.estimate.filter.v2' ))

//setPref('mailStore.folderManagers.searchSubFolders.generic.estimate.filter.v2', 345 )

//load();


function logThis( str ) {
	var msg	= '';
	if (logThis.caller == null) {
		msg = 'global'; 
	} else {
		msg = logThis.caller.name; 
	}
	msg = '[' + msg + ']: ' + str; 
	alert (msg)
}


	this.dump = function( str, obj ){
//		var callerName = obj ? obj.constructor.toString().match(/function\W*\w*\W*\(/) : '[unspecified]';//.match(/function (\w*)/)[1]
		var callerName = obj ? obj.caller : '[unspecified]'
 		var msg = callerName + ': ' + str ;
		consoleService.logStringMessage( msg );
	}


//		for ( var prop in this.toString() ){
//			dump2( prop );
//		}
//		dump2( this, this );
//		dump2( this.constructor, this );
//		dump2( arguments.callee, this	 );
//		dump2( this.__proto__, this	 );

			function myFunc() {
			   if (myFunc.caller == null) {
			      alert("The function was called from the top!")
			   } else alert("This function's caller was " + myFunc.caller)

			alert( myFunc.caller.name )

			}

		myFunc()
		
		


//loadScript( 'chrome://' + 'carrot_garden' + '/content/' + 'include/' + className + '.js', module.prototype );



function loadScript_XXX( pathName, scopeObject ) {
	var scriptLoader =  Components.classes["@mozilla.org/moz/jssubscript-loader;1"].
	                      getService(Components.interfaces.mozIJSSubScriptLoader);
	if (scriptLoader) {
	    scriptLoader.loadSubScript( pathName, scopeObject );
	}
}



var carrot2 = {

extensionName: 'carrot_garden',
extensionContent:  'chrome://' + 'carrot_garden' + '/content/',
extensionContentInclude: 'chrome://' + 'carrot_garden' + '/content/' + 'include/',
extensionProgressMeter: 'chrome://' + 'carrot_garden' + '/content/' + 'progressMeter.xul',

loadScript: function ( pathName, scopeObject ) {
	var scriptLoader =  Components.classes["@mozilla.org/moz/jssubscript-loader;1"].
	                      getService(Components.interfaces.mozIJSSubScriptLoader);
	if (scriptLoader) {
	    scriptLoader.loadSubScript( pathName, scopeObject );
	}
},

loadScriptLib: function ( libName, scopeObject ) {
	switch ( libName ) {
		case ( 'jslib' ): this.loadScript( "chrome://jslib/content/jslib.js", scopeObject ); break;
	}
},

loadClass: function (  ) {
	for ( var k = 0; k < arguments.length; k++ ) {
		var className = arguments[k];
	    var module = function() {};
	    this.loadScript( this.extensionContentInclude + className + '.js', module.prototype );
	    this.__parent__[ className ] = module;    
	}
},

loadInstance: function (  ) {
	for ( var k = 0; k < arguments.length; k++ ) {
		var className = arguments[k];
	    var module = function() {};
	    this.loadScript( this.extensionContentInclude + className + '.js', module.prototype );
	    this.__parent__[ className ] = new module();    
	}
},

progressMeter: function ( dialogArguments ){
	window.openDialog( 
		this.extensionProgressMeter,
		this.extensionName, 'chrome,modal,centerscreen',
		dialogArguments);
}

	
}	//	end var carrot





//for ( var prop in this ) alert( prop )

alert ( '0 ' + carrot2.toSource() ) 
alert ( '1 ' + carrot_garden.toSource() ) 
alert ( '2 ' + ab.toSource() ) 
alert ( '3 ' + fs.toSource() ) 

alert ( ab.classContact().toSource() );
alert ( fs.backupFileByArgs().toSource() );
	

	



//alert( carrot_garden.extensionName )
//alert( carrot_garden.extensionContent )
//alert( carrot_garden.extensionProgressMeter )




alert('carrot')

function loadScript( pathName, scopeObject ) {
	var scriptLoader =  Components.classes["@mozilla.org/moz/jssubscript-loader;1"].
	                      getService(Components.interfaces.mozIJSSubScriptLoader);
	if (scriptLoader) {
	    scriptLoader.loadSubScript( pathName, scopeObject );
	}
}

var n1 = {
	loadInstance: function ( className ) {
	    var module = function(a) { alert( '1 ' + a ) };
	    module.prototype.z = function(b){ alert('z1 ' + b) };
	    loadScript( 'chrome://' + 'carrot_garden' + '/content/' + 'include/' + className + '.js', module.prototype );
	    this.__parent__[ className ] =  new module();    
	},
}

function n2class () {
	this.loadInstance = function ( className ) {
	    var module = function(a) { alert( '2 ' + a ) };
	    module.prototype.z = function(b){ alert('z2 ' + b) };
	    loadScript( 'chrome://' + 'carrot_garden' + '/content/' + 'include/' + className + '.js', module.prototype );
	    this.__parent__[ className ] =  new module();    
	}
}

var n2 = new n2class();

alert (
	'parents'
	+ '\n\n' +
	n1.toSource()
	+ '\n\n' +
	n2.toSource()
);


n1.loadInstance('t1')
n2.loadInstance('t2')

alert (
	'children	'
	+ '\n\n' +
	t1.toSource()
	+ '\n\n' +
	t2.toSource()
);

//n1_test('111');
//n2_test('222');

t1.z('z1z1z1');
t2.z('z2z2z2');

t1.t_1();
t2.t_2();

alert('end')


extensionName: function(){return 'carrot_garden'},
extensionContent: function(){return 'chrome://' + this.extensionName + '/content/'},
extensionContentInclude: function(){return this.extensionContent + 'include/'},
extensionProgressMeter: function(){return this.extensionContent + 'progressMeter.xul'},


//carrot.loadClass( 'ab', 'fs' );


//carrot.loadClass('ab')
//var ab = new ab();

//carrot.loadClass('fs')
//var fs = new fs();

//carrot.loadInstance( 'ab', 'fs' );
	
//var carrot = new classCarrot();

function classCarrot(){
//	loadClass( 'ab');
	this['ab'] = new ab();
//	this.ab = new Array(); //(['ab']).constructor();
//	loadInstance('ab');
	
   for (var i in this) {
       dump2(i + ' = ' + this[i]);
   }
}


function include(pathName)
{
        var gScriptLoader =  Components.classes["@mozilla.org/moz/jssubscript-loader;1"]
                              .getService(Components.interfaces.mozIJSSubScriptLoader);
        if (gScriptLoader)
        {
            gScriptLoader.loadSubScript(pathName);
        }
}

include('chrome://plaxotbird/content/debug.js');
PlxLogSysInit('icui');
include('chrome://plaxotbird/content/version.js');
PlxDumpVersion();



function cmdAbSelectedDirectoryMerge() {

	var directoryURI = GetSelectedDirectory();

	getBackupArgsForDirectoryUri  ( directoryURI );

    var directory = carrotGetDirectoryFromURI( directoryURI );
	
	var childCards = directory.childCards;
    var card, item, cardsList = Array();

	var cardsHash = new Object(); 
	var emailAddress;
	
    try {
        childCards.first();
        while( true ) {
        	item = childCards.currentItem();
            card = getCardFromItem( item );
            emailAddress = card.primaryEmail.toLowerCase();
            //dump2('primaryEmail: ' + emailAddress);

			if ( emailAddress == '' ) childCards.next();

			//	remove duplicates based on email
			if (cardsHash[emailAddress] == undefined) {	
				cardsHash[emailAddress] = item;
			//	dump2 ('first time')
			} else {
				mergeCardItems ( item, cardsHash[emailAddress] );
				cardsList.push( card );
			//	dump2 ('next time')
			}

            childCards.next();
        }
    } catch( ex ) {
        //dump2 ("Mozilla XPCOM/JS/ENUM Exception");
        //dump2 ( ex );
    }
    for ( emailAddress in cardsHash ){
    	//dump2 ( emailAddress );
    	card = getCardFromItem( cardsHash[emailAddress] );
		card.editCardToDatabase( directoryURI );
    }
	deleteCardsArrayFromDirectory ( cardsList, directory );
}

function deleteCardFromDirectory ( card, directory ){
	var cardsList = Array();
	cardsList.push(card);
	deleteCardsArrayFromDirectory ( cardsList, directory );
}

function deleteCardsArrayFromDirectory ( cardsList, directory ){
    var cardsInstant = Components.classes["@mozilla.org/supports-array;1"].createInstance();
    var cardsArray = cardsInstant.QueryInterface(Components.interfaces.nsISupportsArray);    
    for ( var k = 0; k < cardsList.length; k++ ) {
	    cardsArray.AppendElement( cardsList[k] );
    }
    directory.deleteCards( cardsArray );
}



function cmdTEST () {
	
	var cardInfo = {
        BusinessEmail         : 'aaa@bbb.com',
        FirstName             : 'Kaizer',
        LastName              : 'Soze',
        DisplayName           : 'Kai Soz'
	};
	
	addCardInfoToDirectoryUri( cardInfo, gAbNotJunkURI )
	
}


	//gFile.open("w");
	
//	var stream = gFile.mOutStream
//	var stream = gFile.getOutStream()   // gFile.mOutStream  // File.mOutStream.QueryInterface(Components.interfaces.nsIOutputStream);
//	filters.saveToFile ( stream )


function cmdTEST () {


	var dirProfile = DirIO.get("ProfD");
	
	alert( dirProfile.path );
	
	var dirBackup = DirIO.open( dirProfile +  DirIO.sep + "backup" );
	
	if ( ! dirBackup.exists ) {
		var rv = DirIO.create( dirBackup );
		alert (rv)
	}
	
	
}



         // write the new source to a temporary file (thanks go to the author of Header Tools)
         var dirService =  Components.classes["@mozilla.org/file/directory_service;1"].getService(Components.interfaces.nsIProperties);
         var tempDir = dirService.get("TmpD", Components.interfaces.nsIFile);
         var folderDelimiter = (navigator.platform.toLowerCase().indexOf("win") != -1) ? "\\" : "/";
         var tempFileNativePath = tempDir.path + folderDelimiter + "ttbTemp.eml";
         
         var sfile = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsILocalFile);
         sfile.initWithPath(tempFileNativePath); // TODO - check if this works with MAC & Unix
         if (sfile.exists()) sfile.remove(true);
         sfile.create(sfile.NORMAL_FILE_TYPE, 0666);
         var stream =  Components.classes['@mozilla.org/network/file-output-stream;1'].createInstance(Components.interfaces.nsIFileOutputStream);
         stream.init(sfile, 2, 0x200, false);
         stream.write(newSrc, newSrc.length);
         stream.close();

         // import the new source
         var fileSpec = Components.classes["@mozilla.org/filespec;1"].createInstance();
         fileSpec = fileSpec.QueryInterface( Components.interfaces.nsIFileSpec);
         fileSpec.nativePath = tempFileNativePath;


function cmdTEST () {

//	var folder = carrotMsgFolderFromUri("mailbox://nobody@Local%20Folders/Accounts/_TEST_");
	var folder = carrotMsgFolderFromUri("mailbox://nobody@Local%20Folders/Inbox/TEST");

	var emailTerms = TcollectEmailAddresses( folder )
		
	for ( var k = 0; k < emailTerms.length; k++  ){
		
		dump2 ( "DN: " + emailTerms[k][0] + "   EM: " + emailTerms[k][1] );
		
	}
	
}



//var folder = carrotMsgFolderFromUri ("mailbox://nobody@Local%20Folders/Accounts/Nerjyzed Ent @nerjyzed.com");

//collectEmaiAddr( folder  );

//nameFromEmail ("")


uri="mailbox://nobody@Local%20Folders/Manage%20Leaders/Production%20-%20Programming%20%28PROG%29"

adr = unescape(str) 

dec = decodeURI (uri)

dec2 = decodeURIComponent (uri)



dump2 ("original properly encoded: " + str );

dump2 ("unescape: " + adr );

dump2 ("decodeURI: " + dec );

dump2 ("decodeURI C: " + dec2 );

dump2 ("split " + uri.split("/"))


dump2 ( "escape " + escape ("mailbox://nobody@Local Folders/Manage Leaders/Production - Programming (PROG)") )
dump2 ( "encodeURI " + encodeURI ("mailbox://nobody@Local Folders/Manage Leaders/Production - Programming (PROG)") )
dump2 ( "encodeURIComponent " + encodeURIComponent ("mailbox://nobody@Local Folders/Manage Leaders/Production - Programming (PROG)") )

//SelectFolder("mailbox://nobody@Local%20Folders/Manage%20Leaders")
//Production - Engeneering (PE)
//SelectFolder("mailbox://nobody@Local%20Folders/Manage%20Leaders/Production%20-%20Engeneering%20%28PE%29")

//dump2 (GetSelectedFolderURI())



str="mailbox://nobody@Local%20Folders/Manage%20Leaders/Production%20-%20Programming%20%28PROG%29"

//encodeURIComponent ( str ); //a=decodeURI(str); //b = encodeURI(str);



//	these are equal expressions:
//	alert( args["parentURI"] + " " + args["displayName"] );
//	alert( args.parentURI + " " + args.displayName );


	try {
	}
	catch(ex){
		//0x80550013 = folder exists
		if ( ex.message.match(/.*0x80550013.*/) ) { 
			alert("nikiotova-filter Error: \n"
				+ "\n"
				+ "Already exists: \n"
				+ gNewFolderInfo.parentURI + "/" + folderName + "\n"
				+ "\n"
				+ "If you really need to re-create same foler, follow these steps:\n"
				+ "1. manually delete related filters\n"
				+ "2. manually delete this folder\n"
				+ "3. restart TB & empty trash\n"
				+ "\n"
				+ "Folder not created. Action Canceled.");
		}else{
			alert("nikiotova-filter Error: \n"
				+ "\n"
				+ ex + "\n"
				+ "\n"
				+ "Folder not created. Action Canceled.");
			};

		return { folder: null, filter: null };		
	};

    gRerootOnFolderLoad = true;
    try
    {
      ClearThreadPane();
      SetBusyCursor(window, true);
      msgfolder.startFolderLoading();
      msgfolder.updateFolder(msgWindow);
    }


//		appendSearchTerm ( obj, 5, 1, 3, true ); // status is not 'read'
//	for ( var n = 0; n < gHomeEmails.length; n++   ){
//		appendSearchTerm ( obj, 8, gHomeEmails[n], 0, false );
//	}


	
function createVirtualFolderForParent2 ( parentFolder, folderName, fT )
{
	// new search terms
	var obj = Components.classes["@mozilla.org/supports-array;1"]
			.createInstance(Components.interfaces.nsISupportsArray);

	for ( var k = 0; k < fT.length; k++ ){
//  appendSearchTerm ( ..., attrib,   str,      op,       booleanAnd )
//  appendSearchTerm2 ( collection, attrib, str, op, booleanAnd, beginsGrouping, endsGrouping )

	appendSearchTerm ( obj, fT[k][0], fT[k][1], fT[k][2], fT[k][3], fT[k][4], fT[k][5] )
	}

	// from mozilla:: commandglue.js :: function  CreateVirtualFolder(newName, parentFolder, searchFolderURIs, searchTerms, searchOnline)
	CreateVirtualFolder( folderName, parentFolder,  convertToUri(parentFolder.URI), obj, false );
}



// http://www.xulplanet.com/references/xpcomref/ifaces/nsIMsgFolder.html
//
function createFolder( parentURI, folderName )
{
	var parentFolder = carrotMsgFolderFromUri ( parentURI );
	
	parentFolder.createSubfolder ( folderName, null) ;
	
	var folder = parentFolder.FindSubFolder ( folderName );

	folder.prettyName = folderName;
	
	parentFolder.NotifyItemAdded (folder);
		
	return folder;		
}


function NewFolder(name,uri)
{
	//dump("uri,name = " + uri + "," + name + "\n");
	if (uri && (uri != "") && name && (name != "")) {
		var selectedFolderResource = RDF.GetResource(uri);
		//dump("selectedFolder = " + uri + "\n");
		var compositeDataSource = GetCompositeDataSource("NewFolder");

	    var folderArray = Components.classes["@mozilla.org/supports-array;1"].createInstance(Components.interfaces.nsISupportsArray);
	    var nameArray = Components.classes["@mozilla.org/supports-array;1"].createInstance(Components.interfaces.nsISupportsArray);

		folderArray.AppendElement(selectedFolderResource);

		var nameLiteral = RDF.GetLiteral(name);
		nameArray.AppendElement(nameLiteral);
		DoRDFCommand(compositeDataSource, "http://home.netscape.com/NC-rdf#NewFolder", folderArray, nameArray);

	}
	else {
		dump("no name or nothing selected\n");
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
      newFolder.setFlag(MSG_FOLDER_FLAG_VIRTUAL);
      var vfdb = newFolder.getMsgDatabase(msgWindow);
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


			
//	if ( ! folder.name.match( /\@[\w\.\-\_]*$/ ) ){ return; }; // not a proper format



function cmdTEST () {

	var folderListener = {
	
	  OnItemEvent: function( folder, event) {
	
	    var eventType = event.toString();
	
		alert("folderName " + folder.Name +"\n" +
			  "eventType  " + eventType );
	
	  }   
	}
	
	var MailSession = Components.classes["@mozilla.org/messenger/services/session;1"]
		.getService(Components.interfaces.nsIMsgMailSession);

	var folder = carrotMsgFolderFromUri("mailbox://nobody@Local%20Folders/Accounts/_TEST_");

    var nsIFolderListener = Components.interfaces.nsIFolderListener;

    var notifyFlags = nsIFolderListener.event ; 

    MailSession.AddFolderListener( folderListener, notifyFlags );
	
	SelectFolder("mailbox://nobody@Local%20Folders/Accounts/_TEST_");
	
	try {
	//	var db = folder.getMsgDatabase(null);
	}catch (ex){
		//	see # 5 & #6 here:
		//	http://lxr.mozilla.org/mailnews/source/mailnews/base/public/msgCore.h#116
		if ( ex.message.match(/.*0x80550005.*/) || ex.message.match(/.*0x80550006.*/) ) {

			var urlListener;
			
			folder.parseFolder(null, urlListener)

		}
	}
	

	Alert ( window, "OK: summaryValid:  + db.summaryValid" );
	
}




          var vFolder = GetMsgFolderFromUri(gCurrentVirtualFolderUri, false);
          var dbFolderInfo = vFolder.getMsgDatabase(msgWindow).dBFolderInfo;
          dbFolderInfo.NumUnreadMessages = gNumUnreadMessages;
          dbFolderInfo.NumMessages = gNumTotalMessages;
          vFolder.updateSummaryTotals(true); // force update from db.
          var msgdb = vFolder.getMsgDatabase(msgWindow);
          msgdb.Commit(MSG_DB_LARGE_COMMIT);





//	dump2("# start")
//	dump2("# cancel")
//	alert("progressPercent " + progressPercent.getAttribute("id"))

	dump2("# init")
	dump2("# display")

//	alert("delay " + delay)

//	dump2("# progress")
		


//	function compareEmail ( a, b ) { // XXX sort is not working yet
//		var s1 = ""; var s2=""; var val = false;
//		s1 = a[1].toString(); s2 =  b[1].toString();
//		val = s2 > s1;
//		dump2(val + " : " + s2 + " > " + s1)
//		return val;
//	}
	
//	emailList.sort( compareEmail );
	
//	for (var k = 0; k < emailList.length; k++  ){
//		dump2(emailList[k][0] + "(" + emailList[k][1] + ")" );
//	}


//		emailAddress = address[k]
//			.match(/([\w\.\-\_]*\@[\w\.\-\_]*)/g).toString(); // .toString() to ensure string type; warning: /g will produce array


		//dump2(k);
		//dump2(address[k]);

		//dump2(k);
		//dump2(address[k]);
	    	//address.push(header.recipients.toLowerCase());	// XXX not implemented yet - needs extra parsing
	
			//dump2("header.author     " + header.author);
			//dump2("header.recipients " + header.recipients);
			//dump2("header.ccList     " + header.ccList);


function cmdAccountsSfGenericsCreateForSelected() {

	var folderURI = GetSelectedFolderURI();
	var folder = carrotMsgFolderFromUri (folderURI);
		
	accountsSfGenericsCreate ( folder )
}

function cmdAccountsSfGenericsDeleteForSelected () {
	alert ("not implemented");
}


function cmdAccountsSfMembersCreateForSelected ( type ) {

	var folderURI = GetSelectedFolderURI();
	var folder = carrotMsgFolderFromUri (folderURI);
	
	switch (type){
		case ("external"):
			accountsSfMembersCreate( folder, ignoreListExternal);
			break;
		case ("all"): // except vendors, that are included in GENERIC account folders
			accountsSfMembersCreate( folder, ignoreListAll );
			break;
	}
}

function cmdAccountsSfMembersDeleteForSelected(){

	var folderURI = GetSelectedFolderURI();
	var folder = carrotMsgFolderFromUri (folderURI);

	accountsSfMembersDelete ( folder, deleteFolder2 );
}

function cmdAccountsSfAllDeleteForSelected(){

	var folderURI = GetSelectedFolderURI();
	var folder = carrotMsgFolderFromUri ( folderURI );

	deleteSearchFolders2 ( folder );
}



// 0x8000ffff

// fast
function deleteSearchFolders(folder) {
	if (folder.hasSubFolders){
		var subfolders = carrotGetSubFolders(folder, gFolderFlags.MSG_FOLDER_FLAG_VIRTUAL); // only virtual
	    for ( var k=0; k < subfolders.length; k++ ) {
	    	deleteFolder(folder, subfolders[k]);
		}
	saveVirtualFolders();
    }
}
// slow
function deleteSearchFolders2(folder) {
	if (folder.hasSubFolders){
		var subfolders = carrotGetSubFolders(folder, gFolderFlags.MSG_FOLDER_FLAG_VIRTUAL); // only virtual
	    for ( var k=0; k < subfolders.length; k++ ) {
	    	deleteFolder2(folder, subfolders[k]);
		}
	saveVirtualFolders();
    }
}


function deleteAccountsSearchFolders() {
	
	var folder = carrotMsgFolderFromUri(gAccountsFolderURI);
	
	var subfolders = carrotGetSubFolders(folder, 0) // not any "gFolderFlags", ie no virtual

    for ( var k=0; k < subfolders.length; k++ ){
      dump2("delete subfolders of: " + subfolders[k].name);
      deleteAccountsSearchFolderContracts ( subfolders[k] ) ;
    }

	//OnLoadFolderPane();
	//FolderPaneSelectionChange();

	saveVirtualFolders();
    
    alert ("Please restart ThunderBird now.");
}




var cmdAccountsFolders = {
		Message:	"",
		Index:		0,
		Size:		0,
		Subfolders: null,
	Init: function(){
		var folder = carrotMsgFolderFromUri(gAccountsFolderURI);
		this.Subfolders = carrotGetSubFolders(folder, 0); 		// not any gFolderFlags, regular folders only
		this.Index = 0;
		this.Size = this.Subfolders.length;
		return this.Size;
	},
	genericsCreateWork: function(Index){
		this.Index = Index; this.Message = this.Subfolders[Index].name;
		createAccountsSearchFolderContracts ( this.Subfolders[Index] ) ;
	},
	genericsDeleteWork: function(Index){
		this.Index = Index; this.Message = this.Subfolders[Index].name;
		deleteAccountsSearchFolderContracts  ( this.Subfolders[Index] ) ;
	},
	membersCreateWork: function(Index){
		this.Index = Index; this.Message = this.Subfolders[Index].name;
		accountsMembersSearchFoldersCreate( this.Subfolders[Index], ignoreListExternal);
	},
	membersDeleteWork: function(Index){
		this.Index = Index; this.Message = this.Subfolders[Index].name;
		accountsSfMembersDelete( folder, deleteFolder )  ( this.Subfolders[Index] ) ;
	},
	Exit: function(){
		saveVirtualFolders();
	},
	genericsCreate: function() {
		progressMeter( { Init: this.Init, Work: this.genericsCreateWork, Exit: this.Exit} );
	},
	genericsDelete: function() {
		progressMeter( { Init: this.Init, Work: this.genericsDeleteWork, Exit: this.Exit} );
	    alert ("Please restart ThunderBird now.");
	},
	membersCreate: function() {
		progressMeter( { Init: this.Init, Work: this.membersCreateWork, Exit: this.Exit} );
	},
	membersDelete: function() {
		progressMeter( { Init: this.Init, Work: this.membersDeleteWork, Exit: this.Exit} );
	    alert ("Please restart ThunderBird now.");
	}
};


function accountsGenericFoldersCreate() {
	
	var folder = carrotMsgFolderFromUri(gAccountsFolderURI);

	var subfolders = carrotGetSubFolders(folder, 0) // not any gFolderFlags, regular folders only

//	var progressMeterContainer = document.getElementById("statusbar-progresspanel"); 
	
//	var statusBar = new nsMsgStatusFeedback; //  see mozilla:: mailWindowOverlay.xul
	
//	statusBar.ensureStatusFields();
//	statusBar.progressMeterContainer.removeAttribute('collapsed'); 
//	statusBar.progressMeterVisible = true;
	 

    for ( var k=0; k < subfolders.length; k++ ){

    	var percentage = 100 * ( k / subfolders.length );
    
		document.getElementById("carrot_garden.progress-meter").value = percentage + "%";
		document.getElementById("carrot_garden.progress-textbox").value = subfolders[k].name;

//	    statusBar.showStatusString	(subfolders[k].name)

//	    statusBar.showProgress	( percentage );

		dump2("k1: " + k + subfolders[k].name);

		createAccountsSearchFolderContracts ( subfolders[k] ) ;
    }

//    statusBar.showStatusString	("carrot_garden: Done.")
//	statusBar.progressMeterVisible = false;
//	statusBar.progressMeterContainer.setAttribute('collapsed',true)

//	document.getElementById("progress-button-ok").disbaled = "false";
    
	saveVirtualFolders();
}




thefunction = "showstring";
function showstring() { alert("hello"); };
this[thefunction]();


		var folder = carrotMsgFolderFromUri(gAccountsFolderURI);

		var subfolders = carrotGetSubFolders(folder, 0) // not any gFolderFlags, regular folders only
	
	    for ( var k=0; k < subfolders.length; k++ ){
	
	    	var percentage = 50; //100 * ( k / subfolders.length );

			document.getElementById("carrot_garden.progress-meter").value = percentage.toString() + "%";
			document.getElementById("carrot_garden.progress-textbox").value = subfolders[k].name;



//	    gStatusFeedback.showStatusString	(subfolders[k].name)
//	    gStatusFeedback.showProgress	( percentage );

    gProgressMsgWindow = Components.classes["@mozilla.org/messenger/msgwindow;1"]
    	.createInstance(Components.interfaces.nsIMsgWindow);

	var gStatusFeedback = new window.opener.nsMsgStatusFeedback; 

    gProgressMsgWindow.statusFeedback = gStatusFeedback;

    gProgressMsgWindow.SetDOMWindow(window); 


	    for ( var k=0; k < subfolders.length; k++ ){
	
	    	var percentage = 100 * ( k / subfolders.length );
	    
			document.getElementById("carrot_garden.progress-meter").value = percentage + "%";
			document.getElementById("carrot_garden.progress-textbox").value = subfolders[k].name;
			window.focus()
	
			createAccountsSearchFolderContracts ( subfolders[k] ) ;
	    }


goDoCommand('cmd_getMsgsForAuthAccounts'); event.preventBubble()


=?iso-8859-1?q?j=f6rgen_stenkvist?=   jorgen.stenkvist@dice.se
=?iso-8859-1?q?j=f6rgen_stenkvist?=   jorgen.stenkvist@dice.se
=?iso-8859-1?q?helene_mark=e5s?=   helene.markas@dice.se
=?iso-8859-1?q?j=f6rgen_stenkvist?=   jorgen.stenkvist@dice.se
=? ?=

	var nameList = new Array();
	
	var hash = new Object();

	for (var k = 0; k < emailList.length; k++  ){

		var displayName =  emailList[k][0];
		var emailAddress = emailList[k][1];

		if ( hash[emailAddress] != 1) {	
			emailList.push( Array ( displayName, emailAddress ) );
			hash[emailAddress] = 1
		}
	}
	
	




        SelectFolder(startFolder.URI);        


    var folderTree = GetFolderTree();
    var folderSelection = folderTree.view.selection;


function test2()
{
	var emailAddress = document.popupNode.getAttribute("emailAddress");
	var displayName  = document.popupNode.getAttribute("displayName");
	
	var parser = emailParser ( emailAddress, displayName ) ;

	gNewFolderInfo.company = parser.company;
	gNewFolderInfo.domain = parser.domain;
	gNewFolderInfo.person = parser.displayName;

	gNewFolderInfo.valid = false;

	window.open("chrome://carrot_garden/content/formNewAccountFolder.xul",
		"carrot - filter", "chrome,modal,dialog,centerscreen,width=350,height=350");

	if ( gNewFolderInfo.valid )
	{
//		existsFolderFilter( gNewFolderInfo.parentName )
		
//		alert( gNewFolderInfo.parentName + "\n  " 
//			+ gNewFolderInfo.parentURI + "\n  " 
//			+ gNewFolderInfo.domain + "\n  " 
//			+ gNewFolderInfo.company + "\n " 
//			+ gNewFolderInfo.person );

		createAccountFolderFilter ( gNewFolderInfo );
	}
}



	//	TEST TEST TEST 		
//	var F6 = Array(
//		Array (gAttribToOrCC, "a1", gOpContains, gBooleanAND, true, false ),
//		Array (gAttribToOrCC, "a2", gOpContains, gBooleanOR, false, false ),
//		Array (gAttribToOrCC, "a3", gOpContains, gBooleanOR, false, true )
//	);
//	createVirtualFolderForParent2 ( folder, "____TEST____", F6 );

//	var F6 = Array(
//		Array (gAttribToOrCC, "a1", gOpContains, gBooleanAND, true, false ),
//		Array (gAttribToOrCC, "a2", gOpContains, gBooleanOR, false, false ),
//		Array (gAttribToOrCC, "a3", gOpContains, gBooleanOR, false, true ),
//		Array (gAttribToOrCC, "b1", gOpContains, gBooleanAND ), true, false,
//		Array (gAttribToOrCC, "b2", gOpContains, gBooleanOR, false, false ),
//		Array (gAttribToOrCC, "b3", gOpContains, gBooleanOR, false, true )
//	);



//####################

    var folderResource = folder
    	.QueryInterface(Components.interfaces.nsIRDFResource);

    messenger.EmptyTrash(GetFolderDatasource(), folderResource );

    messenger.DeleteFolders(GetFolderDatasource(), parentResource, folderResource);

//####################

			switch ( subfolders[k].name )
			{
			  case gAccountsFolderContract:
				subfolders[k].Delete();
			    break;
			  case gAccountsFolderEstimate:
				subfolders[k].Delete();
			    break;
			  case gAccountsFolderInvoice:
				subfolders[k].Delete();
			    break;
			}


function appendTerm ( myFilter, attrib, str )
{
	var myTerm = myFilter.createTerm ( );

	myTerm.attrib = attrib;
	myTerm.booleanAnd  = false;
	myTerm.op = Components.interfaces.nsMsgSearchOp.Contains;

	var termValue = myTerm.value;
	termValue.attrib = myTerm.attrib;
	termValue.str = str;
     	myTerm.value = termValue;

	myFilter.appendTerm ( myTerm );

	return true;
}



function mySelectFolder(folderUri)
{
    var folderTree = GetFolderTree();
    var folderResource = RDF.GetResource(folderUri);
    var msgFolder = folderResource.QueryInterface(Components.interfaces.nsIMsgFolder);

dump2("1")

    // before we can select a folder, we need to make sure it is "visible"
    // in the tree.  to do that, we need to ensure that all its
    // ancestors are expanded
    var folderIndex = myEnsureFolderIndex(folderTree.builderView, msgFolder);
dump2("2")
    myChangeSelection(folderTree, folderIndex);
}
function myEnsureFolderIndex(builder, msgFolder)
{
dump2("3")
	
  // try to get the index of the folder in the tree
  var index = builder.getIndexOfResource(msgFolder);
  if (index == -1) {
    // if we couldn't find the folder, open the parent

dump2("4")
    
    builder.toggleOpenState(myEnsureFolderIndex(builder, msgFolder.parent));
    
dump2("5")
    
    index = builder.getIndexOfResource(msgFolder);
  }
  return index;
}

function myChangeSelection(tree, newIndex)
{
    if(newIndex >= 0)
    {
        tree.view.selection.select(newIndex);
        tree.treeBoxObject.ensureRowIsVisible(newIndex);
    }
}





function SelectFolder(folderUri)
{
    var folderTree = GetFolderTree();
    var folderResource = RDF.GetResource(folderUri);
    var msgFolder = folderResource.QueryInterface(Components.interfaces.nsIMsgFolder);

    // before we can select a folder, we need to make sure it is "visible"
    // in the tree.  to do that, we need to ensure that all its
    // ancestors are expanded
    var folderIndex = EnsureFolderIndex(folderTree.builderView, msgFolder);
    ChangeSelection(folderTree, folderIndex);
}




function ChangeSelection(tree, newIndex)
{
    if(newIndex >= 0)
    {
        tree.view.selection.select(newIndex);
        tree.treeBoxObject.ensureRowIsVisible(newIndex);
    }
}



function EnsureFolderIndex(builder, msgFolder)
{
  // try to get the index of the folder in the tree
  var index = builder.getIndexOfResource(msgFolder);
  if (index == -1) {
    // if we couldn't find the folder, open the parent
    builder.toggleOpenState(EnsureFolderIndex(builder, msgFolder.parent));
    index = builder.getIndexOfResource(msgFolder);
  }
  return index;
}




// flags; watch nsMsgFolderFlags.h
var gFlagList = { 'MSG_FOLDER_FLAG_VIRTUAL' : 0x0020,
                  'MSG_FOLDER_FLAG_TRASH' : 0x0100,
                  'MSG_FOLDER_FLAG_SENTMAIL' : 0x0200,
                  'MSG_FOLDER_FLAG_DRAFTS' : 0x0400,
                  'MSG_FOLDER_FLAG_QUEUE' : 0x0800,
                  'MSG_FOLDER_FLAG_INBOX' : 0x1000,
                  'MSG_FOLDER_FLAG_TEMPLATES' : 0x400000,
                  'MSG_FOLDER_FLAG_JUNK' : 0x40000000 };


	var myMain = "Accounts";
	var myAccount = "Disney Internet Group 4";
	var myDomain  = "dig4.com";

	var myFolderName = myAccount + " @" + myDomain;
	var myFilterName = "Account: " + myFolderName;


	var amService = 
    		Components.classes["@mozilla.org/messenger/account-manager;1"]
			.getService(Components.interfaces.nsIMsgAccountManager);
	var lfServer= amService.localFoldersServer;
	var fldrLocal = lfServer.rootFolder;


	var fldrMain = fldrLocal.FindSubFolder(myMain);


	try
	{
		fldrMain.createSubfolder ( myFolderName, null) ;
		fldrMain.updateFolder ( null );
	}
	catch (ex) {} // ignore if folder exists


	var myFolder = fldrMain.FindSubFolder ( myFolderName ) ;


var RDF = Components.classes["@mozilla.org/rdf/rdf-service;1"].getService(Components.interfaces.nsIRDFService);
var folderResource = RDF.GetResource(fldrMain.URI + "/" + encodeURIComponent ( myFolderName ));
var myFolder = folderResource.QueryInterface(Components.interfaces.nsIMsgFolder);


	myFolder.setFlag ( gFlagList.MSG_FOLDER_FLAG_VIRTUAL );
//	myFolder.updateFolder (msgWindow);

	document.getElementById('folderTree').builder.rebuild();


	alert ( gFlagList.MSG_FOLDER_FLAG_VIRTUAL  + " " + myFolder.URI);	


	var msgFilterList = fldrMain.getFilterList ( null );

	var myFilter = msgFilterList.getFilterNamed ( myFilterName ); 

	try
	{
		msgFilterList.removeFilter ( myFilter ); 
		myFilter = msgFilterList.createFilter (myFilterName); 
	}
	catch(ex) {} // ignore missing fillter

	myFilter.enabled = true;
	myFilter.temporary = false;
	myFilter.filterDesc = myAccount;

	appendTerm ( myFilter, Components.interfaces.nsMsgSearchAttrib.Sender, "@" + myDomain );
	appendTerm ( myFilter, Components.interfaces.nsMsgSearchAttrib.ToOrCC, "@" + myDomain );
	appendTerm ( myFilter, Components.interfaces.nsMsgSearchAttrib.ToOrCC, myDomain + "@carrot.com" );

 
	var myAction = myFilter.createAction();

	myAction.type = Components.interfaces.nsMsgFilterAction.MoveToFolder;
	myAction.targetFolderUri = fldrMain.URI + "/" + encodeURIComponent ( myFolderName ) ;

	myFilter.appendAction ( myAction );


	msgFilterList.insertFilterAt ( 0, myFilter );


	msgFilterList.saveToDefaultFile ( );


	alert ("Created:\n   Folder: " + myFolderName + "\n   Filter: " + myFilterName );


function appendTerm ( myFilter, attrib, str )
{
	var myTerm = myFilter.createTerm ( );

	myTerm.attrib = attrib;
	myTerm.booleanAnd  = false;
	myTerm.op = Components.interfaces.nsMsgSearchOp.Contains;

	var termValue = myTerm.value;
	termValue.attrib = myTerm.attrib;
	termValue.str = str;
     	myTerm.value = termValue;

	myFilter.appendTerm ( myTerm );

	return true;
}


//#################################################
	//var searchTerms = new Array;
	
//	var ZsearchTerms = Components.classes["@mozilla.org/supports-array;1"].createInstance();
//	ZsearchTerms.QueryInterface(Components.interfaces.nsISupportsArray);
	
	
//	var searchTerms = filter.searchTerms
	//	.QueryInterface(Components.interfaces.nsISupportsArray);


	var msgFilterList = getLocalFolders().getFilterList ( null );
	dump2(msgFilterList.filterCount); 
	
	var Nfilter = msgFilterList.getFilterAt (20) ;
	dump2( Nfilter.filterName );

	alert("ZZZ");

//	var NsearchTerms = Components.classes["@mozilla.org/supports-array;1"].createInstance(Components.interfaces.nsISupportsArray);

	var NsearchTerms = Nfilter.searchTerms
	.QueryInterface(Components.interfacesByID['{83b6019c-cbc4-11d2-8cca-0060b0fc14a3}']);

	alert( "!!!: " + NsearchTerms.count() );
	 
	return;
	 
	//	.QueryInterface(Components.interfaces.nsISupportsArray); 

	NsearchTerms.AppendElement(null);

	dump2( typeof( NsearchTerms) );

	alert("YYY" + Components.lastResult);

	
	for ( k = 0; k < NsearchTerms.count(); k++ ){
//	for ( k = 0; k < NsearchTerms.length; k++ ){
        var ZsearchTerm = NsearchTerms.QueryElementAt(i, nsIMsgSearchTerm);
        
        str = k+ " " +
	        ZsearchTerm.arbitraryHeader + " " +
	        ZsearchTerm.attrib  + " " +
	        ZsearchTerm.booleanAnd  + " " +
	        ZsearchTerm.op  + " " +
	        ZsearchTerm.value ;
        
		dump2(str);        
	}	
	
	

//#################################################



function test3(){

	var msgFilterList = getLocalFolders().getFilterList ( null );
	
	var filter = msgFilterList.getFilterAt (0) ;

	//var searchTerms = new Array;
	
	var ZsearchTerms = Components.classes["@mozilla.org/supports-array;1"].createInstance();

	ZsearchTerms.QueryInterface(Components.interfaces.nsISupportsArray);
	
	
//	var searchTerms = filter.searchTerms
	//	.QueryInterface(Components.interfaces.nsISupportsArray);

	//searchTerms = filter.searchTerms ;
	
	for ( k = 0; k < ZsearchTerms.count(); k++ ){
        var ZsearchTerm = ZsearchTerms.QueryElementAt(i, nsIMsgSearchTerm);
        
        str =
	        ZsearchTerm.arbitraryHeader + " " +
	        ZsearchTerm.attrib  + " " +
	        ZsearchTerm.booleanAnd  + " " +
	        ZsearchTerm.op  + " " +
	        ZsearchTerm.value ;
        
		dump2(str);        
	}	
	
	
}

