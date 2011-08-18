//	JSLIB LOADER

var log = {};

var carrotRoot = {};

function componentServiceInitialize( object ){
	
	carrotRoot = object;
	
	log = object.log;
	
	//	scope = global, all of carrot_garden service; '"invisible" global', not '"visible" this';
	object.loadScriptLibrary( 'jslib', /* scope object: */ null );	
		
}

