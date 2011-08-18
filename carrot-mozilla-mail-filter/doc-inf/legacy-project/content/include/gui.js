//	GUI 

var log = {};

function componentServiceInitialize( object ){
	log = object.log;
}

//	function _( id ) { return document.getElementById( id ); }


//	xul constants

var xul = {
	barHbox: 	"carrot_garden.hbox_status_bar_search_folder",
	barButton: 	"carrot_garden.button_status_bar_search_folder",
	barTextbox: "carrot_garden.textbox_status_bar_search_folder",
	keyFolderSelect: 'carrot_garden.key_status_bar_search_folders_select',
	fccFolderPicker: "carrot_garden.fccFolderPicker",
	messagePane: "messagepane",
	idxViewAllFolders:	0,
	idxViewUnreadFolders:	1,
	idxViewFavoriteFolders:	2,
	idxViewRecentFolders:	3,
}

//	http://lxr.mozilla.org/seamonkey/source/widget/public/nsITransferable.idl
//	http://www.mozilla.org/xpfe/xptoolkit/DataFlavors.html

var dataFlavors = {
	plain: 'text/plain',
	unicode: 'text/unicode',
	html: 'text/html',
	aol: "AOLMAIL",
	img_png: "image/png",
	img_jpg: "image/jpg",
	img_gif: "image/gif",
 	url: 'text/x-moz-url',	// data contains url\ntitle
	url_data: 'text/x-moz-url-data',	// data contains url only
	url_desc: 'text/x-moz-url-desc',	// data contains description
	url_priv: 'text/x-moz-url-priv',	// same as url_data but for private uses
	folder: 'text/x-moz-folder',
	message: 'text/x-moz-message',
	file: 'application/x-moz-file',
	file_promise: 'application/x-moz-file-promise',	// a dataless flavor used to interact with the OS during file drags
	file_promise_url: 'application/x-moz-file-promise-url',	// the source URL for a file promise	
	file_promise_dir: 'application/x-moz-file-promise-dir',	// a synthetic flavor, put into the transferable once we know the destination directory of a file drag
	file_promise_filename: 'application/x-moz-file-promise-dest-filename',	// the destination filename for a file promise
	native_img: 'application/x-moz-nativeimage',
	native_html: 'application/x-moz-nativehtml',
}

/*
var knownWindowIdArray = [
	'searchMailWindow',
	'messengerWindow'
];
function getWindowId( window ){
	for( var i = 0; i < knownWindowIdArray.length; i++ ){
		var item = knownWindowIdArray[ i ];
		if( window.document.getElementById( item ) ){
			return item;
		}
	}
	return null;
*/


function classMailVeiwSearchBar( window ){

	var document = window.document; 

	//	used in <menuitem id="viewPicker..."    value="..."
	var viewElements = {
		all: {
			id: 'viewPickerAll',
			value: 0,
			label: 'View All',
		},
		unread: {
			id: 'viewPickerUnread',
			value: 1,
			label: 'View Unread',
		},
	}
	 
	var viewPicker = null;
	var fouseMemory = null;		

	var getPicker = function getPicker() {
		return document.getElementById('viewPicker');
	}
	/**
	* When the user types something in the searchbox, switch to 'view all' if 
	* currently he's in 'view unred'.
	*/
	this.onSearch = function () {
		if (gSearchInput.value.length > 0) {
			viewPicker = getPicker();  
			if (viewPicker.value == viewState.Unread ) {
				viewPicker.value = viewState.All; 
				viewChange(viewPicker, viewPicker.value);
			}
		}	
	}
	/**
	* When the quick-search-clearbutton is clicked, switch to 'view unread'.
	*/
	this.onClearSearch = function onClearSearch () {	
		/* This conditions holds here if
		the quick-search-clearbutton (defined in the XBL binding for 
		the textbox "searchInput" in the search.xml file) has been pressed.
		*/
		if( gQuickSearchFocusEl && gQuickSearchFocusEl.id == 'searchInput' ){
			viewPicker = getPicker();  
			if( viewPicker.value == viewState.All ){
				viewPicker.value = viewState.Unread; 
				viewChange(viewPicker, viewPicker.value);
			}
		}	
	}
	this.doFocus = function doFocus (){	
		var quickSearchTextBox = document.getElementById('searchInput');
		var focused = document.commandDispatcher.focusedElement;
		var element = focused.parentNode.parentNode;
		if ( element.id == 'searchInput' ) {
			window.SetFocusThreadPane();	//	mail3PaneWindowCommands.js			
		} else {
			window.QuickSearchFocus();		//	mailWindowOverlay.js
		}
	}
	this.doSwitch = function doSwitch (){	
		/* Always clear search */
		//gSearchInput.value = '';
		//onClearSearch();
		/* Switch between 'view all'-'view unread' */
		viewPicker = getPicker(); 
		var menuItem; 
		var viewElement;
		if( viewPicker.value == viewElements.unread.value ){
			viewElement = viewElements.all; 
		} else {
			viewElement = viewElements.unread; 
		}
		viewPicker.value = viewElement.value;	//	change pull-down list element
		viewElement.label = document.getElementById( viewElement.id ).label;	//	rather use default labels
		window.ViewChange( viewElement.value, viewElement.label );	//	msgViewPickerOverlay.js		
		
		//	update in-text-box search text
		//onSearchInputBlur();
		//gSearchInput.setSearchCriteriaText();
		
		var search = window.gSearchInput;	//	msgMail3PaneWindow.js	
		if( search && ! search.showingSearchCriteria ) {
			search.setSearchCriteriaText( '' );
			//carrotLog.report( 'setSearchCriteriaText	' );
		}		
	}

	this.doClear = function doClear(){
		window.Search("");	//	searchBar.js
		window.SetFocusThreadPane();	//	mail3PaneWindowCommands.js			
	}
}

function getWindowId( window ){
	return window.document.documentElement.getAttribute('id')
}

function getWindowType( window ){
	return window.document.documentElement.getAttribute('windowtype')
}


//	nsIDOMKeyEvent
//	http://www.xulplanet.com/references/xpcomref/ifaces/nsIDOMKeyEvent.html

function initGuiElementsKeys( window, prefName ){
	var pref = carrot_garden.pref;
	var util = carrot_garden.util;
	var elements = pref.getNode( prefName );
	for( var item in elements){
		var elementId = 'carrot_garden' + '.' + item;
		util.setElementAttrFromString( elementId, elements[ item ], window.document );
	}
}


function ensureFolderIndex( builder, msgFolder ) {
	// try to get the index of the folder in the tree
	var folder_idx = builder.getIndexOfResource( msgFolder );
	if( folder_idx == -1 ) {	//	if visible, idx must be >=0;
		// if we couldn't find the folder, make all its ancestors visible
		var parent_idx = ensureFolderIndex( builder, msgFolder.parent );	//	recursion up the tree
		folder_idx = builder.getIndexOfResource( msgFolder );	// maybe the folder is now visible:
		if( folder_idx == -1 ) {	// if not: this means that the parent is closed, so open it. 
			builder.toggleOpenState( parent_idx ); 
			folder_idx = builder.getIndexOfResource( msgFolder );
		}
	}
	return folder_idx;
}

function showFolder( window, folder ) {

	//	msgMail3PaneWindow.js::	switch to 'all folders' view, change folder tree datasource
	window.loadFolderView( xul.idxViewAllFolders );

	//	msgMail3PaneWindow.js::
	var folderTree = window.GetFolderTree();

	var idx = ensureFolderIndex( folderTree.builderView, folder );

	//	msgMail3PaneWindow.js::
	window.ChangeSelection( folderTree, idx );

	function setFocus () { 
		//	msgMail3PaneWindow.js::
		window.SetFocusThreadPane(); 
		//	threadPane.js::
		var selection = window.GetThreadTree().view.selection;
		if( selection.count == 0 ) { selection.select( selection.currentIndex ); }
	}
	
	window.setTimeout( setFocus, 100 );	//	XXX	100 ms delay, asynchronous
}


function checkSelection( window ){
//	depending on the window context:
//	messenger.jar::mail3PaneWindowCommands.js::
//	messenger.jar::messageWindow.js::
//	messenger.jar::SearchDialog.js::
//	GetNumSelectedMessages()
	if( window.GetNumSelectedMessages() == 0 ) {
		return false;
	} else {
		return true;
	}
}

function classFolderAction( window ){

	var document = window.document;
	var alert = window.alert;
	
	var mailFolders = carrot_garden.mailFolders;

	var barHbox = null;
	var barButton = null;
	var barTextbox = null;
	var messagePane = null;
	var focusMemory = null;
	var labelMemory = null;
	var folderCommand = null;
	var autoComplete = null;

	function filterKeypress( event ){
		if( event && event.keyCode == 27 ){	//	VK_ESCAPE
			//event.stopPropagation();
			//window.setTimeout( hide, 10 );
		}
	}

	function show(){
		barHbox.collapsed = false;
		//window.addEventListener( "keypress", filterKeypress, true ); 
	}

	function hide() {
		//window.removeEventListener( "keypress", filterKeypress, true ); 
		barHbox.collapsed = true;
		if ( focusMemory ) {
			focusMemory.focus();
			focusMemory = null;
		}
		barButton.label = labelMemory;
	}

	this.initElements = function initElements() {
		barHbox = document.getElementById( xul.barHbox );
		barButton = document.getElementById( xul.barButton );
		barTextbox = document.getElementById( xul.barTextbox );
		keyFolderSelect = document.getElementById( xul.keyFolderSelect );
		messagePane = document.getElementById( xul.messagePane );
		
		barButton.setAttribute( 'disabled', 'false' );
		
		initGuiElementsKeys( window, 'mailGui.folderAction.elements' )

		//	attach custom folder lookup session
		autoComplete = new mailFolders.classFoldersAutoComplete();
		barTextbox.addSession( autoComplete );	
		
		labelMemory = barButton.label;
		hide();
	}

	function initSearch(){
		
	}

	this.setCommand = function setCommand( barButtonValue, folderCommandValue ){
						
		switch ( folderCommandValue ){
			case 'cmdMoveToFolder':
			case 'cmdCopyToFolder':
				if( ! checkSelection( window ) ){
					//	user did not select any messages
					alert('Folder Action: MOVE|COPY\n nothing selected;\n please first select some messages.');
					return;
				}
				break;				
				//		
			case 'cmdSelectFolder':
				switch ( getWindowType( window ) ){
					case 'mail:messageWindow':
					case 'mailnews:search':
						//	alert('ignore');
						return;	//	ignore, can not select from this kind of window
					case 'mail:3pane':
						break;	//	ok to proceed				
					default:
						alert('unexpected folder action getWindowType( window )');
						return;
				}
				break;				
			default:
				alert('unknown folder action command');
				return;
		}

//	XXX	fix me: status does not show inside event thread
		displayStringInStatusText( 'Building Folder List...' );

//	this does not work either:		
//		window.setTimeout( function local() {
//			displayStringInStatusText( 'Building Folder List...' );
//			}, 1 );
		
				
//		window.setTimeout( autoComplete.initSearch, 1);	//	XXX todo - run async ?
		autoComplete.initSearch();
		
		folderCommand = folderCommandValue;
		barButton.label = barButtonValue;
		focusMemory = document.commandDispatcher.focusedElement;
		if ( ! focusMemory ) {
			focusMemory = messagePane.contentWindow;
		}
		switch ( folderCommand ){
			//	XXX	todo read color from pref
			case 'cmdSelectFolder':
				barTextbox.style.backgroundColor = "#bbffbb";	//	green
				break;				
			case 'cmdMoveToFolder':
				barTextbox.style.backgroundColor = "#ffddbb";	//	red
				break;				
			case 'cmdCopyToFolder':
				barTextbox.style.backgroundColor = "#ffffbb";	//	yellow
				break;				
			default:
		}
		barTextbox.value = "";
		barTextbox.resultsPopup.position = "before_start";
		displayStringInStatusText( '' );
		show();		
		barTextbox.focus();
	}	

	this.runCommand = function runCommand( ){

		//	log.thisLevel( log.level.debug );

		var count = barTextbox.getResultCount();
		if( count == 0){	
			//	no results, no match
			hide();
			return;
		}
		//	set fist result in list as default is user selects no item from reulsts list
		var uri = barTextbox.getResultAt(0).comment;	
		//	look for user-seleted item in the list, if any
		for( var k = 0; k < count; k++ ){	
			var item = barTextbox.getResultAt( k );
			if( item.value == barTextbox.value ){
				uri = item.comment;
				break;
			}
		}
		var folder = mailFolders.getFolderFromUri( uri );
		if ( folder ) {
			//	uses:
			//	http://www.xulplanet.com/references/xpcomref/ifaces/nsIMsgDBView.html
			//	messenger.jar::mail3PaneWindowCommands.js::
			//	messenger.jar::messageWindow.js::
			//	messenger.jar::SearchDialog.js::
			//	::SetNextMessageAfterDelete()
			//	::GetDBView()
			var view = window.GetDBView(); 
			switch ( folderCommand ){
				case 'cmdSelectFolder':
					log.debug('cmdSelectFolder');
					showFolder( window, folder );
					var folderName = mailFolders.getLongFolderNameFromFolder( folder );
					displayStringInStatusText( folderName );
					break;				
				case 'cmdMoveToFolder':
					log.debug('cmdMoveToFolder');
					window.SetNextMessageAfterDelete();
					view.doCommandWithFolder( window.nsMsgViewCommandType.moveMessages, folder );
					break;				
				case 'cmdCopyToFolder':
					log.debug('cmdCopyToFolder');
					view.doCommandWithFolder( window.nsMsgViewCommandType.copyMessages, folder );
					break;				
				default:
					log.error('invalid command');
			}
		} else {
			alert( "Folder not found: " + uri );
		}
		hide();
	}	

	function displayStringInStatusText( textString ){
		var statusText = document.getElementById('statusText');
		statusText.label = textString;
		//	???.StatusFeedback.showStatusString( textString );
	}

	this.updateSearch = function updateSearch( event ){

		//log.thisLevel( log.level.debug );

	//	textbox.oninput() handler
		//	XXX todo handle dup key press

		//	this is a hack to force "nsIAutoCompleteSession.onStartLookup"
		//	when making edits in the middle of the textbox string 
//		if( barTextbox.textLength != barTextbox.selectionEnd ) {
//			var selectionEnd = barTextbox.selectionEnd;
//			var value = barTextbox.value;
//			barTextbox.value = value + ' ';
//			barTextbox.value = value;
//			window.setTimeout( function(){ barTextbox.selectionEnd = selectionEnd; }, 1 );
//		}
		
//		log.debug(size + ' : ' + position)
//		log.debug(barTextbox.value)
	}

	this.abortSearch = function abortSearch(){
		hide();
	}

}

function classBookCommands( window ) {

	var document =  window.document;
	var alert =  window.alert;
	
	var fileSys = carrot_garden.fileSys;
	var form = carrot_garden.form;
	var mailFolders = carrot_garden.mailFolders;
	var mailSearch = carrot_garden.mailSearch;
	var util = carrot_garden.util;
	var pref = carrot_garden.pref;
	var test = carrot_garden.test;
	
	this.initElements = function initElements(){
		var menu = document.getElementById( 'carrot_garden.menu' );
		menu.setAttribute( 'disabled', 'false' ); 
		initGuiElementsKeys( window, 'bookGui.addressbook.elements' );		
	}
	
	this.testMain = function testMain(){
		test.testMain( window );
	}
	
}

function classMailCommands( window ) {

	var document =  window.document;
	var alert =  window.alert;
	
	var fileSys = carrot_garden.fileSys;
	var form = carrot_garden.form;
	var mailFolders = carrot_garden.mailFolders;
	var mailSearch = carrot_garden.mailSearch;
	var util = carrot_garden.util;
	var pref = carrot_garden.pref;
	var test = carrot_garden.test;
	
	this.initElements = function initElements(){
		var menu = document.getElementById( 'carrot_garden.menu' );
		menu.setAttribute( 'disabled', 'false' ); 
		initGuiElementsKeys( window, 'mailGui.messenger.elements' );		
	}
	
	this.testMain = function testMain(){
		// test.testMain( window );
		compactor = new mailFolders.classCompactFolders(); 
	}

	this.makeUUID = function makeUUID(){
		var uuidMaker = new util.classUUID2();
		var uuid = uuidMaker.makeUUID();
		util.clipboardPaste(uuid);
		//alert('New UUID was put in clipboard:\n' + uuid); 
	}
	
	var mSelectedFolderURI;
	var mSelectedFolder;
	var mFolderTree;
	var mBuilderView;

	function getSelectedFolderInfo(){
		mSelectedFolderURI = window.GetSelectedFolderURI();	//	widgetglue.js::
		if( ! mSelectedFolderURI ) { 
			alert( 'Invalid folder selection.' ); 
			return; 
		}
		mSelectedFolder = window.GetMsgFolderFromUri( mSelectedFolderURI, null );	//	widgetglue.js::
		if( ! mSelectedFolder ) {
			alert( 'Invalid folder.' );
			return;
		}
		mFolderTree = window.GetFolderTree();	//	msgMail3PaneWindow.js::
		if( ! mFolderTree ) {
			alert( 'Invalid folder tree.' );
			return;
		}
		mBuilderView = mFolderTree.builderView; 
	}
	
	this.subtreeExpand = function subtreeExpand(){
	
		getSelectedFolderInfo();
	
		function folderExpandFunction( folder ){
			var index = ensureFolderIndex( mBuilderView, folder );
			if( ! index || index < 0 ) {
				alert( 'Invalid folder index.' );
				return;
			}
			//	XXX enable this as a progress indicator; but this makes it run very slow;
			//	XXX try to use status bar instead; 
			//window.ChangeSelection( folderTree, index );	//	msgMail3PaneWindow.js::
		}
		
		function asyncronousProcess(){
			mailFolders.iterateFoldersFunction( mSelectedFolder, folderExpandFunction );
			//	XXX update status bar: display 'done'
		}
		
		window.setTimeout( asyncronousProcess, 1 );	//	XXX	1 ms delay, asynchronous
	}

	//	use class level object to avoid memory leak; should be destroyed on window.close()
	mDataBaseView = Components.classes["@mozilla.org/messenger/msgdbview;1?type=threaded"]	//	eShowAllThreads	http://www.xulplanet.com/references/xpcomref/ifaces/nsMsgViewType.html
			.createInstance(Components.interfaces.nsIMsgDBView);	//	http://www.xulplanet.com/references/xpcomref/ifaces/nsIMsgDBView.html	

	this.subtreeMarkRead = function subtreeMarkRead(){
	
		getSelectedFolderInfo();

	    mDataBaseView.init( window.messenger, /* msgWindow */ null, /* gThreadPaneCommandUpdater */ null );

		function folderMarkReadFunction( folder ){
			if( folder.getNumUnread( false ) > 0 ){	//	http://www.xulplanet.com/references/xpcomref/ifaces/nsIMsgFolder.html#method_getNumUnread
			    var count = {};	//	count.value
	    		mDataBaseView.open( folder, 
		    		/* nsMsgViewSortTypeValue sortType : byNone */ 17,	//	http://www.xulplanet.com/references/xpcomref/ifaces/nsMsgViewSortType.html 
		    		/* nsMsgViewSortOrderValue sortOrder : none  */ 0,	//	http://gnuzilla.gnu.org/fulltree/icecat-2.0.0.11-g1/mailnews/base/public/nsIMsgDBView.idl 
		    		/* nsMsgViewFlagsTypeValue viewFlags : kNone */ 0,	//	http://www.xulplanet.com/references/xpcomref/ifaces/nsMsgViewFlagsType.html 
		    		count );	//	out PRInt32 count; this must be js object;
				mDataBaseView.doCommand( window.nsMsgViewCommandType.markAllRead );
				mDataBaseView.close();
			}
		}
		//	XXX add status bar updates		
		function asyncronousProcess(){
			mailFolders.iterateFoldersFunction( mSelectedFolder, folderMarkReadFunction );
		}
		
		window.setTimeout( asyncronousProcess, 1 );	//	XXX	1 ms delay, asynchronous
	}

	var mMsgParser;	//	 used by	repairMsfFiles();	updateMsfFiles();	 

	this.repairMsfFiles = function repairMsfFiles(){
		mMsgParser = new mailFolders.classDatabaseParser( null );	//	will try to 'open & close' DB for each local folder;
		mMsgParser.start();	// runs asyncronously
		alert('Repair started;\n processing can take several minutes;\n report is available in the Console Log.');
	}
	
	this.updateMsfFiles = function updateMsfFiles(){
		//mMsgParser = new mailFolders.classDatabaseParser( null );	//	will try to 'open & close' DB for each local folder;
		//mMsgParser.start();	// runs asyncronously
		//alert('Update started;\n processing report is available in the Console Log.');
		alert('NOT IMPLEMENTED');
	}

	this.testEmailPopup = function testEmailPopup(){
	}

	this.openFileSysFolder = function openFileSysFolder( type ){
		var path;
		switch( type ){
			case 'temporary': 
				path = pref.getPref( 'fileSystem.folderTemporaryFiles' ); 
				break;
			case 'backup': 
				path = pref.getPref( 'fileSystem.folderBackupFiles' ); 
				break;
			case 'profile': 
				path = '[ProfD]'; 
				break;
			default: 	//	should not happen
				alert('openFileSysFolder(): unknown type = ' + type ); 
				return;
		}
		var folder = fileSys.getSpecialSubFolder( path );
		fileSys.openFolder( folder );
	} 
	this.openMsgFolderNewWindow = function openMsgFolderNewWindow (){
		//	msgMail3PaneWindow.js::
		var messageUri = window.GetLoadedMessage();	
		if( messageUri == null ) return;
		//	http://www.xulplanet.com/references/xpcomref/comps/c_messenger1.html
		var messageHdr = window.messenger.msgHdrFromURI( messageUri );
		if( messageHdr == null ) return;
		//	mailWindowOverlay.js::
		window.MsgOpenNewWindowForMsgHdr( messageHdr );
	} 
	this.copyPopup = function copyPopup( portion ){
		var str = '';
		var input = util.getPopupNodeAttribute( document, "emailAddress", "displayName" );
		switch( portion ) {
			case 'email':
				str = input.emailAddress;
				break;
			case 'name':
				str = util.patternPersonName( input.displayName );
				break;
			default:
				str = util.patternPersonName( input.displayName ) + ' <' + input.emailAddress + '>';
				break;
		}
		util.clipboardPaste( str );
	}
	
	this.makeCustomerFolder = function makeCustomerFolder(){
		var maker = new form.classMakeFolder( window );
		maker.makeCustomer();
	}
	this.makeManagerFolder = function makeManagerFolder(){
		var maker = new form.classMakeFolder( window );
		maker.makeManager();
	}
	this.makeEventsNewsFolder = function makeEventsNewsFolder(){
		var maker = new form.classMakeFolder( window );
		maker.makeEventsNews();
	}
	this.makeVendorFolder = function makeVendorFolder(){
		var maker = new form.classMakeFolder( window );
		maker.makeVendor();
	}

	this.makeEmployerFolder = function makeEmployerFolder(){
		var maker = new form.classMakeFolder( window );
		maker.makeEmployer();
	}

	this.openWebSiteFromEmail = function openWebSiteFromEmail(){
		var emailAddress = util.getPopupNodeAttribute( document, "emailAddress" ).emailAddress;
		var url = 'http://www.' + util.getDomainFromEmailAddress ( emailAddress );
		util.openUrl( url );
	}
	this.selectFolder = function selectFolder ( uriName ){
		var uriList = pref.getPrefList( 'mailGui.selectFolders' );
		var uri = uriList[ uriName ];
		//	msgMail3PaneWindow.js OR messageWindow.js
		try{ window.SelectFolder( util.convertToUri ( uri ) ); } catch(ex){} 
	}
	this.rebuildMyRespose = function rebuildMyRespose(){
		mailFolders.rebuildSerachFolders( window, 'mailStore.folderMyResponse.searchFolders' );
	}
	this.rebuildConversations = function rebuildConversations (){
		mailFolders.rebuildSerachFolders( window, 'mailStore.folderConversations.searchFolders' );
	}

	this.backupFiltersFile = function backupFiltersFile (){
		 fileSys.backupFiltersFile ();	
	}
	this.backupVirtualFoldersFile = function backupVirtualFoldersFile (){
		fileSys.backupVirtualFoldersFile ();
	}
	this.resetPreferences = function resetPreferences(){
		pref.loadDefaults();
	}
	this.showAllKeys = function showAllKeys(){
		reportAllWindowKeys( window );
		alert('All Window Keys are reported in the Console Log.');
	}
	this.listenerKeyPress = function listenerKeyPress(){
		if( event && event.charCode == XXX ) {
			alert( event.charCode );
			event.preventDefault();
			event.stopPropagation();
		}
	}
	
/*
 * listenerMessagePaneContextShow: for more details - see:
 * 
 * 1) mailWindowOverlay.xul
 *   <popup id="messagePaneContext"   
 * 		     onpopupshowing="if (event.target != this) return true; gContextMenu = new nsContextMenu(this); return fillMessagePaneContextMenu();"
 * 
 * 2) nsContextMenu.js
 * 	this.onMailtoLink
 * 
 * 3) mailContextMenus.js
 * 	function fillMessagePaneContextMenu()
 * 
 */

	this.attachListenerMessagePaneContext = function attachListenerMessagePaneContext(){
		var conext = document.getElementById( 'messagePaneContext' )
		conext.addEventListener( "popupshowing", listenerMessagePaneContextShow, false );
	}
	
	function listenerMessagePaneContextShow(){

		var itemsEmail = [
			document.getElementById( 'carrot_garden.thisMessagePopup-menu' ),
			document.getElementById( 'carrot_garden.thisMessagePopup-menu-sep' ),
			document.getElementById( 'carrot_garden.thisMessagePopup-item' ),
			document.getElementById( 'carrot_garden.thisMessagePopup-item-sep' )
		];

		var menuEmail = new classElementsVisibility( itemsEmail );

		var gContextMenu = window.gContextMenu;

		if( ! gContextMenu || ! menuEmail.existsAll() ) return;

		menuEmail.hide();
		
		var itemDislpay = itemsEmail[2];
	
		function checkAndSetEmailAttributes( text ){
	        var emailAddress = util.findEmailAddressInText( text );
	        var displayName = '';
	        if( ! emailAddress ) return;
			menuEmail.show();
			itemDislpay.setAttribute( 'label', emailAddress );
			document.popupNode.setAttribute( 'emailAddress', emailAddress );
			document.popupNode.setAttribute( 'displayName', displayName );
		}

		if( gContextMenu.onMailtoLink ){
			var link = gContextMenu.linkURL();
			checkAndSetEmailAttributes( link );
			//log.debug( 'onMailtoLink ' + gContextMenu.linkURL() )	
		} else if( gContextMenu.onLink ) {
			//log.debug( 'onLink ' + gContextMenu.linkURL() )	
		} else if ( gContextMenu.isTextSelected ){
	        var focusedWindow = document.commandDispatcher.focusedWindow;
	        var text = focusedWindow.getSelection();
			checkAndSetEmailAttributes( text );
			//log.debug( 'isTextSelected ' + text )	
		} else {
			//log.debug( 'onOther ' + 0 )	
		}
	}
		
	var listenerWindowFocus_timeStamp = new Date();
	
	this.listenerWindowFocus = function listenerWindowFocus( event ){
		
		var now = new Date();
			log.debug( now )
			
		if( now - listenerWindowFocus_timeStamp > 500 ){

			listenerWindowFocus_timeStamp = now;

			var scriptPath = util.osGetExtensionScriptPath('keyboardSwitchWin32.js');
			var command = util.osGetWin32Command( 'cscript.exe', scriptPath, '//nologo');	

			var inputData = '^+0';
			var outputData = util.osExecPipe( command, inputData );	
				
			log.debug( now )
		} 
	}
}


function reportAllWindowKeys( window ){
	var elements = window.document.getElementsByTagName( 'key' );
	var count = elements.length;
	var str = '';
	for( var k = 0; k < count ; k++){
		str = (1 + k) + '/' + count + 
		' id=' + elements[k].id + 
		' key=' + elements[k].getAttribute('key') +
		' keycode=' + elements[k].getAttribute('keycode') +
		' modifiers=' + elements[k].getAttribute('modifiers') +
		' command=' + elements[k].getAttribute('command') +
		' oncommand=' + elements[k].getAttribute('oncommand') +
		'';
		log.report( str );
	}
}


function getClipBoardFileUrl(){

	var clip = Components.classes["@mozilla.org/widget/clipboard;1"]
	                       .createInstance(Components.interfaces.nsIClipboard);
	
	var trans = Components.classes["@mozilla.org/widget/transferable;1"]
	                      .createInstance(Components.interfaces.nsITransferable);

	trans.addDataFlavor( dataFlavors.url )
			
	clip.getData( trans, clip.kGlobalClipboard );
  
	var data = new Object();
	var dataLength = new Object();

	try {
		trans.getTransferData( dataFlavors.url, data, dataLength);
	}	
	catch ( ex ) {
		return null;
	}
	
	if ( ! data ) return null;

	var value = data.value.QueryInterface(Components.interfaces.nsISupportsString );
	if ( ! value ) return null;

	var fileUrl = value.data;
	
	var rx = new RegExp('^file://', 'gi');
	
	if( fileUrl.match( rx ) ) {
		return fileUrl.toString().split("\n")[0];
	} else {
		return null;
	}
}

function classElementsVisibility( elementsArray ){
	var list = elementsArray;
	this.show = function show(){
		list.forEach( function setAttribute( item ){
			if( item ) item.setAttribute( 'collapsed', 'false' ) 
		})
	}	
	this.hide = function hide(){
		list.forEach( function setAttribute( item ){
			if( item ) item.setAttribute( 'collapsed', 'true' ) 
		})
	}	
	this.existsAll = function existsAll(){
		var flag = true;
		list.forEach( function checkIfExists( item ){
			if( item == null ) flag = false;
		})
		return flag;
	}	
}

function classComposeCommands( window ){
	
	var form = carrot_garden.form;

	function attachClipBoardFile(){

		var currentAttachment = getClipBoardFileUrl();

		if( ! currentAttachment ) return false;
	  
		if( window.DuplicateFileCheck( currentAttachment ) ) return true;	//	MsgComposeCommands.js
		
		var attachment = Components.classes["@mozilla.org/messengercompose/attachment;1"]
			.createInstance(Components.interfaces.nsIMsgAttachment);
		
		attachment.url = currentAttachment;
		
		//	MsgComposeCommands.js::
		window.AddAttachment( attachment );	
		window.ChangeAttachmentBucketVisibility( false );
		window.gContentChanged = true;
		
		return true;		
	}
	
	this.listenerKeyPress = function listenerKeyPress( event ){
		var pasteKey = 	118 // event['DOM_VK_V'] + 32;	//	DOM_VK_V  	= 86
		if ( 
		( event.charCode == pasteKey ) && 
		( event.ctrlKey ) &&
		( ! event.altKey ) &&
		( ! event.metaKey ) &&
		( ! event.shiftKey  ) &&
		true ) { 	
			if( attachClipBoardFile() ){
				event.preventDefault();
				event.stopPropagation();
			}
		}
	}
	
	this.setCopySentPref = function setCopySentPref(){
		form.setCopySentPref( window );
	}
}



function getMessageHeaderFromUri( uri ) {
	var messenger = Components.classes["@mozilla.org/messenger;1"].createInstance();
	messenger = messenger.QueryInterface(Components.interfaces.nsIMessenger);
	var hdr = messenger.msgHdrFromURI( uri );
	return hdr;
}

//	http://www.fileformat.info/info/unicode/char/fffd/index.htm
//	/\uFFFD/

function getAttachmentMessageNameFromUri( uri ){

	function messageNameWithId( text ){
		return text + '_' + hdr.dateInSeconds;
	}

	var subject = '';
	var subjectEmpty = 'MESSAGE_WITH_EMPTY_SUBJECT';
	
	var hdr = getMessageHeaderFromUri( uri )	

	var subjectPlain = hdr.subject; 
	if( ! subjectPlain || subjectPlain == '' ) return messageNameWithId(subjectEmpty);

	var subjectMime = hdr.mime2DecodedSubject; 
	if( ! subjectMime || subjectMime == '' ) return messageNameWithId(subjectEmpty);
	
	if( subjectMime.match(/\uFFFD/) ){
		var charset = hdr.Charset;
		if( ! charset || charset == '' ){
			charset = 'windows-1251';	//	XXX	move this to pref 'default attachment header charset'
		}
		subject = convertLegacyToUnicode( charset, subjectPlain );
	} else {
		subject = subjectMime;
	}

	if( ! subject || subject == '' ) return messageNameWithId(subjectEmpty);
		
	var rx = /[\uFFFD]|\p{Z}|\p{S}|\p{P}|\p{C}|[\x00-\x2F]|[\x3A-\x40]|[\x5B-\x60]|[\x7B-\x7F]/g;
	
	var temp = subject.replace( rx, '_' )
	temp = temp.replace(/_{2,}/g,'_')
	temp = temp.replace(/^_|_$/g,'')
	
//	var messageName = carrot_garden.util.patternAttachmentMessageName( subject );
	messageName = ''+ temp

	if( ! messageName || messageName == '' ) return messageNameWithId(subjectEmpty);
	
	return messageNameWithId( messageName );
}

//	"windows-1251"; "iso-8859-1"; "koi8-r";

function convertLegacyToUnicode( charset, string ){
	
var converter = Components.classes["@mozilla.org/intl/scriptableunicodeconverter"]
	.createInstance(Components.interfaces.nsIScriptableUnicodeConverter);

	converter.charset = charset;
	
	return converter.ConvertToUnicode( string )
	
} 


function updateAttachmentSizeDisplay( window ){

	var document = window.document;

	var rx = {
		mail: new RegExp('^mailbox-message:|^imap-message:|^news-message:^mailbox:|^imap:|^s?news:','gi'),
		file: new RegExp('^file:','gi'),
	}
 	
	var bucket = document.getElementById("attachmentBucket");
	var displayCount = document.getElementById("carrot_garden.attachmentBucketText_textbox_count");
	var displaySize = document.getElementById("carrot_garden.attachmentBucketText_textbox_size");

	var count = 0;
	var size = 0;
	
	if ( bucket && bucket.getRowCount()) {
		var nodes = bucket.childNodes
		count = nodes.length;
		for( var k = 0; k < count; k++ ){
			var url = nodes[k].attachment.url;
			if( url.match( rx.mail ) ){
				size += getMailSizeForUri( url );
			}else if ( url.match( rx.file )) {
				size += getFileSizeForUri( url );
			}
		}
	}
	
	displayCount.value = count;
		
	size /= 1000;
	displaySize.value = size < 1000 ? size.toFixed(1) + ' KB' : (size/1000).toFixed(1) + ' MB';
	
	var threshold = carrot_garden.pref.getPref( 
		'mailGui.messengercompose.parameters.attachmentBucketText_textbox_size_threshold' );

	displaySize.inputField.style.color = size < threshold ? 'blue' : 'red';

}

function getMailSizeForUri( url ){
	var hdr = getMessageHeaderFromUri( url );
	var size = hdr.messageSize;
	return size;
}

function getFileSizeForUri( url ){
	var handler = Components.classes["@mozilla.org/network/protocol;1?name=file"]
		.createInstance(Components.interfaces.nsIFileProtocolHandler)
	var file = handler.getFileFromURLSpec( url );
	var size = file.fileSize;
	return size;
}



function classCarrotActivateZone( ){
	var currentZone = 0;
	var defaultZone = 1;
	var elementId1="addresses-box"; 
	var elementId2="appcontent";
	var element1 = document.getElementById( elementId1 );
	var element2 = document.getElementById( elementId2 );
	 
	this.activateZone = function activateZone( zoneNum ){
		if ( currentZone == zoneNum ) return;
		currentZone = zoneNum;
		
	}
	function armZone(zoneNum){
		['element' + zoneNum].setAttribute( 'onclick', this.activateZone(zoneNum) );
		['element' + zoneNum].setAttribute( 'onkeydown', this.activateZone(zoneNum) );
	}
}

//	overwrite originals in msgHdrViewOverlay.js
function openAttachment( aAttachment )
{
	
	log.debug(aAttachment.url + '\n\n' + aAttachment.contentType)
	
	if(aAttachment.contentType == 'message/rfc822' ){
		//var url = 'mailbox:///C|/mnt/TEMP/tb/Mail/Local%20Folders/Inbox.sbd/ZT?number=0&part=1.2'
		var url = 'mailbox:///C|/mnt/TEMP/tb/Mail/Local%20Folders/Inbox.sbd/ZT?number=0'

		try{
		    gDBView.suppressMsgDisplay = false;
		    gDBView.loadMessageByUrl(  url );
		}catch(ex){
			log.error(ex)
		}

	    return
		
	}
	
//	http://www.xulplanet.com/references/xpcomref/ifaces/nsIMsgDBView.html	

	
  messenger.openAttachment(aAttachment.contentType, 
                           aAttachment.url, 
                           encodeURIComponent(aAttachment.displayName), 
                           aAttachment.messageUri, aAttachment.isExternalAttachment);
}


/*
#################################

	this is a hack to work arround unfinished FCC header support in nsIMsgCompose in TB 2.x
	log.debug( 'fcc : ' + gMsgCompose.compFields.fcc )
	log.debug( 'fcc2: ' + gMsgCompose.compFields.fcc2 )

	interacts with GenericSendMessage events from the file MsgComposeCommands.js ::
		window.addEventListener("load", carrotCopySent.listenerLoad, false);
		window.addEventListener('compose-from-changed', carrotCopySent.listenerFrom, true);
		window.addEventListener('compose-send-message', carrotCopySent.listenerSend, true);
		window.addEventListener('unload', carrotCopySent.listenerUnload, false);
  
 */
 
function classCopySent( window, valuePickerId ) {
	
	var document = window.document;
	var alert = window.alert;
	
	var stateListener; // nsIMsgComposeStateListener

	// mozilla::MailNewsTypes.h
	var nsMsgKey_None = 0xFFFFFFFF;
	//	mozilla::nsMsgSend.cpp
	var nsNoCopy = "nocopy://";
	
	var pickerId = valuePickerId;
	//	var picker = document.getElementById( pickerId );

	var memory = {
		// key: '',		//	original string: identity key with witch the window was open
		doFcc: false,	//	original flag: identity must use fcc in this message window
		fccFolder: '',	//	original uri: fcc folder uri to be used
		setPastFcc: false,	//	flag that prevents overwrite of 'past loaded fcc' by 'new best fcc'
	}
	
	this.selectionChange = function selectionChange( event, object ){
		//	noop
	}

	//	copy attributes that control icon properties
	function copyItemAttributes( target, picker ){
		//log.debug( 'picker.getAttribute( attrib )' )
		attrList = [ 'SpecialFolder','BiffState', 'IsServer', 'IsSecure', 'ServerType'];
		attrList.forEach( function setAttribute( attrib ){
			picker.setAttribute( attrib, target.getAttribute( attrib ));
			//log.debug( picker.getAttribute( attrib ) )
		});
	}

	//	chosen 'real' menuitem;  
	this.selectItem = function selectItem( target ){	//	event.target
		var picker = document.getElementById( pickerId );	//	XXX needs this else will not find obj
		var folderUri = target.getAttribute( "id" );
		//window.PickedMsgFolder( target, pickerId );	//	sets "label", "uri"
		window.SetFolderPicker( folderUri, pickerId );	//	messenger.jar::msgFolderPickerOverlay.js::	sets "label", "uri"
		copyItemAttributes( target, picker );	//	to reflect icon change
	}
	var selectItem = this.selectItem;
	
	//	chosen 'manual' menuitem id="nocopy://" label="Do Not Copy"
	this.selectNoCopy = function selectNoCopy( target ){	//	event.target	
		var picker = document.getElementById( pickerId );	//	XXX needs this else will not find obj
		picker.setAttribute( "label", target.getAttribute( "label" ));
		picker.setAttribute( "uri", target.getAttribute( "id" ) );
		copyItemAttributes( target, picker )
	}
	var selectNoCopy = this.selectNoCopy;

	function backupIdentityInfo() {
		//	messenger.jar::MsgComposeCommands.js::
		var identity = window.getCurrentIdentity();
		// memory.key = identity.key;
		memory.doFcc = identity.doFcc;
		memory.fccFolder = identity.fccFolder;
		//log.debug('identity.key: ' + identity.key );
		//log.debug('identity.doFcc: ' + identity.doFcc );
		//log.debug('identity.fccFolder: ' + identity.fccFolder );
		log.report("-");
	}

	function restoreIdentityInfo() {
		//	messenger.jar::MsgComposeCommands.js::
		var identity = window.getCurrentIdentity();
		//	identity.key = memory.key;
		identity.doFcc = memory.doFcc;
		identity.fccFolder = memory.fccFolder;
		//log.debug('identity.key: ' + identity.key );
		//log.debug('identity.doFcc: ' + identity.doFcc );
		//log.debug('identity.fccFolder: ' + identity.fccFolder );

		// this is a mistake
		//		memory.key = '';
		//		memory.doFcc = false;
		//		memory.fccFolder = '';
		log.report("-");
	}

	function startPastFccLoad( messageUri ){	//	messageUri id original draft message that was selected for opening current compose window;
		log.thisLevel( log.level.debug );
		log.debug('start background loading and display fcc from draft message')
	    var headerName = 'fcc_folder';
	    var headerFunction = function headerFunction( fccUri ){	//	fccUri = value of 'headerName' header - see inside messageStreamHeaderFunction
			//log.thisLevel( log.level.debug );
	    	log.debug( 'fccUri : ' + fccUri );
	    	//	XXX todo - check if fcc folder still exists; may have being renamed / deleted
	    	if( fccUri ){	
	    		memory.setPastFcc = true;	//	flag that prevents overwrite of 'past loaded fcc' by 'new best fcc'
	    		log.debug('fcc set from past')
				//	msgFolderPickerOverlay.js::
				window.SetFolderPicker( fccUri, pickerId );
	    	}
	    }
	    //	this will run asyncronously:
	    messageStreamHeaderFunction( messageUri, headerName, headerFunction );
	}

	function chooseBestFccFolder( folder, messageUri ){	//	returns folder uri
		
		log.thisLevel( log.level.debug );

		if( folder ){
			log.debug( 'folder.URI: ' + folder.URI );
			log.debug( 'messageUri: ' + messageUri );

			var gFolderFlags = carrot_garden.mailFolders.gFolderFlags;

			var folderMask_doNotFile = 
			//	gFolderFlags.MSG_FOLDER_FLAG_VIRTUAL +
				gFolderFlags.MSG_FOLDER_FLAG_TRASH +
				gFolderFlags.MSG_FOLDER_FLAG_SENTMAIL + 
				gFolderFlags.MSG_FOLDER_FLAG_DRAFTS +
				gFolderFlags.MSG_FOLDER_FLAG_QUEUE +
				gFolderFlags.MSG_FOLDER_FLAG_INBOX +
				gFolderFlags.MSG_FOLDER_FLAG_TEMPLATES +
			//	gFolderFlags.MSG_FOLDER_FLAG_JUNK +
				0; 
					
			if( folder.canFileMessages ){
			//	folder can file messages:
				if( folder.flags & folderMask_doNotFile ) {
					log.debug('folder is "Special" - use default fcc')
					return memory.fccFolder;
				} else {
					log.debug('folder is "Regular" - use this folder uri')
					return folder.URI;
				}
			//	folder can not file  and  folder virtual:
			} else if ( folder.flags & gFolderFlags.MSG_FOLDER_FLAG_VIRTUAL ) {
				if( messageUri ){
					var hdr = getMessageHeaderFromUri( messageUri );
					if( hdr && hdr.folder.canFileMessages ){
						log.debug('"virtual" folder - find and use real underlying folder uri')
						return hdr.folder.URI;
					} else {
						log.debug('"virtual" folder - case #1 use default fcc')
						return memory.fccFolder;
					}
				} else {
					log.debug('"virtual" folder - case #2 use default fcc')
					return memory.fccFolder;
				}
			//	folder can not file + folder unsent
			} else if ( folder.flags & gFolderFlags.MSG_FOLDER_FLAG_QUEUE ) {
				log.debug('"unsent" folder - use default fcc')
				return memory.fccFolder;
			} else if ( folder.server.type == 'nntp' ) {
				//	XXX to do - test appropriate uses
				var newsFcc = carrot_garden.pref.getCharPref( 'news.fcc_folder' );
				log.debug('"nntp" folder - use pref news.fcc_folder');
				return newsFcc ? newsFcc : nsNoCopy;
			} else {
				//	XXX to do - use local folders /sent
				log.debug('other - use default fcc')
				return memory.fccFolder;
			}
		} else { //	no folder object
			log.debug('no folder - use default fcc')
			return memory.fccFolder;
		}
	}

	// window.addEventListener('compose-window-init', carrotCopySent.listenerInit, true);	//	top level event capture
	this.listenerInit = function listenerInit() {
		// log.report( "-" );
		if( window.gMsgCompose ) {
			var args = { SaveInFolderDone : restoreIdentityInfo };
			stateListener = new classMessageComposeStateListener( args );
			window.gMsgCompose.RegisterStateListener( stateListener );
		} else {
			log.error( "window.gMsgCompose is null" );
		}
	}

	//	window.addEventListener("load", carrotCopySent.listenerLoad, false);
	this.listenerLoad = function listenerLoad() {
		
		// log.thisLevel( log.level.debug );

		backupIdentityInfo();	// will be restored at the end by this.listenerUnload()

		var folderUri = ''; 

		var folder = getLastSelectedFolder(); // nsIMsgFolder
		var messageUri = getLastSelectedMessageUri();
		
		log.debug( "folderUri  : " + folder.folderURL );
		log.debug( "messageUri : " + messageUri );
		
	    if( messageUri ) startPastFccLoad( messageUri );	//	real, previously selected message might have fcc header already set
		
		if( ! memory.setPastFcc ){	//	auto loading is not finished yet, can proceed
			if( ! memory.doFcc ){	//	if this identity does not file copies by default - reflect in the gui
				log.debug( 'doFcc : NO' );
				folderUri = nsNoCopy; 
				//	emulate click on menu item: <menuitem id="nocopy://"
				var target = document.getElementById( folderUri );
				selectNoCopy( target );
			} else {
				log.debug( 'doFcc : YES' );
				folderUri = chooseBestFccFolder( folder, messageUri );	//	worse case returns default 'sent to' fot current idetity
				//	emulate click on menu item: <menuitem id="...://.../real/folder/uri..."
				//	XXX var target = document.getElementById( folderUri );				
				//	XXX selectItem( target );
				window.SetFolderPicker( folderUri, pickerId );	//	msgFolderPickerOverlay.js::	sets uri, label;
			}
			log.debug( 'set fcc folderUri to: ' + folderUri );
		} else {
			//	will be set from past fcc load asyncronously;
			log.debug( 'memory.setPastFcc is already done' );
		}

		// log.report('load');
		
	}	

	//	window.addEventListener('compose-from-changed', carrotCopySent.listenerFrom, true);
	//	called when user changes identitiy in 'from' pull down list
	this.listenerFrom = function listenerFrom(){
		backupIdentityInfo();
	}

	//	window.addEventListener('compose-send-message', carrotCopySent.listenerSend, true);
	//	this event is called before
	//	messenger.jar/messendercompose/MsgComposeCommands.js/function GenericSendMessage( msgType )
	//	gMsgCompose.SendMsg(msgType, getCurrentIdentity(), currentAccountKey, msgWindow, progress);
	this.listenerSend = function listenerSend(){
		var identity = window.getCurrentIdentity();
		var picker = document.getElementById( pickerId );	//	XXX needs this else will not find obj
		var folderUri = picker.getAttribute("uri");

		//	XXX verify uri string is not null, empty, etc
		//	set identity.doFcc, identity.fccFolder; 
		//	note: this.listenerUnload will do identity.* cleanup;
		if( folderUri == nsNoCopy ){	//	nsNoCopy was set either by user or by this.listenerLoad
			identity.doFcc = false;
			identity.fccFolder = '';
		} else {						//	valid folder set either by user or by this.listenerLoad
			identity.doFcc = true;
			identity.fccFolder = folderUri;
		}
/*
		//	can set other custom fields here as needed;		
		if( gMsgCompose ) {
			var msgCompFields = gMsgCompose.compFields;
			if( msgCompFields ) {
				log.debug('msgCompFields')
				msgCompFields.otherRandomHeaders += 'X-Carrot-Account: ' + 123456 + "\r\n";
				msgCompFields.otherRandomHeaders += 'FCC2: ' + 'mailbox://nobody@Local%20Folders/Inbox/vendors'  + "\r\n";
			}
		}
*/		

		// log.report('send');
		
	}

	this.listenerClose = function listenerClose() {
		// log.report( "-" );
		if( window.gMsgCompose ) {
			window.gMsgCompose.UnregisterStateListener( stateListener );
		} else {
			log.error( "window.gMsgCompose is null" );
		}
	}
	
	//	window.addEventListener('unload', carrotCopySent.listenerUnload, false);
	this.listenerUnload = function listenerUnload(){
		restoreIdentityInfo();	//	will do identity.* cleanup;
		// log.report('unload');
	}
	
	this.initElements = function initElements(){
		var button = document.getElementById('carrot_garden.button_status_bar_copy_sent');
		var box = document.getElementById('carrot_garden.hbox_status_bar_copy_sent');
		button.setAttribute( 'disabled', 'false' );
		box.setAttribute( 'collapsed', 'false' );
	}
}

function getLastSelectedFolder(){	//	returns folder object
    //preselect current folder:
	var mailWindow = Components.classes["@mozilla.org/appshell/window-mediator;1"].getService()
		.QueryInterface(Components.interfaces.nsIWindowMediator)
		.getMostRecentWindow("mail:3pane");
	if ( mailWindow ) {     //else: no main window
		var view = mailWindow.GetDBView();  //nsIMsgDBView
		if ( view ) {         // else: no folder selected
			return  view.msgFolder;
		}
	}
	return null;	//	no folder selected
}	

function getLastSelectedMessageUri(){	//	returns message uri object
    //preselect current message:
	var mailWindow = Components.classes["@mozilla.org/appshell/window-mediator;1"].getService()
		.QueryInterface(Components.interfaces.nsIWindowMediator)
		.getMostRecentWindow("mail:3pane");
	if ( mailWindow ) {     //else: no main window
		var view = mailWindow.GetDBView();  //nsIMsgDBView
		if ( view ) {         // else: no message selected
		    try {
		        return view.URIForFirstSelectedMessage;
		    }
		    catch (ex) {
		        return null;
		    }
		}
	}
	return null;	// no message selected
}	


//	given 'messageUri' will parse message headers and then execute 'headerFunction' for 'headerName' value

function messageStreamHeaderFunction( messageUri, headerName, headerFunction ){
	//log.thisLevel( log.level.debug );
	log.debug( ' : ' + messageUri + ' : ' + headerName + ' : ' + headerFunction );
	//	
	var messenger = Components.classes["@mozilla.org/messenger;1"].createInstance()
		.QueryInterface(Components.interfaces.nsIMessenger);
	//	http://www.xulplanet.com/references/xpcomref/ifaces/nsIMsgMessageService.html
	var messageService = messenger.messageServiceFromURI( messageUri )
		.QueryInterface( Components.interfaces.nsIMsgMessageService );
		
	var messageStream = new classMessageStream();

	var args = {
		onEndMsgHeaders: function onEndMsgHeaders(){
				//log.thisLevel( log.level.debug );
				var header = messageStream.getHeader();
				//for( item in header ) log.debug(item + ' : ' + header[item]);
				var headerValue = header[ headerName ];
				//log.debug('headerValue : ' + headerValue)
				headerFunction( headerValue );
			},
		}	
	
	messageStream.initArgs( args );
	
	//	http://developer.mozilla.org/en/docs/nsIMsgMessageService
	//	If aConvertData is true, it will create a stream converter from message rfc822 to star/star. It will also tack aAdditionalHeader onto the url (e.g., "header=filter")
	//	nsIURI streamMessage ( char* messageURI , nsISupports consumer , nsIMsgWindow msgWindow , nsIUrlListener urlListener , PRBool convertData , char* additionalHeader )
	var uri = messageService.streamMessage( messageUri, messageStream, null, null, false, 'filter' );	//	note: 'filter' is important
	log.debug( 'running uri.path : ' + uri.path );

}


// abstract class; available in TB 2

function  classMessageComposeStateListener( argsObject ) {
	
	//log.thisLevel( log.level.debug );
	
	var args = argsObject;
	
	this.QueryInterface = function QueryInterface( iid )  {
		// log.report( "-" );
		if( iid.equals( Components.interfaces.nsIMsgComposeStateListener ) ||
			iid.equals( Components.interfaces.nsISupports) ) 
		{
			return this;
		} else {
			throw Components.results.NS_NOINTERFACE;
		}
	}
		
	this.ComposeProcessDone = function ComposeProcessDone( result ) {
		// log.report( "-" );
		if( args && args.ComposeProcessDone ) args.ComposeProcessDone( result );
	}
		
	this.NotifyComposeBodyReady = function NotifyComposeBodyReady( ) {
		// log.report( "-" );
		if( args && args.NotifyComposeBodyReady ) args.NotifyComposeBodyReady( ) ;
	}
		
	this.NotifyComposeFieldsReady = function NotifyComposeFieldsReady( ) {
		// log.report( "-" );
		if( args && args.NotifyComposeFieldsReady ) args.NotifyComposeFieldsReady( ) ;
	}
		
	this.SaveInFolderDone = function SaveInFolderDone( folderName ) {
		// log.report( "-" );
		if( args && args.SaveInFolderDone ) args.SaveInFolderDone( folderName ) ;
	}
		
}


// abstract class; NOT available in TB 2

function  classMessageSendListener( argsObject ) {
	
	log.thisLevel( log.level.debug );
	
	var object = {
		
		QueryInterface : function QueryInterface( iid )  {
			log.debug( "-" );
			if( iid.equals( Components.interfaces.nsIMsgSendListener ) ||
				iid.equals( Components.interfaces.nsISupports) ) 
			{
				return this;
			} else {
				throw Components.results.NS_NOINTERFACE;
			}
		},
		
		onGetDraftFolderURI : function onGetDraftFolderURI( folderURI ) {
			log.debug( "-" );
			if( args && args.onGetDraftFolderURI ) args.onGetDraftFolderURI( folderURI );
		},
		
		onProgress : function onProgress( msgID , progress , progressMax ) {
			log.debug( "-" );
			if( args && args.onProgress ) args.onProgress( msgID , progress , progressMax ) ;
		},
		
		onSendNotPerformed : function onSendNotPerformed( msgID , status ) {
			log.debug( "-" );
			if( args && args.onSendNotPerformed ) args.onSendNotPerformed( msgID , status ) ;
		},
		
		onStartSending : function onStartSending( msgID , msgSize ) {
			log.debug( "-" );
			if( args && args.onStartSending ) args.onStartSending( msgID , msgSize ) ;
		},
		
		onStatus : function onStatus( msgID , msg ) {
			log.debug( "-" );
			if( args && args.onStatus ) args.onStatus( msgID , msg ) ;
		},
		
		onStopSending : function onStopSending ( msgID , status , msg , returnFile ) {
			log.debug( "-" );
			if( args && args.onStopSending ) args.onStopSending ( msgID , status , msg , returnFile ) ;
		},
		
	}
	
	object.args = null;

	if( argsObject ) object.args = argsObject;
	
	return object;
	
}


//	abstract messageStream class; 
//	needs initArgs() call to override prototype methods;

function classMessageStream( ){

	//log.thisLevel( log.level.debug );

//	#########	
//	core object

	var object = {
		//	used to transfer overriden functions to this class 
		mArgs: null,
		//	
		initArgs: function initArgs( argsObject ){
			mArgs = argsObject;
		},
		getHeader: function getHeader() {
			return this.mHeader;
		},
		getSource: function getSource() {
			return this.mSource;
		},

//	carrot messageStream; implemenens interfaces::

		QueryInterface:  function QueryInterface( iid )  {
			log.debug('QueryInterface');
			if( iid.equals( Components.interfaces.nsIStreamListener ) ||
				iid.equals( Components.interfaces.nsIMsgHeaderSink ) ||
				iid.equals( Components.interfaces.nsISupports) ) 
			{
				return this;
			} else {
				throw Components.results.NS_NOINTERFACE;
				return 0;
			}
		},

//	#########	
//	nsIStreamListener implementation
//	http://www.xulplanet.com/references/xpcomref/ifaces/nsIStreamListener.html

		mFinished: false,	//	processing status flag
	    mStream: null,		//	binaty stream object
	    mSource: '',		//	byte text source of streamed message

		onStartRequest: function onStartRequest( request, context ) {
			log.debug('onStartRequest');
			this.mFinished = false;
			this.mSource = '';
			//	http://www.xulplanet.com/references/xpcomref/ifaces/nsIBinaryInputStream.html
			this.mStream = Components.classes['@mozilla.org/binaryinputstream;1']
				.createInstance(Components.interfaces.nsIBinaryInputStream);
			//	http://www.xulplanet.com/references/xpcomref/ifaces/nsIChannel.html				
			var channel = request.QueryInterface(Components.interfaces.nsIChannel);
			//	http://www.xulplanet.com/references/xpcomref/ifaces/nsIMsgMailNewsUrl.html
			channel.URI.QueryInterface(Components.interfaces.nsIMsgMailNewsUrl);
			//	http://www.xulplanet.com/references/xpcomref/ifaces/nsIMsgHeaderSink.html
			channel.URI.msgHeaderSink = this;
			//
			if( mArgs && mArgs.onStartRequest ) mArgs.onStartRequest();
		},
 
		onStopRequest:  function onStopRequest( request, context, statusCode ) {
			log.debug('onStopRequest');
			this.mFinished = true;
			this.mStream = null;
			if( mArgs && mArgs.onStopRequest ) mArgs.onStopRequest( request, context, statusCode );
		},
 
		onDataAvailable:   function onDataAvailable( request, context, inputStream, offset, count ) {
			log.debug('onDataAvailable');
			this.mStream.setInputStream( inputStream );
			this.mSource += this.mStream.readBytes( count );
			if( mArgs && mArgs.onDataAvailable ) mArgs.onDataAvailable();
		 },

//	#########	
//	nsIMsgHeaderSink implementation
//	http://www.xulplanet.com/references/xpcomref/ifaces/nsIMsgHeaderSink.html
		mHeader: null,			//	header object
		mSecurityInfo  : null,	//	native interface propery
		mSaveHdr: null,			//	XXX 
	
		onStartHeaders: function onStartHeaders(){
			log.debug('onStartHeaders');
			this.mSaveHdr = null;
			if( mArgs && mArgs.onStartHeaders ) mArgs.onStartHeaders();
		},
	
	    onEndHeaders: function onEndHeaders()  {
			log.debug('onEndHeaders');
			if( mArgs && mArgs.onEndHeaders ) mArgs.onEndHeaders();
	    },
	
	    processHeaders: function processHeaders( headerNameEnumerator, headerValueEnumerator, dontCollectAddress ) {
			log.debug('processHeaders');
			//this.onStartHeaders(); 
	      
			while( headerNameEnumerator.hasMore() ) {
				
				var header = new Object;        
				header.headerName = headerNameEnumerator.getNext();
				header.headerValue = headerValueEnumerator.getNext();
				
				var lowerCaseHeaderName = header.headerName.toLowerCase();
					
				if (lowerCaseHeaderName == "from")
					this.mHeader.author = header.headerValue;
				else if (lowerCaseHeaderName == "to")
					this.mHeader.recipients += header.headerValue + ' ';
				else if (lowerCaseHeaderName == "cc")
					this.mHeader.ccList += header.headerValue + ' ';
				else if (lowerCaseHeaderName == "subject")
					this.mHeader.subject = header.headerValue;
				else if (lowerCaseHeaderName == "reply-to")
					this.mHeader.replyTo = header.headerValue;
				else if (lowerCaseHeaderName == "message-id")
					this.mHeader.messageId = header.headerValue;
				else if (lowerCaseHeaderName == "fcc")
					this.mHeader.fcc_folder = header.headerValue;
				else if (lowerCaseHeaderName == "x-identity-key")
					this.mHeader.accountKey = header.headerValue;
				else if (lowerCaseHeaderName == "date")
					this.mHeader.date = header.headerValue;
				else if (lowerCaseHeaderName == "organization")
					this.mHeader.organization = header.headerValue;
				else if (lowerCaseHeaderName == "content-type")
					this.mHeader.contentType = header.headerValue;
	
	    	} // while we have more headers to parse
			
			if( mArgs && mArgs.processHeaders ) mArgs.processHeaders();
	
//			this.onEndHeaders();
		},
	
	    handleAttachment: function handleAttachment( contentType, url, displayName, uri, isExternalAttachment ) {
			log.debug('handleAttachment');
			if( mArgs && mArgs.handleAttachment ) mArgs.handleAttachment();
	    },
	    
	    onEndAllAttachments: function onEndAllAttachments(){
			log.debug('onEndAllAttachments');
			if( mArgs && mArgs.onEndAllAttachments ) mArgs.onEndAllAttachments();
	    },
	
	    onEndMsgDownload: function onEndMsgDownload(url) {
			log.debug('onEndMsgDownload');
			//OnMsgParsed(url);
			if( mArgs && mArgs.onEndMsgDownload ) mArgs.onEndMsgDownload();
	    },
	
	    onEndMsgHeaders: function onEndMsgHeaders(url) { 
			log.debug('onEndMsgHeaders');
			//OnMsgLoaded(url);
			if( mArgs && mArgs.onEndMsgHeaders ) mArgs.onEndMsgHeaders();
	    },
	
	    onMsgHasRemoteContent: function onMsgHasRemoteContent(aMsgHdr) {
			log.debug('onMsgHasRemoteContent');
			if( mArgs && mArgs.onMsgHasRemoteContent ) mArgs.onMsgHasRemoteContent();
	    },
		    
	    getSecurityInfo: function getSecurityInfo() {
			log.debug('getSecurityInfo');
			return this.mSecurityInfo;
	    },
	    
	    setSecurityInfo: function setSecurityInfo( aSecurityInfo )  {
			log.debug('setSecurityInfo');
			this.mSecurityInfo = aSecurityInfo;
	    },
	
	    getDummyMsgHeader: function getDummyMsgHeader()   {
			log.debug('getDummyMsgHeader');
			if ( ! this.mHeader ){
				this.mHeader = new nsDummyMsgHeader();
			}
			return this.mHeader;
	    }
	};
	
	object.getDummyMsgHeader();
	
	return object;

}

//	message heager template object

function nsDummyMsgHeader() {
}

nsDummyMsgHeader.prototype = {
  mProperties : new Array,
  getStringProperty : function(property) {return this.mProperties[property];},
  setStringProperty : function(property, val) {this.mProperties[property] = val;},
  messageSize : 0,
  author : null,
  recipients : null,
  ccList : null,
  subject : null,
  messageId : null,
  accountKey : null,
  folder : null,
  date : null,
  fcc_folder : null,
  organization : null,
  contentType: null,
}

/*

var overRide = {
	
	addressingWidgetOverlay: {
		
awAppendNewRow: 

function awAppendNewRow(setFocus)
{
  var listbox = document.getElementById('addressingWidget');
  var listitem1 = awGetListItem(1);

  if ( listbox && listitem1 )
  {
    var lastRecipientType = awGetPopupElement(top.MAX_RECIPIENTS).selectedItem.getAttribute("value");

    var nextDummy = awGetNextDummyRow();
    var newNode = listitem1.cloneNode(true);
  
    if (nextDummy)
      listbox.replaceChild(newNode, nextDummy);
    else
      listbox.appendChild(newNode);

    top.MAX_RECIPIENTS++;

    var input = newNode.getElementsByTagName(awInputElementName());
  
    if ( input && input.length == 1 )
    {
      input[0].setAttribute("value", "");
      input[0].setAttribute("id", "addressCol2#" + top.MAX_RECIPIENTS);
    
      //this copies the autocomplete sessions list from recipient#1 
      input[0].syncSessions(document.getElementById('addressCol2#1'));

  	  // also clone the showCommentColumn setting
  	  //
  	  input[0].showCommentColumn = 
	      document.getElementById("addressCol2#1").showCommentColumn;

      // We always clone the first row.  The problem is that the first row
      // could be focused.  When we clone that row, we end up with a cloned
      // XUL textbox that has a focused attribute set.  Therefore we think
      // we're focused and don't properly refocus.  The best solution to this
      // would be to clone a template row that didn't really have any presentation,
      // rather than using the real visible first row of the listbox.
      //
      // For now we'll just put in a hack that ensures the focused attribute
      // is never copied when the node is cloned.
      if (input[0].getAttribute('focused') != '')
        input[0].removeAttribute('focused');
    }
    
    var select = newNode.getElementsByTagName(awSelectElementName());
 
    if ( select && select.length == 1 )
    {
      // It only makes sense to clone some field types; others 
      // should not be cloned, since it just makes the user have
      // to go to the trouble of selecting something else. In such
      // cases let's default to 'To' (a reasonable default since
      // we already default to 'To' on the first dummy field of
      // a new message).
      switch (lastRecipientType)
      {
        case  "addr_reply":
        case  "addr_other":
          select[0].selectedIndex = awGetSelectItemIndex("addr_to");
          break;       
        case "addr_followup":
          select[0].selectedIndex = awGetSelectItemIndex("addr_newsgroups");
          break;
        default:
        // e.g. "addr_to","addr_cc","addr_bcc","addr_newsgroups":

//	modify that recipinet type swotches from "TO" to "CC" after first node
// XXX - mod start
		if ( ( top.MAX_RECIPIENTS == 2 ) && (lastRecipientType == "addr_to") ){
          select[0].selectedIndex = awGetSelectItemIndex("addr_cc");
		}
		else{
          select[0].selectedIndex = awGetSelectItemIndex(lastRecipientType);
		}
//	XXX - mod end
        	
      }
    
      select[0].setAttribute("id", "addressCol1#" + top.MAX_RECIPIENTS);
      if (input)
        _awSetAutoComplete(select[0], input[0]);
    }

    // focus on new input widget
    if (setFocus && input[0] )
      awSetFocus(top.MAX_RECIPIENTS, input[0]);
  }

},
		
	},	//	addressingWidgetOverlay

	MsgComposeCommands: {

AddAttachment: 

function AddAttachment(attachment)
{
  if (attachment && attachment.url)
  {
    var bucket = document.getElementById("attachmentBucket");

    if (!attachment.name)
      attachment.name = gMsgCompose.AttachmentPrettyName(attachment.url, null);

    // for security reasons, don't allow *-message:// uris to leak out
    // we don't want to reveal the .slt path (for mailbox://), or the username or hostname
    var messagePrefix = /^mailbox-message:|^imap-message:|^news-message:/i;
    if (messagePrefix.test(attachment.name)) {

//	XXX modification
	      attachment.name = getAttachmentMessageNameFromUri( attachment.url );
    }
    else {
      // for security reasons, don't allow mail protocol uris to leak out
      // we don't want to reveal the .slt path (for mailbox://), or the username or hostname
      var mailProtocol = /^mailbox:|^imap:|^s?news:/i;
      if (mailProtocol.test(attachment.name))

//	XXX modification
	      attachment.name = getAttachmentMessageNameFromUri( attachment.url );
    }

    var item = bucket.appendItem(attachment.name, "");
    item.attachment = attachment;   //full attachment object stored here
    try {
      item.setAttribute("tooltiptext", decodeURI(attachment.url));
    } catch(e) {
      item.setAttribute("tooltiptext", attachment.url);
    }
    item.setAttribute("class", "listitem-iconic");

    var url = gIOService.newURI(attachment.url, null, null);

    try 
    {
      url = url.QueryInterface( Components.interfaces.nsIURL );
    }
    catch (ex)
    {
      url = null;
    }

    
    // for local file urls, we are better off using the full file url because moz-icon will
    // actually resolve the file url and get the right icon from the file url. All other urls, we should
    // try to extract the file name from them. This fixes issues were an icon wasn't showing up if you dragged
    // a web url that had a query or reference string after the file name and for mailnews urls were the filename
    // is hidden in the url as a &filename= part.
    if (url && url.fileName && !url.schemeIs("file")) 
      item.setAttribute("image", "moz-icon://" + url.fileName);
    else      
      item.setAttribute("image", "moz-icon:" + attachment.url);

//	XXX modification
  updateAttachmentSizeDisplay( window );

  }
},

RemoveAllAttachments:

function RemoveAllAttachments()
{
  var child;
  var bucket = document.getElementById("attachmentBucket");
  while (bucket.getRowCount())
  {
    child = bucket.removeItemAt(bucket.getRowCount() - 1);
    // Let's release the attachment object hold by the node else it won't go away until the window is destroyed
    child.attachment = null;
  }
  
  ChangeAttachmentBucketVisibility(true);
  
//	XXX modification
  updateAttachmentSizeDisplay( window );
},


RemoveSelectedAttachment:

function RemoveSelectedAttachment()
{
  var child;
  var bucket = document.getElementById("attachmentBucket");
  if (bucket.selectedItems.length > 0) {
    for (var index = bucket.selectedCount - 1; index >= 0; index-- )
    {
      child = bucket.removeItemAt(bucket.getIndexOfItem(bucket.getSelectedItem(index)));
      // Let's release the attachment object held by the node else it won't go away until the window is destroyed
      child.attachment = null;
    }
    gContentChanged = true;
  }

  if (!MessageHasAttachments())
    ChangeAttachmentBucketVisibility(true);

//	XXX modification
  updateAttachmentSizeDisplay( window );
},


ChangeAttachmentBucketVisibility:

function ChangeAttachmentBucketVisibility( flag ){
	
},
		
	},	//	MsgComposeCommands
}

*/

//	#####################	
//	#####################	
//	#####################	


function classComposeOverRide( window ){

	var document = window.document;
	var top = window.top;

	this.init = function init(){
		//	addressingWidgetOverlay.js::
		window.awAppendNewRow = awAppendNewRow;
		//	MsgComposeCommands.js::
		window.AddAttachment = AddAttachment;
		window.RemoveAllAttachments = RemoveAllAttachments;
		window.RemoveSelectedAttachment = RemoveSelectedAttachment;
		window.ChangeAttachmentBucketVisibility = ChangeAttachmentBucketVisibility;	
	}

//	addressingWidgetOverlay.js::

function awAppendNewRow(setFocus)
{
  var listbox = document.getElementById('addressingWidget');
  var listitem1 = window.awGetListItem(1);

  if ( listbox && listitem1 )
  {
    var lastRecipientType = window.awGetPopupElement(top.MAX_RECIPIENTS).selectedItem.getAttribute("value");

    var nextDummy = window.awGetNextDummyRow();
    var newNode = listitem1.cloneNode(true);
  
    if (nextDummy)
      listbox.replaceChild(newNode, nextDummy);
    else
      listbox.appendChild(newNode);

    top.MAX_RECIPIENTS++;

    var input = newNode.getElementsByTagName(window.awInputElementName());
  
    if ( input && input.length == 1 )
    {
      input[0].setAttribute("value", "");
      input[0].setAttribute("id", "addressCol2#" + top.MAX_RECIPIENTS);
    
      //this copies the autocomplete sessions list from recipient#1 
      input[0].syncSessions(document.getElementById('addressCol2#1'));

  	  // also clone the showCommentColumn setting
  	  //
  	  input[0].showCommentColumn = 
	      document.getElementById("addressCol2#1").showCommentColumn;

      // We always clone the first row.  The problem is that the first row
      // could be focused.  When we clone that row, we end up with a cloned
      // XUL textbox that has a focused attribute set.  Therefore we think
      // we're focused and don't properly refocus.  The best solution to this
      // would be to clone a template row that didn't really have any presentation,
      // rather than using the real visible first row of the listbox.
      //
      // For now we'll just put in a hack that ensures the focused attribute
      // is never copied when the node is cloned.
      if (input[0].getAttribute('focused') != '')
        input[0].removeAttribute('focused');
    }
    
    var select = newNode.getElementsByTagName(window.awSelectElementName());
 
    if ( select && select.length == 1 )
    {
      // It only makes sense to clone some field types; others 
      // should not be cloned, since it just makes the user have
      // to go to the trouble of selecting something else. In such
      // cases let's default to 'To' (a reasonable default since
      // we already default to 'To' on the first dummy field of
      // a new message).
      switch (lastRecipientType)
      {
        case  "addr_reply":
        case  "addr_other":
          select[0].selectedIndex = window.awGetSelectItemIndex("addr_to");
          break;       
        case "addr_followup":
          select[0].selectedIndex = window.awGetSelectItemIndex("addr_newsgroups");
          break;
        default:
        // e.g. "addr_to","addr_cc","addr_bcc","addr_newsgroups":

//	modify that recipinet type swotches from "TO" to "CC" after first node
// XXX - mod start
		if ( ( top.MAX_RECIPIENTS == 2 ) && (lastRecipientType == "addr_to") ){
          select[0].selectedIndex = window.awGetSelectItemIndex("addr_cc");
		}
		else{
          select[0].selectedIndex = window.awGetSelectItemIndex(lastRecipientType);
		}
//	XXX - mod end
        	
      }
    
      select[0].setAttribute("id", "addressCol1#" + top.MAX_RECIPIENTS);
      if (input)
        window._awSetAutoComplete(select[0], input[0]);
    }

    // focus on new input widget
    if (setFocus && input[0] )
      window.awSetFocus(top.MAX_RECIPIENTS, input[0]);
  }

}


//	MsgComposeCommands.js::

function AddAttachment(attachment)
{
  if (attachment && attachment.url)
  {
    var bucket = document.getElementById("attachmentBucket");

    if (!attachment.name)
      attachment.name = window.gMsgCompose.AttachmentPrettyName(attachment.url, null);

    // for security reasons, don't allow *-message:// uris to leak out
    // we don't want to reveal the .slt path (for mailbox://), or the username or hostname
    var messagePrefix = /^mailbox-message:|^imap-message:|^news-message:/i;
    if (messagePrefix.test(attachment.name)) {

//	XXX modification
	      attachment.name = getAttachmentMessageNameFromUri( attachment.url );
    }
    else {
      // for security reasons, don't allow mail protocol uris to leak out
      // we don't want to reveal the .slt path (for mailbox://), or the username or hostname
      var mailProtocol = /^mailbox:|^imap:|^s?news:/i;
      if (mailProtocol.test(attachment.name))

//	XXX modification
	      attachment.name = getAttachmentMessageNameFromUri( attachment.url );
    }

    var item = bucket.appendItem(attachment.name, "");
    item.attachment = attachment;   //full attachment object stored here
    try {
      item.setAttribute("tooltiptext", decodeURI(attachment.url));
    } catch(e) {
      item.setAttribute("tooltiptext", attachment.url);
    }
    item.setAttribute("class", "listitem-iconic");

    var url = window.gIOService.newURI(attachment.url, null, null);

    try 
    {
      url = url.QueryInterface( Components.interfaces.nsIURL );
    }
    catch (ex)
    {
      url = null;
    }

    
    // for local file urls, we are better off using the full file url because moz-icon will
    // actually resolve the file url and get the right icon from the file url. All other urls, we should
    // try to extract the file name from them. This fixes issues were an icon wasn't showing up if you dragged
    // a web url that had a query or reference string after the file name and for mailnews urls were the filename
    // is hidden in the url as a &filename= part.
    if (url && url.fileName && !url.schemeIs("file")) 
      item.setAttribute("image", "moz-icon://" + url.fileName);
    else      
      item.setAttribute("image", "moz-icon:" + attachment.url);

//	XXX modification
  updateAttachmentSizeDisplay( window );

  }
}


//	MsgComposeCommands.js::

function RemoveAllAttachments()
{
  var child;
  var bucket = document.getElementById("attachmentBucket");
  while (bucket.getRowCount())
  {
    child = bucket.removeItemAt(bucket.getRowCount() - 1);
    // Let's release the attachment object hold by the node else it won't go away until the window is destroyed
    child.attachment = null;
  }
  
  ChangeAttachmentBucketVisibility(true);
  
//	XXX modification
  updateAttachmentSizeDisplay( window );
}


//	MsgComposeCommands.js::

function RemoveSelectedAttachment()
{
  var child;
  var bucket = document.getElementById("attachmentBucket");
  if (bucket.selectedItems.length > 0) {
    for (var index = bucket.selectedCount - 1; index >= 0; index-- )
    {
      child = bucket.removeItemAt(bucket.getIndexOfItem(bucket.getSelectedItem(index)));
      // Let's release the attachment object held by the node else it won't go away until the window is destroyed
      child.attachment = null;
    }
    window.gContentChanged = true;
  }

  if (!MessageHasAttachments())
    ChangeAttachmentBucketVisibility(true);

//	XXX modification
  updateAttachmentSizeDisplay( window );
}


//	MsgComposeCommands.js::

function ChangeAttachmentBucketVisibility( flag ){
	
}
	
}

	