//	UTILITIES

var log = {};

function componentServiceInitialize( object ){
	log = object.log;
}


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
	charBlank		: new RegExp ("\\s", "g"),
	charComma		: new RegExp ("\\,", "g"),
	charSingleQuote	: new RegExp ("\\'", "g"),
	charDoubleQuote	: new RegExp ('\\"', "g"),
	multiBlanks		: new RegExp ("(\\s{2,})", "g"),
	multiDashes		: new RegExp ("(\\-{2,})", "g"),
	multiScores		: new RegExp ("(\\_{2,})", "g"),
	nonCompanyChars		: new RegExp ("[^\\w\\_\\-\\s]", "g"),
	nonDomainChars		: new RegExp ("[^\\w\\_\\-\\.]", "g"),
	nonPersonChars		: new RegExp ("[^\\w\\_\\-\\s]", "g"),
	nonFileNameChars:	new RegExp ("([^\\w]|[_])+", "g"),
};


function substituteVariables ( strValue ) {
	var substitute = strValue;
	var newValue = '';
	var varList = carrot_garden.pref.getNode('mailSettings');
	for ( var varName in varList ){
		var re = new RegExp( varName, "g");
		if ( substitute.match( re ) ){
			newValue = carrot_garden.pref.getNode( 'mailSettings.' + varName );
			substitute = substitute.replace( re, newValue );
		}
	}
	return substitute;
}


function patternAttachmentMessageName ( subject ){

	if( arguments[0] == null ) return '';

//	var temp = parseHeaderFromRfc2047( subject ); 
	var temp = ( subject ); 

	log.debug(subject);
	log.debug(temp);
	
	temp = temp.replace( regexpCache.nonFileNameChars," " ); 
	temp = trim( temp );
	temp = temp.replace( regexpCache.charBlank,"_"); 
	temp = temp.replace( regexpCache.multiScores,"_"); 
	if( temp == '' ){ temp = 'No_Subject' }
	temp = '' + temp + '.eml';
	return temp;
}

function patternAddrBookFileName ( bookName ){
	if( arguments[0] == null ) return '';
	var temp = bookName.toString();
	temp = temp.replace( regexpCache.nonFileNameChars," " ); 
	temp = trim( temp.toLowerCase() );
	temp = temp.replace( regexpCache.charBlank,"-"); 
	temp = temp.replace( regexpCache.multiDashes,"-"); 
	temp = 'ab-' + temp + '.mab';
	return temp;
}

function patternCompanyName ( company ) {
	if( arguments[0] == null ) return '';
	var temp = company.toString(); 
	temp = temp.replace( regexpCache.nonCompanyChars,"" ); // remove invalid chars 
	temp = temp.replace( regexpCache.multiBlanks," "); // remove mutiple spaces
	temp = trim ( capitalLetters ( temp ) ); // trim & cap
	return temp;
}

function patternDomainName ( domain ){
	if( arguments[0] == null ) return '';
	var temp = domain.toString();
	temp = temp.replace( regexpCache.nonDomainChars, "" ); // remove invalid chars
	temp = temp.toLowerCase();
	return temp;
}

function patternEmailPrefix( email ){
	if( arguments[0] == null ) return '';
	var temp = email.toString();
	if( ! email.match(/@/) ) return '';
	temp = temp.split(/@/)[0];
	temp = temp.replace( regexpCache.nonDomainChars, "" ); // remove invalid chars
	temp = temp.toLowerCase();
	return temp;
}

function patternEmailSuffix( email ){
	if( arguments[0] == null ) return '';
	var temp = email.toString();
	if( ! email.match(/@/) ) return '';
	temp = temp.split(/@/)[1];
	temp = temp.replace( regexpCache.nonDomainChars, "" ); // remove invalid chars
	temp = temp.toLowerCase();
	return temp;
}

function patternPersonName ( person ){
	if( arguments[0] == null ) return '';
	var temp = person.toString(); 
	temp = temp.replace( regexpCache.nonPersonChars,"" ); // remove invalid chars 
	temp = temp.replace( regexpCache.multiBlanks," "); // remove mutiple spaces
	temp = trim ( capitalLetters ( temp ) ); // trim & cap
	return temp;
}




function openUrl( urlToOpen )
{
  try {
      
    var uri = Components.classes["@mozilla.org/network/io-service;1"]
              .getService(Components.interfaces.nsIIOService)
              .newURI( urlToOpen, null, null );

    var protocolSvc = Components.classes["@mozilla.org/uriloader/external-protocol-service;1"]
                      .getService( Components.interfaces.nsIExternalProtocolService );
    protocolSvc.loadUrl( uri );
    
  } catch (ex) {}
}


function getPopupNodeAttribute( document ){
	var valueList = new Object();
	for( var k =1; k < arguments.length; k++ ){
		valueList[arguments[ k ]] = document.popupNode.getAttribute( arguments[ k ] );
	}
//	for( prop in document.popupNode ){
//		log.debug( 'document.popupNode ' + prop )
//	}
//		log.debug( 'document.popupNode.nodeType ' + document.popupNode.nodeType )
	return valueList;
}

function newInstanceSupportsArray (){
	var obj = Components.classes["@mozilla.org/supports-array;1"]
			.createInstance(Components.interfaces.nsISupportsArray);
	return obj;
}


//	split multiple email terms into an array
//	such as = "Bill Gates" <b.gates@ms.com>, 'Joe Doe' <j.doe@jd.com>
//
function getEmailTermsFromHeader( header ){ 
	
	var val = header.match ( regexpCache.emailTerm )

//	log.debug ("in  " + header)
	
	if ( val ) {
//		log.debug ("out " + val.length)
		return val
	}else{
//		log.debug ("out ### no match: " + header)
		return ""
	}
	
}


//	split multiple email terms into an array
//	such as = "Bill Gates" <b.gates@ms.com>, 'Joe Doe' <j.doe@jd.com>
//
function getEmailTermsFromHeader_Slow ( header ) { 

//	emailAddress	: new RegExp ("([\\w\\.\\-\\_]*\\@[\\w\.\\-\\_]*)", "g"),

//	http://www.faqs.org/rfcs/rfc2822.html	
	
	var DQUOTE = '\\"'
	var BSLASH = '\\\\'

	var FWS = "((\\s{0,}\\r\\n){0,1}\\s{1,})" // ([*WSP CRLF] 1*WSP)
	var FWS_ = FWS + "{0,1}"

//	XXX todo
	var CFWS = FWS 
	var CFWS_ = CFWS + "{0,1}"
	
	var specials ="\\(\\)\\<\\>\\[\\]\\:\\;\\@" + BSLASH + "\\,\\." + DQUOTE
	
// Characters excluding CR and LF
	var text =  "([^\\n\\r]{1})" 

//	%d33 /          ; The rest of the US-ASCII
//  %d35-91 /       ;  characters not including "\"
//  %d93-126        ;  or the quote character	
	var qtext = "([^\\s" + BSLASH + DQUOTE +"]){1}"  
	
	var quoted_pair = "(" + BSLASH + text + ")" // ("\" text)
	
	var qcontent = "(" + qtext + "|" + quoted_pair + ")"
	
	var quoted_string = "(" + 
		CFWS_ + DQUOTE + 
		"(" + FWS_ + qcontent +")" + "{0,}" + FWS_ + 
		DQUOTE + CFWS_ + 
		")" // 

//	atext =ALPHA / DIGIT / ; Any character except controls
//  "!" / "#" /     ;  SP, and specials.
//  "$" / "%" /     ;  Used for atoms
//  "&" / "'" / "*" / "+" /
//  "-" / "/" / "=" / "?" /
//  "^" / "_" / "`" / "{" /
//  "|" / "}" / "~"
	var atext = "([^\\s" + specials + "]{1})" // 
	
	var atom = "(" + CFWS_  + atext + "{1,}" + CFWS_ + ")" // [CFWS] 1*atext [CFWS]

	var dot_atom_text = "(" + atext + "{1,}" + "(\\." + atext + "{1,}" + "){0,}" + ")" // 1*atext *("." 1*atext)
	
	var dot_atom = "(" + CFWS_ + dot_atom_text + CFWS_ + ")" // [CFWS] dot-atom-text [CFWS]

	var word = "(" + atom + "|" + quoted_string + ")" // atom / quoted-string
	var phrase = "(" + word + "{1,}" + ")"; // 1*word


	var local_part = "(" + dot_atom + "|" + quoted_string + ")" // dot-atom / quoted-string
	
//	var dtext = "([^\\s\\[\\]" + BSPACE + "]){1}"
//	var dcontent = "(" + dtext + "|" + quoted_pair + ")"
//	var domain_literal = "" // [CFWS] "[" *([FWS] dcontent) [FWS] "]" [CFWS]
	
	var domain = dot_atom // dot-atom / domain-literal / obs-domain

	var addr_spec = "(" + local_part + "\\@" + domain + ")" // local-part "@" domain


	var angle_addr = "(" + 
		CFWS_ + "\\<" + addr_spec + "\\>" + CFWS_ + 
		")"; // [CFWS] "<" addr-spec ">" [CFWS]
	
	var display_name = phrase;
	
	var name_addr = "(" + display_name + "{0,1}" + angle_addr + ")"; // [display-name] angle-addr

	var mailbox = "(" + name_addr + "|" + addr_spec + ")"; // name-addr / addr-spec
	
	var address = mailbox; // mailbox / group
	
	var address_list = "(" + address + "(\\," + address + "){0,}" + ")";
		
	
	var re = new RegExp ( address, "g")
	
	var val = header.match ( re )

//	log.debug ("in  " + header)
	
	if ( val ) {
//		log.debug ("out " + val.length)
		return val
	}else{
		log.debug ("out ### no match: " + header)
		return ""
	}
	
}


function getDomainFromEmailAddress( emailAddress ){
	return emailAddress.split('@')[1];
}


//	expects single email address term
//	such as = "Bill Gates" <b.gates@ms.com>
//
function getEmailAddrFromEmailTerm ( emailAddressTerm ) { 
	
	return ( regexpCache.emailAddress ).exec( emailAddressTerm )[0];
}


//	expects single email address term
//	such as = "Bill Gates" <b.gates@ms.com>
//
function getNameFromEmailTerm ( emailAddressTerm ) { 

	var displayName = "";

	//	remove email address
	displayName =  emailAddressTerm.replace(regexpCache.emailAddress,"")

	// " ' < > = remnants of  "'Firstname Lastname [ Comany Name ]'" <prefix@domain.com>
	displayName = displayName.replace(regexpCache.addressBrackets," ");

	// remove non-ascii encoded name parts, such as =?iso-8859-1?q?j=f6rgen_stenkvist?=
	displayName = displayName.replace(regexpCache.quotePrintable," ");

	// if comma-separated, then swap Lastname, Firstname -> Firstname Lastname
	displayName =displayName.replace( regexpCache.swapCommaSep, "$2 $1" ); 

	//	no need for comma now
	displayName = displayName.replace(regexpCache.charComma," "); 

	//	capitalize first letter of every word, trim
	displayName = trim(capitalLetters ( displayName ) );

	//	no need for double spaces
	displayName = displayName.replace(regexpCache.multiBlanks," "); 

	//	if all else fails, construct it
	if ( displayName == "" ) { 
		displayName = nameFromEmail ( (regexpCache.emailAddress).exec(emailAddressTerm)[0] ); 
	};

	return displayName;
}


function getNameFromEmailAddr ( emailAddr ) {

//	log.debug ( "start: "+ emailAddr );

	var emailAddress = emailAddr.toString();
	var displayName = "";

	if ( ( ! emailAddress.match( /.+\@.+/g) )  ) { 
		//	can not split any parts 
//		log.debug ("can not split");
		return ""; 
	};

	var emailParts  = emailAddress.split(/\@/);
	var emailPrefix = emailParts[0];

	displayName = emailPrefix.replace(/\./g," ");
	displayName = capitalLetters ( displayName );

//	log.debug ( "finish: "+ displayName );

	return displayName;
}


function leftTrim(sString)
{
	while (sString.substring(0,1) == ' ')
	{
		sString = sString.substring(1, sString.length);
	}
	return sString;
}

function rightTrim(sString)
{
	while (sString.substring(sString.length-1, sString.length) == ' ')
	{
		sString = sString.substring(0,sString.length-1);
	}
	return sString;
}

function trimAll(sString)
{
	while (sString.substring(0,1) == ' ')
	{
		sString = sString.substring(1, sString.length);
	}
	while (sString.substring(sString.length-1, sString.length) == ' ')
	{
		sString = sString.substring(0,sString.length-1);
	}
	return sString;
}

// Removes leading whitespaces
function LTrim( value ) {
	
	var re = /\s*((\S+\s*)*)/;
	return value.replace(re, "$1");
	
}

// Removes ending whitespaces
function RTrim( value ) {
	
	var re = /((\s*\S+)*)\s*/;
	return value.replace(re, "$1");
	
}

// Removes leading and ending whitespaces
function trim( value ) {
	
	return LTrim(RTrim(value));
	
}


function sortNumber(a, b)
{
	return a - b
}


function capitalLetters ( sentence )
{
	var words = sentence.split(" ");
	var firtsLetter = "";
	var remaningLetters =  "";

	for ( var i = 0; i < words.length; i++ )
	{	
		if ( words[i].length == 1 ) { 
			words[i] = words[i].toUpperCase	();  
		}else{
			firtsLetter = words[i].substring(0,1);
			remaningLetters =  words[i].substring(1);
			words[i] = firtsLetter.toUpperCase() + remaningLetters.toLowerCase();
		}

	}
	return words.join(" ");
}


// work-around for "%20" uri bug(?): "mailbox://nobody@Local%20Folders/"
//myAction.targetFolderUri = fldrMain.URI + "/" + encodeURIComponent ( myFolderName ) ;

//	see:
//	http://xkr.us/articles/javascript/encode-compare/
//
//	escape() will not encode: @*/+
//	encodeURI() will not encode: !@#$&*()=:/;?+'
//	encodeURIComponent() will not encode: !*()'
//
// 	but this			mailbox://nobody@Local Folders/Manage Leaders/Production - Programming (PROG)
//	must look like		mailbox://nobody@Local%20Folders/Manage%20Leaders/Production%20-%20Engeneering%20%28PE%29
//
//	hence the hack below

function convertToUri ( URI )
{
	var head = "mailbox://nobody@";
	var tail; 
	var newURI;

	//log.debug ("convertToUri in : " + URI);

	if ( URI.match( head ) ) {

		tail = 	URI.replace( head, "");
		tail = tail.split("/");

		for ( var k = 0; k < tail.length; k++ ) {
			tail[k] = decodeURIComponent( tail[k] );
			tail[k] = encodeURIComponent( tail[k] );
			tail[k] = tail[k].replace( /\(/g, escape("(") );
			tail[k] = tail[k].replace( /\)/g, escape(")") );
			tail[k] = tail[k].replace( /\!/g, escape("!") );
			tail[k] = tail[k].replace( /\'/g, escape("'") );
			tail[k] = tail[k].replace( /\*/g, "%2A" );
		}
		
		tail = tail.join("/");

		newURI = head + tail;

	} else {
		newURI = URI;
		var msg = "convertToUri: do not know how to convert -\n\n" + URI
		log.debug ( msg );
		throw msg;
	}
	
	//log.debug ("convertToUri out: " + newURI);
	//alert ("---");
	
	return newURI;
}




function XXXbackupFileByArgs ( args ) {

//	args.sourceNativeFilePath 
//	args.sourceProfileFilePath 
//	args.backupDirName 
//	args.targetFileNamePrefix 
//	args.targetFileNameExt
//	args.makePrefixSubDir	

	jslib.init(this);
	
	include (jslib_file);
	include (jslib_fileutils);
	include (jslib_dir);
	include (jslib_dirutils);
	include (jslib_date);

	var rv=0;
	
	var fileUtils = new FileUtils(); 
	var dirUtils = new DirUtils();

	var profileDirPath = dirUtils.getMozUserHomeDir();
	var backupDirPath = fileUtils.append ( profileDirPath, args.backupDirName )

	var backupDir = new Dir(backupDirPath)
	rv = backupDir.create();

	if ( args.makePrefixSubDir ) {
		backupDirPath = fileUtils.append ( backupDirPath, args.targetFileNamePrefix );
		var backupDir = new Dir(backupDirPath)
		rv = backupDir.create();
	}

	var now = new Date()

	var backupFileName = args.targetFileNamePrefix +"_" + 
			jslibDate ("Y_m_d_His", now) + "." + 
			args.targetFileNameExt;

	var backupFilePath = fileUtils.append(backupDirPath, backupFileName );
	
	log.debug (backupFilePath);
	
	if ( args.sourceNativeFilePath ){
		var defaultFilePath = args.sourceNativeFilePath;		
	} else {
		var defaultFilePath = fileUtils.append( profileDirPath, args.sourceProfileFilePath );				
	}
	
	var defaultFile = new File( defaultFilePath )
	
	rv = defaultFile.open("r");
	rv = defaultFile.copy ( backupFilePath )	
	rv = defaultFile.close();
	defaultFile = null;
	
}


function restartApplication (){

    log.debug("restartApplication: ");

    var appStartup = Components.interfaces.nsIAppStartup;

    Components.classes["@mozilla.org/toolkit/app-startup;1"]
      .getService(appStartup).quit( appStartup.eRestart | appStartup.eAttemptQuit );

}

function Alert( window, text ){

	var promptService = Components.classes["@mozilla.org/embedcomp/prompt-service;1"]
		.getService(Components.interfaces.nsIPromptService);
	
	promptService.alert( window, "carrot", text );  
	
}

function Confirm( window, text ){

	var promptService = Components.classes["@mozilla.org/embedcomp/prompt-service;1"]
		.getService(Components.interfaces.nsIPromptService);
	
	return promptService.confirm( window, "carrot_garden", text );  
	
}

function getCompanyNameFromDomain( domain ){
	var temp =  domain.split(/\./);
	var tld = temp.pop();
	return  capitalLetters( temp.join( " " ) );
}

function getPersonNameFromDisplayName( displayName ) {
	var temp = displayName.replace( regexpCache.charSingleQuote, '' );
	return temp.replace( regexpCache.swapCommaSep, "$2 $1" );
}

function emailParser( emailAddress, displayName )
{

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

function clipboardPaste( strValue ){

	var clipboardHelper = Components.classes["@mozilla.org/widget/clipboardhelper;1"]
		.getService(Components.interfaces.nsIClipboardHelper); 

	clipboardHelper.copyString( strValue );
}

function classXmlVars(){
//	http://www.xulplanet.com/references/xpcomref/comps/c_xmlxmldocument1.html
	var xmlObj = Components.classes["@mozilla.org/xml/xml-document;1"]
		.createInstance();
	var xmlDoc = xmlObj.QueryInterface(Components.interfaces.nsIDOMDocument);
	var xmlNode = xmlObj.QueryInterface(Components.interfaces.nsIDOMNode);
	
	var rootNode = xmlNode.appendChild( xmlDoc.createElement( 'root' ) );
	
	this.addTag = function addTag( tagName, tagList ) {
		var element =  xmlDoc.createElement( tagName );
		for ( item in tagList ){
			element.setAttribute( tagList[item][0], tagList[item][1] );
		}
		rootNode.appendChild( element );
	}
	this.getDoc = function getDoc( ) {
		return xmlDoc;
	}
	this.getDocText = function getDocText( ) {
		var xmlSer = Components.classes["@mozilla.org/xmlextras/xmlserializer;1"]
			.createInstance();
		xmlSer = xmlSer.QueryInterface(Components.interfaces.nsIDOMSerializer);
		return xmlSer.serializeToString( xmlDoc );
	}
}

function osGetExtensionScriptPath( scriptFile ){
	var profileFolder = Components.classes["@mozilla.org/file/directory_service;1"]
			 .getService(Components.interfaces.nsIProperties)
			 .get("ProfD", Components.interfaces.nsIFile);
	var path = 
		profileFolder.path + 
		'\\extensions\\' + 
		carrot_garden.extensionGuid +
		'\\os\\' +
		scriptFile;
	return path;	
}

function osGetWin32Command( commandPath, scriptPath, options ){
	var str = commandPath + ' "' + scriptPath + '" ' + options;
	str = str.replace(/\\/g,'\\\\');
	return str;
}

/*
function osGetWin32CscriptCommand( scriptPath ){
	var script = scriptPath;
	script = script.replace(/\\/g,'\\\\');
	script = '"' + script + '"' ;
	script = 'cscript.exe' + ' ' + script + ' ' + '//Nologo'
	return script;
}

function osGetWin32RegSvrCommand( scriptPath ){
	var script = scriptPath;
	script = script.replace(/\\/g,'\\\\');
	script = '"' + script + '"' ;
	script = 'regsvr32.exe' + ' ' + script + ' ' + '/s'
	return script;
}
*/

function osExecPipe( command, inputData, envList ){

	var ipcService = Components.classes["@mozilla.org/process/ipc-service;1"]
		.createInstance();
	ipcService = ipcService.QueryInterface(Components.interfaces.nsIIPCService);

	var outStrObj = new Object();
	var outLenObj = new Object();
	var errStrObj = new Object();
	var errLenObj = new Object();

	var input = inputData ? inputData : '';
	var env = envList ? envList : [];

	var useShell = false;
	var preInput = '';
	
	var exitCode = ipcService.execPipe( 
		command, 
		useShell, preInput, 
		input, input.length, 
		env, env.length,
		outStrObj, outLenObj, 
		errStrObj, errLenObj);

	if ( errLenObj.value > 0){
		log.debug( errStrObj.value );
		return null;
	} else {
		return outStrObj.value;
	}
}



function parseAttrString( attrString ){
	var rx = {
		parseAttrList : new RegExp ( '(\\s*[\\w]*\\s*=\\s*("[^"]*"))', "gi" ),
		parseAttrSplit : new RegExp ( '\\s*=\\s*', "gi" ),
		parseBlanks : new RegExp ( '\\s*', "gi" ),
		parseQuotes : new RegExp ( '\\s*"|"\\s*', "gi" ),
	}
	var attrList = attrString.match( rx.parseAttrList ); 
	if( attrList == null || typeof( attrList ) != 'object' ){log.debug('no attrList'); return; }
	
	var attrPairs = new Array();
	for ( var k = 0; k< attrList.length; k++  ){
		var attrPair = attrList[k].split( rx.parseAttrSplit );
		attrPair[0]= attrPair[0].replace( rx.parseBlanks, "" );
		//log.debug( '|' + attrPair[0] + '|');
		attrPair[1]= attrPair[1].replace( rx.parseQuotes, "" );
		//log.debug( '|' + attrPair[1] + '|');
		attrPairs.push( attrPair );
	}
	return attrPairs;
}

function setElementAttrFromString( elementId, attrString, document ){
	
	log.thisLevel( log.level.debug );
	
	var element = document.getElementById( elementId );
	if( element == null ) { log.debug('no element id: ' + elementId ); return; };
	
	var attrPairs = parseAttrString( attrString );
	if( attrPairs == null ) { log.debug('no attrPairs'); return; };
	
	for( var k =0; k < attrPairs.length; k++ ){
		element.setAttribute( attrPairs[k][0], attrPairs[k][1] );
	}
}


function classAutoComplete( stringsArray ){
	
	this.searchResults = Components.classes["@mozilla.org/autocomplete/results;1"]
		.getService(Components.interfaces.nsIAutoCompleteResults);
	
	this.QueryInterface = function QueryInterface (iid) {
		if ( iid.equals( Components.interfaces.nsIAutoCompleteSession ) ) {
			return this;
		} else {
			throw Components.results.NS_NOINTERFACE;
			return 0;
		}
	}
	this.onAutoComplete = function onAutoComplete( searchString, previousSearchResult, listener ){
	}
	this.onStopLookup = function onStopLookup() {
	}
	this.onStartLookup = function onStartLookup( searchString, previousSearchResult, listener ) {

		var items = this.searchResults.items;

		items.Clear();

		var compareSearchString = searchString.toLowerCase();
		
		var stringValue;
		
		for( var k = 0; k < stringsArray.length; k++ ){

			stringValue = stringsArray[k];			

			if ( stringValue.toLowerCase().indexOf( compareSearchString ) < 0 ) { continue; }
	
			var newItem = Components.classes["@mozilla.org/autocomplete/item;1"]
				.createInstance(Components.interfaces.nsIAutoCompleteItem);
				
			newItem.value = stringValue;
			
			items.AppendElement( newItem );
		}
		
		this.searchResults.defaultItemIndex = 0;
		this.searchResults.searchString = searchString;
		
		listener.onAutoComplete( this.searchResults, 1 );
		
	}
}

function decodeStringFromRfc2047( value ){

	var decoder = Components.classes["@mozilla.org/network/mime-hdrparam;1"]
		.getService(Components.interfaces.nsIMIMEHeaderParam);

	//value = value.replace(/ /g, "=20");
	
	var headerVal = value;
	var paramName = null;
	var fallbackCharset = '';
	var tryLocaleCharset = false;
	var lang = {value: null};

	var result = decoder.getParameter( 
		headerVal, 
		paramName, 
		fallbackCharset, 
		tryLocaleCharset, 
		lang );

	return result;
}

//('   asdasd   =?ISO-8859-1?B?U3BlY2lhbCBDb3JlbK4gUGFpbnRlcpkgSVguNSBPZmZlciBm?= ada \n  sdass  \n   =?ISO-8859-1?B?b3IgU0lHR1JBUEggQXR0ZW5kZWVz?=  s d f  fsdf              ').split(/(=\?[^\?=]+\?(?:b|q)\?[^\?]*\?=)/gi)
//('   asdasd   =?ISO-8859-1?B?U3BlY2lhbCBDb3JlbK4gUGFpbnRlcpkgSVguNSBPZmZlciBm?=\n  \n   =?ISO-8859-1?B?b3IgU0lHR1JBUEggQXR0ZW5kZWVz?=  s d f  fsdf              ').split(/(=\?[^\?=]+\?(?:b|q)\?[^\?]*\?=)/gi)


function parseHeaderFromRfc2047( value ){
	
	var rx = {
		encodedWord: new RegExp ('(=\\?[^\\?=]+\\?(?:b|q)\\?[^\\?]*\\?=)', 'gi') ,
		emptySpaces: new RegExp ('^[\\s\\n\\r]*$', 'gi') ,
	}
	
	var list = value.split( rx.encodedWord );
	
	for( var k=0; k < list.length; k++){
		if( list[k].match( rx.encodedWord ) ){
			list[k] = decodeStringFromRfc2047( list[k] );
		} else if( list[k].match( rx.emptySpaces ) ){
			list[k] = '';
		}
	}
	
	list = list.join('');
	
	return list;
}




function classCollection (){

	var mArray = new Array();
	var	mIndex = 0;
	var mSortByColumn = null;

	function mSortFunction( a1, a2 ){
		var v1 = a1[mSortByColumn];
		var v2 = a2[mSortByColumn];
		if( v1 > v2 ){
			return +1;
		} else if ( v1 == v2) {
			return  0;
		} else {
			return -1;
		}
	}	

	function mItem( key, value, memo ){
		this.key = key;
		this.value = value;
		this.memo = memo;
		return this;
	}
				
	this.add = function add( key, value, memo ){
		var item = new mItem( key, value, memo );
		mArray.push( item );
	}

	this.put = function put( key, value, memo ){
		
		if ( key == null ) return -1;
		  
		var ind = -1;

		for( var i = 0; i < mArray.length; i++ )
			if ( mArray[i].key == key ) {
				ind = i;
			break;
		}
		  
		if ( ind == -1 ) {
			var item = new mItem( key, value, memo );
			mArray.push( item );
			ind = mArray.length - 1;
		} else {
			mArray[ ind ].value = value;
			mArray[ ind ].memo = memo;
		}
		
		return ind;
	}

	this.get = function get( key ){
		for( var i = 0; i < mArray.length; i++ )
			if( mArray[i].key == key ) 
				return mArray[i];
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

	this.hasKey = function hasKey( key, value, memo ) {
		value = null;
		for( var i = 0; i < mArray.length; i++ )
			if ( mArray[i].key == key ) {
				if( value ) value = mArray[i].value;
				if( memo ) memo = mArray[i].memo;
				return true;
			}
		return false;
	}

	this.size = function size()  {
		return mArray.length;
	}

	this.first = function first() {
		if( mArray.length > 0) {
			mIndex = 0;
			return mArray[ mIndex ];
		} else {
			return null;
		}
	}

	this.last = function last() {
		if( mArray.length > 0) {
			mIndex = mArray.length - 1;
			return mArray[ mIndex ];
		} else {
			return null;
		}
	}

	this.hasMore = function hasMore(){
		if( mArray.length > 0 && mIndex < mArray.length ) 
			return true;
		else 
			return false;
	}
	  
	this.next = function next(){
		if( mArray.length > 0 && mIndex < mArray.length ) {
			return mArray[ mIndex ++ ];
		} else {
			return null;
		}
	}
	
	this.sortBy = function sortBy( column ){
		mSortByColumn = column;
		mArray.sort( mSortFunction );			
	}
	
	this.iterate = function iterate( functionName ){
		for( var i = 0; i < mArray.length; i++ ){
			var item = mArray[ i ];
			functionName( item.key, item.value, item.memo );
		}
	}

	return this;
}

function findEmailAddressInText( text ){
	var temp;
	temp = text.toString();
	if( ! temp ) return null; 
	temp = temp.match( regexpCache.emailAddress );
	if( ! temp || temp.length == 0 ) return null; 
	return temp[0];
}

//	note:	must set returned timer to var with long life scope
function runFuctionAfterDelay( runFunction, delay ) {
    var timer = Components.classes["@mozilla.org/timer;1"].createInstance(Components.interfaces.nsITimer);
    var callback = { notify: runFunction };
    timer.initWithCallback( callback, delay, timer.TYPE_ONE_SHOT );
    return timer;
}	

//	note:	must set returned timer to var with long life scope
function runFuctionInParallel( runFunction ) {
	return runFuctionAfterDelay( runFunction, 0 );
}	


function classUUID1(){

	this.makeUUID = function makeUUID(){
		// JavaScript Version of UUID implementation.
		// Copyright 2006 Erik Giberti, all rights reserved.
		// Loose interpretation of the specification DCE 1.1: Remote Procedure Call
		// described at http://www.opengroup.org/onlinepubs/009629399/apdxa.htm#tagtcjh_37
		// since JavaScript doesn't allow access to internal systems, the last 48 bits 
		// of the node section is made up using a series of random numbers (6 octets long).
		//  
		var dg = uuid_timeInMs(new Date(1582, 10, 15, 0, 0, 0, 0));
		var dc = uuid_timeInMs(new Date());
		var t = dc - dg;
		var h = '-';
		var tl = uuid_getIntegerBits(t,0,31);
		var tm = uuid_getIntegerBits(t,32,47);
		var thv = uuid_getIntegerBits(t,48,59) + '1'; // version 1, security version is 2
		var csar = uuid_getIntegerBits(uuid_randrange(0,4095),0,7);
		var csl = uuid_getIntegerBits(uuid_randrange(0,4095),0,7);
	
		// since detection of anything about the machine/browser is far to buggy, 
		// include some more random numbers here
		// if nic or at least an IP can be obtained reliably, that should be put in
		// here instead.
		var n = uuid_getIntegerBits(uuid_randrange(0,8191),0,7) + 
				uuid_getIntegerBits(uuid_randrange(0,8191),8,15) + 
				uuid_getIntegerBits(uuid_randrange(0,8191),0,7) + 
				uuid_getIntegerBits(uuid_randrange(0,8191),8,15) + 
				uuid_getIntegerBits(uuid_randrange(0,8191),0,15); // this last number is two octets long
		return tl + h + tm + h + thv + h + csar + csl + h + n; 
	}

	//
	// GENERAL METHODS (Not instance specific)
	//

	// Pull out only certain bits from a very large integer, used to get the time
	// code information for the first part of a UUID. Will return zero's if there 
	// aren't enough bits to shift where it needs to.
	function uuid_getIntegerBits(val,start,end){
		var base16 = uuid_returnBase(val,16);
		var quadArray = new Array();
		var quadString = '';
		var i = 0;
		for(i=0;i<base16.length;i++){
			quadArray.push(base16.substring(i,i+1));	
		}
		for(i=Math.floor(start/4);i<=Math.floor(end/4);i++){
			if(!quadArray[i] || quadArray[i] == '') quadString += '0';
			else quadString += quadArray[i];
		}
		return quadString;
	}

	// Numeric Base Conversion algorithm from irt.org
	// In base 16: 0=0, 5=5, 10=A, 15=F
	function uuid_returnBase(number, base){
		//
		// Copyright 1996-2006 irt.org, All Rights Reserved.	
		//
		// Downloaded from: http://www.irt.org/script/146.htm	
		// modified to work in this class by Erik Giberti
		var convert = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
	    if (number < base) var output = convert[number];
	    else {
	        var MSD = '' + Math.floor(number / base);
	        var LSD = number - MSD*base;
	        //        if (MSD >= base) var output = this.returnBase(MSD,base) + convert[LSD];
	        if (MSD >= base) var output = uuid_returnBase(MSD,base) + convert[LSD];
	        else var output = convert[MSD] + convert[LSD];
	    }
	    return output;
	}

	// This is approximate but should get the job done for general use.
	// It gets an approximation of the provided date in milliseconds. WARNING:
	// some implementations of JavaScript will choke with these large numbers
	// and so the absolute value is used to avoid issues where the implementation
	// begin's at the negative value.
	function uuid_timeInMs(d){
		var ms_per_second = 100; // constant
		var ms_per_minute = 6000; // ms_per second * 60;
		var ms_per_hour   = 360000; // ms_per_minute * 60;
		var ms_per_day    = 8640000; // ms_per_hour * 24;
		var ms_per_month  = 207360000; // ms_per_day * 30;
		var ms_per_year   = 75686400000; // ms_per_day * 365;
		return Math.abs((d.getUTCFullYear() * ms_per_year) + (d.getUTCMonth() * ms_per_month) + (d.getUTCDate() * ms_per_day) + (d.getUTCHours() * ms_per_hour) + (d.getUTCMinutes() * ms_per_minute) + (d.getUTCSeconds() * ms_per_second) + d.getUTCMilliseconds());
	}

	// pick a random number within a range of numbers
	// int c randrange(int a, int b); where a <= c <= b
	function uuid_randrange(min,max){
		var num = Math.round(Math.random() * max);
		if(num < min){ 
			num = min;
		} else if (num > max) {
			num = max;
		}
		return num;
	}

}

function classUUID2(){
	
	function S4() {
		return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
	}

	this.makeUUID = function makeUUID(){
		return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());	
	}

}	
