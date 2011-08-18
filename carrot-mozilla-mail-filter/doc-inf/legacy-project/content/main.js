// for mozilla::
var msgFolder;

// prompter service
var gPrompt = Components.classes["@mozilla.org/embedcomp/prompt-service;1"]
	.getService(Components.interfaces.nsIPromptService);

var _emailAddress = '([\\w\\.\\-\\_]+\\@[\\w\.\\-\\_]+)';
var _emailTerm = '(' + _emailAddress + ')|' +
	'([^<>",@\\s]*\\s*<' + _emailAddress + '>)|' +
	'("[^<>"\\\\]*"\\s*<' + _emailAddress + '>)'

var regexpCache = {
	emailAddress	: new RegExp (_emailAddress, "g"),
	emailTerm		: new RegExp (_emailTerm, "g"),
	parenthesisText	: new RegExp ("", "g"),
	addressBrackets	: new RegExp ("[\\[\\]\\{\\}\\'\\<\\>" + '\\"' + "]", "g"),
	quotePrintable	: new RegExp ("\\=\\?.*\\?\\=", "g"),
	swapCommaSep	: new RegExp ("([\\w\\-\\_\\s]*\\,)([\\w\\-\\_\\s]*)", "g"),
	charComma		: new RegExp ("\\,", "g"),
	charDblQuote	: new RegExp ('\\"', "g"),
	multiBlanks		: new RegExp ("\\s+", "g")
};

/* keep in sync with nsMsgFolderFlags.h */
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

// preferences
var carrotPrefs = Components
	.classes["@mozilla.org/preferences-service;1"]
	.getService(Components.interfaces.nsIPrefBranch);

var gAccountsFolderURI = carrotPrefs.getCharPref("carrot_garden.accountsFolderURI"); 
var gAccountsFolderMyResponse = carrotPrefs.getCharPref("carrot_garden.accountsFolderMyResponse"); 
var gAccountsContracts = carrotPrefs.getCharPref("carrot_garden.accountsFolderList").split(",");
var gAccountsVendorDomainList = carrotPrefs.getCharPref("carrot_garden.accountsVendorDomainList").split(",");

var gHomeDomain = carrotPrefs.getCharPref("carrot_garden.home.domain");
var gHomeDomainList = carrotPrefs.getCharPref("carrot_garden.home.domainList").split(",");
var gHomeEmailPrefix  = carrotPrefs.getCharPref("carrot_garden.home.emailPrefix");
var gHomeEmailList  = carrotPrefs.getCharPref("carrot_garden.home.emailList").split(",");

var gManagersFolderURI = carrotPrefs.getCharPref("carrot_garden.managersFolderURI"); 
var gManagersFolderMyResponse = carrotPrefs.getCharPref("carrot_garden.managersFolderMyResponse");

var gVendorsFolderURI = carrotPrefs.getCharPref("carrot_garden.vendorsFolderURI"); 
var gVendorsFolderMyResponse = carrotPrefs.getCharPref("carrot_garden.vendorsFolderMyResponse");

var gListsURI = carrotPrefs.getCharPref("carrot_garden.listsFolderURI");

var gAbNotJunkURI = carrotPrefs.getCharPref("carrot_garden.ab.not-junk.uri");


// used for "# section=Account: position=1000"
var XXXgFilterSectionVar = "section"; 
var XXXgFilterPositionVar = "position";
var XXXgFilterSectionVarBase=1000;
var XXXgFilterSectionVarStep=20;

//section names
var gFilterAccountPrefix = "Account:";
var gFilterListPrefix = "EventsNews:";
var gFilterManagerPrefix = "Manager:";

//	backup filter folder name
gBackupDirName = "backup";



// filter term parameters
//
// http://www.xulplanet.com/references/xpcomref/ifaces/nsMsgSearchAttrib.html
var gAttribSender = Components.interfaces.nsMsgSearchAttrib.Sender;
var gAttribToOrCC = Components.interfaces.nsMsgSearchAttrib.ToOrCC;
var gAttribOtherHeader = Components.interfaces.nsMsgSearchAttrib.OtherHeader
var gAttribSubject = Components.interfaces.nsMsgSearchAttrib.Subject
//
// http://www.xulplanet.com/references/xpcomref/ifaces/nsMsgSearchOp.html
var gOpContains      = Components.interfaces.nsMsgSearchOp.Contains;
var gOpDoesntContain = Components.interfaces.nsMsgSearchOp.DoesntContain;
//
// http://www.xulplanet.com/references/xpcomref/ifaces/nsMsgSearchBooleanOp.html
var gBooleanOR  = Components.interfaces.nsMsgSearchBooleanOp.BooleanOR;
var gBooleanAND = Components.interfaces.nsMsgSearchBooleanOp.BooleanAND;

// filter action parameters
//
// http://www.xulplanet.com/references/xpcomref/ifaces/nsMsgFilterAction.html
var gActMoveToFolder = Components.interfaces.nsMsgFilterAction.MoveToFolder;


// global parameters collection about folder, person
var gNewFolderInfo = { 
	parentName: "Accounts", 
	parentURI: "mailbox://nobody@Local%20Folders/Accounts", 
	folderName: "Company Inc @domain.com", 
	company: "Company", 
	domain: "domain.com", 
	person: "James Doe", 
	email: "j.doe@domain.com", 
	project: "Project", 
	valid: false 
	};
//

// currently all features are limited to "server = local folders" only
function getLocalFolders()
{
	var amService = 
    		Components.classes["@mozilla.org/messenger/account-manager;1"]
			.getService(Components.interfaces.nsIMsgAccountManager);
	var lfServer= amService.localFoldersServer;
	var fldrLocal = lfServer.rootFolder;
	return fldrLocal;
}


//	##################


// global containers
var gFilterItems = new Array(); // ( array index ([0]section, [1]name, [2] filter index ))
var gFilterSections = new Array(); // ( array index ([0]section, [1]position, [2] filter index ))


function XXXsortFilterList( msgFilterList ) {
	
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
				myResult.push( msgFilterList.getFilterAt ( gFilterSections[i][2] ) ) 

				getFilterItems ( msgFilterList, gFilterSections[i][0]  ); // mySection

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
							myResult.push( msgFilterList.getFilterAt ( gFilterItems[j][2] ) ) //	store in sorted order
							break;	//	avoid duplicates
						}
					}
				}

			}
		}
	}

	myResult.reverse();

	//dump2 ( 'myResult ' + myResult.length  );
	//dump2 ( 'msgFilterList ' + msgFilterList.filterCount  );

	if ( myResult.length != msgFilterList.filterCount ) { 
		throw "can not sort - counts do not match" ;
	}

	for ( var n = 0; n < msgFilterList.filterCount; n++ ) {
		msgFilterList.setFilterAt ( n, myResult.pop() );
	}

	// msgFilterList.saveToDefaultFile (); 

}

function XXXgetFilterItems( msgFilterList, mySection )
{
	
	gFilterItems = new Array();
	
	var myFilter;
	var myArray;	
	
	for( var i = 0; i < msgFilterList.filterCount; i++ )
	{

		myFilter = msgFilterList.getFilterAt ( i );
	
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

function dumpFilterSections ()
{
	for ( var n = 0; n < gFilterSections.length; n++ ) 
	{
		dump2 ( gFilterSections[n][0] + " " + gFilterSections[n][1] + " " + gFilterSections[n][2] + " " + " " ) ;
	}
}

function XXXsetSectionHeaders ( msgFilterList )
{
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
		myFilter = msgFilterList.getFilterAt ( gFilterSections[n][2] ); // by filter index
		myFilter.enabled = false;
		// todo - set safe actions, terms, etc.
		myFilter.filterName = 
			"# " + gFilterSectionVar + 
			"=" + gFilterSections[n][0] + 
			" " + gFilterPositionVar + 
			"=" + gFilterSections[n][3];	// set new position
	}
	
	// msgFilterList.saveToDefaultFile(); 
}

function XXXgetFilterSections( msgFilterList ) {

	gFilterSections = new Array();

	var myFilter;
	var myArray;
	var mySection;
	var myPosition;

	var foundSections = false;

//	var n = 0;

	for ( var i = 0; i < msgFilterList.filterCount; i++ )
	{
		myFilter = msgFilterList.getFilterAt ( i );

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

	for( var i = 0; i < msgFilterList.filterCount; i++ ) {

		myFilter = msgFilterList.getFilterAt ( i );

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


function XXXcarrotFilterSort ( filterList )
{
	try {	
		
		getFilterSections( filterList ); 
		setSectionHeaders ( filterList ); 
		sortFilterList ( filterList );
		
		filterList.saveToDefaultFile();
		
	} catch( e ) {
		var message =
			"carrot_garden Error: \n"  
			+ e + "\n"
			+ "Please edit filters and try again."
		alert( message );
		return null;
	}
	return filterList ;
}

function emailParser( emailAddress, displayName )
{
    //var emailAddress = document.popupNode.getAttribute("emailAddress");
	//var displayName  = document.popupNode.getAttribute("displayName");

	this.emailAddress = emailAddress; 

	this.prefix = emailAddress.split(/\@/)[0];
		
	this.domain = emailAddress.split(/\@/)[1];

	var temp =  this.domain.split(/\./);

	this.tld = temp.pop();

	this.company =  temp.join(" ");

	this.displayName = displayName;

	this.firstName = displayName.split(/\s/)[0];

	this.lastName = displayName.split(/\s/)[displayName.length];

	return { 
		displayName: 	this.displayName, 
		firstName: 		this.firstName, 
		lastName: 		this.lastName, 
		emailAddress : 	this.emailAddress,
		prefix: 		this.prefix, 
		domain: 		this.domain, 
		company: 		this.company,
		tld: 			this.tld};
}


function personFolderTemplate( person )
{
	var temp = person.replace(/[^A-Za-z0-9_\-\s]/g,""); // remove invalid chars 
	temp = temp.replace(/(\s+)/g," ");
	temp = trim ( capitalLetters ( temp ) );

	return temp;
}

function accountFolderTemplate( company, domain )
{
	company = patternCompany( company ).forEdit;	
	domain  = patternDomain( domain ).forEdit;	

	return company + ' @' + domain;
}

function accountFilterTemplate( filterPrefix, folderName )
{
	return filterPrefix + " " + folderName;
}

function patternMailList( domain )
{
	var temp = patternDomain( domain ).forEdit;
	
	this.forEdit = temp;
	this.forFilter = temp + "@" + gHomeDomain.toLowerCase();
	
	return { forEdit: this.forEdit, forFilter: this.forFilter };
}

function patternXtag ( domain )
{
	this.forEdit = domain.replace(/\@/g,"");
	this.forFilter = "@" + domain;
	
	return { forEdit: this.forEdit, forFilter: this.forFilter };
}

function patternDomain ( domain )
{
	var temp = domain.replace(/[^\w\_\-\.]/g,""); // remove invalid chars
	temp = temp.toLowerCase();
	
	this.forEdit = temp;
	this.forFilter = "@" + temp;
	
	return { forEdit: this.forEdit, forFilter: this.forFilter };
}

function patternCompany ( company )
{
	var temp = company.replace(/[^\w\_\-\s]/g,""); // remove invalid chars 
	temp = temp.replace(/(\s+)/g," "); // remove mutiple spaces
	temp = trim ( capitalLetters ( temp ) ); // trim & cap
	
	this.forEdit = temp;
	this.forFilter = temp;
	
	return { forEdit: this.forEdit, forFilter: this.forFilter };
}




function existsFolder( parentFolder, folderName )
{
	return parentFolder.containsChildNamed ( folderName );
}


function existsFolderFilter( folder )
{
	var parent = getLocalFolders();

	var msgFilterList = parent.getFilterList ( null );

	var myFilter; 

	var myTerms;//   = Components.classes["@mozilla.org/supports-array;1"].createInstance(Components.interfaces.nsISupportsArray); 

	var myActions;// = Components.classes["@mozilla.org/supports-array;1"].createInstance(Components.interfaces.nsISupportsArray);

	for ( var k = 0; k < msgFilterList.filterCount; k++ )
	{

		myFilter = msgFilterList.getFilterAt ( k );

		//dump2( k + "\n" );

		myTerms   = myFilter.searchTerms;
		myActions =	myFilter.actionList;

		for ( var index = 0; index < myActions.getRowCount; index++) {
		//dump2( myActions.getItemAtIndex(index).strValue + "\n" );
		}

	}

}


// myFilter = parent object to which the term will be added
// attrib = message attributre, such as "To:" which will be compared
// str = string value to wchich the attrib will be compared to
// op = type of comparison operation
// booleanAnd = how to glue this term to others
// http://www.xulplanet.com/references/xpcomref/ifaces/nsIMsgSearchTerm.html
//
function appendFilterTerm ( filter, attrib, str, op, booleanAnd )
{
	var myTerm = filter.createTerm ( ); // nsIMsgFilter http://www.xulplanet.com/references/xpcomref/ifaces/nsIMsgFilter.html

	myTerm.attrib = attrib; // "ToOrCC"
	myTerm.booleanAnd  = booleanAnd; // "true"
	myTerm.op = op; // "Contains"

	var termValue = myTerm.value;
	termValue.attrib = myTerm.attrib;
	termValue.str = str; // "@carrot.com"
   	myTerm.value = termValue;

	filter.appendTerm ( myTerm );
}

// filter = parent object to which the action will be added
// type = the kind of action will be applied to the target folder
// uri = target folder address
// http://www.xulplanet.com/references/xpcomref/ifaces/nsIMsgRuleAction.html
//
function appendFilterAction ( filter, type, uri )
{
	var myAction = filter.createAction(); // nsIMsgFilter http://www.xulplanet.com/references/xpcomref/ifaces/nsIMsgFilter.html

	myAction.type = type; // "MoveToFolder"
	myAction.targetFolderUri = uri; // "fldrMain.URI + "/" + encodeURIComponent ( myFolderName )"

	filter.appendAction ( myAction );
}


function searchAction( type, uri ) 
{
	this.type = type;
	this.uri = uri;
	
	return  {type: this.type, uri: this.uri};
}

function searchTerm( attrib, str, op, booleanAnd ) 
{
	this.attrib=attrib;
	this.str=str;
	this.op=op;
	this.booleanAnd=booleanAnd;
	
	return { attrib: this.attrib, str: this.str, op: this.op, booleanAnd: this.booleanAnd };
}

function createAccountFolderFilter ( gNewFolderInfo )
{
	var folderName; var filterName; var domain;
	var folder; var filter;
	var filterTerms = Array(); var filterActions = Array();

	var folderName = accountFolderTemplate( gNewFolderInfo.company, gNewFolderInfo.domain );
	var filterName = accountFilterTemplate( gFilterAccountPrefix, folderName );

	// base account folder
	try {
		var folder = carrotCreateFolder(gNewFolderInfo.parentURI, folderName);		
	}
	catch(ex){
		alert("nikiotova-filter Error: \n"
			+ "\n"
			+ ex + "\n"
			+ "\n"
			+ "Folder not created. Action Canceled.");
		return { folder: null, filter: null };		
	};
	// base account filter 
	try {

		var domain = patternDomain(gNewFolderInfo.domain).forFilter;
		var maillist = patternMailList(domain).forFilter;
		
		filterTerms.push( searchTerm ( gAttribSender, domain, gOpContains, gBooleanOR ));
		filterTerms.push( searchTerm ( gAttribToOrCC, domain, gOpContains, gBooleanOR ));
		filterTerms.push( searchTerm ( gAttribToOrCC, maillist, gOpContains, gBooleanOR ));
		//filterTerms.push( searchTerm ( 
		 //gAttribOtherHeader, patternXtag(gNewFolderInfo.domain).forFilter, gOpContains, gBooleanOR ));

		filterActions.push( searchAction( gActMoveToFolder, convertToUri(folder.URI) ) );
		
		filter = createFilter(folder, filterName, filterTerms, filterActions);		
	}
	catch(ex){
		alert("nikiotova-filter Error: \n" 
			+ "\n"
			+ ex + "\n"
			+ "\n"
			+ "Filter not created. Action Canceled");
			
		return { folder: null, filter: null };		
	};
	
	return { folder: folder, filter: filter };
}

function createFilter ( folder, filterName, filterTerms, filterActions)
{
	var filterList = folder.getFilterList( null );	
	
	if ( filterList.getFilterNamed ( filterName ) ) {
		alert ( 'createFilter: \n\n filter exists, will not re-create \n\n' + filterName );
		return filterList.getFilterNamed ( filterName )
	}
	
	var filter = filterList.createFilter ( filterName ); 
	
	for ( var k = 0; k < filterTerms.length; k++ )	{
		appendFilterTerm ( filter, filterTerms[k].attrib, filterTerms[k].str , filterTerms[k].op, filterTerms[k].booleanAnd );
	}

	for ( var k = 0; k < filterActions.length; k++ )	{
		appendFilterAction ( filter, filterActions[k].type, filterActions[k].uri );
	}
	
	filter.enabled = true;
	filter.temporary = false;
	filter.filterDesc = "carrot_garden";
	
	filterList.insertFilterAt ( 0, filter );
	filterList.saveToDefaultFile ( );
	
	return filter;
}

function carrotMsgFolderFromUri (uri) // borrowed from mozilla::widgetglue.js
{
	var resource = carrotResourceFromUri(uri);
	
	return resource.QueryInterface(Components.interfaces.nsIMsgFolder);
}

function carrotResourceFromUri(uri) // borrowed from mozilla::widgetglue.js
{
    var RDF = Components.classes['@mozilla.org/rdf/rdf-service;1'].getService();
    RDF = RDF.QueryInterface(Components.interfaces.nsIRDFService);

    var resource = RDF.GetResource(uri);

    return resource;
}



// http://www.xulplanet.com/references/xpcomref/ifaces/nsIMsgFolder.html
//


function carrotCreateFolder( parentURI, folderName )
{

	folderURI = parentURI + "/" + folderName;
	dump2 ("carrotCreateFolder: " + folderURI );

	var parentFolder = carrotMsgFolderFromUri ( parentURI );
	dump2 ("#1" );
	
//	SelectFolder(parentURI);
//	dump2 ("#2" );

	if ( existsFolder ( parentFolder, folderName  ) ){
		alert ( "carrotCreateFolder: folder already exists\n\n" + decodeURI ( folderURI ) );		
		return carrotMsgFolderFromUri ( folderURI );
	}
	
	//	from mozilla::mailCommands.js
	NewFolder( folderName, parentURI)
	dump2 ("#3" );
		
	var folder = carrotMsgFolderFromUri ( folderURI );
	dump2 ("#4 " );
	
	if ( ! folder ) {
		alert ("carrotCreateFolder: \n\n could not create\n\n" + folderURI );
		return null;
	}
	
	parentFolder.NotifyItemAdded (folder);
	dump2 ("#5");
	
//	parentFolder.updateFolder ( null );

//	XXX this causes ex		
//	SelectFolder(folder.URI);
//	dump2 ("carrotCreateFolder: " + folder.name );
		
	return folder;		
}


function carrotCreateVirtualFolder( 
	folderName, parentFolder, searchFolderURIs, searchTerms, searchOlnine ) {

	dump2 ("carrotCreateVirtualFolder: " + parentFolder.name + "/" + folderName );

	// from mozilla:: commandglue.js :: 
	// function  CreateVirtualFolder(newName, parentFolder, searchFolderURIs, searchTerms, searchOnline)

	CreateVirtualFolder( folderName, parentFolder, searchFolderURIs, searchTerms, searchOlnine );
	
}



function cmdNewAccountMember(){
	
	//existsAccountFolder

	var emailAddress = document.popupNode.getAttribute("emailAddress");
	var displayName  = document.popupNode.getAttribute("displayName");
	
	var parser = emailParser ( emailAddress, displayName ) ;

	gNewFolderInfo.parentURI = gAccountsFolderURI;
	gNewFolderInfo.company = parser.company;
	gNewFolderInfo.domain = parser.domain;
	gNewFolderInfo.person = parser.displayName;
	gNewFolderInfo.email = parser.emailAddress;
	gNewFolderInfo.project = parser.company;


	var parentFolder = carrotMsgFolderFromUri(gAccountsFolderURI);
	
	var subfolders = carrotGetSubFolders (parentFolder, 0);

	var found = false;
	
	for ( var k = 0; k < subfolders.length; k++){
		var temp = subfolders[k].name;
		 temp = temp.split("@");
		 temp = temp[1];
		if ( ( temp != undefined ) && ( temp.toLowerCase() == gNewFolderInfo.domain.toLowerCase() ) ) {
			found = true;
			var accountFolder = subfolders[k];
			break; 			
		}
	}
	
	if ( ! found ){
		alert("could not find parent account folder for this member");
		return;
	}

	//alert (temp+ " --- " + targetFolder.name)

	gNewFolderInfo.folderName =  accountFolder.name;
	 
	gNewFolderInfo.valid = false;

	window.open("chrome://carrot_garden/content/formNewAccountMemberFolder.xul",
		"carrot_garden", "chrome,modal,dialog,centerscreen,width=350,height=150");

	if ( gNewFolderInfo.valid ) {
		
		memberSfCreate( accountFolder, gNewFolderInfo.person, gNewFolderInfo.email )
		
		//alert ("Done with new Account Memebr.");
	
	}
}

function memberSfCreate( parentFolder, personName, personEmail ) {

	var folderName = trim ( personName + " " + personEmail );

	if( existsFolder( parentFolder, folderName )){
		//alert("member folder for this account already exists. \n \n" +
		//	parentFolder.name + "/" + folderName + "\n \n action canceled "
		//	);
		return;
	}
	
	var searchArray = Array (
		Array ( gAttribSender, personEmail, gOpContains, gBooleanOR ),
		Array ( gAttribToOrCC, personEmail, gOpContains, gBooleanOR )
	);
	
	createSfForParent ( parentFolder, folderName, searchArray );
}

	
function createSfForParent ( parentFolder, folderName, fT )
{
	// new search terms
	var obj = Components.classes["@mozilla.org/supports-array;1"]
			.createInstance(Components.interfaces.nsISupportsArray);
	var k;

	var searchFolderURIs = convertToUri(parentFolder.URI);

	for ( k = 0; k < fT.length; k++ ){
//  	appendSearchTerm ( ..., attrib,   str,      op,       booleanAnd )
		appendSearchTerm ( obj, fT[k][0], fT[k][1], fT[k][2], fT[k][3] );
	}

	carrotCreateVirtualFolder( folderName, parentFolder, searchFolderURIs, obj, false );
}


		
function appendSearchTerm ( collection, attrib, str, op, booleanAnd )
{
	//	new seach element - part of terms colletion	
	var searchElement = Components.classes["@mozilla.org/messenger/searchTerm;1"]
		.createInstance(Components.interfaces.nsIMsgSearchTerm);

		searchElement.arbitraryHeader = "";
		searchElement.attrib = attrib;
		searchElement.booleanAnd = booleanAnd;
		searchElement.op = op;
			
	// new value object - part of term element
	var v = searchElement.value
    	.QueryInterface(Components.interfaces.nsIMsgSearchValue);
		    v.status    = str; // 1 = "Read";
		    v.str    = str; // "@carrot.com";
		    v.attrib = searchElement.attrib;
		searchElement.value = v;

	//	collection must be of nsISupportsArray type
	collection.AppendElement(searchElement); 
}

function appendSearchTerm2 ( collection, attrib, str, op, booleanAnd, beginsGrouping, endsGrouping )
{
	//	new seach element - part of terms colletion	
	var searchElement = Components.classes["@mozilla.org/messenger/searchTerm;1"]
		.createInstance(Components.interfaces.nsIMsgSearchTerm);

		searchElement.arbitraryHeader = "";
		searchElement.attrib = attrib;
		searchElement.booleanAnd = booleanAnd;
		if (beginsGrouping) {searchElement.beginsGrouping = beginsGrouping;};
		if (endsGrouping) {searchElement.endsGrouping = endsGrouping};
			
	// new value object - part of term element
	var v = searchElement.value
    	.QueryInterface(Components.interfaces.nsIMsgSearchValue);
		    v.str    = str; // "@carrot.com";
		    v.attrib = searchElement.attrib;
		searchElement.value = v;

	//	collection must be of nsISupportsArray type
	collection.AppendElement(searchElement); 
}


function accountsSfProjectCreate ( folder )
{
//  createSfForParent ( parentFolder, folderName, fT )
//  appendSearchTerm ( ..., attrib,   str,      op,       booleanAnd )

	var company = gNewFolderInfo.company;
	var domain = patternDomain ( gNewFolderInfo.domain ).forFilter;

	var project = company + "@" + gHomeDomain;
	var projectFolder = "_PROJ_1_";

	//	first project template
	var F1 = Array(
		Array (gAttribToOrCC, project, gOpContains, gBooleanOR )
	);

	createSfForParent ( folder, projectFolder, F1 );
	
} 




function carrotPrefWindow(showBasic, clientType, selectTab) {
//  DEBUG_LOG("enigmailCommon.js: EnigPrefWindow\n");
  window.openDialog("chrome://carrot_garden/content/carrotPref.xul",
                    "_blank", "chrome,centerscreen,resizable=yes",
                    {'showBasic': showBasic,
                     'clientType': clientType,
                     'selectTab': selectTab});
}


//	uses enumerator
//	http://www.xulplanet.com/references/xpcomref/ifaces/nsIEnumerator.html
// MSG_FOLDER_FLAG_VIRTUAL
function carrotGetSubFolders( folder, flags ) {
	
	var subfolders = new Array;
	
	if (folder.hasSubFolders)
	{
    	var subFolderEnumerator = folder.GetSubFolders();
    	var done = false;

    	while (!done)
    	{
      		var next = subFolderEnumerator.currentItem();
      	
      		if (next)
			{
		        var nextFolder = next.QueryInterface(Components.interfaces.nsIMsgFolder);
	
		        if ( nextFolder && ( (nextFolder.flags & gFolderMask) == flags ))
			        {
			        	subfolders.push(nextFolder);      
						///dump2("carrotGetSubFolders: " + nextFolder.name + " flag: " + nextFolder.flags );
			        }
			}
		
			try
			{
				subFolderEnumerator.next();
		    }
		    catch (ex)
		    {
	        	done = true;
			}
		}
		
		if ( subfolders.length > 0 ) { subfolders.sort(compareFolderSortKey); }
		
		return subfolders;
	}
}

function compareFolderSortKey(folder1, folder2) 
{
  return folder1.compareSortKeys(folder2);
}


function accountsSfGenericsCreate ( folder ) {
		
	var K; var N; var subfolderName; var searhArray = Array(); var searchElements; 

	for ( K = 0; K < gAccountsContracts.length; K++){

		try {
			subfolderName = carrotPrefs.getCharPref(
				"carrot_garden.accountsFolder." + gAccountsContracts[K] + ".name");
		}
		catch(ex){dump2(ex); alert("inconsistent preferences #2"); return;}

		if ( existsFolder( folder, subfolderName ) ) { continue; }

		searhArray = Array(); 	//	clear from previous K 

		for ( N = 0; N < 9; N++){

			try {
				searchElements = carrotPrefs.getCharPref(
					"carrot_garden.accountsFolder." + gAccountsContracts[K] + ".filter." + N)
					.split(",");
			}
			catch(ex){ 
				if ( ex.message.match(/.*0x8000ffff.*/) ) { // "NS_UNEXPECTED...."
					continue; // ok for parsing missing preferences 
				} else {
					alert ("accountsSfGenericsCreate \n\n error" + "\n \n" + ex);
					return;
				}
			}

			if (searchElements[3] == "0") { // for BooleanAnd field
				searchElements[3] = false;
			} else { 
				searchElements[3] = true;
			}
				
			searhArray.push ( searchElements );			
		}
		
		try {
			createSfForParent ( folder, subfolderName, searhArray );
		}catch (ex) {
			alert ("accountsSfGenericsCreate \n\n can not create subfolder \n \n" +
				subfolderName  + "\n \n" + ex);
			return;		
		}
	}
}

function accountsSfGenericsDelete ( folder, deleteFunction ) {

	var subfolders = Array(); var subfolderName = ""; var k; var n;  

	if (folder.hasSubFolders){
	
		subfolders = carrotGetSubFolders ( folder, 
			gFolderFlags.MSG_FOLDER_FLAG_VIRTUAL); // only virtual
	
	    for ( k=0; k < subfolders.length; k++ ) {
	    	
			for ( n = 0; n < gAccountsContracts.length; n++ ) {
				try {
					subfolderName = carrotPrefs.getCharPref(
						"carrot_garden.accountsFolder." + gAccountsContracts[n] + ".name");
				}
				catch(ex){dump2(ex); alert("inconsistent preferences #1");  return;}

				if ( subfolders[k].name == subfolderName ){
		
					dump2("deleting: " + subfolders[k].name);
					
					deleteFunction ( folder, subfolders[k] );
				
					saveVirtualFolders();
					
				}	
			}
		}
    }
}



function myResponseCreate ( parentURI, folderName ) {
	
	var parentFolder = carrotMsgFolderFromUri ( parentURI );

	var arrayURI = getFolderTreeURIArray ( parentFolder, 0); 

	for ( var k=0; k < arrayURI.length; k++){
		arrayURI[k] = convertToUri(arrayURI[k]);
	}
	var strURI = arrayURI.join("|");
	
	// new search terms
	var obj = Components.classes["@mozilla.org/supports-array;1"]
			.createInstance(Components.interfaces.nsISupportsArray);

	appendSearchTerm ( obj, 5, 1, 3, true ); // Status is not "Read"
	appendSearchTerm ( obj, 8, gHomeEmailPrefix, 0, true ); // To or CC contains name

	carrotCreateVirtualFolder( folderName, parentFolder,  strURI, obj, false );
}

//### fast delete, but durty - requires restart of TB
function deleteFolder(parentFolder, subFolder){
	if (existsFolder ( parentFolder, subFolder.name )) {
		subFolder.Delete();
		parentFolder.NotifyItemRemoved ( subFolder );
	}
}

//#### slow delete, bot correct
function deleteFolder2(parentFolder, subFolder){
	if (existsFolder ( parentFolder, subFolder.name )) {
	    var folderResource = subFolder
	    	.QueryInterface(Components.interfaces.nsIRDFResource);
	    var parentResource = parentFolder
	    	.QueryInterface(Components.interfaces.nsIRDFResource);
	    messenger.DeleteFolders(GetFolderDatasource(), parentResource, folderResource);
	}
}

function deleteFolderURI2 ( parentURI, folderName ) {
	var parentFolder = carrotMsgFolderFromUri ( parentURI );
	if (existsFolder ( parentFolder, folderName )) {
		var folder = carrotMsgFolderFromUri ( convertToUri(parentURI + "/" + folderName) );
		deleteFolder2( parentFolder, folder);
	}
}


function getFolderTreeURIArray(parentFolder, flag){

	var URI = Array();

	if (parentFolder.hasSubFolders) {
	
		var subfolders = carrotGetSubFolders(parentFolder, flag); 
	
		for ( var k = 0; k < subfolders.length; k++ ){

			URI.push(subfolders[k].URI);
			
			var subURI = getFolderTreeURIArray(subfolders[k], flag);
			
			for ( var n = 0; n < subURI.length; n++ ){
				URI.push(subURI[n]);				
			}
		}
	}
	return URI;	
}


function saveVirtualFolders(){

    var accountManager = Components.classes["@mozilla.org/messenger/account-manager;1"]
    	.getService(Components.interfaces.nsIMsgAccountManager);

    accountManager.saveVirtualFolders();
	
}

function newSearchTermArray(){
	var obj = Components.classes["@mozilla.org/supports-array;1"]
			.createInstance(Components.interfaces.nsISupportsArray);
	return obj;
}

function newSearchTerm(){
	var obj = Components.classes["@mozilla.org/messenger/searchTerm;1"]
		.createInstance(Components.interfaces.nsIMsgSearchTerm);
	return obj;
}


function accountsSfMembersCreate ( parentFolder, domainIgnoreList ){
	
	var addressBook = collectEmailAddresses( parentFolder );

	if ( ! addressBook ) { return;};

	
	for (var k = 0; k < addressBook.length; k++  ){
		
		var personName  = addressBook[k][0].toString();
		var personEmail = addressBook[k][1].toString(); 

		var domain = personEmail.split(/\@/);
		domain = domain[1];

		if ( existsInArray( domain, domainIgnoreList )) { continue;};
		//XXX
		memberSfCreate( parentFolder, personName, personEmail );
	}
}


function accountsSfMembersDelete( folder, deleteFunction ){

	var subfolders = Array(); var folderName = "";

	if (folder.hasSubFolders){
	
		subfolders = carrotGetSubFolders ( folder, 
			gFolderFlags.MSG_FOLDER_FLAG_VIRTUAL); // only virtual
	
	    for ( var k=0; k < subfolders.length; k++ ) {
	
			folderName = subfolders[k].name.toString();
			
			if ( folderName.match( /[\w\.\-\_]*\@[\w\.\-\_]*/ ) ){
	
		    	deleteFunction ( folder, subfolders[k] );
	    	
    			saveVirtualFolders();
		    	
			}
		}
    }
}


function existsInArray ( member, memberArray ) {
	
	var found = false;
	
	for ( var k = 0; k < memberArray.length; k++  ){
		if ( member.toString().toLowerCase() == memberArray[k].toString().toLowerCase() ){
			found = true;
			break;
		}
	}
	return found;
}


function collectEmailAddresses( folder ){
	
	var k = 0;
	var emailAddress = ""; var displayName = "";
	var addressTerms = new Array(); 
	var addressBook = new Array();
	var db = Object; var enumerator = Object; var header = Object;
	var emailHash = new Object(); 

	try {
		//	XXX has known problems if *.msf is invalid
		db = folder.getMsgDatabase ( null );
		enumerator = db.EnumerateMessages();
	}
	catch (ex){
		alert ( "error: collectEmailAddresses: \n \n" + ex + "\n\n" +
		"do not know how to handle this yet. TB will restart."
		 );  
		restartApplication(); 
		return;		
	}

	while ( enumerator.hasMoreElements  ){ // iterate through all messages

		try { header = enumerator.getNext(); } // workaround for folders being updated
		catch (ex) { break; };

		if ( header instanceof Components.interfaces.nsIMsgDBHdr ){ // trick to make type conversion
	    	addressTerms.push( header.author.toString().toLowerCase() ); // note toLowerCase
		}
	}

	header = null; enumerator = null; db.Close(true); db = null;
	
	// find name, email, do cleanup and remove duplicates
	for ( k = 0; k < addressTerms.length; k++  ){
		
		if ( ! addressTerms[k].match(regexpCache.emailAddress)) {
			// 	bad addres, skip; example: "From: Mail Delivery Subsystem <MAILER-DAEMON>"
				dump2 ("collectEmailAddresses: bad address term: " + addressTerms[k]); 
			continue;
		}; 
	
		emailAddress = emailFromEmailTerm ( addressTerms[k] );
		//	dump2 ( "collectEmailAddresses: emailAddress " + emailAddress );
		
		displayName  =  nameFromEmailTerm ( addressTerms[k] );
		//	dump2 ( "collectEmailAddresses: displayName  " + displayName );
		
		//	store pairs while removing duplicates emails
		if (emailHash[ emailAddress ] != 1) {	
			emailHash[ emailAddress ] = 1;
			addressBook.push( Array ( displayName, emailAddress ) );
		};
	};
	
	emailHash = null; addressTerms = null; 
	
	return addressBook;
}

function progressMeter( dialogArguments ){
	window.openDialog("chrome://carrot_garden/content/progressMeter.xul",
		"carrot_garden", "chrome,modal,centerscreen",
		dialogArguments);
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


function restartApplication (){

    dump2("restartApplication: ");

    var appStartup = Components.interfaces.nsIAppStartup;

    Components.classes["@mozilla.org/toolkit/app-startup;1"]
      .getService(appStartup).quit( appStartup.eRestart | appStartup.eAttemptQuit );

}

function Alert ( window, text ){

	var promptService = Components.classes["@mozilla.org/embedcomp/prompt-service;1"]
		.getService(Components.interfaces.nsIPromptService);
	
	promptService.alert (window, "carrot_garden", text);  
	
}

function Confirm( window, text ){

	var promptService = Components.classes["@mozilla.org/embedcomp/prompt-service;1"]
		.getService(Components.interfaces.nsIPromptService);
	
	return promptService.confirm (window, "carrot_garden", text);  
	
}


	var flagComplete = false;
	
	var zzzfolderListener = {
	  OnItemEvent: function( folder, event) {
	    var eventType = event.toString();
	    
	    if ( folder instanceof Components.interfaces.nsIMsgFolder ) {};
	    
	    dump2 ("folderName " + folder.Name +"\n" +
			   "eventType  " + eventType );
	    
		if (eventType == "FolderLoaded"){
			flagComplete = true;
		}
	  }   
	}


function loadFolder(URI){
	

	var MailSession = Components.classes["@mozilla.org/messenger/services/session;1"]
		.getService(Components.interfaces.nsIMsgMailSession);
	
    var nsIFolderListener = Components.interfaces.nsIFolderListener;

    var notifyFlags = nsIFolderListener.event ; 

	var timerID 
	
	function waitLoad () {
		if (flagComplete){
			flagComplete = false;
			window.clearTimeout(timerID);
		} else {
			dump2 (" ###waiting...");
			timerID = window.setTimeout( waitLoad , 1000 );
		}
	}

	dump2 ("### 1...");

    MailSession.AddFolderListener( zzzfolderListener, notifyFlags );

	dump2 ("### 2...");

	SelectFolder(URI);

	dump2 ("### 3..");
	
	timerID = window.setTimeout( waitLoad , 1000 );

	dump2 ("### 4...");

	MailSession.RemoveFolderListener ( zzzfolderListener );	

	dump2 ("### 5...");
	
}


function cmdTEST_X1 () {

//	var folder = carrotMsgFolderFromUri("mailbox://nobody@Local%20Folders/Accounts/_TEST_");
	var folder = carrotMsgFolderFromUri("mailbox://nobody@Local%20Folders/Accounts");

	loadFolder( folder.URI ); 

	var subfolders = carrotGetSubFolders( folder, 0 )

		
	for (var k = 0; k < subfolders.length; k++  ){
		
		dump2 ( subfolders[k].name );
		
		loadFolder( subfolders[k].URI );		
	}
	
}






function TcollectEmailAddresses( folder ){
	
	var k = 0;
	var emailAddress = ""; var displayName = "";
	var addressTerms = new Array(); 
	var addressBook = new Array();
	var db = Object; var enumerator = Object; var header = Object;
	var emailHash = new Object(); 

	try {
		//	XXX has known problems if *.msf is invalid
		db = folder.getMsgDatabase ( null );
		enumerator = db.EnumerateMessages();
	}
	catch (ex){
		alert ( "error: collectEmailAddresses: \n \n" + ex + "\n\n" +
		"do not know how to handle this yet. TB will restart."
		 );  
		restartApplication(); 
		return;		
	}
	
	var enumCount = 0

	while ( enumerator.hasMoreElements  ){ // iterate through all messages

		try { header = enumerator.getNext(); } // workaround for last step
		catch (ex) { 
			dump2("### enumerator.getNext")
			break; 
		};

		if ( header instanceof Components.interfaces.nsIMsgDBHdr ){ // trick to make type conversion


	    	addressTerms.push( header.author.toString().toLowerCase() ); // note toLowerCase


			var recipients = emailTermsFromHeader ( 
				header.recipients.toString().toLowerCase() )
			
			for ( k = 0; k < recipients.length; k++  ){
				addressTerms.push( recipients[k] )
			}

			if ( ( header.ccList ) && ( header.ccList != "" ) ) {
				var ccList = emailTermsFromHeader ( 
					header.ccList.toString().toLowerCase() )
				
				for ( k = 0; k < ccList.length; k++  ){
					addressTerms.push( ccList[k] )
				}
			}


		}else{
			dump2("### bad header " + header)
		}
		enumCount ++
	}
	dump2("### enumCount " + enumCount)
	dump2("### addressTerms " + addressTerms.length )
	
	header = null; enumerator = null; db.Close(true); db = null;
	
	// find name, email, do cleanup and remove duplicates
	for ( k = 0; k < addressTerms.length; k++  ){
		
		if ( ! addressTerms[k].match(regexpCache.emailAddress)) {
			// 	bad addres, skip; example: "From: Mail Delivery Subsystem <MAILER-DAEMON>"
				dump2 ("collectEmailAddresses: bad address term: " + addressTerms[k]); 
			continue;
		}; 
	
		emailAddress = emailFromEmailTerm ( addressTerms[k] );
		//	dump2 ( "collectEmailAddresses: emailAddress " + emailAddress );
		
		displayName  =  nameFromEmailTerm ( addressTerms[k] );
		//	dump2 ( "collectEmailAddresses: displayName  " + displayName );
		
		//	store pairs while removing duplicates emails
		if (emailHash[ emailAddress ] != 1) {	
			emailHash[ emailAddress ] = 1;
			addressBook.push( Array ( displayName, emailAddress ) );
		};
	};
	
	emailHash = null; addressTerms = null; 
	
	return addressBook;
}

function XXXbackupFiltersFile () {
	
	var folder = getLocalFolders()
	var filters = folder.getFilterList(null);	
	var nativeFilePath = filters.defaultFile.nativePath

	var args = {
		sourceNativeFilePath : nativeFilePath, 
		sourceProfileFilePath: false, 
		backupDirName: gBackupDirName, 
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
		backupDirName: gBackupDirName, 
		targetFileNamePrefix: "virtualFolders", 
		targetFileNameExt: "dat",
		makePrefixSubDir: true,	
	}

	backupFileByArgs ( args );	
}

function backupVirtualFoldersFile_2 () {
	
	var args = {
		sourceNativeFilePath : false, 
		sourceProfileFilePath: "virtualFolders.dat", 
		backupDirName: gBackupDirName, 
		targetFileNamePrefix: "virtualFolders", 
		targetFileNameExt: "dat",
		makePrefixSubDir: true,	
	}

	backupFileByArgs_2 ( args );	
}


function getBackupArgsForDirectoryUri ( AbUri ) {
	
    var directory = carrotGetDirectoryFromURI(AbUri);
	var directoryProperties = directory.directoryProperties;
	var fileName = directoryProperties.fileName;
	
	alert( fileName );
	
	var args = {
		sourceNativeFilePath : false, 
		sourceProfileFilePath: fileName, 
		backupDirName: gBackupDirName, 
		targetFileNamePrefix: fileName.replace('.mab', ''), 
		targetFileNameExt: "mab",
		makePrefixSubDir: true,	
	}

	backupFileByArgs ( args );	
}



function cmdTEST () {
	
	//getBackupArgsForDirectoryUri  ( 'moz-abmdbdirectory://ab-system-test.mab' )

	backupVirtualFoldersFile_2 ();
		
}

function carrotGetDirectoryFromURI(uri)
{
	var RDF = Components.classes['@mozilla.org/rdf/rdf-service;1'].getService();
	var directory = RDF.GetResource(uri).QueryInterface(Components.interfaces.nsIAbDirectory);
	return directory;
}


function addCardInfoToDirectoryUri( cardInfo, bookUri ){
	
	var contact = new carrotContact();
	var abCard = contact.setCard( cardInfo )

	var dir  = carrotGetDirectoryFromURI( bookUri )
	var newCard = dir.addCard ( abCard )
	
    var mdbCard = newCard.QueryInterface ( Components.interfaces.nsIAbMDBCard );
		
}

function carrotContact() {

	var fieldId;
	
    var abCardInst = Components.classes["@mozilla.org/addressbook/cardproperty;1"].createInstance();
    this.abCard = abCardInst.QueryInterface(Components.interfaces.nsIAbCard);	
}

carrotContact.prototype.setCard = function ( cardInfo ){

    for ( var fn in this.fields )
    {
        if (( cardInfo[fn] == undefined ) || ( this.fields[fn] == '*IGNORE*'))
            continue;
		dump2( "setCard: " + fn + " cardInfo: " + cardInfo[fn] )
        this.abCard[this.fields[fn]] = cardInfo[fn];
    }	
    return this.abCard;
}

carrotContact.prototype.normalizeCard = function( card ){

	card.firstName = capitalLetters( card.firstName );
	card.lastName = capitalLetters( card.lastName );
	card.displayName = capitalLetters( card.displayName );

	card.primaryEmail = card.primaryEmail.toLowerCase();
	card.secondEmail = card.secondEmail.toLowerCase();

	return card;
}	


carrotContact.prototype.mergeCards = function ( sourceCard, targetCard ){

    for ( var fn in this.fields )
    {
    	fieldId = this.fields[fn];

        //dump2 ( 'fn ' + fn + ' s ' + sourceCard[fieldId] + ' t ' + targetCard[fieldId] );
        
        if ( 
        	( fieldId == 'notes' )  && 
        	( targetCard[fieldId].toString != '' )  &&
        	( sourceCard[fieldId] )
        	) {
	        targetCard[fieldId] = targetCard[fieldId] + '\n' + sourceCard[fieldId];
        }
        if (
        	( fieldId == '*IGNORE*') ||
        	( sourceCard[fieldId] == undefined ) || 
        	( sourceCard[fieldId] == '' ) || 
        	( targetCard[fieldId] != '' )
        	) {
        	continue;
        } else {
	        targetCard[fieldId] = sourceCard[fieldId];
			dump2( "mergeCards: " + fn + ": " + targetCard[fieldId] )
        }
    }	
}

carrotContact.prototype.fields = {
	
    PersonalIM            : 'aimScreenName',
	AssistantName         : '*IGNORE*',
	AssistantPhone        : '*IGNORE*',
	Birthday              : '*IGNORE*',
	Category              : 'category',
	PersonalEmail         : 'secondEmail',
	PersonalEmail2        : '*IGNORE*',
	PersonalEmail3        : '*IGNORE*',
	PersonalWebPage       : 'webPage2',
	PersonalMobilePhone   : 'cellularNumber',
	
	HomeAddress           : 'homeAddress',
	HomeAddress2          : 'homeAddress2',
	HomeCity              : 'homeCity',
	HomeState             : 'homeState',
	HomeZipCode           : 'homeZipCode',
	HomeCountry           : 'homeCountry',
	HomeFax               : '*IGNORE*',
	HomePhone             : 'homePhone',
	HomePhone2            : '*IGNORE*',
	
	DisplayName           : 'displayName',
	FirstName             : 'firstName',
	LastName              : 'lastName',
	MiddleName            : '*IGNORE*',
	ManagerName           : '*IGNORE*',
	NameSuffix            : '*IGNORE*',
	NameTitle             : '*IGNORE*',
	NickName              : 'nickName',
	
	Notes                 : 'notes',
	OtherAddress          : '*IGNORE*',
	OtherAddress2         : '*IGNORE*',
	OtherCity             : '*IGNORE*',
	OtherState            : '*IGNORE*',
	OtherZipCode          : '*IGNORE*',
	OtherCountry          : '*IGNORE*',
	OtherFax              : '*IGNORE*',
	OtherPhone            : '*IGNORE*',
	SpouseName            : 'spouseName',
	
	WorkPhone             : 'workPhone',
	WorkPhone2            : '*IGNORE*',
	BusinessMobilePhone   : '*IGNORE*',
	WorkPager             : 'pagerNumber',
	WorkFax               : 'faxNumber',
	JobTitle              : 'jobTitle',
	Company               : 'company',
	Department            : 'department',
	BusinessEmail         : 'primaryEmail',
	BusinessEmail2        : '*IGNORE*',
	BusinessEmail3        : '*IGNORE*',
	BusinessIM            : '*IGNORE*',
	BusinessWebPage       : 'webPage1',
	WorkAddress           : 'workAddress',
	WorkAddress2          : 'workAddress2',
	WorkCity              : 'workCity',
	WorkCountry           : 'workCountry',
	WorkState             : 'workState',
	WorkZipCode           : 'workZipCode',
}
    
