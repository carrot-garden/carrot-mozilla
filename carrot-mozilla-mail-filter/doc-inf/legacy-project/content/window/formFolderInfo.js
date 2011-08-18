
var carrot_garden = Components.classes["@mozilla.org/carrot_garden/service;1"]
	.getService(Components.interfaces.cgICarrotGarden).wrappedJSObject;

var log = carrot_garden.log;
var mailFolders = carrot_garden.mailFolders;

//log.currentLevel = log.level.debug;


function classFormFolderInfo () {
	
	var args = {
		parentUri : 'mailbox://nobody@Local%20Folders/Inbox',
		navigateUri : 'mailbox://nobody@Local%20Folders',
		pickerId : 'runFiltersFolder',
		valid : false,
		emailTerm: 'Joe Doe <j.doe@ibm.com>',
		anchorName : 'ibm.com',
		inputName : 'IBM Corp',
		subjectKeyword : 'ibm',
		toccKeyword : 'ibmX',
		folderName: 'IBM Corp @ibm.com',
		folderNameLong: '/.../IBM Corp @ibm.com',
		filterName : 'Account: IBM Corp @ibm.com',
		filterTerms : 'or (to or cc,contains,ibm)',
		filterActions : '(move to folder,mailbox://nobody@Local%20Folders/Inbox)',
		validate : function (){},
		collapseXul : [],
		readonlyXul : [],
	};

	var propertyArray = [ 'anchorName', 'emailTerm', 'inputName', 'subjectKeyword', 'toccKeyword', 
		'folderName', 'folderNameLong', 'filterName' , 'filterTerms', 'filterActions' ];

	var pickerId = 'folderPicker';
	var picker;

	function init(){
		if ( window.arguments ) {
			args = window.arguments[0];
//			picker = document.getElementById( args.pickerId );
			picker = document.getElementById( pickerId );
			picker.setAttribute( "ref", args.navigateUri );
		} else {
			alert("missing arguments");
			throw 'missing arguments';
			return;
		}
	}
	function copyArgsToXul( property ){
		log.debug( property );
		document.getElementById( property ).value = args[ property ];
	}
	function copyXulToArgs( property ){
		args[ property ] = document.getElementById( property ).value;
	}
	function collapseXulById( elementId ){
		log.debug( elementId );
		var element = document.getElementById( elementId );
		element.setAttribute( 'collapsed', 'true' );
	}
	function readonlyXulById( elementId ){
		log.debug( elementId );
		var element = document.getElementById( elementId );
		element.setAttribute( 'readonly', 'true' );
	}
	
	this.loadForm = function loadForm() 	{		
		init();
		//	msgFolderPickerOverlay.js
		this.SetFolderPicker( args.parentUri );
		propertyArray.forEach( copyArgsToXul );
		args.collapseXul.forEach( collapseXulById );
		args.readonlyXul.forEach( readonlyXulById );
		args.valid = false;
		this.updateForm();
		//	delay to get correct coordinates for checkSizePosition()
		window.setTimeout( checkSizePosition, 1 );
	}
	
	this.updateForm = function updateForm () {	

		log.thisLevel( log.level.debug );
		
		propertyArray.forEach( copyXulToArgs );
		args.parentUri = picker.getAttribute( 'uri' );

		log.debug( '#1 args.parentUri: ' + args.parentUri );
		args.validate( args );
		log.debug( '#2 args.parentUri: ' + args.parentUri );
		
		propertyArray.forEach( copyArgsToXul );
		this.SetFolderPicker( args.parentUri );

		args.valid = false;

//		checkSizePosition();

	}
	this.makeWork = function makeWork()	{
		args.valid = true;
		window.close();
	}
	this.skipForm = function skipForm () {
		args.valid = false;
		window.close();
	}
	function checkSizePosition(){
		var endOfWindow = document.getElementById( "label-end-of-window" );
		var y2 = endOfWindow.boxObject.y;
		var y1 = window.innerHeight;
		var diff = y2-y1;
		if( diff != 0 ){
			window.resizeBy( 0, diff );
		}
//		alert(  y1 + ' : ' + y2 + ' = ' + diff )

	}
	
	this.PickedMsgFolder = function PickedMsgFolder( selection ){
		var uri = selection.getAttribute( 'id' );
		this.SetFolderPicker( uri );
		this.updateForm();
	}
	this.SetFolderPicker = function SetFolderPicker( uri ){
		log.thisLevel( log.level.debug );
		var folder = mailFolders.getFolderFromUri( uri );
		var folderName = folder.prettyName;
		log.debug( 'uri ' + uri + ' folderName ' + folderName )
		picker.setAttribute( 'label', folderName );
		picker.setAttribute( 'uri', uri );
	}
}

var windowEvents = new classFormFolderInfo();

function toggleCollapsed( elementName ) {
	var element = document.getElementById( elementName );
	var h1 = element.boxObject.height;
	if ( element.getAttribute('collapsed') == 'true') 
		 element.setAttribute('collapsed', 'false');
	else 
		 element.setAttribute('collapsed', 'true');
	var h2 = element.boxObject.height;
	window.resizeBy( 0, h2 - h1 );
}			


