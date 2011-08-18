//	FORMS

var log = {};

function componentServiceInitialize( object ){
	log = object.log;
}



function progressMeter( window, dialogArguments ){
	window.openDialog( 
		carrot_garden.extensionContentWindow + 'progressMeter.xul',
		carrot_garden.extensionName, 'chrome,modal,centerscreen',
		dialogArguments);
}


function formFolderInfo( window, formArguments ){
	window.openDialog( 
		carrot_garden.extensionContentWindow + 'formFolderInfo.xul',
		carrot_garden.extensionName, 'chrome,modal,resizable,centerscreen',
		formArguments);
}


//	expects messenger.xul OR messageWindow.xul context

function classMakeFolder( window ){

	var document =  window.document;
	var alert =  window.alert;
	
	var util = carrot_garden.util;
	var pref = carrot_garden.pref;
	var mailFolders = carrot_garden.mailFolders;
	var mailFilters = carrot_garden.mailFilters;
	var addrBooks = carrot_garden.addrBooks;
	
	var input = util.getPopupNodeAttribute( document, "emailAddress", "displayName" );
	var emailAddress = input.emailAddress;
	var displayName = input.displayName;
	var emailTerm = displayName + ' <' + emailAddress + '>';
	
	var domainName = util.getDomainFromEmailAddress( emailAddress );
	var companyName = util.getCompanyNameFromDomain( domainName );

	var args = {};

	function validateCustomerArgs( args ) {
		
		pref.setNode( 'mailSettings.<otherSubjectKeyword>', util.patternCompanyName( args.subjectKeyword ) );
		pref.setNode( 'mailSettings.<otherToOrCcKeyword>', util.patternCompanyName( args.toccKeyword ) );
	
		validateCommonArgs( args );
	}

	function validateEventsNewsArgs( args ) {
		
		pref.setNode( 'mailSettings.<otherSubjectKeyword>', util.patternCompanyName( args.subjectKeyword ) );
		pref.setNode( 'mailSettings.<otherToOrCcKeyword>', util.patternCompanyName( args.toccKeyword ) );
	
		validateCommonArgs( args );
	}

	function validateManagerArgs( args ) {
		
		pref.setNode( 'mailSettings.<otherSubjectKeyword>', ( args.subjectKeyword ) );
		pref.setNode( 'mailSettings.<otherToOrCcKeyword>', ( args.toccKeyword ) );
	
		validateCommonArgs( args );
	}

	function validateVendorArgs( args ) {
		
		pref.setNode( 'mailSettings.<otherSubjectKeyword>', ( args.subjectKeyword ) );
		pref.setNode( 'mailSettings.<otherToOrCcKeyword>', ( args.toccKeyword ) );
	
		validateCommonArgs( args );
	}

	function validateCommonArgs( args ) {

		log.thisLevel( log.level.debug );

		pref.setNode( 'mailSettings.<otherEmailPrefix>', util.patternEmailPrefix( args.anchorName ) );
		pref.setNode( 'mailSettings.<otherEmailSuffix>', util.patternDomainName( args.anchorName ) );
		pref.setNode( 'mailSettings.<otherEmailAddress>', ( args.emailAddress ) );
		pref.setNode( 'mailSettings.<otherPersonName>', util.patternPersonName( args.inputName ) );
		pref.setNode( 'mailSettings.<otherCompanyName>', util.patternCompanyName( args.inputName ) );

		

		var prefPrefix = args.prefPrefix + '.folderTemplate';
			

		var folderName = pref.getPref( prefPrefix + '.folderName' );
		args.folderName = util.substituteVariables( folderName );
	
		log.debug('args.parentUri: ' + args.parentUri );
		
		var parentFolder = mailFolders.getFolderFromUri( args.parentUri );
		var parentFolderNameLong = mailFolders.getLongFolderNameFromFolder( parentFolder );
		args.folderNameLong = parentFolderNameLong + '/' + args.folderName;
	
		pref.setNode( 'mailSettings.<otherFolderUri>', 
			util.convertToUri( args.parentUri + '/' + args.folderName ) );
	

		var filterName = pref.getPref( prefPrefix + '.filterName' );
		args.filterName = util.substituteVariables( filterName );
	
		var filterTerms = pref.getPref( prefPrefix + '.filterTerms' );
		args.filterTerms = util.substituteVariables( filterTerms );
			
		var filterActions = pref.getPref( prefPrefix + '.filterActions' );
		args.filterActions = util.substituteVariables( filterActions );
	
	}

	function initCustomer(){
		
		//log.thisLevel( log.level.debug );
		
		var prefPrefix = 'mailStore.folderCustomers'; 
		
		args = {
			prefPrefix: prefPrefix,
			navigateUri : pref.getNode( prefPrefix + '.navigateUri' ),
			parentUri : pref.getNode( prefPrefix + '.parentUri' ),
			pickerId : 'runFiltersFolder',
			valid : false,
			emailAddress: emailAddress,
			emailTerm: emailTerm,
			anchorName : domainName,
			inputName : companyName,
			subjectKeyword : companyName,
			toccKeyword : companyName,
			folderName: 'IBM Corp @ibm.com',
			folderNameLong: '/.../IBM Corp @ibm.com',
			filterName: 'Account: IBM Corp @ibm.com',
			filterTerms : 'or (from,contains,ibm)',
			validate : validateCustomerArgs,
			collapseXul : [ 'box.serverSelector', ],
			readonlyXul : [ 'emailTerm', 'serverSelector' ],
		};
		
		log.debug( '\n navigateUri: ' + args.navigateUri + '\n parentUri: ' + args.parentUri );
	}
	
	function initEventsNews(){

		//log.thisLevel( log.level.debug );

		var prefPrefix = 'mailStore.folderEventsNews'; 

		args = {
			prefPrefix: prefPrefix,
			navigateUri : pref.getNode( prefPrefix + '.navigateUri' ),
			parentUri : pref.getNode( prefPrefix + '.parentUri' ),
			pickerId : 'runFiltersFolder',
			valid : false,
			emailAddress: emailAddress,
			emailTerm: emailTerm,
			anchorName : domainName,
			inputName : companyName,
			subjectKeyword : companyName,
			toccKeyword : companyName,
			folderName: 'IBM Corp @ibm.com',
			folderNameLong: '/.../IBM Corp @ibm.com',
			filterName: 'Account: IBM Corp @ibm.com',
			filterTerms : 'or (from,contains,ibm)',
			validate : validateEventsNewsArgs,
			collapseXul : [ 'box.serverSelector', ],
			readonlyXul : [ 'emailTerm', 'serverSelector' ],
		};
	}
	
	function initManager(){

		log.thisLevel( log.level.debug );

		var prefPrefix = 'mailStore.folderManagers'; 

		args = {
			prefPrefix: prefPrefix,
			navigateUri : pref.getNode( prefPrefix + '.navigateUri' ),
			parentUri : pref.getNode( prefPrefix + '.parentUri' ),
			pickerId : 'runFiltersFolder',
			valid : false,
			emailAddress: emailAddress,
			emailTerm: emailTerm,
			anchorName : emailAddress,
			inputName : displayName,
			subjectKeyword : displayName,
			toccKeyword : displayName,
			folderName: 'Joe Doe j.dow@ibm.com',
			folderNameLong: '/.../IBM Corp @ibm.com',
			filterName: 'Manager: Joe Doe j.dow@ibm.com',
			filterTerms : 'or (from,contains,j.dow@ibm.com)',
			validate : validateManagerArgs,
			collapseXul : [ 'box.serverSelector', 'box.subjectKeyword', 'box.toccKeyword', ],
			readonlyXul : [ 'emailTerm', 'serverSelector',  ],
		};

		log.debug( '\n navigateUri: ' + args.navigateUri + '\n parentUri: ' + args.parentUri );
	}
	
	function initVendor(){

		var prefPrefix = 'mailStore.folderVendors'; 

		args = {
			prefPrefix: prefPrefix,
			navigateUri : pref.getNode( prefPrefix + '.navigateUri' ),
			parentUri : pref.getNode( prefPrefix + '.parentUri' ),
			pickerId : 'runFiltersFolder',
			valid : false,
			emailAddress: emailAddress,
			emailTerm: emailTerm,
			anchorName : domainName,
			inputName : companyName,
			subjectKeyword : companyName,
			toccKeyword : companyName,
			folderName: 'Joe Doe j.dow@ibm.com',
			folderNameLong: '/.../IBM Corp @ibm.com',
			filterName: 'Vendor: Joe Doe j.dow@ibm.com',
			filterTerms : 'or (from,contains,j.dow@ibm.com)',
			validate : validateVendorArgs,
			collapseXul : [ 'box.serverSelector', ],
			readonlyXul : [ 'emailTerm', 'serverSelector',  ],
		};
	}
	
	function initEmployer(){

		var prefPrefix = 'mailStore.folderEmployers'; 

		args = {
			prefPrefix: prefPrefix,
			navigateUri : pref.getNode( prefPrefix + '.navigateUri' ),
			parentUri : pref.getNode( prefPrefix + '.parentUri' ),
			pickerId : 'runFiltersFolder',
			valid : false,
			emailAddress: emailAddress,
			emailTerm: emailTerm,
			anchorName : domainName,
			inputName : companyName,
			subjectKeyword : companyName,
			toccKeyword : companyName,
			folderName: 'Joe Doe j.dow@ibm.com',
			folderNameLong: '/.../IBM Corp @ibm.com',
			filterName: 'Employer: Joe Doe j.dow@ibm.com',
			filterTerms : 'or (from,contains,j.dow@ibm.com)',
			validate : validateVendorArgs,
			collapseXul : [ 'box.serverSelector', ],
			readonlyXul : [ 'emailTerm', 'serverSelector',  ],
		};
	}
	
	function execute() {

//		log.thisLevel( log.level.debug );

		if ( args.valid ) {
	/*	XXX todo:	
			///	new folder and filter
			var folder = createAccountFolderFilter ( gNewFolderInfo ).folder;
			if ( ! folder ) { alert ("acc create err 1"); return; };
		
			//	SF: contracts, invoice, etc
			accountsSfGenericsCreate ( folder );
	
			//	SF: projects
			accountsSfProjectCreate ( folder )	
		
			//	SF: this person
			memberSfCreate( folder, gNewFolderInfo.person, gNewFolderInfo.email )
		
			// re-arrange filters;
			carrotFilterSort (); 
	
			//	safety backups
			backupFiltersFile ()
			backupVirtualFoldersFile ();
			
			if ( Confirm ( window, "Run Filters on this folder?" ) ) {
				// apply filters to current folder
				goDoCommand('cmd_applyFilters'); 
			}
			
			//SelectFolder(folder.URI);
	*/		
	
			for( var item in args ) {
				log.debug( 'item: ' + item + ' value: ' + args[item] );
			}
	
			var msg;
	
			if ( mailFolders.existsParentFolderUriChildName( args.parentUri, args.folderName ) ){
				msg = 'folder exists, terminating: ' + args.folderName ;
				util.Alert( window, msg );
				log.warning( msg );
				return;
			}
	
			var folder = mailFolders.makeFolder( window, args.parentUri, args.folderName );
			if ( folder == null ) { 
				msg = 'can not make folder, terminating: ' + args.folderName ;
				alert ( msg ); 
				log.warning( msg )
				return; 
			};
	
			var filter = mailFilters.makeFilter( folder, args.filterName, args.filterTerms, args.filterActions );
			if ( filter == null ) { 
				msg = 'can not make filter, terminating: ' + args.filterName;
				alert ( msg ); 
				log.warning( msg )
				return; 
			};
			
			
			var cardInfo = {
				DisplayName: displayName,
				BusinessEmail: emailAddress,
			};
			//	XXX todo - what if there is no directory / pref / etc.
			var directoryUri = pref.getPref( 'addressBooks.not_junk.uri' );
			addrBooks.addCardInfoToDirectoryUri( cardInfo, directoryUri );
			
			
			//	XXX todo - add sort filters
	
			//	XXX	todo fix - this is meaningless in messageWindow.xul context (?)
			if ( util.Confirm( window, "Run Filters on this folder?" ) ) {
				// apply filters to current folder
				//
				//	globalOverlay.js::
				window.goDoCommand('cmd_applyFilters'); 
				//	msgMail3PaneWindow.js::
				window.SelectFolder( util.convertToUri( args.parentUri + '/' + args.folderName ) );	
			}
		
		}
	}
	
	this.makeCustomer = function makeCustomer(){
		initCustomer();
		formFolderInfo( window, args );
		execute(); 
	}

	this.makeEventsNews = function makeEventsNews(){
		initEventsNews();
		formFolderInfo( window, args );
		execute(); 
	}
	
	this.makeManager = function makeManager(){
		initManager();
		formFolderInfo( window, args );
		execute(); 
	}
	
	this.makeVendor = function makeVendor(){
		initVendor();
		formFolderInfo( window, args );
		execute(); 
	}
	
	this.makeEmployer = function makeEmployer(){
		initEmployer();
		formFolderInfo( window, args );
		execute(); 
	}
	
}



/*
 * 
 	var parser = emailParser ( emailAddress, displayName ) ;
	gNewFolderInfo.parentURI = gAccountsFolderURI;
	gNewFolderInfo.company = parser.company;
	gNewFolderInfo.domain = parser.domain;
	gNewFolderInfo.person = parser.displayName;
	gNewFolderInfo.email = parser.emailAddress;
	gNewFolderInfo.project = parser.company;
	gNewFolderInfo.valid = false;
 
 * * 
 * 
 */


function formCopySent( window, formArguments ){
	window.openDialog( 
		carrot_garden.extensionContentWindow + 'formCopySent.xul',
		carrot_garden.extensionName, 'chrome,modal,resizable,centerscreen',
		formArguments );
}



function setCopySentPref( window ){

	var alert = window.alert;

	var dsHandler = new classCopySentRdf();
	var ds = dsHandler.load();
	
	var args = {
		ds: ds, 
		valid : false,
		validate : function(){},
		collapseXul : [],//['box.personName','box.personFolder'],
		readonlyXul : [],
	};

	formCopySent( window, args );

	if ( args.valid ) alert('ok')

	dsHandler.save( ds );
	
}

function classCopySentRdf() {

	var rdf = carrot_garden.rdf;
	var pref = carrot_garden.pref;
	var NS = rdf.NS;

	var fcc_settings_rdf = 'mailFeatures.accountManager.parameters.fcc_settings_rdf';

    var accountManager = Components.classes["@mozilla.org/messenger/account-manager;1"]
    	.getService(Components.interfaces.nsIMsgAccountManager);
	
	var dsPrefString = null;
	var dsPref = null;

	function loadDsPref(){
		dsPrefString = pref.getPref( fcc_settings_rdf );
		//	log.debug( 'dsPrefString: ' + dsPrefString );
		dsPref = new rdf.RDFDataSource();
		dsPref.parseFromString( dsPrefString, rdf.rootUri + '/dsPrefString.rdf' );
	}
	
	function saveDsPref(){
		dsPrefString = dsPref.serializeToString();
	//	dsPrefString = dsPrefString.replace( /[\r\n\t]/gi, ' ' )
		pref.setPref( fcc_settings_rdf, dsPrefString );
	//	log.debug( dsPrefString );
		dsPref = null;	
	}

	this.load = function load(){
	
		loadDsPref()
			
		var ds = new rdf.RDFDataSource();
	
		var urnRoot = 'urn:root';
		var root = ds.getNode( urnRoot );
		root.makeSeq();
		
	    var allAccounts = accountManager.accounts;
	    var accountsCount = allAccounts.Count();
	    
	    for( var i = 0; i < accountsCount; i++ ) {
	 
	      var account = allAccounts.QueryElementAt( i, Components.interfaces.nsIMsgAccount );
	 		//log.debug(account.key)
	
	      var server = account.incomingServer;
			var urnAccount = urnRoot + ':' + account.key;
			var rdfAccount = root.addChild( urnAccount );
	 		rdfAccount.addTarget( NS.accountKey, account.key );
	 		rdfAccount.addTarget( NS.accountName, server.prettyName );
	 		rdfAccount.addTarget( NS.serverType, server.type );
	 		rdfAccount.addTarget( NS.isEditable, "false" );
	 		rdfAccount.addTarget( NS.rowStyle, "background-color: #bbbbbb;" );
			rdfAccount.makeSeq();
	 
	      var allIdentities=account.identities;
	      identitiesCount = allIdentities.Count();
	 
	      for (var j = 0; j < identitiesCount; j++) {
	 
	        var identity = allIdentities.QueryElementAt(j, Components.interfaces.nsIMsgIdentity);
	
			var urnIdentity = urnAccount + ':' + identity.key;
			var rdfIdentity = rdfAccount.addChild( urnIdentity );
	//		rdfIdentity.addTarget( NS.accountName, account.key );
			rdfIdentity.addTarget( NS.identityKey, identity.key );
			rdfIdentity.addTarget( NS.identityName, identity.identityName );
			rdfIdentity.addTarget( NS.fccEnabled, ( identity.doFcc == true ? "true" : "false" ) );
			var fccModes = ['Default','Special'];
			rdfIdentity.addTarget( NS.fccMode, ( identity.fccFolderPickerMode < 2 ? fccModes[ identity.fccFolderPickerMode ] : 'Unknown') );
			rdfIdentity.addTarget( NS.fccFolder , identity.fccFolder  );
	 		rdfIdentity.addTarget( NS.isEditable, "true" );
	// 		rdfIdentity.addTarget( NS.rowStyle, "background-color: #bbffbb;" );
			
			var prefNode = dsPref.getNode( urnIdentity );
	//		log.debug('prefFccCurrentEnabled 1 ' + prefNode.getValue() )
			
			var target = prefNode.getTarget( NS.fccCurrentEnabled );
			if( target == null ) {
				prefNode.addTarget( NS.fccCurrentEnabled, 'false' );
				target = prefNode.getTarget( NS.fccCurrentEnabled )
	//			log.debug('target == null')
			}
	//		log.debug('prefFccCurrentEnabled 2 ' + target.getValue() )
	
			rdfIdentity.addTarget( NS.fccCurrentEnabled, target.getValue()  );
			 
	      }
	    }
	  
	
	//	log.debug( ds.serializeToString() );
	//	ds.register();
	
		saveDsPref()
	
		return ds;

	}	

	this.save = function( ds ) {

		loadDsPref()
		
		var urnRoot = 'urn:root';
		
	    var allAccounts = accountManager.accounts;
	    var accountsCount = allAccounts.Count();
	    
	    for( var i = 0; i < accountsCount; i++ ) {
	 
			var account = allAccounts.QueryElementAt( i, Components.interfaces.nsIMsgAccount );

			var urnAccount = urnRoot + ':' + account.key;
	 
	      var allIdentities = account.identities;
	      identitiesCount = allIdentities.Count();
	 
	      for( var j = 0; j < identitiesCount; j++) {
	 
	        var identity = allIdentities.QueryElementAt(j, Components.interfaces.nsIMsgIdentity);
	
			var urnIdentity = urnAccount + ':' + identity.key;

			var rdfNode = ds.getNode( urnIdentity );
			var target = rdfNode.getTarget( NS.fccEnabled );
			if( target != null ) {
				identity.doFcc = target.getValue() == "true" ? true : false;
				log.debug('set 1: ' + urnIdentity )
			} else {
				log.debug('mismatch 1: ' + urnIdentity )
			}

			var target = rdfNode.getTarget( NS.fccCurrentEnabled );
			if( target != null ) {

				var value = target.getValue() // == "true" ? true : false;

				var prefNode = dsPref.getNode( urnIdentity );
				
				var target = prefNode.getTarget( NS.fccCurrentEnabled );
				if( target != null ) {
					prefNode.removeTarget( NS.fccCurrentEnabled, target );
				}
				prefNode.addTarget( NS.fccCurrentEnabled, value );
				log.debug('set 2: ' + urnIdentity )
			} else {
				log.debug('mismatch 2: ' + urnIdentity )
			}
	
	      }
	    }

		saveDsPref()
		
	}
		
}	



/*

 * function makeCustomerFolder( window ) {

	var document =  window.document;
	var alert =  window.alert;
	
	var util = carrot_garden.util;
	var pref = carrot_garden.pref;
	var mailFolders = carrot_garden.mailFolders;
	var mailFilters = carrot_garden.mailFilters;
	
	var input = util.getPopupNodeAttribute( document, "emailAddress", "displayName" );
	var emailAddress = input.emailAddress;
	var displayName = input.displayName;
	
	var domainName = util.getDomainFromEmailAddress( emailAddress );
	var companyName = util.getCompanyNameFromDomain( domainName );
	var subjectKeyword = companyName;
	var toccKeyword = companyName;
	
	var args = {
		navigateUri : pref.getNode( 'mailStore.folderCustomers.navigateUri' ),
		parentUri : pref.getNode( 'mailStore.folderCustomers.parentUri' ),
		pickerId : 'runFiltersFolder',
		valid : false,
		domainName : domainName,
		inputName : companyName,
		subjectKeyword : subjectKeyword,
		toccKeyword : toccKeyword,
		folderName: 'IBM Corp @ibm.com',
		filterName: 'Account: IBM Corp @ibm.com',
		filterTerms : 'or (from,contains,ibm)',
		validate : validateCompanyArgs,
		collapseXul : [],//['box.personName','box.personFolder'],
		readonlyXul : [],
	};

	formFolderInfo( window, args );

	if ( args.valid ) {
	
		///	new folder and filter
		var folder = createAccountFolderFilter ( gNewFolderInfo ).folder;
		if ( ! folder ) { alert ("acc create err 1"); return; };
	
		//	SF: contracts, invoice, etc
		accountsSfGenericsCreate ( folder );

		//	SF: projects
		accountsSfProjectCreate ( folder )	
	
		//	SF: this person
		memberSfCreate( folder, gNewFolderInfo.person, gNewFolderInfo.email )
	
		// re-arrange filters;
		carrotFilterSort (); 

		//	safety backups
		backupFiltersFile ()
		backupVirtualFoldersFile ();
		
		if ( Confirm ( window, "Run Filters on this folder?" ) ) {
			// apply filters to current folder
			goDoCommand('cmd_applyFilters'); 
		}
		
		//SelectFolder(folder.URI);
		var msg;

		if ( mailFolders.existsParentFolderUriChildName( args.parentUri, args.folderName ) ){
			msg = 'folder exists, terminating: ' + args.folderName ;
			util.Alert( window, msg );
			log.warning( msg );
			return;
		}

		var folder = mailFolders.makeFolder( window, args.parentUri, args.folderName );
		if ( folder == null ) { 
			msg = 'can not make folder: ' + args.folderName ;
			alert ( msg ); 
			log.warning( msg )
			return; 
		};

		var filter = mailFilters.makeFilter( folder, args.filterName, args.filterTerms, args.filterActions );
		if ( filter == null ) { 
			msg = 'can not make filter: ' + args.filterName;
			alert ( msg ); 
			log.warning( msg )
			return; 
		};
		
		//	XXX todo - add sort filters

		//	XXX	todo fix - this is meaningless in messageWindow.xul context (?)
		if ( util.Confirm( window, "Run Filters on this folder?" ) ) {
			// apply filters to current folder
			//
			//	globalOverlay.js::
			window.goDoCommand('cmd_applyFilters'); 
			//	msgMail3PaneWindow.js::
			window.SelectFolder( util.convertToUri( args.parentUri + '/' + args.folderName ) );	
		}
	
	}
}
  
 */	