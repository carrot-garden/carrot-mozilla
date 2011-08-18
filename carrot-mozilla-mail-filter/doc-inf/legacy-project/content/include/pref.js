//	PREFERENCES

var log = {};

function componentServiceInitialize( object ){
	log = object.log;
}


function test(){
	alert('PREFERENCES');
}

var extensionPrefRoot = '';

function setExtensionName( extName ){
	extensionPrefRoot = 'extensions.' + extName;
}

// describes preferences structure, names, types and default values
var preferences = null;

function setExtensionPreferences( prefObject ){
	preferences = prefObject;
}


var prefBranch = Components.classes["@mozilla.org/preferences-service;1"]
	.getService(Components.interfaces.nsIPrefBranch);

var nsISupportsString = Components.interfaces.nsISupportsString;

function getCharPref( prefName ){
	return prefBranch.getCharPref( prefName );
}

function getUnicodePref( prefName ) {
    return prefBranch.getComplexValue( prefName, nsISupportsString ).data;
}

function setUnicodePref( prefName, prefValue ) {
    var sString = Components.classes["@mozilla.org/supports-string;1"].
                    createInstance(nsISupportsString);
    sString.data = prefValue;
    prefBranch.setComplexValue( prefName, nsISupportsString, sString );
}


function getObjectNode( sourceObject, nodeName ){
	var object = sourceObject;
	var idArray = nodeName.split('.');
	for ( var k = 0; k < idArray.length; k++){
		object = object[ idArray[k] ];
	};
	return object;
}

function setObjectNode( sourceObject, nodeName, nodeValue ){
	var object = sourceObject;
	var idArray = nodeName.split('.');
	var lastArrayId = idArray.length - 1;
	for ( var k = 0; k < lastArrayId; k++){
		object = object[ idArray[k] ];
	};
	object[idArray[lastArrayId]] = nodeValue;
}

function extensionPrefName ( nodeName ){
	return extensionPrefRoot + '.' + nodeName;
}

function classPrefGetSet(){
	var prefValue = null;
	var prefName = '';
	var typeName = '';
	var typeNameTranslation = {
		'string' : 'Char',
		'number': 'Int',
		'boolean': 'Bool',
	}
	var init = function init( nodeName ){
		prefValue = getNode( nodeName );
		prefName = extensionPrefName ( nodeName );
		typeName = typeNameTranslation[typeof( prefValue )];
	}
	var getPropertyName = function getPropertyName( typeName ) { 
		return 'get' + typeName + 'Pref'; 
	}
	var setPropertyName = function setPropertyName( typeName ) { 
		return 'set' + typeName + 'Pref'; 
	}
	this.getPref = function getPref ( nodeName ) {
		init( nodeName );
		var getValue;
		if ( typeName ){
			try{
				//log.debug('read from pref file previously saved value')
				getValue = prefBranch[getPropertyName(typeName)]( prefName );
			}
			catch(ex){
				//log.debug('write to pref file default value, use default')
				prefBranch[setPropertyName(typeName)]( prefName, prefValue );
				getValue = prefValue;
				setNode( nodeName, getValue );
			}
		} else {
			log.debug('invalid node type: ' + nodeName);
			getValue = null;
		}
		return getValue;
	}
	this.setPref = function setPref ( nodeName, prefNewValue ) {
		init( nodeName );
		if ( ! typeName || typeof( prefValue ) != typeof( prefNewValue) ) {
			log.debug('invalid names, types or values')
			return false;
		} else {
			//log.debug('write to pref file new value')
			prefBranch[setPropertyName(typeName)]( prefName, prefNewValue );
			setNode( nodeName, prefNewValue );
			return true;
		}
	}
}


function iterateObject ( object, func, objectName ) {
	if ( typeof(object) == 'object' ) {
		//	branch
		for ( var property in object ){
			var newObjectName = objectName == null ? property : objectName + '.' + property;
			iterateObject( object[property], func, newObjectName );
		}	
	} else {
		//	leaf
		//log.debug ( objectName + ' = ' + object );
		func( objectName, object );
	}
}



//XXX	readPref  = preferensesGetSet.readPref;
//XXX	writePref = preferensesGetSet.writePref;

function load() {
	iterateObject ( preferences, getPref, null );
}

function save() {
//XXX	iterateObject ( preferences, XXXgetPref, null );
}


function dumpAll() {
	if ( extensionPrefRoot == '' || extensionPrefRoot == null) {
		return;
	} else {
		prefBranch.deleteBranch( extensionPrefRoot );
	}
}

function loadDefaults() {
	log.info('loading default preferences');
	dumpAll();
	load();
}

function getNode ( nodeName ) {
	 return getObjectNode( preferences, nodeName );
}
function setNode ( nodeName, nodeValue ) {
	 return setObjectNode( preferences, nodeName, nodeValue );
}

var preferensesGetSet = new classPrefGetSet();

this.getPref = preferensesGetSet.getPref;

this.setPref = preferensesGetSet.setPref;


function getPrefList( nodeName ) {
	var list = new Object;
	var node = getNode( nodeName );
		for ( var property in node ) {
		list[ property ] = this.getPref( nodeName + '.' + property );
		}
	return list;
}
function getPrefList2( nodeName ) {
	var list = new Object;
	var node = getNode( nodeName );
	for ( var id in node ){
		list[ id ] = new Object;
		for ( var property in node[id] ) {
		list[ id ][ property ] = this.getPref( nodeName + '.' + id + '.' + property );
		}
	}
	return list;
}

