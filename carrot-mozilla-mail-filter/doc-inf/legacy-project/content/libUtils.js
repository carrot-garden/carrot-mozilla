

//	split multiple email terms into an array
//	such as = "Bill Gates" <b.gates@ms.com>, 'Joe Doe' <j.doe@jd.com>
//
function emailTermsFromHeader ( header ) { 
	
	var val = header.match ( regexpCache.emailTerm )

//	dump2 ("in  " + header)
	
	if ( val ) {
//		dump2 ("out " + val.length)
		return val
	}else{
//		dump2 ("out ### no match: " + header)
		return ""
	}
	
}


//	split multiple email terms into an array
//	such as = "Bill Gates" <b.gates@ms.com>, 'Joe Doe' <j.doe@jd.com>
//
function emailTermsFromHeader_Slow ( header ) { 

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

//	dump2 ("in  " + header)
	
	if ( val ) {
//		dump2 ("out " + val.length)
		return val
	}else{
		dump2 ("out ### no match: " + header)
		return ""
	}
	
}



//	expects single email address term
//	such as = "Bill Gates" <b.gates@ms.com>
//
function emailFromEmailTerm ( emailAddressTerm ) { 
	
	return (regexpCache.emailAddress).exec(emailAddressTerm)[0];
}


//	expects single email address term
//	such as = "Bill Gates" <b.gates@ms.com>
//
function nameFromEmailTerm ( emailAddressTerm ) { 

	var displayName = "";

	//	remove email address
	displayName =  emailAddressTerm.replace(regexpCache.emailAddress,"")

	// " ' < > = remnants of  "'Firstname Lastname [ Comany Name ]'" <prefix@domain.com>
	displayName = displayName.replace(regexpCache.addressBrackets," ");

	// remove non-ascii encoded name parts, such as =?iso-8859-1?q?j=f6rgen_stenkvist?=
	displayName = displayName.replace(regexpCache.quotePrintable," ");

	// if comma-separated, then swap Lastname, Firstname -> Firstname Lastname
	displayName =displayName.replace(regexpCache.swapCommaSep, "$2 $1"); 

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


function nameFromEmail ( emailSource ) {

//	dump2 ( "start: "+ emailSource );

	var emailAddress = emailSource.toString();
	var displayName = "";

	if ( ( ! emailAddress.match( /.+\@.+/g) )  ) { 
		//	can not split any parts 
//		dump2 ("can not split");
		return ""; 
	};

	var emailParts  = emailAddress.split(/\@/);
	var emailPrefix = emailParts[0];

	displayName = emailPrefix.replace(/\./g," ");
	displayName = capitalLetters ( displayName );

//	dump2 ( "finish: "+ displayName );

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


function sortNumber( a, b )
{
	return (a - b);
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

function dump2 (str)
{
//	dump ( str + "\n");
	carrotConsoleService.logStringMessage(str);
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

	//dump2 ("convertToUri in : " + URI);

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
		alert ( "convertToUri: do not know how to convert -\n\n" + URI );
	}
	
	//dump2 ("convertToUri out: " + newURI);
	//alert ("---");
	
	return newURI;
}



var carrotConsoleService = Components.classes['@mozilla.org/consoleservice;1'].
			getService(Components.interfaces.nsIConsoleService);




function backupFileByArgs ( args ) {

//	args.sourceNativeFilePath 
//	args.sourceProfileFilePath 
//	args.backupDirName 
//	args.targetFileNamePrefix 
//	args.targetFileNameExt
//	args.makePrefixSubDir	

dump2('1 ' + args.sourceNativeFilePath )
dump2('2 ' + args.sourceProfileFilePath )
dump2('3 ' + args.backupDirName )
dump2('4 ' + args.targetFileNamePrefix )
dump2('5 ' + args.targetFileNameExt)
dump2('6 ' + args.makePrefixSubDir	)

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
	
	dump2 (backupFilePath);
	
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



function backupFileByArgs_2 ( args ) {

//	args.sourceNativeFilePath 
//	args.sourceProfileFilePath 
//	args.backupDirName 
//	args.targetFileNamePrefix 
//	args.targetFileNameExt
//	args.makePrefixSubDir	

dump2('sourceNativeFilePath   ' + args.sourceNativeFilePath )
dump2('sourceProfileFilePath  ' + args.sourceProfileFilePath )
dump2('backupDirName          ' + args.backupDirName )
dump2('targetFileNamePrefix   ' + args.targetFileNamePrefix )
dump2('targetFileNameExt      ' + args.targetFileNameExt)
dump2('makePrefixSubDir       ' + args.makePrefixSubDir	)

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
	var backupDirPath = fileUtils.append ( profileDirPath, 'temp_files' );
	var backupDir = new Dir(backupDirPath)
	rv = backupDir.create();
	
	alert (backupDir.exists())

	var dirService = Components.classes["@mozilla.org/file/directory_service;1"].getService(Components.interfaces.nsIProperties)
	var tmpDir = dirService.get("TmpD", Components.interfaces.nsIFile);
	var propInstant = Components.classes["@mozilla.org/supports-array;1"].createInstance();
	var propArray  = propInstant.QueryInterface(Components.interfaces.nsISupportsArray);    

		var file = Components.classes["@mozilla.org/file/directory_service;1"]
		                     .getService(Components.interfaces.nsIProperties)
		                     .get("ProfD", Components.interfaces.nsIFile);
		file.append("DIR_DIR_3");
		if( !file.exists() || !file.isDirectory() ) {   // if it doesn't exist, create
		   file.create( Components.interfaces.nsIFile.DIRECTORY_TYPE, 0664 );
		}

//	propArray.AppendElement( backupDir );
	propArray.AppendElement( file );
	dirService.set("TmpD", propArray );


	var profileDirPath = dirUtils.getMozUserHomeDir();
	var tempDirPath = dirUtils.getTmpDir();
	var backupDirPath = fileUtils.append ( tempDirPath, args.backupDirName )

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
	
	dump2 (backupFilePath);
	
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

