//	ADDRESS BOOK

var log = {};

function componentServiceInitialize( object ){
	log = object.log;
}

function TEST(){

	log.thisLevel( log.level.debug );
	
	log.debug('ADDRESS BOOK');
}


function makeNewAddressBook( bookName )
{
	var kLDAPDirectory = 0; // defined in nsDirPrefs.h
	var kPABDirectory  = 2; // defined in nsDirPrefs.h
	
	var properties = Components.classes["@mozilla.org/addressbook/properties;1"]
		.createInstance(Components.interfaces.nsIAbDirectoryProperties);
	  	
	properties.description = bookName;
	properties.dirType = kPABDirectory;

	properties.fileName = carrot_garden.util.patternAddrBookFileName( bookName );

	var addressbook = Components.classes["@mozilla.org/addressbook;1"]
		.createInstance(Components.interfaces.nsIAddressBook);
	  
	addressbook.newAddressBook( properties );
	
	var uri = 'moz-abmdbdirectory://' + properties.fileName;
	
	return uri;

}


function getSelectedDirectory(){
	//	use mozilla:: ...
	return GetSelectedDirectory();
}

/*
 * 
function getBackupArgsForDirectoryUri( uri ) {
	
    var directory = getDirectoryFromUri(uri);
	var directoryProperties = directory.directoryProperties;
	var fileName = directoryProperties.fileName;
	
	var args = {
		sourceNativeFilePath : false, 
		sourceProfileFilePath: fileName, 
// ###		backupDirName: carrot_garden.backupDiskDirectoryName, 
		targetFileNamePrefix: fileName.replace('.mab', ''), 
		targetFileNameExt: "mab",
		makePrefixSubDir: true,	
	}

	return args;	
}
 */


function getDirectoryFromUri( uri ) {
	var RDF = Components.classes['@mozilla.org/rdf/rdf-service;1'].getService();
	var directory = RDF.GetResource(uri).QueryInterface(Components.interfaces.nsIAbDirectory);
	return directory;
}

function getDatabaseFromUri( uri ) {
	var addressBook = Components.classes[ "@mozilla.org/addressbook;1" ].createInstance();
	addressBook = addressBook.QueryInterface( Components.interfaces.nsIAddressBook );
	database = addressBook.getAbDatabaseFromURI( uri );
	return database;
}

function getAbSession(){
	//	http://www.xulplanet.com/references/xpcomref/ifaces/nsIAddrBookSession.html
	var abSession = Components.classes["@mozilla.org/addressbook/services/session;1"]
		.getService().QueryInterface(Components.interfaces.nsIAddrBookSession);
	return 	abSession;
}

function locateDbCard( uri, attribute, value ){
	var directory = getDirectoryFromUri( uri );
	var database = getDatabaseFromUri( uri );
	var card = database.getCardFromAttribute( directory, attribute, value, false );
	return card;
}

function addCardInfoToDirectoryUri( cardInfo, directoryUri ){
	
	var contact = new classContact();
	var abCard = contact.setCard( cardInfo )

	var dir  = getDirectoryFromUri( directoryUri )
	var newCard = dir.addCard ( abCard )
	
    var mdbCard = newCard.QueryInterface ( Components.interfaces.nsIAbMDBCard );
		
}

function classContact() {

	var util = carrot_garden.util;

	var fieldId;
	
    var abCardInst = Components.classes["@mozilla.org/addressbook/cardproperty;1"].createInstance();
    this.abCard = abCardInst.QueryInterface(Components.interfaces.nsIAbCard);	
    
	this.setCard = function setCard ( cardInfo ){
	
	    for ( var fn in this.fields )
	    {
	        if (( cardInfo[fn] == undefined ) || ( this.fields[fn] == '*IGNORE*'))
	            continue;
			//log.debug( "Field: " + fn + " cardInfo: " + cardInfo[fn] )
	        this.abCard[ this.fields[ fn ] ] = cardInfo[ fn ];
	    }	
	    return this.abCard;
	}

	this.normalizeCard = function normalizeCard ( card ){

		card.firstName = util.patternPersonName( card.firstName );
		card.lastName  = util.patternPersonName( card.lastName );
		
		if ( card.displayName == '' ){
			card.displayName = card.firstName + ' ' + card.lastName;
		} else {
			card.displayName = util.patternPersonName( card.displayName );
		}
		
	
		card.primaryEmail = card.primaryEmail.toLowerCase();
		card.secondEmail = card.secondEmail.toLowerCase();
	
		//log.debug( card.primaryEmail );
	
		return card;
	}	

	this.mergeCard = function mergeCard ( sourceCard, targetCard ){
	
	    for ( var fn in this.fields )
	    {
	    	fieldId = this.fields[fn];
	
	        //log.debug ( 'fn ' + fn + ' s ' + sourceCard[fieldId] + ' t ' + targetCard[fieldId] );
	        
	        if ( 
	        	( fieldId == 'notes' )  && 
	        	( sourceCard[ fieldId ] != null ) && 
	        	( targetCard[ fieldId ].toString != '' ) 
	        	) {
		        targetCard[ fieldId ] = targetCard[ fieldId ] + '\n' + sourceCard[ fieldId ];
	        }
	        if (
	        	( fieldId == '*IGNORE*') ||
	        	( sourceCard[ fieldId ] == undefined ) || 
	        	( sourceCard[ fieldId ] == '' ) || 
	        	( targetCard[ fieldId ] != '' )
	        	) {
	        	continue;
	        } else {
		        targetCard[fieldId] = sourceCard[fieldId];
				//log.debug( "Field: " + fn + ": " + targetCard[fieldId] )
	        }
	    }	
	}
    
}


classContact.prototype.fields = {
	
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


function getCardFromItem( item ){
	var card = item.QueryInterface( Components.interfaces.nsIAbCard );
	return card;
}

function mergeCardItems ( sourceItem, targetItem ){
	var sourceCard = getCardFromItem( sourceItem );
	var targetCard = getCardFromItem( targetItem );
	
	var contact = new classContact();
	
	contact.mergeCard ( sourceCard, targetCard );
	
}

function deleteCardFromDirectory ( card, directory ){
	var cardsList = Array();
	cardsList.push( card );
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


	
	
function getCardsArrayFromDirectory( directory ) {
	cardsArray = new Array();
    try {
		var childCards = directory.childCards;
        childCards.first();	//	thid will throw exeption if childCards is empty
        while( true ) {
        	cardsArray.push( getCardFromItem( childCards.currentItem() ) );
            childCards.next();	//	thid will throw exeption if childCards is at the end
        }
    } catch( ex ) {	//	noop
    }
    return cardsArray;
}

//	generate sort of 'GUID'
function getCardHash( card ){
	var hash = '';
	if ( card.primaryEmail != '' ) {
		hash = card.primaryEmail;
	} else {
		hash = card.firstName + card.lastName + card.displayName;
	}
	return hash.toLowerCase();
}


function classDirectoryWideOperation( window ){

	var directoryUri = '';
	var directory = null;
    var card = null; 
    var cardsArray = Array(); 
    var cardsDelete = Array(); 
    var cardsHash = Object(); 
	var hash = '';
	var contact = new classContact();
	
	var Init = function Init(){
		directory = getDirectoryFromUri( directoryUri );
	    cardsArray = getCardsArrayFromDirectory( directory );
	    cardsDelete = new Array();
		cardsHash = new Object(); 
	}
	var Exit = function Exit(){
	    cardsArray = null;
	    cardsDelete = null;
		cardsHash = null; 
		}
	var Noop = function Noop(){	//	no operation, idle function
	}

	var progressMeter = function emptyProgressMeter(){	//	place holder; will be overloaded;
	}
	
	this.loadMeter = function loadMeter ( meterFunction ){
//		log.debug('loadMeter')
		if( meterFunction ){
			progressMeter = meterFunction;
		} else {	//	see progressMeter.js, progressMeter.xul
	 		progressMeter = function localMeter ( agrs ){	// expects args object: { Init: someInit, Loop: someLoop, Exit: someExit }
				var size = agrs.Init();						//	with 3 functions someInit(k), someLoop(k), someExit(k) 
				for ( var k = 0; k < size; k++ ) {
					agrs.Loop(k);
				}
				agrs.Exit();
			}
		}
	}

	//	merge operation::

	var mergeInit = function mergeInit () {
		return cardsArray.length;	//	size of K iteration, starting with 0
	}
	var mergeLoop = function mergeLoop (K) {
        card = cardsArray[K];
        hash = getCardHash( card );

		//	detect duplicates based on 'hash UUID'
		if( cardsHash[hash] == undefined ){	
			cardsHash[hash] = {card: null, mark: null};
			cardsHash[hash].card = card;
			cardsHash[hash].mark = false;
		} else {
			contact.mergeCard ( card, cardsHash[hash].card );
			cardsHash[hash].mark = true;
			cardsDelete.push( card );
		}
		return 'scanned: ' + hash;
	}
	var commitInit = function commitInit (){
		cardsArray = new Array();
	    for ( hash in cardsHash ){
			if ( cardsHash[hash].mark ) {
		    	card = cardsHash[hash].card;
		    	cardsArray.push( card );
			}
	    }
		return cardsArray.length;	//	size of K iteration, starting with 0
	}
	var commitLoop = function commitLoop (K){
    	card = cardsArray[K];
    	hash = getCardHash( card );
		card.editCardToDatabase( directoryUri );
		return 'merged: ' + hash;	//	size of K iteration, starting with 0
	}

	var deleteInit = function deleteInit (){
		return cardsDelete.length;	//	size of K iteration, starting with 0
	}
	var deleteLoop = function deleteLoop( K ){
    	card = cardsDelete[ K ];
    	hash = getCardHash( card );
		deleteCardFromDirectory( card, directory );
		return 'deleted: ' + hash;	//	size of K iteration, starting with 0
	}
	
	this.doMerge = function doMerge( uri ) {
		directoryUri = uri;
		Init();
		progressMeter( window, { Init: mergeInit,  Loop: mergeLoop,  Exit: Noop });
		progressMeter( window, { Init: commitInit, Loop: commitLoop, Exit: Noop });
		progressMeter( window, { Init: deleteInit, Loop: deleteLoop, Exit: Noop });
		Exit();
	}

	//	normalize operation::
	
	var normalizeInit = function normalizeInit () {
		return cardsArray.length;	//	size of K iteration, starting with 0
	}
	var normalizeLoop = function normalizeLoop( K ) {
        card = contact.normalizeCard( cardsArray[ K ] );
    	hash = getCardHash( card );
        card.editCardToDatabase( directoryUri );
		return 'normalized: ' + hash;
	}
	this.doNormalize = function doNormalize ( uri ) {
		directoryUri = uri;
		Init();
		progressMeter( window, { Init: normalizeInit, Loop: normalizeLoop, Exit: Noop });
		Exit();
	}

	//	for silent operation	
//	log.debug('XXX-YYY-123')
	this.loadMeter();
}
