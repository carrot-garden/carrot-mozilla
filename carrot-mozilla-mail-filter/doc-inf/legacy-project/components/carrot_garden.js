
//	carrot_garden: global object exposed via cgICarrotGarden
//	used for library function access;
//	libraries are stored in the 'carrot_garden.extensionContentInclude' folder
//	
//	XOR:
//	usage as service: if configured, will use single instance application-wide
//	var carrot_garden = Components.classes["@mozilla.org/carrot_garden/service;1"]
//		.getService(Components.interfaces.cgICarrotGarden).wrappedJSObject;
//
//	XOR:
//	usage as dom instance: if configured, will create new instance for each new window
//	var carrot_garden = carrot_garden.wrappedJSObject;
//
var carrot_garden = {};

//	collection of all component-related constants
var carrot_garden_compInfo = {

//	nsICategoryManager 
		//	called very early / very late
	topicXPComStartup: 'xpcom-startup',
	topicXPComShutdown: 'xpcom-shutdown',
		//	called after xpcom init
	topicAppStartup: 'app-startup',
		//	profile-initial-state	http://www.mozilla.org/projects/embedding/observer-topics.html
	topicProfileInitialState: 'profile-initial-state',
	topicProfileDoChange: 'profile-do-change',
		//	nsIClassInfo.flags must = DOM for global property to work
	topicJSGlobalProprty: 'JavaScript global property',
		
//	cgICarrotGarden
	serviceCID: Components.ID("{f3d43a2e-874f-46d5-8a8b-1c7421d6d3ce}"),
	serviceContractID: "@mozilla.org/carrot_garden/service;1",
	//	imortant: must match expected global dom object name
	serviceName: "carrot_garden",

}

var nsComponentsClasses = Components.classes;
var nsComponentsInterfaces = Components.interfaces;
var nsComponentsResults = Components.results;

//	defined in cgICarrotGarden.xpt
var cgICarrotGarden = nsComponentsInterfaces.cgICarrotGarden;

var nsIObserver = nsComponentsInterfaces.nsIObserver;
var nsIClassInfo = nsComponentsInterfaces.nsIClassInfo;
var nsIFactory = nsComponentsInterfaces.nsIFactory;
var nsISupports = nsComponentsInterfaces.nsISupports;

var nsIComponentRegistrar = nsComponentsInterfaces.nsIComponentRegistrar;
var nsICategoryManager = nsComponentsInterfaces.nsICategoryManager;

var nsIConsoleService = nsComponentsInterfaces.nsIConsoleService;
var nsIObserverService = nsComponentsInterfaces.nsIObserverService;
var nsIPrefBranch = nsComponentsInterfaces.nsIPrefBranch;

var mozIJSSubScriptLoader = nsComponentsInterfaces.mozIJSSubScriptLoader;

var nsReportError = Components.utils.reportError;

//	for adding observers in carrot_garden_classService
var observerService = nsComponentsClasses["@mozilla.org/observer-service;1"]
	.getService(nsIObserverService);

//	for local logging
var consoleService = nsComponentsClasses['@mozilla.org/consoleservice;1']
	.getService(nsIConsoleService);


//	log messages for this component
//	XXX todo make read pref
var logEnabled = false;

function logMessage ( str ){
	if( ! logEnabled ) return;
	var msg	= '';
	if( logMessage.caller == null ) {
		msg = 'global'; 
	} else {
		msg = logMessage.caller.name; 
		if ( msg == '' ) msg = 'anonymous';
	}
	msg = '[carrot_garden:' + msg + ']: ' + str; 
	consoleService.logStringMessage( msg );
}

//	var logComponentStart = false;


//	http://developer.mozilla.org/en/docs/How_to_Build_an_XPCOM_Component_in_Javascript
//
function NSGetModule( compMgr, fileSpec ) {
	logMessage('entry point to: components/carrot_garden.js')
    return carrot_garden_objectModule;
}

 
//	nsIModule		http://www.xulplanet.com/references/xpcomref/ifaces/nsIModule.html
//	nsIFactory		http://www.xulplanet.com/references/xpcomref/ifaces/nsIFactory.html
//
var carrot_garden_objectModule = {

     // nsIFactory::
     //
     objectFactory: {

         createInstance: function factory_createInstance( outer, iid ) {

			logMessage('iid: ' + iid )

			if( outer != null ) {
				nsReportError( 'carrot_garden: external module requested aggregation' )
            	throw nsComponentsResults.NS_ERROR_NO_AGGREGATION;
			}
 
 			var thisClass = new carrot_garden_classService();
 			thisClass = thisClass.QueryInterface( iid );
 			
			return thisClass;
         }
     },

	//	nsIModule::
     canUnload: function module_canUnload( compMgr ) {
		logMessage('canUnload')
		return true;
     },

	//	nsIModule::
     getClassObject: function module_getClassObject( compMgr, cid, iid) {

		logMessage('cid: ' + cid + ' iid: ' + iid)

        if( ! cid.equals( carrot_garden_compInfo.serviceCID ) )
			throw nsComponentsResults.NS_ERROR_NO_INTERFACE;

		if( ! iid.equals(nsIFactory))
			throw nsComponentsResults.NS_ERROR_NOT_IMPLEMENTED;

		return this.objectFactory;
     },
  
	//	nsIModule::
	registerSelf: function module_registerSelf( compMgr, fileSpec, location, type) {

		logMessage( 'started' );

		compMgr = compMgr.QueryInterface(nsIComponentRegistrar);

		compMgr.registerFactoryLocation( 
         	carrot_garden_compInfo.serviceCID, 
         	carrot_garden_compInfo.serviceName, 
         	carrot_garden_compInfo.serviceContractID,
			fileSpec, location, type );

		catyMgr = nsComponentsClasses["@mozilla.org/categorymanager;1"]
			.getService(nsICategoryManager);

		catyMgr.addCategoryEntry(
			carrot_garden_compInfo.topicXPComStartup, 
//			carrot_garden_compInfo.topicAppStartup, 
			carrot_garden_compInfo.serviceName, 
			carrot_garden_compInfo.serviceContractID, 
			true, true);

		logMessage( 'finished' );

     },
 
	//	nsIModule::
	unregisterSelf: function module_unregisterSelf( compMgr, fileSpec, location ) {

		logMessage( 'started' );

		compMgr = compMgr.QueryInterface(nsIComponentRegistrar);

		compMgr.unregisterFactoryLocation( 
			carrot_garden_compInfo.serviceCID, 
			fileSpec );

		catyMgr = nsComponentsClasses["@mozilla.org/categorymanager;1"]
			.getService(nsICategoryManager);

		catyMgr.deleteCategoryEntry(
			carrot_garden_compInfo.topicXPComStartup, 
//			carrot_garden_compInfo.topicAppStartup, 
			carrot_garden_compInfo.serviceContractID, 
			true );

		logMessage( 'finished' );

	},

 }
 

 function carrot_garden_classService() { 

	//	nsISupports		http://www.xulplanet.com/references/xpcomref/ifaces/nsISupports.html
	this.QueryInterface = function classService_QueryInterface( iid ) {
		if( iid.equals(cgICarrotGarden) ||
			iid.equals(nsIObserver) ||
			iid.equals(nsIClassInfo) ||
			iid.equals(nsISupports))
		 {
			logMessage( 'SUCCESS: ' + iid );
			Components.returnCode = nsComponentsResults.NS_OK;
			return this;
		} else {
			logMessage( 'FAILURE: ' + iid );
			Components.returnCode = nsComponentsResults.NS_ERROR_NO_INTERFACE;
			return null;
		}
	}
    
	//	nsIObserver		http://www.xulplanet.com/references/xpcomref/ifaces/nsIObserver.html
    this.observe = function classService_observe( subject, topic, data ){
		//	cgICarrotGarden	
		
		switch( topic ){
			case carrot_garden_compInfo.topicAppStartup:
				logMessage( 'topic: ' + topic );
				break;
			case carrot_garden_compInfo.topicXPComStartup:
				logMessage( 'topic: ' + topic );
				this.initService();	
				break;
			case carrot_garden_compInfo.topicXPComShutdown:
				logMessage( 'topic: ' + topic );
				this.exitService();	
				break;
			case carrot_garden_compInfo.topicProfileDoChange:
				logMessage( 'topic: ' + topic );
				this.profileChange();
				break;
			default:
				logMessage( 'invalid topic: ' + topic );
				nsReportError( "carrot_garden: unexpected topic" );
		}

    }

	//	nsIClassInfo	http://www.xulplanet.com/references/xpcomref/ifaces/nsIClassInfo.html
	this.flags = nsIClassInfo.SINGLETON;

	//	nsIClassInfo
	this.classID = carrot_garden_compInfo.serviceCID;

	//	nsIClassInfo
	this.contractID = carrot_garden_compInfo.serviceContractID;

	//	nsIClassInfo
	this.classDescription = carrot_garden_compInfo.serviceName;

	//	nsIClassInfo
	this.getInterfaces = function classService_getInterfaces( count ) {
		logMessage( 'requested' );
		var interfaceList = [ cgICarrotGarden, nsIObserver, nsIClassInfo, nsISupports ];
		count.value = interfaceList.length;
		return interfaceList;
	}

	//	nsIClassInfo
	this.getHelperForLanguage = function classService_getHelperForLanguage( count ) {
		logMessage( 'requested' );
		return null;
	}

/*
 * ##############################################################
 */
 
	//	cgICarrotGarden vars & funs	

	this.loadScript = function classService_loadScript ( pathName, scopeObject ) {
		var scriptLoader =  nsComponentsClasses["@mozilla.org/moz/jssubscript-loader;1"]
			.getService(mozIJSSubScriptLoader);
	    scriptLoader.loadSubScript( pathName, scopeObject );
	}
	
	this.loadScriptLibrary = function classService_loadScriptLibrary ( libraryName, scopeObject ) {
		switch ( libraryName ) {
			case ( 'jslib' ): 
				this.loadScript( "chrome://jslib/content/jslib.js", scopeObject ); 
				break;
			default: 
				nsReportError( 'carrot_garden: unexpected libraryName' ); 
				break;
		}
	}
		
	this.loadInstance = function classService_loadInstance ( className ) {
	    var classModule = function classModule(){};
	    this.loadScript( extensionContentInclude + className + '.js', classModule.prototype );
	    this[ className ] = new classModule();	//	creates object on the carrot_garden.className level
	    return this[ className ];
	}

	this.exitService = function exitService(){
		
	}
	
	this.profileChange = function profileChange(){
		//	set temp files folder from pref:
		this.fileSys.setSpecialFolderTemporaryFiles();
	}
		
	this.initService = function classService_initService () {

		logMessage( 'started' );

		var libList = [
			'addrBooks',
			'fileSys',
			'form',
//			'jslib',
			'gui',
			'log',
			'mailFilters',
			'mailFolders',
			'mailSearch',
			'pref',
			'prefCarrot',
			'rdf',
			'replication',
			'test',
			'update',
			'util',
		];

		try {
			for( var k = 0; k < libList.length; k++ ){
				this.loadInstance( libList[k] );
			}
		} catch ( ex ) {
			nsReportError( 'carrot_garden: could not load component: ' + libList[k] );
			throw 'carrot_garden: can not continue'
		}		
		
		try {
			//	scope = global, all of carrot_garden service; this is '"invisible" global', not '"visible" this';
			this.loadScriptLibrary( 'jslib', /* scope object: */ null );	
		} catch ( ex ) {
			nsReportError( 'carrot_garden: could not load library: ' + 'http://jslib.mozdev.org/' );
			throw 'carrot_garden: can not continue'
		}		
		
		for( var k = 0; k < libList.length; k++ ){
			try {
				this[ libList[k] ].componentServiceInitialize( this );
			} catch ( ex ) {
				nsReportError( 'carrot_garden: no "componentServiceInitialize()" found in: ' + libList[k] );
			}
		}		
						
		this.pref.setExtensionName( extensionName );
		this.pref.setExtensionPreferences( this.prefCarrot.preferences );

		this.pref.load();	
	//	XXX		this.pref.loadDefaults();

		this.log.currentLevel = this.pref.getPref( 'techSupport.log.defaultLevel' );
		this.log.useFile = this.pref.getPref( 'techSupport.log.useFile' );
		this.log.report( 'logging level: ' + this.log.currentLevel + '; log to file: ' + this.log.useFile + ';' );

		observerService.addObserver( this, carrot_garden_compInfo.topicProfileDoChange, false );

	//	XXX	obsolete - must remove
		this.dump2 = this.log.logMessage;
		
		// background process holder; will be innitialized in messenger.js onload()
		this.compactorProcess = null;

		logMessage( 'finished' );
		
	}
	
	//	cgICarrotGarden body	

	logMessage( 'constructor started' );

	var extensionName = 'carrot_garden';
	var extensionGuid = '{8a4b2ec4-400b-11db-964b-00e08161165f}';
	var extensionContent = 'chrome://' + extensionName + '/content/';
	var extensionContentInclude = extensionContent + 'include/';
	var extensionContentOverlay = extensionContent + 'overlay/';
	var extensionContentWindow = extensionContent + 'window/';

	this.extensionName = extensionName;
	this.extensionGuid = extensionGuid;
	this.extensionContent = extensionContent;
	this.extensionContentInclude = extensionContentInclude;
	this.extensionContentOverlay = extensionContentOverlay;
	this.extensionContentWindow = extensionContentWindow;
		
	this.wrappedJSObject = this;

	carrot_garden = this;
	
	logMessage( 'constructor finished' );
		
	return this;

}
 
