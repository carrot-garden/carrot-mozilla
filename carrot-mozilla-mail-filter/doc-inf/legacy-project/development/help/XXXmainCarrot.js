
function classCarrotBusiness(){

	var extensionName = 'carrot_garden';
	var extensionGuid = '{8a4b2ec4-400b-11db-964b-00e08161165f}';
	var extensionContent = 'chrome://' + extensionName + '/content/';
	var extensionContentInclude = extensionContent + 'include/';
	var extensionContentOverlay = extensionContent + 'overlay/';
	var extensionContentWindow = extensionContent + 'window/';
	var extensionProgressMeter = extensionContentWindow + 'progressMeter.xul';

	this.loadScript = function loadScript ( pathName, scopeObject ) {
		var scriptLoader =  Components.classes["@mozilla.org/moz/jssubscript-loader;1"].
		                      getService(Components.interfaces.mozIJSSubScriptLoader);
		if (scriptLoader) {
		    scriptLoader.loadSubScript( pathName, scopeObject );
		}
	}
	
	this.loadScriptLib = function loadScriptLib ( libName, scopeObject ) {
		switch ( libName ) {
			case ( 'jslib' ): this.loadScript( "chrome://jslib/content/jslib.js", scopeObject ); break;
		}
	}
		
	this.loadInstance = function loadInstance ( className ) {
	    var module = function() {};
	    this.loadScript( extensionContentInclude + className + '.js', module.prototype );
	    this[ className ] = new module();
	    return this[ className ];
	}
	
	this.progressMeter = function progressMeter( dialogArguments ){
		window.openDialog( 
			extensionProgressMeter,
			extensionName, 'chrome,modal,centerscreen',
			dialogArguments);
	}

	this.init = function init () {

		this.loadInstance( 'addrBooks' );
		this.loadInstance( 'fileSys' );
		this.loadInstance( 'form' );
		this.loadInstance( 'gui' );
		this.loadInstance( 'log' );
		this.loadInstance( 'mailFilters' );
		this.loadInstance( 'mailFolders' );
		this.loadInstance( 'mailSearch' );
		this.loadInstance( 'pref' );
		this.loadInstance( 'prefCarrot' );
		this.loadInstance( 'rdf' );
		this.loadInstance( 'update' );
		this.loadInstance( 'util' );
		

		this.log.logCallerMessage( this + ' loaded')
		
		this.pref.setExtensionName( extensionName );
		this.pref.setExtensionPreferences( this.prefCarrot.preferences );

		this.pref.load();	
//	XXX		this.pref.loadDefaults();

	}


	this.extensionName = extensionName;
	this.extensionGuid = extensionGuid;
	this.extensionContent = extensionContent;
	this.extensionContentWindow = extensionContentWindow;
	this.extensionContentInclude = extensionContentInclude;
//XXX	remove to appropriate module
	this.extensionProgressMeter = extensionProgressMeter;

	this.backupDiskDirectoryName = 'backup';
	
	this.init();
	
}

var carrot_garden = new classCarrotBusiness();

dump2 = carrot_garden.log.logCallerMessage;
